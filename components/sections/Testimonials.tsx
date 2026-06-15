"use client";

import { useEffect, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

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

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "CLAT 2024 — AIR 42 | NLSIU Bangalore",
    text: "IN2LAW's structured approach and the way faculty explained legal reasoning was a game-changer. The mock tests were exactly like the real CLAT.",
    stars: 5,
    tag: "CLAT Topper",
  },
  {
    name: "Rohan Kulkarni",
    role: "CLAT 2024 — AIR 89 | NLU Delhi",
    text: "Small batch system was the biggest advantage. My mentor knew exactly where I was going wrong. The current affairs coverage also helped tremendously.",
    stars: 5,
    tag: "CLAT Topper",
  },
  {
    name: "Priya Joshi",
    role: "MH LAW CET 2024 — Rank 1 | ILS Law College",
    text: "I had failed MH LAW CET before joining IN2LAW. The personalised study plan transformed my performance completely. Got into my dream college.",
    stars: 5,
    tag: "MH CET Topper",
  },
  {
    name: "Ankit Desai",
    role: "Judiciary 2023 — Selected Civil Judge",
    text: "Practicing advocates teaching the law is a completely different experience. The way they simplify procedural law is exceptional. Mock viva was world-class.",
    stars: 5,
    tag: "Judiciary",
  },
  {
    name: "Sneha Patil",
    role: "MH LAW CET 2024 | Symbiosis Law School",
    text: "The 7000+ question bank ensured I had seen every type of question. Faculty here are mentors — they invested genuinely in my success.",
    stars: 5,
    tag: "MH CET",
  },
  {
    name: "Vikram Rathod",
    role: "Law Officer — SBI Legal Dept",
    text: "IN2LAW covered everything from Banking Laws to Constitutional provisions perfectly. The mock interviews gave me all the confidence I needed.",
    stars: 5,
    tag: "Law Officer",
  },
];

function Card({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="relative flex flex-col rounded-2xl overflow-hidden h-full"
      style={{ background: P.panel, boxShadow: SHADOW }}
    >
      <div className="h-[3px] shrink-0" style={{ background: ACCENT_BAR }} />
      <div className="p-6 flex flex-col flex-1">
        <div
          className="absolute top-5 right-5 w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: "rgba(178,106,25,0.1)" }}
        >
          <Quote className="w-4 h-4" style={{ color: P.copper }} />
        </div>
        <div className="flex gap-0.5 mb-4">
          {[...Array(t.stars)].map((_, i) => (
            <Star
              key={i}
              className="w-4 h-4"
              style={{ fill: P.copper, color: P.copper }}
            />
          ))}
        </div>
        <p
          className="text-sm leading-relaxed mb-5 italic flex-1"
          style={{ color: "rgba(46,38,18,0.7)" }}
        >
          &ldquo;{t.text}&rdquo;
        </p>
        <div
          className="flex items-center gap-3 pt-4"
          style={{ borderTop: "1px solid rgba(46,38,18,0.08)" }}
        >
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold shrink-0"
            style={{
              background: "linear-gradient(135deg,#2e2612,#4a2e0a)",
              color: P.linen,
            }}
          >
            {t.name.charAt(0)}
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="font-bold text-sm truncate"
              style={{ color: P.canvas }}
            >
              {t.name}
            </p>
            <p
              className="text-xs truncate"
              style={{ color: "rgba(46,38,18,0.5)" }}
            >
              {t.role}
            </p>
          </div>
          <span
            className="text-[11px] font-bold px-2.5 py-1 rounded-full shrink-0"
            style={{
              background: "linear-gradient(135deg,#2e2612,#4a2e0a)",
              color: P.linen,
            }}
          >
            {t.tag}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const total = testimonials.length;
  const visible = 3;
  const prev = () => setCur((c) => (c - 1 + total) % total);
  const next = () => setCur((c) => (c + 1) % total);
  const getSlice = () =>
    Array.from({ length: visible }, (_, i) => (cur + i) % total);
  useEffect(() => {
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  });

  const btnStyle = {
    border: `1px solid rgba(237,227,215,0.2)`,
    color: P.amber,
  };

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden"
      style={{ background: P.bg }}
    >
      <div
        className="absolute pointer-events-none"
        style={{
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 800,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle,rgba(107,62,15,0.3) 0%,transparent 65%)`,
          filter: "blur(70px)",
        }}
      />
      <hr className="hr-warm absolute top-0 inset-x-0 border-none h-px" />
      <hr className="hr-warm absolute bottom-0 inset-x-0 border-none h-px" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
            Student Stories
          </span>
          <h2
            className="font-heading text-4xl sm:text-5xl font-extrabold mb-3"
            style={{ color: P.white }}
          >
            Words from Our{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#ede3d7,#f5ece2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Achievers
            </span>
          </h2>
          <p
            className="text-lg max-w-md mx-auto"
            style={{ color: "rgba(237,227,215,0.55)" }}
          >
            Real reviews from students who turned their legal dreams into
            reality.
          </p>
        </motion.div>

        {/* Desktop 3-up */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <AnimatePresence mode="wait">
              {getSlice().map((idx) => (
                <motion.div
                  key={`${idx}-${cur}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.35 }}
                  className="hover:-translate-y-0.5 transition-transform duration-300"
                >
                  <Card t={testimonials[idx]} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={btnStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(178,106,25,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCur(i)}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === cur ? 32 : 8,
                    background: i === cur ? P.copper : "rgba(237,227,215,0.2)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
              style={btnStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "rgba(178,106,25,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
              }}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile 1-up */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="mb-6"
            >
              <Card t={testimonials[cur]} />
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={btnStyle}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCur(i)}
                  className="h-1.5 rounded-full transition-all"
                  style={{
                    width: i === cur ? 24 : 6,
                    background: i === cur ? P.copper : "rgba(237,227,215,0.2)",
                  }}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full flex items-center justify-center"
              style={btnStyle}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
