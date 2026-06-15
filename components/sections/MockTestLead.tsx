"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { Target, Loader2, CheckCircle, ArrowRight } from "lucide-react";

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
      className="py-24 bean-gradient relative overflow-hidden noise"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#BA3D03]/20 rounded-full blur-[100px]" />
      </div>
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8C581]/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#E8C581]/10 border border-[#E8C581]/25 rounded-full px-4 py-1.5 mb-6">
              <Target className="w-4 h-4 text-[#E8C581]" />
              <span className="text-[#E8C581] text-[11px] font-bold tracking-[0.18em] uppercase">
                Free Mock Test
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
              Measure Your
              <br />
              <span className="cream-text">Legal Potential</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8">
              Take our free diagnostic mock test and get a detailed analysis of
              your strengths, weaknesses, and a personalised improvement
              roadmap.
            </p>
            <ul className="space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/75">
                  <CheckCircle className="w-5 h-5 text-[#E58423] shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* right */}
          <div>
            {done ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="glass-warm rounded-2xl p-10 text-center"
              >
                <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-white mb-2">
                  You&apos;re In!
                </h3>
                <p className="text-white/65">
                  Our team will reach out shortly with your mock test link.
                </p>
              </motion.div>
            ) : (
              <div className="glass-warm rounded-2xl p-7 sm:p-8">
                <h3 className="font-semibold text-white text-xl mb-6">
                  Start Your Free Mock Test
                </h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">
                      Full Name <span className="text-[#E58423]">*</span>
                    </label>
                    <input
                      {...register("name")}
                      placeholder="Your full name"
                      className="w-full bg-white/8 border border-white/15 text-white placeholder-white/35 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E58423] transition-colors"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">
                      Mobile Number <span className="text-[#E58423]">*</span>
                    </label>
                    <div className="flex gap-2">
                      <span className="flex items-center px-3 bg-white/8 border border-white/15 rounded-xl text-white/45 text-sm">
                        +91
                      </span>
                      <input
                        {...register("phone")}
                        placeholder="9876543210"
                        maxLength={10}
                        className="flex-1 bg-white/8 border border-white/15 text-white placeholder-white/35 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E58423] transition-colors"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>

                  {/* Course */}
                  <div>
                    <label className="text-white/60 text-sm mb-1.5 block">
                      Target Exam <span className="text-[#E58423]">*</span>
                    </label>
                    <select
                      {...register("course")}
                      className="w-full bg-white/8 border border-white/15 text-white rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E58423] transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#3D1202]">
                        Select your course
                      </option>
                      {courses.map((c) => (
                        <option key={c} value={c} className="bg-[#3D1202]">
                          {c}
                        </option>
                      ))}
                    </select>
                    {errors.course && (
                      <p className="text-red-400 text-xs mt-1">
                        {errors.course.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={busy}
                    className="w-full bg-[#E58423] hover:bg-[#f09838] disabled:opacity-55 text-white font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 hover:-translate-y-0.5 shadow-lg shadow-[#E58423]/25"
                  >
                    {busy ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Start Free Test <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-white/35 text-xs text-center">
                    No credit card required. 100% free.
                  </p>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
