"use client";

import { motion } from "motion/react";
import {
  Scale,
  Gavel,
  BookOpen,
  Briefcase,
  Clock,
  CheckCircle,
  ArrowRight,
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

const courses = [
  {
    icon: Scale,
    title: "CLAT Preparation",
    badge: "Most Popular",
    duration: "12 Months",
    featured: true,
    description:
      "Comprehensive NLU preparation — all 5 CLAT sections, legal reasoning deep-dive, and 70+ full-length mocks.",
    benefits: [
      "English Language & Comprehension",
      "Current Affairs & GK",
      "Legal Reasoning & Aptitude",
      "Logical & Quantitative Reasoning",
      "70+ Full-length Mock Tests",
    ],
  },
  {
    icon: BookOpen,
    title: "MH LAW CET",
    badge: "3Y & 5Y",
    duration: "8 Months",
    featured: false,
    description:
      "Maharashtra law entrance for both 3-year LLB and 5-year integrated programs at top MH colleges.",
    benefits: [
      "Legal Aptitude & Reasoning",
      "General Knowledge",
      "English & Marathi Language",
      "State Current Affairs",
      "Previous Year Papers",
    ],
  },
  {
    icon: Gavel,
    title: "Judiciary Preparation",
    badge: "Civil Judge / JMFC",
    duration: "18 Months",
    featured: false,
    description:
      "Intensive coaching by practicing advocates for Civil Judge & JMFC exams. Law + procedure + viva.",
    benefits: [
      "Civil & Criminal Law & Procedure",
      "Evidence Act & Constitution",
      "Judgment Writing Practice",
      "Mock Viva & Interview Prep",
      "Bare Acts Revision Sessions",
    ],
  },
  {
    icon: Briefcase,
    title: "Law Officer Exams",
    badge: "Govt & PSU",
    duration: "6 Months",
    featured: false,
    description:
      "Targeted prep for Law Officer & Legal Advisor posts in government, PSUs, and public sector banks.",
    benefits: [
      "Banking & Financial Laws",
      "Labour & Industrial Laws",
      "Commercial & Corporate Laws",
      "GK & Current Affairs",
      "Drafting & Opinion Writing",
    ],
  },
];

export default function Courses() {
  const go = () =>
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="courses"
      className="py-24 relative overflow-hidden"
      style={{ background: P.bg }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 50% at 20% 60%,rgba(107,62,15,0.25) 0%,transparent 60%),
          radial-gradient(ellipse 55% 40% at 80% 20%,rgba(74,46,10,0.2) 0%,transparent 55%)`,
        }}
      />
      <hr className="hr-warm absolute top-0 inset-x-0 border-none h-px" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.22em] uppercase mb-3"
            style={{ color: P.copper }}
          >
            Our Programs
          </span>
          <h2
            className="font-heading text-4xl sm:text-5xl font-extrabold mb-3"
            style={{ color: P.white }}
          >
            Choose Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#ede3d7,#f5ece2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Legal Path
            </span>
          </h2>
          <p
            className="text-lg max-w-md mx-auto"
            style={{ color: "rgba(237,227,215,0.55)" }}
          >
            Expert-designed programs for every stage of your legal career
            journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {courses.map((c, index) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col rounded-3xl overflow-hidden group transition-all duration-300 hover:-translate-y-2"
              style={
                c.featured
                  ? { background: P.panel, boxShadow: SHADOW }
                  : {
                      background: "rgba(46,38,18,0.6)",
                      border: "1px solid rgba(237,227,215,0.12)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }
              }
            >
              <div
                className="h-[3px] shrink-0"
                style={{
                  background: c.featured
                    ? ACCENT_BAR
                    : `linear-gradient(90deg,${P.canvas},${P.copper},${P.canvas})`,
                }}
              />

              <div className="px-6 pt-6 pb-4">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center"
                    style={
                      c.featured
                        ? {
                            background:
                              "linear-gradient(135deg,#2e2612,#4a2e0a)",
                          }
                        : {
                            background: "rgba(178,106,25,0.1)",
                            border: "1px solid rgba(237,227,215,0.15)",
                          }
                    }
                  >
                    <c.icon
                      className="w-6 h-6"
                      style={{ color: c.featured ? P.linen : P.amber }}
                    />
                  </div>
                  <span
                    className="text-[11px] font-bold px-2.5 py-1 rounded-full"
                    style={
                      c.featured
                        ? {
                            background:
                              "linear-gradient(135deg,#2e2612,#4a2e0a)",
                            color: P.linen,
                          }
                        : {
                            background: "rgba(178,106,25,0.12)",
                            color: P.amber,
                            border: "1px solid rgba(178,106,25,0.25)",
                          }
                    }
                  >
                    {c.badge}
                  </span>
                </div>
                <h3
                  className="font-heading text-xl font-extrabold mb-2"
                  style={{ color: c.featured ? P.canvas : P.white }}
                >
                  {c.title}
                </h3>
                <div className="flex items-center gap-1.5 mb-3">
                  <Clock className="w-3.5 h-3.5" style={{ color: P.copper }} />
                  <span
                    className="text-sm font-medium"
                    style={{ color: P.copper }}
                  >
                    {c.duration}
                  </span>
                </div>
                <p
                  className="text-sm leading-relaxed"
                  style={{
                    color: c.featured
                      ? "rgba(46,38,18,0.65)"
                      : "rgba(237,227,215,0.55)",
                  }}
                >
                  {c.description}
                </p>
              </div>

              <div
                className="mx-6 h-px"
                style={{
                  background: c.featured
                    ? "rgba(46,38,18,0.08)"
                    : "rgba(237,227,215,0.1)",
                }}
              />

              <div className="px-6 py-4 flex-1 space-y-2">
                {c.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle
                      className="w-4 h-4 mt-0.5 shrink-0"
                      style={{ color: P.copper }}
                    />
                    <span
                      className="text-xs"
                      style={{
                        color: c.featured
                          ? "rgba(46,38,18,0.7)"
                          : "rgba(237,227,215,0.6)",
                      }}
                    >
                      {b}
                    </span>
                  </div>
                ))}
              </div>

              <div className="px-6 pb-6">
                <button
                  onClick={go}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:-translate-y-0.5"
                  style={
                    c.featured
                      ? {
                          background:
                            "linear-gradient(135deg,#2e2612,#4a2e0a,#6b3e0f)",
                          color: P.linen,
                          boxShadow: "0 4px 16px rgba(46,38,18,0.3)",
                        }
                      : {
                          background: "rgba(178,106,25,0.1)",
                          border: `1px solid rgba(178,106,25,0.3)`,
                          color: P.amber,
                        }
                  }
                >
                  Enroll Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
