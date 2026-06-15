"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Scale,
  Users,
  BarChart3,
  MessageSquare,
  Lightbulb,
  Award,
  BookOpen,
  Shield,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Scale,
    title: "Expert Legal Faculty",
    desc: "Learn from practicing advocates with real courtroom experience — not just theory.",
  },
  {
    icon: Users,
    title: "Small Batch Size (≤20)",
    desc: "Personal attention, direct faculty interaction, and zero distraction learning.",
  },
  {
    icon: MessageSquare,
    title: "Personal Mentorship",
    desc: "1-on-1 doubt sessions, custom study plans, and ongoing performance tracking.",
  },
  {
    icon: BarChart3,
    title: "Mock Tests & Analytics",
    desc: "70+ full-length mocks with section-wise analytics and weekly improvement reviews.",
  },
  {
    icon: MessageSquare,
    title: "Interview Guidance",
    desc: "Mock GD-PI and viva voce sessions by legal professionals — not coaching bots.",
  },
  {
    icon: Lightbulb,
    title: "Practical Legal Exposure",
    desc: "Moot court sessions, legal drafting workshops, and court visits.",
  },
  {
    icon: BookOpen,
    title: "7000+ Practice Questions",
    desc: "Extensive question bank — previous years, topic-wise, and sectional tests.",
  },
  {
    icon: Shield,
    title: "Career Guidance",
    desc: "Complete roadmap from law school selection to career planning post-qualification.",
  },
];

export default function WhyChoose() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-card", {
        y: 35,
        opacity: 0,
        duration: 0.55,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: { trigger: ".why-grid", start: "top 76%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
      ref={ref}
      className="py-24 bg-[#fdf6ec] relative overflow-hidden"
    >
      {/* warm blobs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#BA3D03]/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E58423]/5 rounded-full blur-3xl pointer-events-none" />
      {/* top rule */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#BA3D03]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="text-center mb-14">
          <span className="inline-block text-[#BA3D03] text-xs font-bold tracking-[0.22em] uppercase mb-3">
            Our Difference
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#3D1202] mb-3">
            Why Choose <span className="orange-text">IN2LAW</span>?
          </h2>
          <p className="text-[#3D1202]/55 text-lg max-w-md mx-auto">
            Built by lawyers, for future lawyers. Every element designed to
            maximise your success.
          </p>
        </div>

        <div className="why-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="why-card bg-white rounded-2xl p-6 border border-[#BA3D03]/10 hover:shadow-xl hover:border-[#E58423]/30 hover:-translate-y-1 transition-all duration-300 group"
            >
              {/* icon */}
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${
                  i % 2 === 0
                    ? "bg-[#BA3D03]/10 text-[#BA3D03]"
                    : "bg-[#E58423]/10 text-[#E58423]"
                }`}
              >
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-semibold text-[#3D1202] text-sm mb-2 group-hover:text-[#BA3D03] transition-colors leading-snug">
                {f.title}
              </h3>
              <p className="text-[#3D1202]/55 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* bottom CTA strip */}
        <div className="bean-gradient rounded-3xl p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-full bg-[#BA3D03]/20 rounded-3xl blur-2xl pointer-events-none" />
          <div className="relative">
            <h3 className="font-heading text-2xl font-extrabold text-white mb-1">
              Ready to start your legal journey?
            </h3>
            <p className="text-white/55">
              Join the hundreds of successful lawyers who started right here.
            </p>
          </div>
          <button
            onClick={() =>
              document
                .getElementById("demo")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="relative shrink-0 bg-[#E58423] hover:bg-[#f09838] text-white font-bold px-8 py-4 rounded-full transition-all hover:-translate-y-0.5 shadow-xl shadow-[#E58423]/30"
          >
            Book Free Demo →
          </button>
        </div>
      </div>
    </section>
  );
}
