import { db } from "../../../lib/db";
import { hash } from "bcrypt";
import { NextResponse } from "next/server";
import { z } from "zod";

const userSchema = z.object({
  username: z.string().min(1, "Username is required").max(100),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, username, password } = userSchema.parse(body);

    if (!email || !username || !password) {
      return NextResponse.json(
        { user: null, message: "Missing fields" },
        { status: 400 }
      );
    }

    const existingUserByEmail = await db.user.findUnique({ where: { email } });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: "Email already in use" },
        { status: 400 }
      );
    }

    const existingUserByUsername = await db.user.findUnique({
      where: { username },
    });
    if (existingUserByUsername) {
      return NextResponse.json(
        { user: null, message: "Username already in use" },
        { status: 400 }
      );
    }

    const hashedPassword = await hash(password, 10);
    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...user } = newUser;
    return NextResponse.json(
      { user: user, message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error in POST /api/register:", error);
    return NextResponse.json(
      { user: null, message: "Something went wrong" },
      { status: 500 }
    );
  }
}
