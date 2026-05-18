import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const user = await prisma.user.findFirst();

    return Response.json({
      credits: user?.credits ?? 0,
      plan: user?.plan ?? "FREE",
    });
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch credits" },
      { status: 500 }
    );
  }
}