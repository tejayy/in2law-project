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
      from: "IN2LAW Academy <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL ?? "in2lawacademy@gmail.com",
      subject: `🎓 New Demo Booking – ${data.name}`,
      html: `
<div style="margin:0;padding:24px;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table role="presentation" width="650" cellspacing="0" cellpadding="0"
          style="background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 12px 35px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#0B132B 0%,#1C2541 100%);padding:32px;">
              <table width="100%">
                <tr>
                  <td>
                    <p style="margin:0;color:#C9A227;font-size:13px;font-weight:700;letter-spacing:1px;">
                      IN2LAW ACADEMY
                    </p>
                    <h1 style="margin:10px 0 0;color:#ffffff;font-size:28px;font-weight:700;">
                      New Demo Class Booking 🚀
                    </h1>
                    <p style="margin:10px 0 0;color:rgba(255,255,255,0.75);font-size:15px;">
                      A new lead has been submitted through the website.
                    </p>
                  </td>
                  <td align="right" valign="top">
                    <div style="display:inline-block;background:#C9A227;color:#0B132B;padding:10px 16px;border-radius:999px;font-size:13px;font-weight:700;">
                      NEW LEAD
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:30px;">
              <div style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:16px;padding:22px;">
                <h2 style="margin:0 0 18px;color:#111827;font-size:18px;">
                  Lead Information
                </h2>
                <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                    <td style="padding:12px 0;color:#6B7280;font-weight:600;width:140px;">👤 Name</td>
                    <td style="padding:12px 0;color:#111827;font-weight:700;">${data.name}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;color:#6B7280;font-weight:600;">📞 Phone</td>
                    <td style="padding:12px 0;color:#111827;font-weight:700;">+91 ${data.phone}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;color:#6B7280;font-weight:600;">📧 Email</td>
                    <td style="padding:12px 0;color:#111827;font-weight:700;">${data.email}</td>
                  </tr>
                  <tr>
                    <td style="padding:12px 0;color:#6B7280;font-weight:600;">📚 Course</td>
                    <td style="padding:12px 0;color:#111827;font-weight:700;">${data.course}</td>
                  </tr>
                </table>
              </div>
              ${
                data.message
                  ? `
              <div style="margin-top:24px;background:#FFF9E8;border:1px solid #F4E2A3;border-radius:16px;padding:20px;">
                <h3 style="margin:0 0 12px;color:#5B4B00;font-size:16px;">💬 Student Message</h3>
                <p style="margin:0;color:#374151;line-height:1.7;">${data.message}</p>
              </div>
              `
                  : ""
              }
              <div style="margin-top:28px;background:linear-gradient(135deg,#C9A227 0%,#E2C45C 100%);padding:22px;border-radius:16px;text-align:center;">
                <h3 style="margin:0;color:#0B132B;font-size:18px;">⏰ Follow-up Required</h3>
                <p style="margin:10px 0 0;color:#0B132B;font-size:15px;">
                  Contact this lead within <strong>24 hours</strong> to maximize conversion.
                </p>
              </div>
            </td>
          </tr>
          <tr>
            <td style="background:#F9FAFB;border-top:1px solid #E5E7EB;padding:20px;text-align:center;">
              <p style="margin:0;color:#9CA3AF;font-size:13px;">
                Generated automatically by IN2LAW Academy CRM
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</div>
      `,
    });

    // Confirmation to student
    await resend.emails.send({
      from: "IN2LAW Academy <onboarding@resend.dev>",
      to: data.email,
      subject: "✅ Your Free Demo is Booked – IN2LAW Academy",
      html: `
<div style="margin:0;padding:24px;background:#f3f6fb;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0"
          style="background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:linear-gradient(135deg,#0B132B 0%,#1C2541 100%);padding:40px 30px;text-align:center;">
              <div style="display:inline-block;background:rgba(201,162,39,0.15);padding:12px 18px;border-radius:50px;margin-bottom:16px;">
                <span style="color:#C9A227;font-size:14px;font-weight:700;letter-spacing:1px;">IN2LAW ACADEMY</span>
              </div>
              <h1 style="margin:0;color:#ffffff;font-size:32px;line-height:1.2;font-weight:700;">
                Demo Confirmed! 🎉
              </h1>
              <p style="margin:12px 0 0;color:rgba(255,255,255,0.75);font-size:16px;">
                Your journey towards legal excellence starts here.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px 35px;">
              <p style="margin:0 0 20px;color:#111827;font-size:18px;">
                Hi <strong>${data.name}</strong>,
              </p>
              <p style="margin:0 0 24px;color:#4B5563;font-size:16px;line-height:1.8;">
                Thank you for booking your <strong>FREE demo class</strong> for <strong>${data.course}</strong>.
              </p>
              <div style="background:#F8FAFC;border:1px solid #E5E7EB;border-radius:14px;padding:20px;margin-bottom:28px;">
                <p style="margin:0 0 10px;color:#111827;font-weight:600;">📞 What happens next?</p>
                <p style="margin:0;color:#6B7280;line-height:1.7;">
                  Our academic counselor will contact you at <strong style="color:#111827;">+91 ${data.phone}</strong> within the next <strong>24 hours</strong> to schedule your session and answer any questions you may have.
                </p>
              </div>
              <div style="background:linear-gradient(135deg,#FFF9E8,#FFF4CC);border-left:4px solid #C9A227;border-radius:12px;padding:18px;margin-bottom:28px;">
                <p style="margin:0;color:#5B4B00;font-size:15px;line-height:1.7;">
                  ✨ Prepare your questions and learning goals beforehand to get the most value from your demo session.
                </p>
              </div>
              <p style="margin:0;color:#4B5563;font-size:16px;line-height:1.8;">
                We look forward to helping you achieve your legal career goals.
              </p>
              <p style="margin:28px 0 0;color:#111827;font-size:16px;">
                Best Regards,<br/><strong>IN2LAW Academy Team</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td style="background:#F9FAFB;padding:24px;text-align:center;border-top:1px solid #E5E7EB;">
              <p style="margin:0;color:#9CA3AF;font-size:13px;">
                © 2026 IN2LAW Academy. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
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
