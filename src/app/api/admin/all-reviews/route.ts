import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const reviews = await prisma.review.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ reviews });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to fetch all reviews" },
      { status: 500 }
    );
  }
}