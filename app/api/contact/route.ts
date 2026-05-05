import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  const { data, error } = await resend.emails.send({
    from: "Portfolio Contact <contact@jshohet.dev>",
    to: "joe.shohet@gmail.com",
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  });

  if (error) {
    console.error("[contact] Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  console.log("[contact] Email sent:", data?.id);

  return NextResponse.json({ success: true });
}
