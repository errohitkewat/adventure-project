import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const bookingSchema = z.object({
  customerName: z.string().min(2),
  phone: z.string().min(10),
  email: z.string().optional(),
  activityName: z.string().min(1),
  travelDate: z.string().min(1),
  persons: z.number().min(1),
  message: z.string().optional(),
  packageType: z.string().min(1),
  packageLabel: z.string().min(1),
  basePrice: z.number().min(0),
  addonTotal: z.number().min(0),
  grandTotal: z.number().min(0),
  addonDetails: z
    .array(
      z.object({
        name: z.string(),
        price: z.number(),
      })
    )
    .optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Invalid booking data" },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        customerName: parsed.data.customerName,
        phone: parsed.data.phone,
        email: parsed.data.email || "",
        activityName: parsed.data.activityName,
        travelDate: parsed.data.travelDate,
        persons: parsed.data.persons,
        message: parsed.data.message || "",
        packageType: parsed.data.packageType,
        packageLabel: parsed.data.packageLabel,
        basePrice: parsed.data.basePrice,
        addonTotal: parsed.data.addonTotal,
        grandTotal: parsed.data.grandTotal,
        addonDetails: parsed.data.addonDetails || [],
      },
    });

    return NextResponse.json(
      { message: "Booking submitted successfully", booking },
      { status: 201 }
    );
  } catch (error) {
    console.error("BOOKING_POST_ERROR", error);
    return NextResponse.json(
      { message: "Failed to save booking" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json({ bookings });
  } catch (error) {
    console.error("BOOKING_GET_ERROR", error);
    return NextResponse.json(
      { message: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}