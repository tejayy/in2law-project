"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import {
  Calendar,
  Loader2,
  CheckCircle,
  ArrowRight,
  Phone,
} from "lucide-react";

const P = {
  bg: "#1a0f08",
  canvas: "#2e2612",
  mid: "#4a2e0a",
  warm: "#6b3e0f",
  copper: "#b26a19",
  amber: "#c88a3a",
  linen: "#ede3d7",
  panel: "rgba(252,248,242,0.97)",
  white: "#ffffff",
} as const;
const SHADOW =
  "0 32px 80px rgba(46,38,18,0.45), 0 0 0 1px rgba(237,227,215,0.25)";
const ACCENT_BAR =
  "linear-gradient(90deg,#2e2612,#6b3e0f,#b26a19,#6b3e0f,#2e2612)";

const schema = z.object({
  name: z.string().min(2, "Enter your full name"),
  phone: z.string().regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit number"),
  email: z.string().email("Enter a valid email"),
  course: z.string().min(1, "Please select a course"),
  message: z.string().optional(),
});
type F = z.infer<typeof schema>;
const courses = [
  "CLAT Preparation",
  "MH LAW CET (3 Year)",
  "MH LAW CET (5 Year)",
  "Judiciary (Civil Judge / JMFC)",
  "Law Officer Examination",
];
const perks = [
  {
    title: "Expert-led Session",
    desc: "Live teaching by practicing advocates.",
  },
  { title: "Live Q&A", desc: "Real-time answers to your specific questions." },
  { title: "Course Roadmap", desc: "Full overview of prep plan and timeline." },
  {
    title: "Zero Commitment",
    desc: "No pressure — come, learn, decide at your pace.",
  },
];
const fieldStyle = {
  background: "#ffffff",
  border: `1px solid rgba(46,38,18,0.15)`,
  color: "#2e2612",
};
type FE = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
const onFocusField = (e: React.FocusEvent<FE>) =>
  (e.target.style.border = `1px solid #b26a19`);
const onBlurField = (e: React.FocusEvent<FE>) =>
  (e.target.style.border = `1px solid rgba(46,38,18,0.15)`);

