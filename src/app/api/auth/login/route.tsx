import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "Hello, Next.js!" });
}

export async function POST(request: Request) {
  const { username, password } = await request.json();

  const userData = {
    id: 1,
    username,
    role: "user",
  };

  return NextResponse.json({
    success: true,
    message: "Login successful",
    user: userData,
  });

  // Invalid credentials
  return NextResponse.json(
    {
      success: false,
      message: "Invalid username or password",
    },
    { status: 401 }
  );
}
