"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { Trophy, BookOpen, Clock, CheckCircle, Users2 } from "lucide-react";

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

const stats = [
  { icon: CheckCircle, value: 100, suffix: "%", label: "Student Support" },
  { icon: Trophy, value: 5, suffix: "+ Yrs", label: "Expert Experience" },
  { icon: BookOpen, value: 7000, suffix: "+", label: "Practice Questions" },
  { icon: Users2, value: 70, suffix: "+", label: "Mock Tests" },
  { icon: Clock, value: 720, suffix: "+", label: "Teaching Hours" },
];
const toppers = [
  {
    name: "Aditi Sharma",
    rank: "AIR 42",
    exam: "CLAT 2024",
    college: "NLSIU Bangalore",
  },
  {
    name: "Rohan Kulkarni",
    rank: "AIR 89",
    exam: "CLAT 2024",
    college: "NLU Delhi",
  },
  {
    name: "Priya Joshi",
    rank: "Rank 1",
    exam: "MH LAW CET 2024",
    college: "ILS Law College",
  },
  {
    name: "Ankit Desai",
    rank: "AIR 15",
    exam: "Judiciary 2023",
    college: "Civil Judge",
  },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800,
            t0 = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - t0) / dur, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section
      id="results"
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg,${P.bg} 0%,${P.canvas} 60%,${P.bg} 100%)`,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle,rgba(237,227,215,0.08) 1px,transparent 1px)`,
          backgroundSize: "30px 30px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%,black 40%,transparent 100%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "20%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 700,
          height: 400,
          borderRadius: "50%",
          background: `radial-gradient(circle,rgba(107,62,15,0.4) 0%,transparent 65%)`,
          filter: "blur(60px)",
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
            Social Proof
          </span>
          <h2
            className="font-heading text-4xl sm:text-5xl font-extrabold mb-3"
            style={{ color: P.white }}
          >
            Trusted by Future{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#ede3d7,#f5ece2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Legal Professionals
            </span>
          </h2>
          <p
            className="text-lg max-w-md mx-auto"
            style={{ color: "rgba(237,227,215,0.55)" }}
          >
            Numbers that reflect our commitment to your success.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {stats.map((s, index) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300 cursor-default overflow-hidden"
              style={{ background: P.panel, boxShadow: SHADOW }}
            >
              <div
                className="absolute top-0 inset-x-0 h-[3px]"
                style={{ background: ACCENT_BAR }}
              />
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-3"
                style={{
                  background: "rgba(178,106,25,0.08)",
                  border: "1px solid rgba(178,106,25,0.15)",
                }}
              >
                <s.icon className="w-5 h-5" style={{ color: P.copper }} />
              </div>
              <div
                className="font-heading text-3xl font-extrabold mb-1"
                style={{
                  background: "linear-gradient(135deg,#2e2612,#6b3e0f)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <p className="text-xs font-medium" style={{ color: P.warm }}>
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center font-heading text-2xl font-bold mb-7"
          style={{ color: P.white }}
        >
          Our{" "}
          <span
            style={{
              background: "linear-gradient(135deg,#ede3d7,#f5ece2)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Star Performers
          </span>
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {toppers.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.55,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-2xl p-5 overflow-hidden group hover:-translate-y-1 transition-all duration-300"
              style={{
                background: P.panel,
                boxShadow: SHADOW,
                borderLeft: `3px solid ${P.copper}`,
              }}
            >
              <span
                className="absolute top-3 right-3 font-bold text-[11px] px-2.5 py-1 rounded-full"
                style={{
                  background: "linear-gradient(135deg,#2e2612,#4a2e0a)",
                  color: P.linen,
                }}
              >
                {t.rank}
              </span>
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                style={{
                  background: "linear-gradient(135deg,#2e2612,#4a2e0a)",
                  border: `2px solid rgba(237,227,215,0.3)`,
                }}
              >
                <span
                  className="font-extrabold text-lg"
                  style={{ color: P.linen }}
                >
                  {t.name.charAt(0)}
                </span>
              </div>
              <h4 className="font-bold mb-0.5" style={{ color: P.canvas }}>
                {t.name}
              </h4>
              <p
                className="text-sm font-medium mb-0.5"
                style={{ color: P.warm }}
              >
                {t.exam}
              </p>
              <p className="text-xs" style={{ color: "rgba(46,38,18,0.5)" }}>
                {t.college}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
