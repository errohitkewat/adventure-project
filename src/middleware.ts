import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifySessionToken } from "@/lib/auth";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    const token = req.cookies.get("admin_session")?.value;
    const session = verifySessionToken(token);

    if (!session) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};