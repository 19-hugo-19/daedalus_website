import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, business, type, message } = body;

    if (!name || !email || !business || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    // ── Debug: confirm env vars are loaded ──
    console.log("GMAIL_USER:", process.env.GMAIL_USER)
    console.log("GMAIL_APP_PASSWORD set:", !!process.env.GMAIL_APP_PASSWORD)

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    // ── Verify SMTP connection before sending ──
    await transporter.verify()
    console.log("SMTP connection verified ✓")

    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      replyTo: email,
      to: process.env.GMAIL_USER,
      subject: `New proposal request from ${name} — ${business}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; padding: 24px; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #111; margin-bottom: 24px;">New Proposal Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Business:</strong> ${business}</p>
          <p><strong>Industry:</strong> ${type || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 16px; border-radius: 6px; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json(
      { error: error.message || "Failed to send. Please try again." },
      { status: 500 }
    );
  }
}