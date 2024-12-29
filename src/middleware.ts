// middleware.ts
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Access headers
  const token = request.cookies.get("token");
  if (!token) return NextResponse.redirect(new URL("/auth", request.url));
}

// Apply to all routes or specific routes
export const config = {
  matcher: "/user/:path*", // Apply middleware to all /user/* routes
};
