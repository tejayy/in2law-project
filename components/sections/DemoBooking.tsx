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
    <section id="demo" className="py-24 bg-[#fdf6ec] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#BA3D03]/30 to-transparent" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* left */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-2 bg-[#BA3D03]/10 border border-[#BA3D03]/25 rounded-full px-4 py-1.5 mb-6">
              <Calendar className="w-4 h-4 text-[#BA3D03]" />
              <span className="text-[#BA3D03] text-[11px] font-bold tracking-[0.18em] uppercase">
                Free Demo Class
              </span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#3D1202] mb-5 leading-tight">
              Book Your <span className="orange-text">Free</span>
              <br />
              Demo Class Today
            </h2>
            <p className="text-[#3D1202]/55 text-lg leading-relaxed mb-9">
              Experience IN2LAW firsthand — teaching methodology, faculty
              expertise, and the learning environment, all before you commit.
            </p>

            <div className="space-y-5 mb-10">
              {perks.map((p) => (
                <div key={p.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#BA3D03]/10 border border-[#BA3D03]/20 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-5 h-5 text-[#BA3D03]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#3D1202] text-sm">
                      {p.title}
                    </p>
                    <p className="text-[#3D1202]/55 text-sm">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 bg-[#3D1202] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#5a1c03] transition-colors"
              >
                <Phone className="w-5 h-5 text-[#E8C581]" />
                Call Now
              </a>
              <a
                href="https://wa.me/919999999999?text=Hi%2C%20I%20want%20to%20book%20a%20free%20demo%20class%20at%20IN2LAW%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3 rounded-xl hover:bg-green-600 transition-colors"
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
          </div>

          {/* right – form */}
          <div className="bg-white rounded-3xl shadow-2xl shadow-[#BA3D03]/10 border border-[#BA3D03]/10 p-7 sm:p-9">
            {done ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <h3 className="font-heading text-2xl font-extrabold text-[#3D1202] mb-2">
                  Demo Booked!
                </h3>
                <p className="text-[#3D1202]/55">
                  We&apos;ll call you within 24 hours to confirm your session.
                  Check your email too!
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="font-heading text-2xl font-extrabold text-[#3D1202] mb-1.5">
                  Book Free Demo
                </h3>
                <p className="text-[#3D1202]/50 text-sm mb-6">
                  We&apos;ll get back to you within a few hours.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[#3D1202]/65 text-sm font-medium mb-1.5 block">
                        Full Name <span className="text-[#E58423]">*</span>
                      </label>
                      <input
                        {...register("name")}
                        placeholder="Your full name"
                        className="w-full border border-[#BA3D03]/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E58423] focus:ring-1 focus:ring-[#E58423]/25 transition-all"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-xs mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="text-[#3D1202]/65 text-sm font-medium mb-1.5 block">
                        Phone <span className="text-[#E58423]">*</span>
                      </label>
                      <div className="flex gap-2">
                        <span className="flex items-center px-3 bg-[#fdf6ec] border border-[#BA3D03]/20 rounded-xl text-[#3D1202]/45 text-sm">
                          +91
                        </span>
                        <input
                          {...register("phone")}
                          placeholder="9876543210"
                          maxLength={10}
                          className="flex-1 border border-[#BA3D03]/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E58423] transition-all"
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
                    <label className="text-[#3D1202]/65 text-sm font-medium mb-1.5 block">
                      Email <span className="text-[#E58423]">*</span>
                    </label>
                    <input
                      {...register("email")}
                      type="email"
                      placeholder="your@email.com"
                      className="w-full border border-[#BA3D03]/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E58423] transition-all"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="text-[#3D1202]/65 text-sm font-medium mb-1.5 block">
                      Target Exam <span className="text-[#E58423]">*</span>
                    </label>
                    <select
                      {...register("course")}
                      className="w-full border border-[#BA3D03]/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E58423] transition-all appearance-none bg-white"
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
                    <label className="text-[#3D1202]/65 text-sm font-medium mb-1.5 block">
                      Message (optional)
                    </label>
                    <textarea
                      {...register("message")}
                      placeholder="Any specific questions..."
                      rows={3}
                      className="w-full border border-[#BA3D03]/20 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#E58423] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={busy}
                    className="w-full bg-[#3D1202] hover:bg-[#5a1c03] disabled:opacity-55 text-[#E8C581] font-bold py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#3D1202]/20"
                  >
                    {busy ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>
                        Book Free Demo Class <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-[#3D1202]/35 text-xs text-center">
                    By submitting, you agree to be contacted by our team.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
