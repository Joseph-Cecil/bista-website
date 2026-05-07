import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/security/rate-limiter";

export async function POST(request: NextRequest) {
  try {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      "unknown";

    const { allowed } = rateLimit(ip, { maxRequests: 2, windowMs: 60_000 });
    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Too many requests." },
        { status: 429 }
      );
    }

    // TODO: Implement career application handling
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Careers API error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
