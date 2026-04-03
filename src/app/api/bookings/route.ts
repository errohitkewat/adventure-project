import { NextResponse } from "next/server";
import { z } from "zod";
import { prisma } from "@/lib/prisma";

const bookingSchema = z.object({
  customerName: z.string().min(2),
  phone: z.string().min(5),
  email: z.string().email(),
  activityName: z.string().min(1),
  travelDate: z.string().min(1),
  persons: z.number().min(1),
  message: z.string().optional(),
  packageType: z.string(),
  packageLabel: z.string(),
  basePrice: z.number().min(0),
  addons: z.array(z.string()),
  addonDetails: z.array(
    z.object({
      name: z.string(),
      price: z.number(),
    })
  ),
  addonTotal: z.number().min(0),
  grandTotal: z.number().min(0),
});

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(bookings);
  } catch (error) {
    console.error("GET_BOOKINGS_ERROR", error);
    return NextResponse.json(
      { message: "Failed to fetch bookings" },
      { status: 500 }
    );
  }
}

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

    const data = parsed.data;

    const booking = await prisma.booking.create({
      data: {
        customerName: data.customerName,
        phone: data.phone,
        email: data.email,
        activityName: data.activityName,
        travelDate: data.travelDate,
        persons: data.persons,
        message: data.message,
        packageType: data.packageType,
        packageLabel: data.packageLabel,
        basePrice: data.basePrice,
        addons: JSON.stringify(data.addonDetails),
        addonTotal: data.addonTotal,
        grandTotal: data.grandTotal,
      },
    });

    return NextResponse.json({
      message: "Booking submitted successfully",
      booking,
    });
  } catch (error) {
    console.error("CREATE_BOOKING_ERROR", error);
    return NextResponse.json(
      { message: "Failed to create booking" },
      { status: 500 }
    );
  }
}