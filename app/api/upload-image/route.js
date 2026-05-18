import { imagekit } from "@/lib/imagekit";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const file = formData.get("file");
    const tool = formData.get("tool") || "Upload";

    if (!file) {
      return Response.json({ error: "No file uploaded" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const result = await imagekit.upload({
      file: buffer,
      fileName: file.name,
      folder: "/ai-image-editor",
    });

    const savedImage = await prisma.image.create({
      data: {
        name: result.name,
        url: result.url,
        fileId: result.fileId,
        tool,
      },
    });

    return Response.json({
      success: true,
      image: savedImage,
      url: result.url,
    });
  } catch (error) {
    console.log("UPLOAD ERROR:", error);

    return Response.json(
      { error: "Upload failed", details: error.message },
      { status: 500 }
    );
  }
}