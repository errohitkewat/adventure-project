import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { adminCookieName, createSessionToken } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body as {
      email?: string;
      password?: string;
    };

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    const admin = await prisma.admin.findUnique({
      where: { email },
    });

    if (!admin) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const isValid = await bcrypt.compare(password, admin.password);

    if (!isValid) {
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = createSessionToken(admin.email);

    const response = NextResponse.json({
      message: "Login successful",
    });

    response.cookies.set(adminCookieName, token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return response;
  } catch (error) {
    console.error("LOGIN_ERROR", error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}