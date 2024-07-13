import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { sql } from "@vercel/postgres";
import { z } from "zod";

export async function POST(request: Request) {
  try {
    const credentials = await request.json();

    const parsedCredentials = z
      .object({
        name: z.string().min(2),
        email: z.string().email(),
        password: z.string().min(6),
      })
      .safeParse(credentials);

    if (!parsedCredentials.success) {
      throw new Error("Failed to validate credentials");
    }

    const { name, email, password } = parsedCredentials.data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const response =
      await sql`INSERT INTO users (name, email, password) VALUES (${name}, ${email}, ${hashedPassword})`;
  } catch (e) {
    console.log({ e });
  }

  return NextResponse.json({ message: "success" });
}
