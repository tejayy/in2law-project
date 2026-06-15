"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { gsap } from "gsap";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";

/* ── palette ────────────────────────────── */
const C = {
  bg: "#0e0502",
  bgMid: "#1c0804",
  dark: "#3d1202",
  mahogany: "#ba3d03",
  orange: "#e58423",
  amber: "#f0a030",
  cream: "#e8c581",
  creamFg: "#f8e8b8",
  white: "#ffffff",
} as const;

/* ── stat items ────────────────────────── */
const stats = [
  { value: "720+", label: "Teaching Hours" },
  { value: "7000+", label: "Practice Questions" },
  { value: "70+", label: "Mock Tests" },
  { value: "100%", label: "Student Support" },
];

/* ── exam pills ─────────────────────────── */
const exams = ["CLAT", "MH LAW CET", "Judiciary", "Law Officer"];

/* ── Scales of Justice SVG (hero size) ─── */
function ScalesSVG() {
  return (
    <svg
      viewBox="0 0 240 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="poleGrad" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={C.cream} />
          <stop offset="1" stopColor={C.mahogany} />
        </linearGradient>
        <linearGradient id="panGrad" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor={C.cream} />
          <stop offset="1" stopColor={C.amber} />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <radialGradient id="baseGlow" cx="50%" cy="50%" r="50%">
          <stop stopColor={C.orange} stopOpacity="0.4" />
          <stop offset="1" stopColor={C.orange} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* base glow */}
      <ellipse cx="120" cy="255" rx="60" ry="18" fill="url(#baseGlow)" />

      {/* base platform */}
      <rect
        x="60"
        y="248"
        width="120"
        height="8"
        rx="4"
        fill={C.cream}
        opacity="0.9"
      />
      <rect
        x="80"
        y="244"
        width="80"
        height="5"
        rx="2.5"
        fill={C.mahogany}
        opacity="0.6"
      />

      {/* pole */}
      <rect
        x="117.5"
        y="50"
        width="5"
        height="196"
        rx="2.5"
        fill="url(#poleGrad)"
      />

      {/* top ornament */}
      <circle cx="120" cy="46" r="10" fill={C.orange} filter="url(#glow)" />
      <circle cx="120" cy="46" r="6" fill={C.cream} />

      {/* cross beam */}
      <rect
        x="20"
        y="68"
        width="200"
        height="5"
        rx="2.5"
        fill={C.cream}
        opacity="0.95"
      />

      {/* left chain */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <ellipse
          key={i}
          cx="48"
          cy={76 + i * 13}
          rx="3.5"
          ry="5"
          stroke={C.cream}
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
          transform={`rotate(${i % 2 === 0 ? 0 : 25} 48 ${76 + i * 13})`}
        />
      ))}
      {/* right chain */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <ellipse
          key={i}
          cx="192"
          cy={76 + i * 13}
          rx="3.5"
          ry="5"
          stroke={C.cream}
          strokeWidth="1.5"
          fill="none"
          opacity="0.7"
          transform={`rotate(${i % 2 === 0 ? 0 : 25} 192 ${76 + i * 13})`}
        />
      ))}

      {/* left pan */}
      <path
        d="M20 154 Q48 178 76 154"
        stroke="url(#panGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="20"
        y1="154"
        x2="76"
        y2="154"
        stroke={C.cream}
        strokeWidth="1"
        opacity="0.3"
      />
      {/* left pan contents (books/law symbols) */}
      <rect
        x="28"
        y="144"
        width="40"
        height="10"
        rx="2"
        fill={C.cream}
        opacity="0.15"
      />
      <text
        x="48"
        y="152"
        textAnchor="middle"
        fontSize="8"
        fill={C.cream}
        opacity="0.5"
        fontFamily="serif"
      >
        ⚖
      </text>

      {/* right pan */}
      <path
        d="M164 154 Q192 178 220 154"
        stroke="url(#panGrad)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      <line
        x1="164"
        y1="154"
        x2="220"
        y2="154"
        stroke={C.cream}
        strokeWidth="1"
        opacity="0.3"
      />
      <rect
        x="172"
        y="144"
        width="40"
        height="10"
        rx="2"
        fill={C.orange}
        opacity="0.15"
      />
      <text
        x="192"
        y="152"
        textAnchor="middle"
        fontSize="8"
        fill={C.cream}
        opacity="0.5"
        fontFamily="serif"
      >
        §
      </text>

      {/* decorative stars */}
      <circle cx="48" cy="154" r="4" fill={C.cream} opacity="0.6" />
      <circle cx="192" cy="154" r="4" fill={C.cream} opacity="0.6" />
    </svg>
  );
}

