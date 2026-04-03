import { NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { prisma } from "@/lib/prisma";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function GET() {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(images);
  } catch (error) {
    console.error("GET_GALLERY_ERROR", error);
    return NextResponse.json(
      { message: "Failed to fetch gallery" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;
    const title = (formData.get("title") as string | null) || "";

    if (!file) {
      return NextResponse.json(
        { message: "Image file is required" },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

    const uploaded = await cloudinary.uploader.upload(base64, {
      folder: "adventure-gallery",
    });

    const image = await prisma.galleryImage.create({
      data: {
        title,
        imageUrl: uploaded.secure_url,
        publicId: uploaded.public_id,
      },
    });

    return NextResponse.json({
      message: "Image uploaded successfully",
      image,
    });
  } catch (error) {
    console.error("UPLOAD_GALLERY_ERROR", error);
    return NextResponse.json(
      { message: "Failed to upload image" },
      { status: 500 }
    );
  }
}