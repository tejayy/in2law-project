"use client";

import { motion } from "motion/react";
import {
  Scale,
  Users,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Award,
  BookOpen,
  Shield,
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

const features = [
  {
    icon: Scale,
    title: "Expert Legal Faculty",
    desc: "Learn from practicing advocates with real courtroom experience — not just theory.",
  },
  {
    icon: Users,
    title: "Small Batch Size (≤20)",
    desc: "Personal attention, direct faculty interaction, and zero distraction learning.",
  },
  {
    icon: MessageSquare,
    title: "Personal Mentorship",
    desc: "1-on-1 doubt sessions, custom study plans, and ongoing performance tracking.",
  },
  {
    icon: BarChart3,
    title: "Mock Tests & Analytics",
    desc: "70+ full-length mocks with section-wise analytics and weekly improvement reviews.",
  },
  {
    icon: Award,
    title: "Interview Guidance",
    desc: "Mock GD-PI and viva voce sessions by legal professionals — not coaching bots.",
  },
  {
    icon: Lightbulb,
    title: "Practical Legal Exposure",
    desc: "Moot court sessions, legal drafting workshops, and court visits.",
  },
  {
    icon: BookOpen,
    title: "7000+ Practice Questions",
    desc: "Extensive question bank — previous years, topic-wise, and sectional tests.",
  },
  {
    icon: Shield,
    title: "Career Guidance",
    desc: "Complete roadmap from law school selection to career planning post-qualification.",
  },
];

export default function WhyChoose() {
  return (
    <section
      id="why"
      className="py-24 relative overflow-hidden"
      style={{ background: P.bg }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 65% 55% at 10% 30%,rgba(107,62,15,0.22) 0%,transparent 60%),
          radial-gradient(ellipse 55% 45% at 90% 70%,rgba(74,46,10,0.18) 0%,transparent 55%)`,
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
            Our Difference
          </span>
          <h2
            className="font-heading text-4xl sm:text-5xl font-extrabold mb-3"
            style={{ color: P.white }}
          >
            Why Choose{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#ede3d7,#f5ece2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              IN2LAW
            </span>
            ?
          </h2>
          <p
            className="text-lg max-w-md mx-auto"
            style={{ color: "rgba(237,227,215,0.55)" }}
          >
            Built by lawyers, for future lawyers. Every element designed to
            maximise your success.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {features.map((f, index) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              style={{ background: P.panel, boxShadow: SHADOW }}
            >
              <div
                className="absolute top-0 inset-x-0 h-[3px]"
                style={{ background: ACCENT_BAR }}
              />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{
                  background: "rgba(178,106,25,0.08)",
                  border: "1px solid rgba(178,106,25,0.15)",
                }}
              >
                <f.icon className="w-5 h-5" style={{ color: P.copper }} />
              </div>
              <h3
                className="font-semibold text-sm mb-2 leading-snug"
                style={{ color: P.canvas }}
              >
                {f.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(46,38,18,0.6)" }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden"
          style={{ background: P.panel, boxShadow: SHADOW }}
        >
          <div
            className="absolute top-0 inset-x-0 h-[3px]"
            style={{ background: ACCENT_BAR }}
          />
          <div
            className="absolute right-0 top-0 w-72 h-full pointer-events-none rounded-3xl"
            style={{
              background: `radial-gradient(ellipse at 80% 50%,rgba(178,106,25,0.08),transparent 70%)`,
            }}
          />
          <div className="relative">
            <h3
              className="font-heading text-2xl font-extrabold mb-1"
              style={{ color: P.canvas }}
            >
              Ready to start your legal journey?
            </h3>
            <p style={{ color: "rgba(46,38,18,0.55)" }}>
              Join the hundreds of successful lawyers who started right here.
            </p>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("demo")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="btn-panel relative shrink-0 px-8 py-4 rounded-full flex items-center gap-2"
            style={{ boxShadow: "0 6px 24px rgba(46,38,18,0.2)" }}
          >
            Book Free Demo <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
