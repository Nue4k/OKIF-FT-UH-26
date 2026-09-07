import { NextRequest, NextResponse } from "next/server";
import { createSessionCookie } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const idToken = body.idToken;

    if (!idToken) {
      return NextResponse.json({ error: "idToken is required" }, { status: 400 });
    }

    const success = await createSessionCookie(idToken);

    if (success) {
      return NextResponse.json({ status: "success", message: "Session created successfully" });
    } else {
      return NextResponse.json({ error: "Failed to create session" }, { status: 401 });
    }
  } catch (error) {
    console.error("Session API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
