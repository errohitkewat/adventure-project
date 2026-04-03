import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    const updated = await prisma.booking.update({
      where: { id },
      data: {
        status: body.status,
      },
    });

    return NextResponse.json({ booking: updated });
  } catch (error) {
    console.error("BOOKING_PATCH_ERROR", error);
    return NextResponse.json(
      { message: "Failed to update booking" },
      { status: 500 }
    );
  }
}