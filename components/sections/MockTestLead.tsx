"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { Target, Loader2, CheckCircle, ArrowRight } from "lucide-react";

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
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  course: z.string().min(1, "Please select a course"),
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
  "Full-length 120-minute mock test",
  "Section-wise performance report",
  "Comparison with top scorers",
  "Personalised improvement tips",
];
const inputStyle = {
  background: "#ffffff",
  border: `1px solid rgba(46,38,18,0.15)`,
  color: "#2e2612",
};

export default function MockTestLead() {
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
      await fetch("/api/mock-test-lead", {
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
      id="mock"
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg,${P.bg} 0%,${P.canvas} 60%,${P.bg} 100%)`,
      }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle,rgba(107,62,15,0.35) 0%,transparent 65%)`,
          filter: "blur(80px)",
        }}
      />
      <hr className="hr-warm absolute top-0 inset-x-0 border-none h-px" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{
                background: "rgba(178,106,25,0.1)",
                border: "1px solid rgba(178,106,25,0.25)",
              }}
            >
              <Target className="w-4 h-4" style={{ color: P.linen }} />
              <span
                className="text-[11px] font-bold tracking-[0.18em] uppercase"
                style={{ color: P.linen }}
              >
                Free Mock Test
              </span>
            </div>
            <h2
              className="font-heading text-4xl sm:text-5xl font-extrabold mb-5 leading-tight"
              style={{ color: P.white }}
            >
              Measure Your
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg,#ede3d7,#f5ece2)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Legal Potential
              </span>
            </h2>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "rgba(237,227,215,0.6)" }}
            >
              Take our free diagnostic mock test and get a detailed analysis of
              your strengths, weaknesses, and a personalised improvement
              roadmap.
            </p>
            <ul className="space-y-3">
              {perks.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3"
                  style={{ color: "rgba(237,227,215,0.8)" }}
                >
                  <CheckCircle
                    className="w-5 h-5 shrink-0"
                    style={{ color: P.copper }}
                  />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            {done ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="relative rounded-2xl p-10 text-center overflow-hidden"
                style={{ background: P.panel, boxShadow: SHADOW }}
              >
                <div
                  className="absolute top-0 inset-x-0 h-[3px]"
                  style={{ background: ACCENT_BAR }}
                />
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(16,185,129,0.12)" }}
                >
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3
                  className="font-heading text-2xl font-bold mb-2"
                  style={{ color: P.canvas }}
                >
                  You&apos;re In!
                </h3>
                <p style={{ color: "rgba(46,38,18,0.6)" }}>
                  Our team will reach out shortly with your mock test link.
                </p>
              </motion.div>
            ) : (
              <div
                className="relative rounded-2xl p-7 sm:p-8 overflow-hidden"
                style={{ background: P.panel, boxShadow: SHADOW }}
              >
                <div
                  className="absolute top-0 inset-x-0 h-[3px]"
                  style={{ background: ACCENT_BAR }}
                />
                <h3
                  className="font-semibold text-xl mb-6"
                  style={{ color: P.canvas }}
                >
                  Start Your Free Mock Test
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label
                      className="text-sm mb-1.5 block font-medium"
                      style={{ color: "rgba(46,38,18,0.65)" }}
                    >
                      Full Name <span style={{ color: P.copper }}>*</span>
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Your full name"
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.border = `1px solid ${P.copper}`)
                      }
                      onBlur={(e) =>
                        (e.target.style.border = `1px solid rgba(46,38,18,0.15)`)
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="text-sm mb-1.5 block font-medium"
                      style={{ color: "rgba(46,38,18,0.65)" }}
                    >
                      Mobile Number <span style={{ color: P.copper }}>*</span>
                    </label>
                    <div className="flex gap-2">
                      <span
                        className="flex items-center px-3 rounded-xl text-sm"
                        style={{
                          background: "rgba(46,38,18,0.05)",
                          border: `1px solid rgba(46,38,18,0.15)`,
                          color: "rgba(46,38,18,0.5)",
                        }}
                      >
                        +91
                      </span>
                      <input
                        {...register("phone")}
                        placeholder="9876543210"
                        maxLength={10}
                        className="flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-colors"
                        style={inputStyle}
                        onFocus={(e) =>
                          (e.target.style.border = `1px solid ${P.copper}`)
                        }
                        onBlur={(e) =>
                          (e.target.style.border = `1px solid rgba(46,38,18,0.15)`)
                        }
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      className="text-sm mb-1.5 block font-medium"
                      style={{ color: "rgba(46,38,18,0.65)" }}
                    >
                      Target Exam <span style={{ color: P.copper }}>*</span>
                    </label>
                    <select
                      {...register("course")}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-colors appearance-none"
                      style={inputStyle}
                      onFocus={(e) =>
                        (e.target.style.border = `1px solid ${P.copper}`)
                      }
                      onBlur={(e) =>
                        (e.target.style.border = `1px solid rgba(46,38,18,0.15)`)
                      }
                    >
                      <option value="" style={{ color: P.canvas }}>
                        Select your course
                      </option>
                      {courses.map((c) => (
                        <option key={c} value={c} style={{ color: P.canvas }}>
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
                  <button
                    type="submit"
                    disabled={busy}
                    className="btn-primary pulse-cta w-full disabled:opacity-55 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:-translate-y-0.5 transition-transform"
                    style={{ boxShadow: "0 8px 32px rgba(178,106,25,0.28)" }}
                  >
                    {busy ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Start Free Test <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                  <p
                    className="text-xs text-center"
                    style={{ color: "rgba(46,38,18,0.4)" }}
                  >
                    No credit card required. 100% free.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
