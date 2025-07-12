import { NextResponse } from "next/server";

export async function GET() {
  // Form is now closed
  return NextResponse.json({ status: "closed" });
}
