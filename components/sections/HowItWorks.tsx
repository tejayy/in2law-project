"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";
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
  const lineRef = useRef<HTMLDivElement>(null);

  // GSAP only for decorative connector line scaleX — no opacity/content hiding
  useEffect(() => {
    if (!lineRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: { trigger: lineRef.current, start: "top 80%" },
        },
      );
    });
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="how"
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg,${P.bg} 0%,${P.canvas} 50%,${P.bg} 100%)`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle,rgba(237,227,215,0.06) 1px,transparent 1px)`,
          backgroundSize: "38px 38px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%,black 30%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 50%,black 30%,transparent 100%)",
        }}
      />
      <hr className="hr-warm absolute top-0 inset-x-0 border-none h-px" />

      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.22em] uppercase mb-3"
            style={{ color: P.copper }}
          >
            The Process
          </span>
          <h2
            className="font-heading text-4xl sm:text-5xl font-extrabold mb-3"
            style={{ color: P.white }}
          >
            How It{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#ede3d7,#f5ece2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Works
            </span>
          </h2>
          <p
            className="text-lg max-w-md mx-auto"
            style={{ color: "rgba(237,227,215,0.55)" }}
          >
            Six steps from enrolment to exam-day confidence.
          </p>
        </motion.div>

        {/* Desktop */}
        <div className="hidden lg:block relative">
          <div
            ref={lineRef}
            className="absolute top-10 left-[calc(8.33%+24px)] right-[calc(8.33%+24px)] h-[2px]"
            style={{
              background: `linear-gradient(90deg,rgba(237,227,215,0.15),${P.copper},rgba(237,227,215,0.15))`,
            }}
          />
          <div className="grid grid-cols-6 gap-4">
            {steps.map((s, i) => {
              const last = i === steps.length - 1;
              return (
                <div
                  key={s.step}
                  className="flex flex-col items-center text-center"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.12,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative w-20 h-20 rounded-full flex items-center justify-center mb-4 z-10 hover:scale-110 transition-transform duration-200"
                    style={
                      last
                        ? {
                            background: P.copper,
                            boxShadow: `0 0 0 4px rgba(178,106,25,0.2),0 8px 24px rgba(178,106,25,0.35)`,
                          }
                        : {
                            background: `linear-gradient(135deg,${P.canvas},${P.mid})`,
                            border: `2px solid rgba(237,227,215,0.2)`,
                            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
                          }
                    }
                  >
                    <s.icon
                      className="w-7 h-7"
                      style={{ color: last ? P.canvas : P.amber }}
                    />
                    <span
                      className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full text-[10px] font-extrabold flex items-center justify-center"
                      style={
                        last
                          ? {
                              background: `linear-gradient(135deg,${P.canvas},${P.mid})`,
                              color: P.linen,
                            }
                          : { background: P.copper, color: P.canvas }
                      }
                    >
                      {i + 1}
                    </span>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.12 + 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <h4
                      className="font-bold text-sm mb-1"
                      style={{ color: last ? P.amber : P.linen }}
                    >
                      {s.title}
                    </h4>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(237,227,215,0.5)" }}
                    >
                      {s.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile */}
        <div className="lg:hidden relative pl-12">
          <div
            className="absolute left-5 top-0 bottom-0 w-[2px]"
            style={{
              background: `linear-gradient(180deg,rgba(237,227,215,0.1),${P.copper},rgba(237,227,215,0.1))`,
            }}
          />
          <div className="flex flex-col gap-8">
            {steps.map((s, i) => {
              const last = i === steps.length - 1;
              return (
                <div key={s.step} className="relative flex gap-5">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="absolute -left-12 w-9 h-9 rounded-full flex items-center justify-center shrink-0 z-10"
                    style={
                      last
                        ? {
                            background: P.copper,
                            boxShadow: `0 0 0 3px rgba(178,106,25,0.25)`,
                          }
                        : {
                            background: `linear-gradient(135deg,${P.canvas},${P.mid})`,
                            border: `2px solid rgba(237,227,215,0.2)`,
                          }
                    }
                  >
                    <s.icon
                      className="w-4 h-4"
                      style={{ color: last ? P.canvas : P.amber }}
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.45,
                      delay: i * 0.08 + 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="rounded-2xl p-4 w-full"
                    style={{
                      background: "rgba(46,38,18,0.5)",
                      border: "1px solid rgba(237,227,215,0.1)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="font-extrabold text-xs"
                        style={{ color: P.copper }}
                      >
                        {s.step}
                      </span>
                      <h4
                        className="font-bold text-sm"
                        style={{ color: last ? P.amber : P.linen }}
                      >
                        {s.title}
                      </h4>
                    </div>
                    <p
                      className="text-sm"
                      style={{ color: "rgba(237,227,215,0.55)" }}
                    >
                      {s.desc}
                    </p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
