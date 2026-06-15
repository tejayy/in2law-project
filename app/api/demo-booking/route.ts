import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  email: z.string().email(),
  course: z.string().min(1),
  message: z.string().optional(),
});

export async function POST(req: NextRequest) {
  // Instantiate inside handler so build succeeds without RESEND_API_KEY set
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");

  try {
    const body = await req.json();
    const data = schema.parse(body);

    // Notify the academy
    await resend.emails.send({
      from: "IN2LAW Academy <noreply@in2law.in>",
      to: process.env.ADMIN_EMAIL ?? "admin@in2law.in",
      subject: `🎓 New Demo Booking – ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <div style="background: #0B132B; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: #C9A227; margin: 0; font-size: 22px;">New Demo Class Booking</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 8px 0 0;">IN2LAW Academy – CRM Notification</p>
          </div>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #374151;">Name</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0B132B;">${data.name}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #374151;">Phone</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0B132B;">+91 ${data.phone}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #374151;">Email</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0B132B;">${data.email}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600; color: #374151;">Course</td><td style="padding: 10px; border-bottom: 1px solid #e2e8f0; color: #0B132B;">${data.course}</td></tr>
            ${data.message ? `<tr><td style="padding: 10px; font-weight: 600; color: #374151;">Message</td><td style="padding: 10px; color: #0B132B;">${data.message}</td></tr>` : ""}
          </table>
          <div style="margin-top: 24px; padding: 16px; background: #C9A227; border-radius: 8px; text-align: center;">
            <p style="color: #0B132B; font-weight: 700; margin: 0;">Follow up within 24 hours!</p>
          </div>
        </div>
      `,
    });

    // Confirmation to student
    await resend.emails.send({
      from: "IN2LAW Academy <noreply@in2law.in>",
      to: data.email,
      subject: "✅ Your Free Demo is Booked – IN2LAW Academy",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <div style="background: #0B132B; padding: 32px; border-radius: 8px; margin-bottom: 24px; text-align: center;">
            <h1 style="color: #C9A227; margin: 0 0 8px; font-size: 26px;">Demo Confirmed! 🎉</h1>
            <p style="color: rgba(255,255,255,0.7); margin: 0;">IN2LAW Academy</p>
          </div>
          <p style="color: #374151;">Hi <strong>${data.name}</strong>,</p>
          <p style="color: #374151;">Thank you for booking a free demo class for <strong>${data.course}</strong>. Our team will reach out to you at <strong>+91 ${data.phone}</strong> within 24 hours.</p>
          <p style="color: #374151;">Best wishes,<br/><strong>IN2LAW Academy Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Demo booking error:", err);
    return NextResponse.json(
      { error: "Failed to process booking" },
      { status: 500 },
    );
  }
}
