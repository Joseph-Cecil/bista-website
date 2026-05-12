import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact.schema";
import { sanitizeObject } from "@/lib/security/sanitize";
import { isHoneypotTriggered } from "@/lib/security/honeypot";
import { rateLimit } from "@/lib/security/rate-limiter";
import { verifyRecaptcha } from "@/lib/services/recaptcha";
import {
  sendEmail,
  buildContactNotificationEmail,
  buildContactConfirmationEmail,
} from "@/lib/services/email";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // 1. Rate limiting — 3 submissions per minute per IP
    const { allowed, retryAfter } = rateLimit(ip, {
      maxRequests: 3,
      windowMs: 60_000,
    });

    if (!allowed) {
      return NextResponse.json(
        {
          success: false,
          error: `Too many requests. Please wait ${retryAfter} seconds before trying again.`,
        },
        { status: 429 }
      );
    }

    // 2. Parse and validate
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid request format." },
        { status: 400 }
      );
    }

    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Please check your form entries and try again.",
          details: validation.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = validation.data;

    // 3. Honeypot check — silent fail to confuse bots
    if (isHoneypotTriggered(data.company_url)) {
      return NextResponse.json({ success: true });
    }

    // 4. reCAPTCHA — skip in dev if using bypass token
    const isDevBypass =
      process.env.NODE_ENV === "development" &&
      data.recaptchaToken === "dev-bypass-token";

    if (!isDevBypass) {
      const isHuman = await verifyRecaptcha(data.recaptchaToken);
      if (!isHuman) {
        return NextResponse.json(
          {
            success: false,
            error: "Security verification failed. Please refresh and try again.",
          },
          { status: 403 }
        );
      }
    }

    // 5. Sanitize all inputs
    const sanitized = sanitizeObject({
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      subject: data.subject,
      message: data.message,
    });

    // 6. Send notification to the organisation
    const contactEmail = process.env.CONTACT_EMAIL;
    if (contactEmail) {
      await sendEmail({
        to: contactEmail,
        subject: `New Enquiry: ${sanitized.subject}`,
        html: buildContactNotificationEmail({ ...sanitized, ip }),
        replyTo: sanitized.email,
      });
    }

    // 7. Send confirmation to the user
    await sendEmail({
      to: sanitized.email,
      subject: "We received your message — BISTA Solutions",
      html: buildContactConfirmationEmail(sanitized.name),
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    // Log full error server-side but never expose internals to client
    console.error("[Contact API Error]", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "An unexpected error occurred. Please try again or call us directly.",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
