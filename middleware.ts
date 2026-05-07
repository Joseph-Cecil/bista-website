import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // ---- Block suspicious bots by user-agent ----
  const userAgent = request.headers.get("user-agent") || "";
  const suspiciousBots = [
    "sqlmap", "nikto", "nmap", "masscan",
    "dirbuster", "gobuster", "havij",
  ];

  if (suspiciousBots.some((bot) => userAgent.toLowerCase().includes(bot))) {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ---- Block empty user-agents ----
  if (!userAgent || userAgent.trim() === "") {
    return new NextResponse("Forbidden", { status: 403 });
  }

  // ---- Attach client IP to API requests ----
  if (request.nextUrl.pathname.startsWith("/api/")) {
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";
    response.headers.set("x-client-ip", ip);
  }

  // ---- Block common attack paths ----
  const blockedPaths = [
    "/.env", "/.git", "/wp-admin", "/wp-login",
    "/xmlrpc.php", "/phpmyadmin", "/admin",
    "/.htaccess", "/config",
  ];

  if (
    blockedPaths.some((path) =>
      request.nextUrl.pathname.toLowerCase().startsWith(path)
    )
  ) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|images/).*)"],
};
