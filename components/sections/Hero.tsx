"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { gsap } from "gsap";
import {
  ArrowRight,
  ArrowUpRight,
  Star,
  TrendingUp,
  Users,
  BookOpen,
  Award,
  CheckCircle,
  GraduationCap,
} from "lucide-react";

/* ─── Palette: Linen + Copperwood + Dark Khaki ─────────────── */
const C = {
  bg: "#1a0f08", // Espresso — dark canvas
  deep: "#2e2612", // Dark Khaki
  mid: "#4a2e0a",
  bright: "#6b3e0f",
  copper: "#b26a19", // Copperwood — primary accent
  amber: "#c88a3a", // lighter copper
  linen: "#ede3d7", // Linen — light highlight
  panel: "rgba(252,248,242,0.97)",
  white: "#ffffff",
} as const;

const SHADOW =
  "0 32px 80px rgba(46,38,18,0.45), 0 0 0 1px rgba(237,227,215,0.25)";
const ACCENTBAR =
  "linear-gradient(90deg,#2e2612,#6b3e0f,#b26a19,#6b3e0f,#2e2612)";

/* ─── Data ─────────────────────────────────────────────────── */
const stats = [
  { icon: TrendingUp, value: "720+", label: "Teaching Hrs" },
  { icon: BookOpen, value: "7000+", label: "Questions" },
  { icon: Award, value: "70+", label: "Mock Tests" },
  { icon: Users, value: "100%", label: "Support" },
];

const exams = ["CLAT", "MH LAW CET", "Judiciary", "Law Officer"];

const toppers = [
  {
    name: "Aditi Sharma",
    rank: "AIR\n42",
    exam: "CLAT 2024 · NLSIU Bangalore",
  },
  { name: "Ankit Desai", rank: "AIR\n15", exam: "Judiciary 2023" },
  { name: "Priya Joshi", rank: "Rank\n1", exam: "MH LAW CET 2024" },
];

const perks = [
  { icon: CheckCircle, label: "Lawyer-led Faculty" },
  { icon: CheckCircle, label: "Batches of ≤ 20" },
  { icon: CheckCircle, label: "70+ Mock Tests" },
  { icon: CheckCircle, label: "Personal Mentorship" },
];

/* ─── Scales SVG ────────────────────────────────────────────── */
function Scales() {
  return (
    <svg viewBox="0 0 220 240" fill="none" className="w-full h-full">
      <defs>
        <linearGradient id="scPole" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor={C.linen} />
          <stop offset="1" stopColor={C.amber} stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="scArm" x1="0" y1="0" x2="1" y2="0">
          <stop stopColor={C.linen} stopOpacity="0.7" />
          <stop offset="0.5" stopColor={C.white} />
          <stop offset="1" stopColor={C.linen} stopOpacity="0.7" />
        </linearGradient>
        <linearGradient id="scPan" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor={C.copper} />
          <stop offset="1" stopColor={C.linen} />
        </linearGradient>
        <radialGradient id="scGlow" cx="50%" cy="50%" r="50%">
          <stop stopColor={C.copper} stopOpacity="0.25" />
          <stop offset="1" stopColor={C.copper} stopOpacity="0" />
        </radialGradient>
        <filter id="scF">
          <feGaussianBlur stdDeviation="2" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* base glow */}
      <ellipse cx="110" cy="225" rx="60" ry="14" fill="url(#scGlow)" />
      {/* base */}
      <rect
        x="55"
        y="217"
        width="110"
        height="8"
        rx="4"
        fill={C.linen}
        opacity="0.8"
      />
      <rect
        x="72"
        y="213"
        width="76"
        height="5"
        rx="2.5"
        fill={C.amber}
        opacity="0.35"
      />
      {/* pole */}
      <rect
        x="107.5"
        y="40"
        width="5"
        height="175"
        rx="2.5"
        fill="url(#scPole)"
      />
      {/* top knob */}
      <circle
        cx="110"
        cy="36"
        r="11"
        fill={C.mid}
        stroke={C.copper}
        strokeWidth="1.5"
        filter="url(#scF)"
      />
      <circle cx="110" cy="36" r="6" fill={C.linen} />
      <circle cx="110" cy="36" r="2.5" fill={C.white} />
      {/* arm */}
      <rect
        x="14"
        y="56"
        width="192"
        height="4.5"
        rx="2.25"
        fill="url(#scArm)"
        opacity="0.9"
      />
      {/* chains */}
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i}>
          <ellipse
            cx="36"
            cy={63 + i * 12}
            rx="3"
            ry="5"
            stroke={C.linen}
            strokeWidth="1.3"
            fill="none"
            opacity={0.5 - i * 0.04}
            transform={`rotate(${i % 2 ? 26 : 0} 36  ${63 + i * 12})`}
          />
          <ellipse
            cx="184"
            cy={63 + i * 12}
            rx="3"
            ry="5"
            stroke={C.linen}
            strokeWidth="1.3"
            fill="none"
            opacity={0.5 - i * 0.04}
            transform={`rotate(${i % 2 ? 26 : 0} 184 ${63 + i * 12})`}
          />
        </g>
      ))}
      {/* pans */}
      <path
        d="M14 136 Q36 156 58 136"
        stroke="url(#scPan)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#scF)"
      />
      <path
        d="M162 136 Q184 156 206 136"
        stroke="url(#scPan)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        filter="url(#scF)"
      />
      <ellipse cx="36" cy="147" rx="21" ry="6" fill={C.copper} opacity="0.07" />
      <ellipse
        cx="184"
        cy="147"
        rx="21"
        ry="6"
        fill={C.copper}
        opacity="0.07"
      />
      <circle
        cx="36"
        cy="136"
        r="4"
        fill={C.linen}
        opacity="0.7"
        filter="url(#scF)"
      />
      <circle
        cx="184"
        cy="136"
        r="4"
        fill={C.linen}
        opacity="0.7"
        filter="url(#scF)"
      />
      {/* arm tips */}
      <circle cx="14" cy="59" r="3" fill={C.copper} opacity="0.6" />
      <circle cx="206" cy="59" r="3" fill={C.copper} opacity="0.6" />
    </svg>
  );
}

