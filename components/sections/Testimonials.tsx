"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Aditi Sharma",
    role: "CLAT 2024 — AIR 42 | NLSIU Bangalore",
    text: "IN2LAW's structured approach and the way faculty explained legal reasoning was a game-changer. The mock tests were exactly like the real CLAT.",
    stars: 5,
    tag: "CLAT Topper",
    tagBg: "#E58423",
  },
  {
    name: "Rohan Kulkarni",
    role: "CLAT 2024 — AIR 89 | NLU Delhi",
    text: "Small batch system was the biggest advantage. My mentor knew exactly where I was going wrong. The current affairs coverage also helped tremendously.",
    stars: 5,
    tag: "CLAT Topper",
    tagBg: "#E58423",
  },
  {
    name: "Priya Joshi",
    role: "MH LAW CET 2024 — Rank 1 | ILS Law College",
    text: "I had failed MH LAW CET before joining IN2LAW. The personalised study plan transformed my performance completely. Got into my dream college.",
    stars: 5,
    tag: "MH CET Topper",
    tagBg: "#BA3D03",
  },
  {
    name: "Ankit Desai",
    role: "Judiciary 2023 — Selected Civil Judge",
    text: "Practicing advocates teaching the law is a completely different experience. The way they simplify procedural law is exceptional. Mock viva was world-class.",
    stars: 5,
    tag: "Judiciary",
    tagBg: "#BA3D03",
  },
  {
    name: "Sneha Patil",
    role: "MH LAW CET 2024 | Symbiosis Law School",
    text: "The 7000+ question bank ensured I had seen every type of question. Faculty here are mentors — they invested genuinely in my success.",
    stars: 5,
    tag: "MH CET",
    tagBg: "#BA3D03",
  },
  {
    name: "Vikram Rathod",
    role: "Law Officer — SBI Legal Dept",
    text: "IN2LAW covered everything from Banking Laws to Constitutional provisions perfectly. The mock interviews gave me all the confidence I needed.",
    stars: 5,
    tag: "Law Officer",
    tagBg: "#6b2203",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
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

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".t-heading", {
        y: 28,
        opacity: 0,
        duration: 0.65,
        scrollTrigger: { trigger: ".t-heading", start: "top 82%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="py-24 bg-[#fdf6ec] relative overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#BA3D03]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#BA3D03]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="t-heading text-center mb-14">
          <span className="inline-block text-[#BA3D03] text-xs font-bold tracking-[0.22em] uppercase mb-3">
            Student Stories
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#3D1202] mb-3">
            Words from Our <span className="orange-text">Achievers</span>
          </h2>
          <p className="text-[#3D1202]/55 text-lg max-w-md mx-auto">
            Real reviews from students who turned their legal dreams into
            reality.
          </p>
        </div>

        {/* Desktop 3-up */}
        <div className="hidden md:block">
          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <AnimatePresence mode="wait">
              {getSlice().map((idx) => {
                const t = testimonials[idx];
                return (
                  <motion.div
                    key={`${idx}-${cur}`}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -18 }}
                    transition={{ duration: 0.35 }}
                    className="bg-white rounded-2xl p-6 border border-[#BA3D03]/10 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 relative flex flex-col"
                  >
                    {/* quote */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-[#BA3D03]/10 rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-[#BA3D03]" />
                    </div>
                    {/* stars */}
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#E58423] text-[#E58423]"
                        />
                      ))}
                    </div>
                    <p className="text-[#3D1202]/70 text-sm leading-relaxed mb-5 italic flex-1">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-[#BA3D03]/10">
                      <div className="w-10 h-10 rounded-full bean-gradient flex items-center justify-center text-[#E8C581] font-extrabold text-sm shrink-0">
                        {t.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-bold text-[#3D1202] text-sm truncate">
                          {t.name}
                        </p>
                        <p className="text-[#3D1202]/45 text-xs truncate">
                          {t.role}
                        </p>
                      </div>
                      <span
                        className="text-[11px] font-bold px-2.5 py-1 rounded-full text-white shrink-0"
                        style={{ background: t.tagBg }}
                      >
                        {t.tag}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#BA3D03]/25 flex items-center justify-center text-[#BA3D03] hover:bg-[#BA3D03]/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCur(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === cur ? "w-8 bg-[#E58423]" : "w-2 bg-[#BA3D03]/25"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#BA3D03]/25 flex items-center justify-center text-[#BA3D03] hover:bg-[#BA3D03]/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile single */}
        <div className="md:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={cur}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-6 border border-[#BA3D03]/10 shadow-sm mb-6"
            >
              {(() => {
                const t = testimonials[cur];
                return (
                  <>
                    <div className="flex gap-0.5 mb-4">
                      {[...Array(t.stars)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 fill-[#E58423] text-[#E58423]"
                        />
                      ))}
                    </div>
                    <p className="text-[#3D1202]/70 text-sm leading-relaxed mb-5 italic">
                      &ldquo;{t.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-3 pt-4 border-t border-[#BA3D03]/10">
                      <div className="w-10 h-10 rounded-full bean-gradient flex items-center justify-center text-[#E8C581] font-bold text-sm">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-[#3D1202] text-sm">
                          {t.name}
                        </p>
                        <p className="text-[#3D1202]/45 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </>
                );
              })()}
            </motion.div>
          </AnimatePresence>
          <div className="flex items-center justify-center gap-3">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-[#BA3D03]/25 flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4 text-[#BA3D03]" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCur(i)}
                  className={`h-1.5 rounded-full transition-all ${i === cur ? "w-6 bg-[#E58423]" : "w-1.5 bg-[#BA3D03]/25"}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-[#BA3D03]/25 flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4 text-[#BA3D03]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
