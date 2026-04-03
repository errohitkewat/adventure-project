import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

type Context = {
  params: Promise<{ id: string }>;
};

export async function DELETE(_req: Request, context: Context) {
  try {
    const { id } = await context.params;

    const image = await prisma.galleryImage.findUnique({
      where: { id },
    });

    if (!image) {
      return NextResponse.json(
        { message: "Image not found" },
        { status: 404 }
      );
    }

    if (image.publicId) {
      await cloudinary.uploader.destroy(image.publicId);
    }

    await prisma.galleryImage.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Image deleted" });
  } catch (error) {
    console.error("DELETE_GALLERY_ERROR", error);
    return NextResponse.json(
      { message: "Failed to delete image" },
      { status: 500 }
    );
  }
}