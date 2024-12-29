// middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Access headers
  const token = request.cookies.get("token");
  if (!token) {
    const redirectUrl = new URL("/auth", request.url);
    redirectUrl.searchParams.set("redirect", request.nextUrl.pathname); // Add the redirect parameter
    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.next();
}

// Apply to all routes or specific routes
export const config = {
  matcher: "/user/:path*", // Apply middleware to all /user/* routes
};
