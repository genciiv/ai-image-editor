import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const user = await prisma.user.findFirst();

    if (!user) {
      return Response.json({ error: "User not found" }, { status: 404 });
    }

    if (user.plan === "PRO") {
      return Response.json({ success: true, credits: "unlimited" });
    }

    if (user.credits <= 0) {
      return Response.json({ error: "No credits left" }, { status: 400 });
    }

    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        credits: {
          decrement: 1,
        },
      },
    });

    return Response.json({
      success: true,
      credits: updatedUser.credits,
      plan: updatedUser.plan,
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to use credit" },
      { status: 500 }
    );
  }
}