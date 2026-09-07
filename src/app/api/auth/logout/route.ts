import { NextResponse } from "next/server";
import { deleteSessionCookie } from "@/lib/auth";

export async function POST() {
  await deleteSessionCookie();
  return NextResponse.json({ status: "success", message: "Logged out successfully" });
}
