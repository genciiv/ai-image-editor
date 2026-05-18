import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const images = await prisma.image.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return Response.json(images);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch images" },
      { status: 500 }
    );
  }
}