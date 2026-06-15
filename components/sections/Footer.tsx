"use client";

import { Scale, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

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
    href: "#",
    path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    label: "YouTube",
    href: "#",
    path: "M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  },
  {
    label: "Facebook",
    href: "#",
    path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  },
];

export default function Footer() {
  const go = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer
      style={{ background: "#1e0901" }}
      className="text-white relative overflow-hidden"
    >
      <div className="h-px bg-gradient-to-r from-transparent via-[#E8C581]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl orange-gradient flex items-center justify-center">
                <Scale className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-heading font-extrabold text-white text-xl">
                  IN2LAW
                </span>
                <span className="text-[#E8C581] text-xs ml-1 font-semibold">
                  Academy
                </span>
              </div>
            </div>
            <p className="text-[#E8C581] text-[10px] font-bold tracking-[0.22em] uppercase mb-3">
              Of the Lawyers · By the Lawyers · For the Lawyers
            </p>
            <p className="text-white/45 text-sm leading-relaxed mb-5">
              Pune&apos;s premier legal entrance coaching institute. Empowering
              future lawyers since 2019.
            </p>
            <div className="flex gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center hover:bg-[#BA3D03]/30 hover:border-[#BA3D03]/50 transition-colors"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-3.5 h-3.5 text-white/50"
                  >
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <h4 className="font-bold text-white mb-5 text-xs tracking-widest uppercase">
              Our Courses
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <button
                    onClick={() => go(l.href)}
                    className="text-white/45 hover:text-[#E8C581] text-sm transition-colors text-left"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-5 text-xs tracking-widest uppercase">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919999999999"
                  className="flex items-start gap-3 text-white/45 hover:text-[#E8C581] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#E58423] mt-0.5 shrink-0" />
                  <span className="text-sm">+91 99999 99999</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@in2law.in"
                  className="flex items-start gap-3 text-white/45 hover:text-[#E8C581] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#E58423] mt-0.5 shrink-0" />
                  <span className="text-sm">info@in2law.in</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/45">
                  <MapPin className="w-4 h-4 text-[#E58423] mt-0.5 shrink-0" />
                  <span className="text-sm leading-relaxed">
                    IN2LAW Academy, Law College Road,
                    <br />
                    Pune, Maharashtra – 411004
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-white mb-5 text-xs tracking-widest uppercase">
              Study Hours
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-white/45">
                <span>Mon – Fri</span>
                <span className="text-white/65">8 AM – 8 PM</span>
              </li>
              <li className="flex justify-between text-white/45">
                <span>Saturday</span>
                <span className="text-white/65">8 AM – 6 PM</span>
              </li>
              <li className="flex justify-between text-white/45">
                <span>Sunday</span>
                <span className="text-white/65">Mock Test Day</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-[#BA3D03]/20 border border-[#BA3D03]/30 rounded-xl">
              <p className="text-[#E8C581] font-bold text-sm mb-1">
                Admissions Open
              </p>
              <p className="text-white/50 text-xs">
                New batches starting soon. Limited seats.
              </p>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="border-t border-white/8 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2024 IN2LAW Academy. All rights reserved.
          </p>
          <div className="flex gap-5 text-white/25 text-xs">
            <Link href="#" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white/50 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white/50 transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
