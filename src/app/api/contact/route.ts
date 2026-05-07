import { NextRequest, NextResponse } from "next/server";
import { contactFormSchema } from "@/lib/validation/contact.schema";
import { sanitizeObject } from "@/lib/security/sanitize";
import { isHoneypotTriggered } from "@/lib/security/honeypot";
import { rateLimit } from "@/lib/security/rate-limiter";
import { verifyRecaptcha } from "@/lib/services/recaptcha";
import { sendEmail } from "@/lib/services/email";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    // 1. Rate Limiting
    const { allowed, retryAfter } = rateLimit(ip, {
      maxRequests: 3,
      windowMs: 60_000,
    });

    if (!allowed) {
      return NextResponse.json(
        { success: false, error: Too many requests. Retry in \s. },
        { status: 429 }
      );
    }

    // 2. Parse and Validate
    const body = await request.json();
    const validation = contactFormSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Invalid form data", details: validation.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const data = validation.data;

    // 3. Honeypot Check
    if (isHoneypotTriggered(data.company_url)) {
      return NextResponse.json({ success: true }); // Silent fail
    }

    // 4. reCAPTCHA Verification
    const isHuman = await verifyRecaptcha(data.recaptchaToken);
    if (!isHuman) {
      return NextResponse.json(
        { success: false, error: "reCAPTCHA verification failed." },
        { status: 403 }
      );
    }

    // 5. Sanitize Inputs
    const sanitizedData = sanitizeObject({
      name: data.name,
      email: data.email,
      phone: data.phone || "Not provided",
      subject: data.subject,
      message: data.message,
    });

    // 6. Send notification to organization
    await sendEmail({
      to: process.env.CONTACT_EMAIL!,
      subject: New Contact: \,
      html: 
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> \</p>
        <p><strong>Email:</strong> \</p>
        <p><strong>Phone:</strong> \</p>
        <p><strong>Subject:</strong> \</p>
        <p><strong>Message:</strong></p>
        <p>\</p>
        <hr />
        <p><small>Submitted from IP: \</small></p>
      ,
    });

    // 7. Send confirmation to user
    await sendEmail({
      to: sanitizedData.email,
      subject: "We received your message — Thank you!",
      html: 
        <h2>Thank you, \!</h2>
        <p>We have received your message and will respond within 1-2 business days.</p>
        <p>Best regards,<br/>Your Company Name</p>
      ,
    });

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully.",
    });

  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
