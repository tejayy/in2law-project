"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";

const NAV = [
  { label: "Courses", href: "#courses" },
  { label: "Why Us", href: "#why" },
  { label: "Results", href: "#results" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      {/* ── Main bar ─────────────────────────────────────────── */}
      <motion.header
        ref={headerRef}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          background: solid ? "rgba(8,2,0,0.88)" : "transparent",
          backdropFilter: solid ? "blur(24px) saturate(180%)" : "none",
          WebkitBackdropFilter: solid ? "blur(24px) saturate(180%)" : "none",
          borderBottom: solid ? "1px solid rgba(232,197,129,0.1)" : "none",
          transition:
            "background 0.4s ease, backdrop-filter 0.4s ease, border-color 0.4s ease",
        }}
      >
        {/* top gold line — only when scrolled */}
        {solid && (
          <div
            className="absolute top-0 inset-x-0 h-[2px]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, #ba3d03 30%, #e58423 50%, #ba3d03 70%, transparent 100%)",
            }}
          />
        )}

        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex h-[68px] items-center justify-between gap-8">
          {/* ── Logo ──────────────────────────────────── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 shrink-0 group"
          >
            {/* Icon mark */}
            <div className="relative w-10 h-10 shrink-0">
              {/* spinning ring */}
              <svg
                className="absolute inset-0 spin-slow"
                viewBox="0 0 40 40"
                fill="none"
              >
                <circle
                  cx="20"
                  cy="20"
                  r="18"
                  stroke="url(#navRing)"
                  strokeWidth="1.5"
                  strokeDasharray="6 4"
                  opacity="0.6"
                />
                <defs>
                  <linearGradient
                    id="navRing"
                    x1="0"
                    y1="0"
                    x2="40"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#e8c581" />
                    <stop offset="1" stopColor="#ba3d03" />
                  </linearGradient>
                </defs>
              </svg>
              {/* solid bg circle */}
              <div
                className="absolute inset-[4px] rounded-full flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg,#3d1202,#7a2503)",
                }}
              >
                {/* scales SVG mini */}
                <svg viewBox="0 0 20 20" fill="none" className="w-4 h-4">
                  <rect
                    x="9.5"
                    y="2"
                    width="1.2"
                    height="15"
                    rx="0.6"
                    fill="#e8c581"
                  />
                  <rect
                    x="3"
                    y="17"
                    width="14"
                    height="1.8"
                    rx="0.9"
                    fill="#e8c581"
                  />
                  <rect
                    x="2"
                    y="4"
                    width="16"
                    height="1.4"
                    rx="0.7"
                    fill="#e8c581"
                  />
                  <line
                    x1="4"
                    y1="5.4"
                    x2="4"
                    y2="10"
                    stroke="#e8c581"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M1.5 10 Q4 13 6.5 10"
                    stroke="#e8c581"
                    strokeWidth="1"
                    fill="none"
                  />
                  <line
                    x1="16"
                    y1="5.4"
                    x2="16"
                    y2="10"
                    stroke="#e8c581"
                    strokeWidth="0.8"
                  />
                  <path
                    d="M13.5 10 Q16 13 18.5 10"
                    stroke="#e8c581"
                    strokeWidth="1"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Wordmark */}
            <div className="leading-none">
              <span
                className="block font-heading font-black tracking-[-0.02em] text-[1.2rem]"
                style={{ color: "#ffffff" }}
              >
                IN2LAW
              </span>
              <span
                className="block text-[9px] font-semibold tracking-[0.28em] uppercase mt-[-1px]"
                style={{ color: "#e8c581" }}
              >
                Academy
              </span>
            </div>
          </button>

          {/* ── Desktop nav ───────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV.map((l) => (
              <button
                key={l.href}
                onClick={() => {
                  setActive(l.href);
                  go(l.href);
                }}
                className="relative px-4 py-2 rounded-full text-[13.5px] font-medium transition-all duration-200"
                style={{
                  color:
                    active === l.href ? "#e8c581" : "rgba(255,255,255,0.6)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color =
                    active === l.href ? "#e8c581" : "rgba(255,255,255,0.6)")
                }
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* ── CTA group ─────────────────────────────── */}
          <div className="hidden lg:flex items-center gap-3">
            {/* phone */}
            <a
              href="tel:+919999999999"
              className="text-[13px] font-medium transition-colors"
              style={{ color: "rgba(232,197,129,0.7)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e8c581")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(232,197,129,0.7)")
              }
            >
              +91&nbsp;99999&nbsp;99999
            </a>

            {/* divider */}
            <div
              className="h-5 w-px"
              style={{ background: "rgba(255,255,255,0.12)" }}
            />

            {/* primary CTA */}
            <motion.button
              onClick={() => go("#demo")}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="btn-shimmer pulse-cta flex items-center gap-1.5 px-5 py-2.5 rounded-full text-white font-bold text-[13.5px] shadow-lg"
              style={{ boxShadow: "0 4px 20px rgba(229,132,35,0.35)" }}
            >
              Book Free Demo
              <ChevronRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* ── Hamburger ─────────────────────────────── */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
            style={{
              color: "#fff",
              background: open
                ? "rgba(186,61,3,0.3)"
                : "rgba(255,255,255,0.06)",
            }}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ── Mobile drawer ──────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            {/* backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{
                background: "rgba(0,0,0,0.7)",
                backdropFilter: "blur(4px)",
              }}
              onClick={() => setOpen(false)}
            />

            {/* panel */}
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[300px] flex flex-col lg:hidden"
              style={{
                background: "#0e0502",
                borderLeft: "1px solid rgba(232,197,129,0.1)",
              }}
            >
              {/* panel header */}
              <div
                className="flex items-center justify-between px-6 h-[68px]"
                style={{ borderBottom: "1px solid rgba(232,197,129,0.08)" }}
              >
                <span className="font-heading font-black text-white text-lg">
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-lg"
                  style={{ background: "rgba(186,61,3,0.3)", color: "#fff" }}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* links */}
              <nav className="flex flex-col px-4 pt-6 gap-1 flex-1">
                {NAV.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => go(l.href)}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-base transition-all"
                    style={{ color: "rgba(255,255,255,0.75)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(186,61,3,0.15)";
                      e.currentTarget.style.color = "#e8c581";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(255,255,255,0.75)";
                    }}
                  >
                    {l.label}
                    <ChevronRight className="w-4 h-4 opacity-40" />
                  </motion.button>
                ))}
              </nav>

              {/* panel footer CTAs */}
              <div className="p-5 space-y-3">
                <button
                  onClick={() => go("#demo")}
                  className="btn-shimmer w-full py-3.5 rounded-2xl text-white font-bold text-base"
                >
                  Book Free Demo
                </button>
                <a
                  href="tel:+919999999999"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-sm font-semibold"
                  style={{
                    color: "#e8c581",
                    border: "1px solid rgba(232,197,129,0.2)",
                  }}
                >
                  +91 99999 99999
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
