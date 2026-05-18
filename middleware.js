import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const nextAuthToken = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const manualToken = req.cookies.get("token")?.value;

  if (pathname.startsWith("/dashboard")) {
    if (!nextAuthToken && !manualToken) {
      return NextResponse.redirect(new URL("/auth/sign-in", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"],
};