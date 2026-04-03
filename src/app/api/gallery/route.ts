import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const gallerySchema = z.object({
  imageUrl: z.string().url(),
  caption: z.string().optional(),
});

export async function GET() {
  try {
    const images = await prisma.galleryImage.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ images });
  } catch (error) {
    console.error("GALLERY_GET_ERROR", error);
    return NextResponse.json(
      { message: "Failed to fetch gallery" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = gallerySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid gallery data" },
        { status: 400 }
      );
    }

    const image = await prisma.galleryImage.create({
      data: {
        imageUrl: parsed.data.imageUrl,
        caption: parsed.data.caption || "",
      },
    });

    return NextResponse.json({ image }, { status: 201 });
  } catch (error) {
    console.error("GALLERY_POST_ERROR", error);
    return NextResponse.json(
      { message: "Failed to save gallery image" },
      { status: 500 }
    );
  }
}