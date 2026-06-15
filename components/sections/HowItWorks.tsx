"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ClipboardList,
  Calendar,
  BookOpen,
  BarChart2,
  RefreshCw,
  Trophy,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Enroll",
    desc: "Register and complete a diagnostic test so we map your current level precisely.",
  },
  {
    icon: Calendar,
    step: "02",
    title: "Personalised Plan",
    desc: "Receive a custom study schedule built around your strengths, gaps, and exam date.",
  },
  {
    icon: BookOpen,
    step: "03",
    title: "Expert Classes",
    desc: "Attend focused, advocate-led sessions in batches of ≤20 for maximum interaction.",
  },
  {
    icon: BarChart2,
    step: "04",
    title: "Mock Tests",
    desc: "Weekly full-length mocks + sectional tests. Real exam feel every time.",
  },
  {
    icon: RefreshCw,
    step: "05",
    title: "Performance Review",
    desc: "Detailed analytics + 1-on-1 reviews to double down on weak areas.",
  },
  {
    icon: Trophy,
    step: "06",
    title: "Exam Success",
    desc: "Walk in confident, prepared, and ready to claim your rank.",
  },
];

export default function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".step-node", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: "back.out(1.6)",
        scrollTrigger: { trigger: ".steps-wrap", start: "top 78%" },
      });
      gsap.from(".step-text", {
        y: 20,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        delay: 0.2,
        ease: "power2.out",
        scrollTrigger: { trigger: ".steps-wrap", start: "top 78%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how"
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[#3D1202]/[0.015] pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#BA3D03]/25 to-transparent" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-[#BA3D03] text-xs font-bold tracking-[0.22em] uppercase mb-3">
            The Process
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#3D1202] mb-3">
            How It <span className="orange-text">Works</span>
          </h2>
          <p className="text-[#3D1202]/55 text-lg max-w-md mx-auto">
            Six steps from enrolment to exam-day confidence.
          </p>
        </div>

        {/* Desktop horizontal */}
        <div className="steps-wrap hidden lg:block relative">
          {/* connector line */}
          <div className="absolute top-10 left-[calc(8.33%+24px)] right-[calc(8.33%+24px)] h-px bg-gradient-to-r from-[#BA3D03]/30 via-[#E58423] to-[#BA3D03]/30" />

          <div className="grid grid-cols-6 gap-4">
            {steps.map((s, i) => (
              <div
                key={s.step}
                className="flex flex-col items-center text-center"
              >
                {/* node */}
                <div
                  className={`step-node relative w-20 h-20 rounded-full flex items-center justify-center mb-4 z-10 transition-transform hover:scale-110 ring-2 ${
                    i === steps.length - 1
                      ? "bg-[#E58423] ring-[#E8C581]/50 shadow-xl shadow-[#E58423]/30"
                      : "bg-[#3D1202] ring-[#BA3D03]/40 shadow-lg"
                  }`}
                >
                  <s.icon
                    className={`w-7 h-7 ${i === steps.length - 1 ? "text-white" : "text-[#E8C581]"}`}
                  />
                  <span
                    className={`absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full text-[10px] font-extrabold flex items-center justify-center ${
                      i === steps.length - 1
                        ? "bg-[#3D1202] text-[#E8C581]"
                        : "bg-[#E58423] text-white"
                    }`}
                  >
                    {i + 1}
                  </span>
                </div>
                <div className="step-text">
                  <h4 className="font-bold text-[#3D1202] text-sm mb-1">
                    {s.title}
                  </h4>
                  <p className="text-[#3D1202]/50 text-xs leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile vertical */}
        <div className="steps-wrap lg:hidden relative pl-12">
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#BA3D03]/20 via-[#E58423] to-[#BA3D03]/20" />
          <div className="flex flex-col gap-8">
            {steps.map((s, i) => (
              <div key={s.step} className="relative flex gap-5">
                <div
                  className={`step-node absolute -left-12 w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10 ${
                    i === steps.length - 1
                      ? "bg-[#E58423]"
                      : "bg-[#3D1202] border-2 border-[#BA3D03]/40"
                  }`}
                >
                  <s.icon
                    className={`w-4 h-4 ${i === steps.length - 1 ? "text-white" : "text-[#E8C581]"}`}
                  />
                </div>
                <div className="step-text bg-[#fdf6ec] rounded-2xl p-4 border border-[#BA3D03]/10 w-full">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#E58423] font-extrabold text-xs">
                      {s.step}
                    </span>
                    <h4 className="font-bold text-[#3D1202] text-sm">
                      {s.title}
                    </h4>
                  </div>
                  <p className="text-[#3D1202]/55 text-sm">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