export default function DemoBooking() {
  const [done, setDone] = useState(false);
  const [busy, setBusy] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<F>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: F) => {
    setBusy(true);
    try {
      await fetch("/api/demo-booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      /* silent */
    }
    setBusy(false);
    setDone(true);
  };

  return (
    <section
      id="demo"
      className="py-24 relative overflow-hidden"
      style={{ background: P.bg }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 15% 50%,rgba(107,62,15,0.25) 0%,transparent 60%),
          radial-gradient(ellipse 50% 40% at 85% 30%,rgba(74,46,10,0.18) 0%,transparent 55%)`,
        }}
      />
      <hr className="hr-warm absolute top-0 inset-x-0 border-none h-px" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="pt-2"
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{
                background: "rgba(178,106,25,0.1)",
                border: "1px solid rgba(178,106,25,0.25)",
              }}
            >
              <Calendar className="w-4 h-4" style={{ color: P.amber }} />
              <span
                className="text-[11px] font-bold tracking-[0.18em] uppercase"
                style={{ color: P.amber }}
              >
                Free Demo Class
              </span>
            </div>
            <h2
              className="font-heading text-4xl sm:text-5xl font-extrabold mb-5 leading-tight"
              style={{ color: P.white }}
            >
              Book Your{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#ede3d7,#f5ece2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Free
              </span>
              <br />
              Demo Class Today
            </h2>
            <p
              className="text-lg leading-relaxed mb-9"
              style={{ color: "rgba(237,227,215,0.6)" }}
            >
              Experience IN2LAW firsthand — teaching methodology, faculty
              expertise, and the learning environment, all before you commit.
            </p>
            <div className="space-y-5 mb-10">
              {perks.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: "rgba(178,106,25,0.1)",
                      border: "1px solid rgba(178,106,25,0.2)",
                    }}
                  >
                    <CheckCircle
                      className="w-5 h-5"
                      style={{ color: P.copper }}
                    />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: P.linen }}>
                      {p.title}
                    </p>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(237,227,215,0.55)" }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 font-bold px-5 py-3 rounded-xl transition-all hover:-translate-y-0.5"
                style={{
                  background: `linear-gradient(135deg,${P.canvas},${P.mid})`,
                  color: P.linen,
                  border: `1px solid rgba(237,227,215,0.15)`,
                }}
              >
                <Phone className="w-5 h-5" style={{ color: P.amber }} />
                Call Now
              </a>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class%20at%20IN2LAW%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3 rounded-xl hover:bg-green-600 transition-colors hover:-translate-y-0.5"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl p-7 sm:p-9 overflow-hidden"
            style={{ background: P.panel, boxShadow: SHADOW }}
          >
            <div
              className="absolute top-0 inset-x-0 h-[3px]"
              style={{ background: ACCENT_BAR }}
            />
            {done ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(16,185,129,0.12)" }}
                >
                  <CheckCircle className="w-10 h-10 text-emerald-500" />
                </div>
                <h3
                  className="font-heading text-2xl font-extrabold mb-2"
                  style={{ color: P.canvas }}
                >
                  Demo Booked!
                </h3>
                <p style={{ color: "rgba(46,38,18,0.55)" }}>
                  We&apos;ll call you within 24 hours to confirm your session.
                  Check your email too!
                </p>
              </motion.div>
            ) : (
              <>
                <h3
                  className="font-heading text-2xl font-extrabold mb-1.5"
                  style={{ color: P.canvas }}
                >
                  Book Free Demo
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "rgba(46,38,18,0.5)" }}
                >
                  We&apos;ll get back to you within a few hours.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="text-sm font-medium mb-1.5 block"
                        style={{ color: "rgba(46,38,18,0.65)" }}
                      >
                        Full Name <span style={{ color: P.copper }}>*</span>
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Your full name"
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        style={fieldStyle}
                        onFocus={onFocusField}
                        onBlur={onBlurField}
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        className="text-sm font-medium mb-1.5 block"
                        style={{ color: "rgba(46,38,18,0.65)" }}
                      >
                        Phone <span style={{ color: P.copper }}>*</span>
                      </label>
                      <div className="flex gap-2">
                        <span
                          className="flex items-center px-3 rounded-xl text-sm"
                          style={{
                            background: "rgba(46,38,18,0.05)",
                            border: `1px solid rgba(46,38,18,0.15)`,
                            color: "rgba(46,38,18,0.45)",
                          }}
                        >
                          +91
                        </span>
                        <input
                          {...register("phone")}
                          placeholder="9876543210"
                          maxLength={10}
                          className="flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-all"
                          style={fieldStyle}
                          onFocus={onFocusField}
                          onBlur={onBlurField}
                        />
                      </div>
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium mb-1.5 block"
                      style={{ color: "rgba(46,38,18,0.65)" }}
                    >
                      Email <span style={{ color: P.copper }}>*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={fieldStyle}
                      onFocus={onFocusField}
                      onBlur={onBlurField}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium mb-1.5 block"
                      style={{ color: "rgba(46,38,18,0.65)" }}
                    >
                      Target Exam <span style={{ color: P.copper }}>*</span>
                    </label>
                    <select
                      {...register("course")}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all appearance-none"
                      style={fieldStyle}
                      onFocus={onFocusField}
                      onBlur={onBlurField}
                    >
                      <option value="">Select your course</option>
                      {courses.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.course.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="text-sm font-medium mb-1.5 block"
                      style={{ color: "rgba(46,38,18,0.65)" }}
                    >
                      Message (optional)
                    </label>
                    <textarea
                      {...register("message")}
                      placeholder="Any specific questions..."
                      rows={3}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                      style={fieldStyle}
                      onFocus={
                        onFocusField as React.FocusEventHandler<HTMLTextAreaElement>
                      }
                      onBlur={
                        onBlurField as React.FocusEventHandler<HTMLTextAreaElement>
                      }
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={busy}
                    className="btn-panel w-full disabled:opacity-55 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                    style={{ boxShadow: "0 6px 24px rgba(46,38,18,0.2)" }}
                  >
                    {busy ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Book Free Demo Class <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p
                    className="text-xs text-center"
                    style={{ color: "rgba(46,38,18,0.35)" }}
                  >
                    By submitting, you agree to be contacted by our team.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
