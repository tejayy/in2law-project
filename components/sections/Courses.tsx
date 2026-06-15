"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scale,
  Gavel,
  BookOpen,
  Briefcase,
  Clock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const courses = [
  {
    icon: Scale,
    title: "CLAT Preparation",
    badge: "Most Popular",
    duration: "12 Months",
    featured: true,
    accent: "#E58423",
    description:
      "Comprehensive NLU preparation — all 5 CLAT sections, legal reasoning deep-dive, and 70+ full-length mocks.",
    benefits: [
      "English Language & Comprehension",
      "Current Affairs & GK",
      "Legal Reasoning & Aptitude",
      "Logical & Quantitative Reasoning",
      "70+ Full-length Mock Tests",
    ],
  },
  {
    icon: BookOpen,
    title: "MH LAW CET",
    badge: "3Y & 5Y",
    duration: "8 Months",
    featured: false,
    accent: "#E8C581",
    description:
      "Maharashtra law entrance for both 3-year LLB and 5-year integrated programs at top MH colleges.",
    benefits: [
      "Legal Aptitude & Reasoning",
      "General Knowledge",
      "English & Marathi Language",
      "State Current Affairs",
      "Previous Year Papers",
    ],
  },
  {
    icon: Gavel,
    title: "Judiciary Preparation",
    badge: "Civil Judge / JMFC",
    duration: "18 Months",
    featured: false,
    accent: "#E8C581",
    description:
      "Intensive coaching by practicing advocates for Civil Judge & JMFC exams. Law + procedure + viva.",
    benefits: [
      "Civil & Criminal Law & Procedure",
      "Evidence Act & Constitution",
      "Judgment Writing Practice",
      "Mock Viva & Interview Prep",
      "Bare Acts Revision Sessions",
    ],
  },
  {
    icon: Briefcase,
    title: "Law Officer Exams",
    badge: "Govt & PSU",
    duration: "6 Months",
    featured: false,
    accent: "#E8C581",
    description:
      "Targeted prep for Law Officer & Legal Advisor posts in government, PSUs, and public sector banks.",
    benefits: [
      "Banking & Financial Laws",
      "Labour & Industrial Laws",
      "Commercial & Corporate Laws",
      "GK & Current Affairs",
      "Drafting & Opinion Writing",
    ],
  },
];

export default function Courses() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".course-card", {
        y: 60,
        opacity: 0,
        duration: 0.75,
        stagger: 0.14,
        ease: "power3.out",
        scrollTrigger: { trigger: ".courses-grid", start: "top 76%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const go = () =>
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="courses"
      ref={ref}
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* warm top wave */}
      <div
        className="absolute top-0 inset-x-0 h-20 bean-gradient"
        style={{ clipPath: "ellipse(60% 100% at 50% 0%)" }}
      />
      {/* subtle bg tint */}
      <div className="absolute inset-0 bg-[#3D1202]/[0.02] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="text-center mb-14 mt-6">
          <span className="inline-block text-[#BA3D03] text-xs font-bold tracking-[0.22em] uppercase mb-3">
            Our Programs
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#3D1202] mb-3">
            Choose Your <span className="orange-text">Legal Path</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-md mx-auto">
            Expert-designed programs for every stage of your legal career
            journey.
          </p>
        </div>

        <div className="courses-grid grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {courses.map((c) => (
            <div
              key={c.title}
              className={`course-card relative flex flex-col rounded-3xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 ${
                c.featured
                  ? "bean-gradient ring-2 ring-[#E58423] shadow-2xl shadow-[#E58423]/20"
                  : "bg-[#3D1202] shadow-xl hover:shadow-2xl"
              }`}
            >
              {/* top band */}
              <div className="px-6 pt-6 pb-4">
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center
                    ${c.featured ? "bg-[#E58423]" : "bg-[#BA3D03]/40 border border-[#E8C581]/20"}`}
                  >
                    <c.icon
                      className={`w-6 h-6 ${c.featured ? "text-white" : "text-[#E8C581]"}`}
                    />
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                      c.featured
                        ? "bg-[#E8C581] text-[#3D1202]"
                        : "bg-[#BA3D03]/30 text-[#E8C581] border border-[#E8C581]/20"
                    }`}
                  >
                    {c.badge}
                  </span>
                </div>

                <h3 className="font-heading text-xl font-extrabold text-white mb-2">
                  {c.title}
                </h3>

                <div className="flex items-center gap-1.5 mb-3">
                  <Clock className="w-3.5 h-3.5 text-[#E58423]" />
                  <span className="text-[#E58423] text-sm font-medium">
                    {c.duration}
                  </span>
                </div>

                <p className="text-white/55 text-sm leading-relaxed">
                  {c.description}
                </p>
              </div>

              {/* divider */}
              <div className="mx-6 h-px bg-white/10" />

              {/* benefits */}
              <div className="px-6 py-4 flex-1 space-y-2">
                {c.benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#E58423] mt-0.5 shrink-0" />
                    <span className="text-white/60 text-xs">{b}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="px-6 pb-6">
                <button
                  onClick={go}
                  className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-sm transition-all duration-200 group/btn ${
                    c.featured
                      ? "bg-[#E58423] hover:bg-[#f09838] text-white shadow-lg shadow-[#E58423]/30"
                      : "bg-white/8 border border-white/15 text-white hover:bg-[#E58423] hover:border-[#E58423]"
                  }`}
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
