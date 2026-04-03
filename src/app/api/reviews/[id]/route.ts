import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    const updated = await prisma.review.update({
      where: { id },
      data: {
        approved: body.approved,
      },
    });

    return NextResponse.json({ review: updated });
  } catch (error) {
    console.error("REVIEW_PATCH_ERROR", error);
    return NextResponse.json(
      { message: "Failed to update review" },
      { status: 500 }
    );
  }
}

export async function DELETE(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    await prisma.review.delete({
      where: { id },
    });

    return NextResponse.json({ message: "Review deleted" });
  } catch (error) {
    console.error("REVIEW_DELETE_ERROR", error);
    return NextResponse.json(
      { message: "Failed to delete review" },
      { status: 500 }
    );
  }
}