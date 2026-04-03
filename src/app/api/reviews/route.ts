import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const reviewSchema = z.object({
  name: z.string().min(2),
  role: z.string().min(2),
  review: z.string().min(5),
  rating: z.number().min(1).max(5),
});

export async function GET() {
  try {
    const reviews = await prisma.Review.findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("GET_REVIEWS_ERROR", error);
    return NextResponse.json(
      { message: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = reviewSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid review data" },
        { status: 400 }
      );
    }

    const review = await prisma.Review.create({
      data: parsed.data,
    });

    return NextResponse.json({
      message: "Review submitted successfully",
      review,
    });
  } catch (error) {
    console.error("CREATE_REVIEW_ERROR", error);
    return NextResponse.json(
      { message: "Failed to create review" },
      { status: 500 }
    );
  }
}