/* ─── Component ─────────────────────────────────────────────── */
export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 600], [0, -70]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".amb", {
        y: "random(-20,20)",
        x: "random(-10,10)",
        opacity: "random(0.07,0.35)",
        duration: "random(4,8)",
        repeat: -1,
        yoyo: true,
        stagger: { each: 0.2, from: "random" },
        ease: "sine.inOut",
      });
      gsap.to(".sc-bob", {
        y: -12,
        duration: 5.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col overflow-hidden noise"
      style={{ background: C.bg }}
    >
      {/* ── Background ──────────────────────────────────────── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
      >
        {/* gradient mesh — warm espresso/copper tones */}
        <div
          className="absolute inset-0"
          style={{
            background: `
            radial-gradient(ellipse 80% 65% at 35% 25%, rgba(107,62,15,0.5) 0%,  transparent 65%),
            radial-gradient(ellipse 55% 45% at 5%  80%, rgba(74,46,10,0.38)  0%,  transparent 60%),
            radial-gradient(ellipse 50% 40% at 80% 70%, rgba(46,38,18,0.3)   0%,  transparent 55%)
          `,
          }}
        />

        {/* dot grid — linen dots */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle,rgba(237,227,215,0.14) 1px,transparent 1px)",
            backgroundSize: "38px 38px",
            maskImage:
              "radial-gradient(ellipse 90% 80% at 40% 45%,black 20%,transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 90% 80% at 40% 45%,black 20%,transparent 100%)",
          }}
        />

        {/* ambient dots */}
        {[
          [8, "7%", "13%"],
          [4, "19%", "70%"],
          [6, "31%", "42%"],
          [5, "48%", "86%"],
          [7, "60%", "18%"],
          [4, "74%", "55%"],
          [6, "85%", "10%"],
          [5, "92%", "72%"],
        ].map(([s, l, t], i) => (
          <div
            key={i}
            className="amb absolute rounded-full"
            style={{
              width: Number(s),
              height: Number(s),
              left: l as string,
              top: t as string,
              background: i % 2 === 0 ? C.linen : C.amber,
              opacity: 0.2,
            }}
          />
        ))}

        {/* glow orbs — copper/amber tones */}
        <div
          className="absolute glow-pulse"
          style={{
            width: 640,
            height: 640,
            borderRadius: "50%",
            right: "-8%",
            top: "-18%",
            background:
              "radial-gradient(circle,rgba(107,62,15,0.3) 0%,transparent 65%)",
            filter: "blur(50px)",
          }}
        />
        <div
          className="absolute"
          style={{
            width: 420,
            height: 420,
            borderRadius: "50%",
            left: "-6%",
            bottom: "0%",
            background:
              "radial-gradient(circle,rgba(178,106,25,0.12) 0%,transparent 65%)",
            filter: "blur(36px)",
          }}
        />
      </motion.div>

      {/* ── Content ─────────────────────────────────────────── */}
      <div className="relative z-10 flex-1 flex flex-col max-w-7xl mx-auto w-full px-6 lg:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.12 }}
          className="pt-24 lg:pt-[96px] mb-8 flex justify-center lg:justify-start"
        >
          <div
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-[10.5px] font-semibold tracking-[0.22em] uppercase"
            style={{
              background: "rgba(178,106,25,0.1)",
              border: "1px solid rgba(237,227,215,0.22)",
              color: C.linen,
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: C.copper }}
            />
            Of the Lawyers · By the Lawyers · For the Lawyers
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-10 xl:gap-16 flex-1 items-center pb-10">
          {/* ── LEFT: copy ──────────────────────────── */}
          <div className="flex flex-col justify-center">
            {/* Overline */}
            <motion.p
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase mb-5"
              style={{ color: C.copper }}
            >
              <span
                className="h-px w-8 shrink-0"
                style={{
                  background: `linear-gradient(90deg,${C.copper},${C.linen})`,
                }}
              />
              Pune&apos;s #1 Legal Entrance Coaching
            </motion.p>

            {/* Headline */}
            <div className="mb-6 overflow-hidden">
              {[
                { text: "Your Journey", color: C.white, delay: 0.26 },
                {
                  text: "to India's Top",
                  grad: "linen",
                  italic: true,
                  delay: 0.35,
                },
                {
                  text: "Law Schools",
                  color: "rgba(255,255,255,0.88)",
                  delay: 0.43,
                },
                {
                  text: "Starts Here.",
                  grad: "copper",
                  italic: true,
                  delay: 0.51,
                },
              ].map((l, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 44, skewY: 2 }}
                  animate={{ opacity: 1, y: 0, skewY: 0 }}
                  transition={{
                    duration: 0.68,
                    delay: l.delay,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <h1
                    className={`font-heading font-black leading-[1.02] tracking-[-0.025em] text-[clamp(2.3rem,4.8vw,4rem)] ${l.italic ? "italic" : ""}`}
                    style={
                      l.grad === "linen"
                        ? {
                            background: `linear-gradient(135deg,${C.linen},#f5ece2)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                          }
                        : l.grad === "copper"
                          ? {
                              background: `linear-gradient(135deg,${C.copper},${C.amber})`,
                              WebkitBackgroundClip: "text",
                              WebkitTextFillColor: "transparent",
                              backgroundClip: "text",
                            }
                          : { color: l.color }
                    }
                  >
                    {l.text}
                  </h1>
                </motion.div>
              ))}
            </div>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.58 }}
              className="text-[15px] leading-[1.78] mb-6 max-w-[460px]"
              style={{ color: "rgba(237,227,215,0.52)" }}
            >
              Crack <strong style={{ color: C.linen }}>CLAT</strong>,{" "}
              <strong style={{ color: C.linen }}>MH LAW CET</strong> &{" "}
              <strong style={{ color: C.linen }}>Judiciary Exams</strong> with
              expert legal mentors, structured preparation, and personalised
              guidance that builds ranks — not just confidence.
            </motion.p>

            {/* Exam tags */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.63 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {exams.map((e, i) => (
                <span
                  key={e}
                  className="px-3.5 py-1.5 rounded-full text-[12px] font-bold"
                  style={
                    i === 0
                      ? {
                          background: `linear-gradient(135deg,${C.copper},${C.amber})`,
                          color: C.white,
                        }
                      : {
                          background: "rgba(237,227,215,0.07)",
                          color: "rgba(237,227,215,0.65)",
                          border: "1px solid rgba(237,227,215,0.14)",
                        }
                  }
                >
                  {e}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.68 }}
              className="flex flex-col sm:flex-row gap-3 mb-10"
            >
              <motion.button
                onClick={() => go("demo")}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="btn-primary pulse-cta flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-black text-[15px]"
                style={{ boxShadow: `0 8px 32px rgba(178,106,25,0.35)` }}
              >
                Book Free Demo Class <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => go("mock")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-[15px] transition-all"
                style={{
                  color: "rgba(237,227,215,0.72)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(237,227,215,0.2)",
                  backdropFilter: "blur(8px)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color = C.linen;
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(237,227,215,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.color =
                    "rgba(237,227,215,0.72)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "rgba(237,227,215,0.2)";
                }}
              >
                Free Mock Test <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </motion.div>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.78 }}
            >
              <hr className="hr-warm mb-5 border-none h-px" />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((s, i) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.82 + i * 0.07 }}
                    className="flex items-start gap-2.5"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(178,106,25,0.1)",
                        border: "1px solid rgba(237,227,215,0.12)",
                      }}
                    >
                      <s.icon
                        className="w-3.5 h-3.5"
                        style={{ color: C.copper }}
                      />
                    </div>
                    <div>
                      <div
                        className="font-heading font-black text-[1.25rem] leading-none mb-0.5"
                        style={{
                          background: `linear-gradient(135deg,${C.linen},${C.amber})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        className="text-[10px] font-medium"
                        style={{ color: "rgba(237,227,215,0.38)" }}
                      >
                        {s.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* ── RIGHT: panel card ──────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex-shrink-0"
          >
            {/* outer glow — warm copper */}
            <div
              className="absolute inset-[-20px] rounded-[2.5rem]"
              style={{
                background: `radial-gradient(ellipse at 50% 50%, rgba(178,106,25,0.15) 0%, transparent 70%)`,
                filter: "blur(24px)",
              }}
            />

            {/* panel card */}
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ background: C.panel, boxShadow: SHADOW }}
            >
              {/* top accent bar */}
              <div className="h-[3px]" style={{ background: ACCENTBAR }} />

              <div className="p-6 flex flex-col gap-5">
                {/* Academy badge */}
                <div
                  className="flex items-center gap-3 pb-4"
                  style={{ borderBottom: "1px solid rgba(46,38,18,0.08)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: `linear-gradient(135deg,${C.deep},${C.mid})`,
                    }}
                  >
                    <GraduationCap
                      className="w-5 h-5"
                      style={{ color: C.linen }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className="font-bold text-sm leading-tight"
                      style={{ color: C.deep }}
                    >
                      IN2LAW Academy
                    </p>
                    <p
                      className="text-[11px] mt-0.5"
                      style={{ color: C.bright }}
                    >
                      Pune · Est. 2019 · Premier Legal Coaching
                    </p>
                  </div>
                  {/* 5-star rating — copper */}
                  <div className="flex gap-0.5 shrink-0">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-3 h-3"
                        style={{ fill: C.copper, color: C.copper }}
                      />
                    ))}
                  </div>
                </div>

                {/* Scales illustration card */}
                <div
                  className="relative rounded-2xl overflow-hidden"
                  style={{
                    background: `linear-gradient(155deg,${C.deep} 0%,${C.mid} 55%,${C.bright} 100%)`,
                    padding: "24px 20px 16px",
                  }}
                >
                  {/* inner dot texture — linen dots */}
                  <div
                    className="absolute inset-0 opacity-[0.1]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle,rgba(237,227,215,1) 1px,transparent 1px)",
                      backgroundSize: "18px 18px",
                    }}
                  />
                  {/* glow — copper */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 glow-pulse"
                    style={{
                      background: `radial-gradient(circle,rgba(178,106,25,0.18),transparent 70%)`,
                      filter: "blur(18px)",
                    }}
                  />
                  <div className="relative sc-bob h-[180px]">
                    <Scales />
                  </div>
                  <div className="relative flex items-center justify-between mt-2">
                    <div>
                      <p className="font-heading font-black text-white text-[15px]">
                        IN2LAW Academy
                      </p>
                      <p
                        className="text-[10px] font-bold tracking-[0.18em] uppercase"
                        style={{ color: C.amber }}
                      >
                        Premier Legal Coaching
                      </p>
                    </div>
                    <span
                      className="px-2.5 py-1 rounded-full text-[10px] font-bold"
                      style={{
                        background: "rgba(237,227,215,0.12)",
                        color: C.linen,
                        border: "1px solid rgba(237,227,215,0.2)",
                      }}
                    >
                      Pune
                    </span>
                  </div>
                </div>

                {/* Perk grid */}
                <div className="grid grid-cols-2 gap-2.5">
                  {perks.map((p, i) => (
                    <motion.div
                      key={p.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.88 + i * 0.07 }}
                      className="flex items-center gap-2 px-3 py-2.5 rounded-xl"
                      style={{
                        background: "rgba(46,38,18,0.05)",
                        border: "1px solid rgba(46,38,18,0.07)",
                      }}
                    >
                      <p.icon
                        className="w-3.5 h-3.5 shrink-0"
                        style={{ color: C.copper }}
                      />
                      <span
                        className="text-[11.5px] font-semibold leading-tight"
                        style={{ color: C.deep }}
                      >
                        {p.label}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Toppers */}
                <div
                  style={{
                    borderTop: "1px solid rgba(46,38,18,0.07)",
                    paddingTop: "16px",
                  }}
                >
                  <p
                    className="text-[10px] font-bold tracking-[0.25em] uppercase mb-3"
                    style={{ color: C.bright }}
                  >
                    Recent Toppers
                  </p>
                  <div className="flex flex-col gap-2">
                    {toppers.map((t, i) => (
                      <motion.div
                        key={t.name}
                        initial={{ opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.0 + i * 0.07 }}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl"
                        style={{
                          background: "rgba(46,38,18,0.04)",
                          border: "1px solid rgba(46,38,18,0.06)",
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center text-[10px] font-black leading-tight text-center whitespace-pre-line"
                          style={{
                            background: `linear-gradient(135deg,${C.deep},${C.mid})`,
                            color: C.linen,
                          }}
                        >
                          {t.rank}
                        </div>
                        <div className="min-w-0">
                          <p
                            className="font-bold text-[12.5px] leading-tight truncate"
                            style={{ color: C.deep }}
                          >
                            {t.name}
                          </p>
                          <p
                            className="text-[10.5px] mt-0.5 truncate"
                            style={{ color: C.bright }}
                          >
                            {t.exam}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Panel CTA */}
                <button
                  onClick={() => go("demo")}
                  className="btn-panel w-full py-3.5 rounded-2xl font-black text-[14px] flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                  style={{ boxShadow: `0 6px 24px rgba(46,38,18,0.25)` }}
                >
                  Book Free Demo Class
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── Bottom marquee ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.05 }}
          className="pb-8"
        >
          <hr className="hr-warm mb-5 border-none h-px" />
          <div className="marquee-wrap relative">
            <div
              className="pointer-events-none absolute left-0 inset-y-0 w-16 z-10"
              style={{
                background: `linear-gradient(90deg,${C.bg},transparent)`,
              }}
            />
            <div
              className="pointer-events-none absolute right-0 inset-y-0 w-16 z-10"
              style={{
                background: `linear-gradient(270deg,${C.bg},transparent)`,
              }}
            />
            <div className="marquee-track gap-10">
              {[
                "⚖ CLAT Coaching",
                "§ MH LAW CET",
                "🏛 Judiciary Prep",
                "📋 Law Officer Exam",
                "👨‍⚖️ Lawyer-led Faculty",
                "📚 7000+ Questions",
                "🎯 70+ Mock Tests",
                "✅ Batches ≤ 20",
                "🌟 5+ Years",
                "⚖ CLAT Coaching",
                "§ MH LAW CET",
                "🏛 Judiciary Prep",
                "📋 Law Officer Exam",
                "👨‍⚖️ Lawyer-led Faculty",
                "📚 7000+ Questions",
                "🎯 70+ Mock Tests",
                "✅ Batches ≤ 20",
                "🌟 5+ Years",
              ].map((item, i) => (
                <span
                  key={i}
                  className="shrink-0 text-[11px] font-semibold tracking-[0.2em] uppercase whitespace-nowrap"
                  style={{ color: "rgba(237,227,215,0.28)" }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
