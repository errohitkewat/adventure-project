import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{ id: string }>;
};

export async function PATCH(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const review = await prisma.Review.update({
      where: { id },
      data: {
        approved: body.approved,
        featured: body.featured,
      },
    });

    return NextResponse.json(review);
  } catch (error) {
    console.error("UPDATE_REVIEW_ERROR", error);
    return NextResponse.json(
      { message: "Failed to update review" },
      { status: 500 }
    );
  }
}