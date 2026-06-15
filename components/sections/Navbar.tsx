"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight, Phone } from "lucide-react";

/* ─── Palette ─────────────────────────── */
const N = {
  bg: "#1a0f08", // espresso
  canvas: "#2e2612", // dark khaki
  mid: "#4a2e0a",
  copper: "#b26a19", // copperwood
  amber: "#c88a3a",
  linen: "#ede3d7", // linen
  white: "#ffffff",
} as const;

const ACCENT_BAR =
  "linear-gradient(90deg,#2e2612,#6b3e0f,#b26a19,#6b3e0f,#2e2612)";

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

  useEffect(() => {
    const fn = () => setSolid(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    document
      .querySelector(href)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50"
        style={{
          background: solid ? "rgba(26,15,8,0.94)" : "transparent",
          backdropFilter: solid ? "blur(20px) saturate(160%)" : "none",
          WebkitBackdropFilter: solid ? "blur(20px) saturate(160%)" : "none",
          borderBottom: solid ? "1px solid rgba(237,227,215,0.08)" : "none",
          boxShadow: solid ? "0 2px 24px rgba(0,0,0,0.3)" : "none",
          transition: "all 0.35s ease",
        }}
      >
        {/* top accent bar */}
        <div
          className="absolute top-0 inset-x-0 h-[2.5px]"
          style={{ background: ACCENT_BAR }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex h-[68px] items-center justify-between">
          {/* ── Logo ─────────────────────────────── */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 shrink-0 group"
          >
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
                  stroke={N.copper}
                  strokeWidth="1.2"
                  strokeDasharray="5 3"
                  opacity="0.6"
                />
              </svg>
              {/* inner circle */}
              <div
                className="absolute inset-[5px] rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg,${N.canvas},${N.mid})`,
                }}
              >
                <svg
                  viewBox="0 0 20 20"
                  fill="none"
                  className="w-[17px] h-[17px]"
                >
                  <rect
                    x="9.5"
                    y="2"
                    width="1"
                    height="13.5"
                    rx="0.5"
                    fill={N.linen}
                  />
                  <rect
                    x="3"
                    y="15.5"
                    width="14"
                    height="1.5"
                    rx="0.75"
                    fill={N.linen}
                  />
                  <rect
                    x="2"
                    y="4.5"
                    width="16"
                    height="1.2"
                    rx="0.6"
                    fill={N.linen}
                  />
                  <line
                    x1="4"
                    y1="5.7"
                    x2="4"
                    y2="9.5"
                    stroke={N.linen}
                    strokeWidth="0.7"
                  />
                  <path
                    d="M1.5 9.5 Q4 12 6.5 9.5"
                    stroke={N.linen}
                    strokeWidth="0.9"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <line
                    x1="16"
                    y1="5.7"
                    x2="16"
                    y2="9.5"
                    stroke={N.linen}
                    strokeWidth="0.7"
                  />
                  <path
                    d="M13.5 9.5 Q16 12 18.5 9.5"
                    stroke={N.linen}
                    strokeWidth="0.9"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <div className="leading-none">
              <span
                className="block font-heading font-black text-[1.15rem] tracking-[-0.02em] transition-colors duration-300"
                style={{ color: N.white }}
              >
                IN2LAW
              </span>
              <span
                className="block text-[8.5px] font-bold tracking-[0.3em] uppercase mt-[-1px] transition-colors duration-300"
                style={{ color: N.linen }}
              >
                Academy
              </span>
            </div>
          </button>

          {/* ── Desktop nav ──────────────────────── */}
          <nav className="hidden lg:flex items-center">
            {NAV.map((l) => (
              <button
                key={l.href}
                onClick={() => go(l.href)}
                className="relative px-4 py-2 text-[13.5px] font-medium rounded-full transition-all duration-200 group"
                style={{ color: "rgba(237,227,215,0.62)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = N.linen)}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "rgba(237,227,215,0.62)")
                }
              >
                {l.label}
                <span
                  className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] rounded-full group-hover:w-[55%] transition-all duration-300"
                  style={{ background: N.copper }}
                />
              </button>
            ))}
          </nav>

          {/* ── CTA group ────────────────────────── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-1.5 text-[13px] font-medium transition-colors"
              style={{ color: "rgba(237,227,215,0.55)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = N.linen)}
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "rgba(237,227,215,0.55)")
              }
            >
              <Phone className="w-3.5 h-3.5" />
              +91 94037 73943
            </a>
            <div
              className="h-5 w-px"
              style={{ background: "rgba(237,227,215,0.12)" }}
            />
            <motion.button
              onClick={() => go("#demo")}
              whileHover={{ scale: 1.05, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary pulse-cta flex items-center gap-1.5 px-5 py-2.5 rounded-full text-[13.5px] shadow-md"
              style={{ boxShadow: "0 4px 18px rgba(178,106,25,0.3)" }}
            >
              Book Free Demo
              <ChevronRight className="w-3.5 h-3.5" />
            </motion.button>
          </div>

          {/* ── Hamburger ────────────────────────── */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden w-9 h-9 flex items-center justify-center rounded-xl transition-all"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(237,227,215,0.14)",
              color: N.white,
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
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* ─── Mobile drawer ────────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="bd"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
              style={{
                background: "rgba(26,15,8,0.7)",
                backdropFilter: "blur(6px)",
              }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              key="panel"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[285px] flex flex-col lg:hidden"
              style={{
                background: "#120a04",
                borderLeft: `1px solid rgba(237,227,215,0.1)`,
              }}
            >
              {/* header */}
              <div
                className="flex items-center justify-between px-6 h-[68px]"
                style={{ borderBottom: "1px solid rgba(237,227,215,0.07)" }}
              >
                <span
                  className="font-heading font-black text-lg"
                  style={{ color: N.white }}
                >
                  IN2LAW
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{
                    background: "rgba(178,106,25,0.15)",
                    color: N.linen,
                  }}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              {/* links */}
              <nav className="flex flex-col px-4 pt-4 gap-1 flex-1">
                {NAV.map((l, i) => (
                  <motion.button
                    key={l.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.055 }}
                    onClick={() => go(l.href)}
                    className="flex items-center justify-between px-4 py-3.5 rounded-xl font-medium text-[15px] transition-all"
                    style={{ color: "rgba(237,227,215,0.7)" }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(178,106,25,0.1)";
                      e.currentTarget.style.color = N.linen;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "rgba(237,227,215,0.7)";
                    }}
                  >
                    {l.label}
                    <ChevronRight className="w-4 h-4 opacity-35" />
                  </motion.button>
                ))}
              </nav>
              {/* footer */}
              <div className="p-5 space-y-3">
                <button
                  onClick={() => go("#demo")}
                  className="btn-primary pulse-cta w-full py-3.5 rounded-2xl text-base font-bold"
                >
                  Book Free Demo
                </button>
                <a
                  href="tel:+919999999999"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl text-sm font-semibold"
                  style={{
                    color: N.linen,
                    border: `1px solid rgba(237,227,215,0.18)`,
                  }}
                >
                  <Phone className="w-4 h-4" />
                  +91 94037 73943
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
