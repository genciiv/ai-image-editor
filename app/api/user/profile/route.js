import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

async function getCurrentUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    return await prisma.user.findUnique({
      where: {
        id: decoded.id,
      },
    });
  } catch {
    return null;
  }
}

export async function GET() {
  const user = await getCurrentUser();

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  return Response.json({
    name: user.name,
    email: user.email,
    credits: user.credits,
    plan: user.plan,
  });
}

export async function PUT(req) {
  const user = await getCurrentUser();

  if (!user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      name: body.name,
      email: body.email,
    },
  });

  return Response.json({
    success: true,
    user: updatedUser,
  });
}