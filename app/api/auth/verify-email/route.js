import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const token = searchParams.get("token");

  if (!token) {
    return NextResponse.redirect(
      new URL("/auth/sign-in?error=missing-token", req.url)
    );
  }

  const user = await prisma.user.findFirst({
    where: {
      verificationToken: token,
      tokenExpires: {
        gt: new Date(),
      },
    },
  });

  if (!user) {
    return NextResponse.redirect(
      new URL("/auth/sign-in?error=invalid-token", req.url)
    );
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      emailVerified: true,
      verificationToken: null,
      tokenExpires: null,
    },
  });

  return NextResponse.redirect(
    new URL("/auth/sign-in?verified=true", req.url)
  );
}