/* ── Result card ─────────────────────────── */
function ResultCard({
  name,
  rank,
  exam,
  delay,
}: {
  name: string;
  rank: string;
  exam: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="flex items-center gap-3 px-4 py-3 rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(232,197,129,0.12)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* rank badge */}
      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 font-black text-xs leading-tight text-center"
        style={{
          background: `linear-gradient(135deg, ${C.mahogany}, ${C.orange})`,
          color: "#fff",
        }}
      >
        {rank}
      </div>
      <div className="min-w-0">
        <p className="text-white font-semibold text-sm leading-tight truncate">
          {name}
        </p>
        <p className="text-[11px] mt-0.5 truncate" style={{ color: C.cream }}>
          {exam}
        </p>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const bgCircleRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  /* Parallax on scroll */
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, -80]);
  const scaleY = useTransform(scrollY, [0, 600], [1, 1.08]);

  /* GSAP — ambient dots & orb */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".ambient-dot", {
        y: "random(-24, 24)",
        x: "random(-14, 14)",
        opacity: "random(0.15, 0.55)",
        duration: "random(4, 7)",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.3, from: "random" },
        ease: "sine.inOut",
      });
      /* slow bob on the scales */
      gsap.to(".scales-wrap", {
        y: -12,
        rotation: 0.8,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col overflow-hidden noise"
      style={{ background: C.bg }}
    >
      {/* ══════ BACKGROUND LAYER ══════════════════════════════════ */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* Deep gradient mesh */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 65% 30%, rgba(90,26,3,0.55) 0%, transparent 70%),
              radial-gradient(ellipse 50% 40% at 10% 80%, rgba(186,61,3,0.2) 0%, transparent 60%),
              radial-gradient(ellipse 60% 50% at 85% 75%, rgba(61,18,2,0.4) 0%, transparent 65%),
              linear-gradient(170deg, #0e0502 0%, #1e0803 40%, #0e0502 100%)
            `,
          }}
        />

        {/* Subtle grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(232,197,129,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(232,197,129,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        {/* Ambient floating dots */}
        {[
          { s: 7, l: "8%", t: "14%", op: 0.35 },
          { s: 4, l: "18%", t: "72%", op: 0.25 },
          { s: 9, l: "28%", t: "38%", op: 0.2 },
          { s: 5, l: "42%", t: "85%", op: 0.3 },
          { s: 6, l: "55%", t: "22%", op: 0.2 },
          { s: 4, l: "70%", t: "60%", op: 0.25 },
          { s: 8, l: "80%", t: "12%", op: 0.3 },
          { s: 5, l: "88%", t: "80%", op: 0.2 },
          { s: 3, l: "93%", t: "45%", op: 0.35 },
          { s: 6, l: "35%", t: "50%", op: 0.15 },
          { s: 4, l: "62%", t: "90%", op: 0.2 },
          { s: 5, l: "76%", t: "35%", op: 0.25 },
        ].map((d, i) => (
          <div
            key={i}
            className="ambient-dot absolute rounded-full"
            style={{
              width: d.s,
              height: d.s,
              left: d.l,
              top: d.t,
              opacity: d.op,
              background:
                i % 3 === 0 ? C.cream : i % 3 === 1 ? C.orange : C.mahogany,
            }}
          />
        ))}

        {/* Large blurred orbs */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full"
          style={{
            right: "-10%",
            top: "-20%",
            background: `radial-gradient(circle, rgba(186,61,3,0.12) 0%, transparent 65%)`,
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute w-[500px] h-[500px] rounded-full"
          style={{
            left: "-5%",
            bottom: "0%",
            background: `radial-gradient(circle, rgba(229,132,35,0.08) 0%, transparent 65%)`,
            filter: "blur(32px)",
          }}
        />
      </motion.div>

      {/* ══════ CONTENT ═══════════════════════════════════════════ */}
      <div className="relative z-10 flex-1 flex flex-col">
        <div className="max-w-7xl mx-auto w-full px-6 lg:px-10 pt-[96px] pb-16 flex-1 flex flex-col">
          {/* ── Brand tagline pill ─────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex justify-center lg:justify-start mb-8"
          >
            <div
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.22em] uppercase"
              style={{
                background: "rgba(232,197,129,0.08)",
                border: "1px solid rgba(232,197,129,0.2)",
                color: C.cream,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: C.orange }}
              />
              Of the Lawyers · By the Lawyers · For the Lawyers
            </div>
          </motion.div>

          {/* ── Main grid ─────────────────────────────────── */}
          <div className="grid lg:grid-cols-2 gap-10 xl:gap-16 flex-1 items-center">
            {/* ── LEFT col ──────────────────────────────── */}
            <div className="flex flex-col justify-center">
              {/* Overline */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase mb-5"
                style={{ color: C.mahogany }}
              >
                <span
                  className="inline-block h-px w-8"
                  style={{
                    background: `linear-gradient(90deg, ${C.mahogany}, ${C.orange})`,
                  }}
                />
                Pune&apos;s #1 Legal Coaching
              </motion.p>

              {/* ── Headline ─── editorial, large ──────── */}
              <motion.h1
                ref={headlineRef}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1, delay: 0.25 }}
                className="font-heading font-black text-[clamp(2.6rem,6vw,4.8rem)] leading-[1.0] tracking-[-0.02em] mb-7"
              >
                {/* line 1 */}
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.28,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block text-white"
                >
                  Your Journey
                </motion.span>

                {/* line 2 — gradient accent */}
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.38,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block text-gradient-gold"
                  style={{ fontStyle: "italic" }}
                >
                  to India&apos;s Top
                </motion.span>

                {/* line 3 */}
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.48,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block"
                  style={{ color: "rgba(255,255,255,0.9)" }}
                >
                  Law Schools{" "}
                  <span
                    className="text-gradient-fire"
                    style={{ fontStyle: "italic" }}
                  >
                    Starts
                  </span>
                </motion.span>

                {/* line 4 — enormous */}
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.56,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="block text-gradient-fire"
                  style={{ fontStyle: "italic" }}
                >
                  Here.
                </motion.span>
              </motion.h1>

              {/* Body copy */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.62 }}
                className="text-[15px] leading-[1.75] mb-8 max-w-[480px]"
                style={{ color: "rgba(255,255,255,0.52)" }}
              >
                Crack{" "}
                <span style={{ color: C.creamFg, fontWeight: 600 }}>CLAT</span>,{" "}
                <span style={{ color: C.creamFg, fontWeight: 600 }}>
                  MH LAW CET
                </span>{" "}
                &{" "}
                <span style={{ color: C.creamFg, fontWeight: 600 }}>
                  Judiciary Exams
                </span>{" "}
                with expert legal mentors, structured preparation, and the
                personalised guidance that top coaches in Pune are known for.
              </motion.p>

              {/* Exam tags */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.68 }}
                className="flex flex-wrap gap-2 mb-9"
              >
                {exams.map((e, i) => (
                  <span
                    key={e}
                    className="px-3.5 py-1.5 rounded-full text-[12px] font-semibold"
                    style={{
                      background:
                        i === 0
                          ? `linear-gradient(135deg, ${C.mahogany}, ${C.orange})`
                          : "rgba(255,255,255,0.06)",
                      color: i === 0 ? "#fff" : C.cream,
                      border:
                        i !== 0 ? `1px solid rgba(232,197,129,0.18)` : "none",
                    }}
                  >
                    {e}
                  </span>
                ))}
              </motion.div>

              {/* CTA row */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.74 }}
                className="flex flex-col sm:flex-row items-start gap-3 mb-10"
              >
                <motion.button
                  onClick={() => go("demo")}
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  className="btn-shimmer pulse-cta flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-[15px]"
                  style={{ boxShadow: `0 8px 32px rgba(229,132,35,0.4)` }}
                >
                  Book Free Demo Class
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  onClick={() => go("mock")}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[15px] transition-all duration-200"
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(232,197,129,0.2)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  Free Mock Test
                  <ArrowUpRight className="w-4 h-4" />
                </motion.button>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85 }}
              >
                <div className="hr-gold mb-6" />
                <div className="grid grid-cols-4 gap-4">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.88 + i * 0.07 }}
                      className="text-center lg:text-left"
                    >
                      <div
                        className="font-heading font-black text-[1.5rem] leading-none mb-1"
                        style={{
                          background: `linear-gradient(135deg, ${C.cream}, ${C.orange})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="text-[10.5px] font-medium leading-tight"
                        style={{ color: "rgba(255,255,255,0.42)" }}
                      >
                        {s.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* ── RIGHT col ──────────────────────────────── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.75,
                delay: 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex items-center justify-center"
            >
              {/* Decorative rings */}
              <div
                className="absolute w-[500px] h-[500px] rounded-full"
                style={{
                  border: "1px solid rgba(232,197,129,0.07)",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
              <div
                className="absolute w-[380px] h-[380px] rounded-full"
                style={{
                  border: "1px solid rgba(229,132,35,0.1)",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />
              <div
                className="spin-slow absolute w-[440px] h-[440px] rounded-full"
                style={{
                  border: "1px dashed rgba(232,197,129,0.06)",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />

              {/* Centre glow pool */}
              <div
                className="absolute w-72 h-72 rounded-full"
                style={{
                  background: `radial-gradient(circle, rgba(186,61,3,0.25) 0%, transparent 70%)`,
                  filter: "blur(32px)",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />

              {/* ── Scales illustration card ─────────── */}
              <div className="relative scales-wrap w-[300px] h-[340px] flex items-center justify-center">
                <ScalesSVG />
              </div>

              {/* ── Floating result cards ─────────────── */}
              {/* top-left */}
              <div className="absolute top-4 -left-4 lg:-left-14 w-[190px]">
                <ResultCard
                  name="Aditi Sharma"
                  rank="AIR 42"
                  exam="CLAT 2024 · NLSIU"
                  delay={0.95}
                />
              </div>
              {/* top-right */}
              <div className="absolute top-16 -right-4 lg:-right-12 w-[190px]">
                <ResultCard
                  name="Ankit Desai"
                  rank="AIR 15"
                  exam="Judiciary 2023"
                  delay={1.05}
                />
              </div>
              {/* bottom-left */}
              <div className="absolute bottom-10 -left-4 lg:-left-14 w-[190px]">
                <ResultCard
                  name="Priya Joshi"
                  rank="Rank 1"
                  exam="MH LAW CET 2024"
                  delay={1.15}
                />
              </div>

              {/* ── Review pill ──────────────────────── */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.25 }}
                className="absolute bottom-4 -right-2 lg:-right-10 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl"
                style={{
                  background: "rgba(14,5,2,0.8)",
                  border: "1px solid rgba(232,197,129,0.15)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3"
                      style={{ fill: C.orange, color: C.orange }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-white font-bold text-xs leading-tight">
                    Rated 4.9 / 5
                  </p>
                  <p
                    className="text-[10px]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    200+ student reviews
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* ── Bottom trust marquee ───────────────────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="mt-14 lg:mt-10"
          >
            <div className="hr-gold mb-6" />
            <div className="marquee-wrap relative">
              {/* fade edges */}
              <div
                className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
                style={{
                  background: `linear-gradient(90deg, ${C.bg}, transparent)`,
                }}
              />
              <div
                className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
                style={{
                  background: `linear-gradient(270deg, ${C.bg}, transparent)`,
                }}
              />
              <div className="marquee-track gap-12">
                {[
                  "⚖ CLAT Coaching",
                  "§ MH LAW CET",
                  "🏛 Judiciary Prep",
                  "📋 Law Officer Exam",
                  "👨‍⚖️ Lawyer-led Faculty",
                  "📚 7000+ Questions",
                  "🎯 70+ Mock Tests",
                  "✅ Small Batches",
                  "🌟 5+ Years Experience",
                  "⚖ CLAT Coaching",
                  "§ MH LAW CET",
                  "🏛 Judiciary Prep",
                  "📋 Law Officer Exam",
                  "👨‍⚖️ Lawyer-led Faculty",
                  "📚 7000+ Questions",
                  "🎯 70+ Mock Tests",
                  "✅ Small Batches",
                  "🌟 5+ Years Experience",
                ].map((item, i) => (
                  <span
                    key={i}
                    className="shrink-0 text-xs font-semibold tracking-[0.18em] uppercase whitespace-nowrap"
                    style={{ color: "rgba(232,197,129,0.35)" }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
