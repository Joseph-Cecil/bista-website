import { NextRequest, NextResponse } from "next/server";
import { newsletterSchema } from "@/lib/validation/newsletter.schema";
import { rateLimit } from "@/lib/security/rate-limiter";
import { sanitizeInput } from "@/lib/security/sanitize";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    const { allowed } = rateLimit(ip, { maxRequests: 3, windowMs: 60_000 });
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const validation = newsletterSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    const email = sanitizeInput(validation.data.email);

    // TODO: Add to your newsletter service (Mailchimp, ConvertKit, etc.)
    console.log("Newsletter signup:", email);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
