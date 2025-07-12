import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, email, phone, year, department, answers } = await req.json();

  if (!name || !email || !phone || !year || !department || !answers) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // For now, just log the submission and return success
    // This allows testing without Google Sheets setup
    console.log("Form submission received:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      phone,
      year,
      department,
      answers
    });
    
    return NextResponse.json({ message: "Application submitted successfully!" });
  } catch (err: any) {
    console.error("Submission error:", err);
    return NextResponse.json({ error: "Failed to submit data" }, { status: 500 });
  }
}
