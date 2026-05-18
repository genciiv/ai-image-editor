import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) return null;

  return await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
  });
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