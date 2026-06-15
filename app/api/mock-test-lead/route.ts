import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  phone: z.string().regex(/^[6-9]\d{9}$/),
  course: z.string().min(1),
});

export async function POST(req: NextRequest) {
  // Instantiate inside handler so build succeeds without RESEND_API_KEY set
  const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder");

  try {
    const body = await req.json();
    const data = schema.parse(body);

    await resend.emails.send({
      from: "IN2LAW Academy <noreply@in2law.in>",
      to: process.env.ADMIN_EMAIL ?? "admin@in2law.in",
      subject: `📝 Free Mock Test Lead – ${data.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 32px; background: #f8fafc; border-radius: 12px;">
          <div style="background: #0B132B; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <h2 style="color: #C9A227; margin: 0;">New Free Mock Test Request</h2>
          </div>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Phone:</strong> +91 ${data.phone}</p>
          <p><strong>Target Course:</strong> ${data.course}</p>
          <p style="background: #C9A227; padding: 12px; border-radius: 6px; font-weight: 700; color: #0B132B; text-align: center;">
            Send mock test link ASAP!
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mock test lead error:", err);
    return NextResponse.json({ error: "Failed" }, { status: 500 });
  }
}
