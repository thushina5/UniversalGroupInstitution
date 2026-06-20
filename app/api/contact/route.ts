import { NextResponse } from "next/server";

export const runtime = "edge";

type ContactPayload = {
  name?: string;
  email?: string;
  phone?: string;
  program?: string;
  message?: string;
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const isPhone = (v: string) => /^[0-9+\-\s]{8,15}$/.test(v);

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = (body.name || "").trim();
  const email = (body.email || "").trim();
  const phone = (body.phone || "").trim();

  if (name.length < 2 || !isEmail(email) || !isPhone(phone)) {
    return NextResponse.json(
      { error: "Please provide a valid name, email and phone number." },
      { status: 422 }
    );
  }

  // TODO: Persist to a database or forward to your CRM / email provider.
  // e.g. await sendToCRM({ name, email, phone, program: body.program, message: body.message });

  return NextResponse.json(
    { success: true, message: "Enquiry received. We'll be in touch within 24 hours." },
    { status: 200 }
  );
}
