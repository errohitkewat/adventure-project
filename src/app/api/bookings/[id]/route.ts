import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{ id: string }>;
};

export async function PATCH(req: Request, context: Context) {
  try {
    const { id } = await context.params;
    const body = await req.json();

    const booking = await prisma.booking.update({
      where: { id },
      data: {
        status: body.status,
        scheduledFor: body.scheduledFor,
        adminNotes: body.adminNotes,
      },
    });

    return NextResponse.json(booking);
  } catch (error) {
    console.error("UPDATE_BOOKING_ERROR", error);
    return NextResponse.json(
      { message: "Failed to update booking" },
      { status: 500 }
    );
  }
}