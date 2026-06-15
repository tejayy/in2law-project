"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const P = {
  bg: "#0f0905",
  canvas: "#2e2612",
  mid: "#4a2e0a",
  copper: "#b26a19",
  amber: "#c88a3a",
  linen: "#ede3d7",
  white: "#ffffff",
} as const;
const ACCENT_BAR =
  "linear-gradient(90deg,#2e2612,#6b3e0f,#b26a19,#6b3e0f,#2e2612)";

const quickLinks = [
  { label: "CLAT Preparation", href: "#courses" },
  { label: "MH LAW CET", href: "#courses" },
  { label: "Judiciary Prep", href: "#courses" },
  { label: "Law Officer Exam", href: "#courses" },
  { label: "Free Mock Test", href: "#mock" },
  { label: "Book Demo", href: "#demo" },
];
const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/in2law_academy/",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@In2Law",
    path: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/in2law-academy",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

function MiniScales() {
  return (
    <svg viewBox="0 0 24 26" fill="none" className="w-5 h-5">
      <rect
        x="5.5"
        y="23"
        width="13"
        height="2"
        rx="1"
        fill={P.linen}
        opacity="0.8"
      />
      <rect
        x="11.5"
        y="3"
        width="1"
        height="20"
        rx="0.5"
        fill={P.linen}
        opacity="0.6"
      />
      <circle cx="12" cy="2.5" r="2" fill={P.copper} opacity="0.9" />
      <rect
        x="2"
        y="5"
        width="20"
        height="1"
        rx="0.5"
        fill={P.linen}
        opacity="0.7"
      />
      <path
        d="M2 6 Q5 10 8 6"
        stroke={P.copper}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M16 6 Q19 10 22 6"
        stroke={P.copper}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      className="text-white relative overflow-hidden"
      style={{ background: P.bg }}
    >
      <div className="h-[3px]" style={{ background: ACCENT_BAR }} />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle,rgba(237,227,215,0.03) 1px,transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="relative w-12 h-12 shrink-0 flex items-center justify-center">
                <svg
                  className="spin-slow absolute inset-0 w-full h-full"
                  viewBox="0 0 48 48"
                  fill="none"
                >
                  <circle
                    cx="24"
                    cy="24"
                    r="22"
                    stroke="url(#copperRing)"
                    strokeWidth="1.5"
                    strokeDasharray="8 4"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="copperRing"
                      x1="0"
                      y1="0"
                      x2="48"
                      y2="48"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor={P.copper} stopOpacity="0.8" />
                      <stop
                        offset="0.5"
                        stopColor={P.linen}
                        stopOpacity="0.3"
                      />
                      <stop offset="1" stopColor={P.copper} stopOpacity="0.8" />
                    </linearGradient>
                  </defs>
                </svg>
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg,${P.canvas},${P.mid})`,
                  }}
                >
                  <MiniScales />
                </div>
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span
                    className="font-heading font-extrabold text-xl"
                    style={{ color: P.white }}
                  >
                    IN2LAW
                  </span>
                  <span
                    className="text-xs font-semibold"
                    style={{ color: P.linen }}
                  >
                    Academy
                  </span>
                </div>
              </div>
            </div>
            <p
              className="text-[10px] font-bold tracking-[0.22em] uppercase mb-3"
              style={{ color: P.linen }}
            >
              Of the Lawyers · By the Lawyers · For the Lawyers
            </p>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.38)" }}
            >
              Pune&apos;s premier legal entrance coaching institute. Empowering
              future lawyers since 2019.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    color: "rgba(237,227,215,0.35)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      `rgba(178,106,25,0.15)`;
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      `rgba(178,106,25,0.4)`;
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      P.copper;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.06)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(237,227,215,0.35)";
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4
              className="font-bold mb-5 text-xs tracking-widest uppercase"
              style={{ color: P.white }}
            >
              Our Courses
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-sm text-left group flex items-center gap-1.5 transition-colors"
                    style={{ color: "rgba(255,255,255,0.38)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        P.linen;
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.color =
                        "rgba(255,255,255,0.38)";
                    }}
                  >
                    <span
                      className="w-1 h-1 rounded-full shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: P.copper }}
                    />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold mb-5 text-xs tracking-widest uppercase"
              style={{ color: P.white }}
            >
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-start gap-3 text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      P.linen;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.38)";
                  }}
                >
                  <Phone
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: P.copper }}
                  />
                  <span>+91 94037 73943</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@in2law.in"
                  className="flex items-start gap-3 text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      P.linen;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.38)";
                  }}
                >
                  <Mail
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: P.copper }}
                  />
                  <span>info@in2law.in</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/2UVYiMLiVVe3CaDN9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      P.linen;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(255,255,255,0.38)";
                  }}
                >
                  <MapPin
                    className="w-4 h-4 mt-0.5 shrink-0"
                    style={{ color: P.copper }}
                  />
                  <span className="leading-relaxed">
                    11/4 Ground Floor, Butte Bhavan, Besides Ranka Jewellers,
                    <br />
                    Nal Stop, Karve Road, Pune, Maharashtra – 411004
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4
              className="font-bold mb-5 text-xs tracking-widest uppercase"
              style={{ color: P.white }}
            >
              Study Hours
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { day: "Mon – Fri", hours: "8 AM – 8 PM" },
                { day: "Saturday", hours: "8 AM – 6 PM" },
                { day: "Sunday", hours: "Mock Test Day" },
              ].map((item) => (
                <li
                  key={item.day}
                  className="flex justify-between"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                >
                  <span>{item.day}</span>
                  <span style={{ color: "rgba(237,227,215,0.6)" }}>
                    {item.hours}
                  </span>
                </li>
              ))}
            </ul>
            <div
              className="mt-6 p-4 rounded-xl"
              style={{
                background: "rgba(178,106,25,0.07)",
                border: "1px solid rgba(178,106,25,0.2)",
              }}
            >
              <p className="font-bold text-sm mb-1" style={{ color: P.copper }}>
                Admissions Open
              </p>
              <p
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.38)" }}
              >
                New batches starting soon. Limited seats.
              </p>
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
            © 2024 IN2LAW Academy. All rights reserved.
          </p>
          <div
            className="flex gap-5 text-xs"
            style={{ color: "rgba(255,255,255,0.2)" }}
          >
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(
              (label) => (
                <Link
                  key={label}
                  href="#"
                  className="transition-colors hover:text-white/40"
                >
                  {label}
                </Link>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
