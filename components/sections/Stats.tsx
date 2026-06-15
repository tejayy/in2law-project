"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Trophy, BookOpen, Clock, CheckCircle, Users2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    icon: CheckCircle,
    value: 100,
    suffix: "%",
    label: "Student Support",
    color: "#E58423",
  },
  {
    icon: Trophy,
    value: 5,
    suffix: "+ Yrs",
    label: "Expert Experience",
    color: "#E8C581",
  },
  {
    icon: BookOpen,
    value: 7000,
    suffix: "+",
    label: "Practice Questions",
    color: "#E58423",
  },
  {
    icon: Users2,
    value: 70,
    suffix: "+",
    label: "Mock Tests",
    color: "#E8C581",
  },
  {
    icon: Clock,
    value: 720,
    suffix: "+",
    label: "Teaching Hours",
    color: "#E58423",
  },
];

const toppers = [
  {
    name: "Aditi Sharma",
    rank: "AIR 42",
    exam: "CLAT 2024",
    college: "NLSIU Bangalore",
  },
  {
    name: "Rohan Kulkarni",
    rank: "AIR 89",
    exam: "CLAT 2024",
    college: "NLU Delhi",
  },
  {
    name: "Priya Joshi",
    rank: "Rank 1",
    exam: "MH LAW CET 2024",
    college: "ILS Law College",
  },
  {
    name: "Ankit Desai",
    rank: "AIR 15",
    exam: "Judiciary 2023",
    college: "Civil Judge",
  },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const dur = 1800,
            t0 = Date.now();
          const tick = () => {
            const p = Math.min((Date.now() - t0) / dur, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 },
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-card", {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".stats-grid", start: "top 80%" },
      });
      gsap.from(".topper-card", {
        scale: 0.88,
        opacity: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "back.out(1.3)",
        scrollTrigger: { trigger: ".toppers-grid", start: "top 80%" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="results"
      ref={sectionRef}
      className="py-24 bean-gradient relative overflow-hidden"
    >
      {/* dot matrix */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.045]"
        style={{
          backgroundImage:
            "radial-gradient(circle,#E8C581 1px,transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />
      {/* top divider */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8C581]/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        {/* heading */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#E58423] text-xs font-bold tracking-[0.22em] uppercase mb-3">
            Social Proof
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-white mb-3">
            Trusted by Future{" "}
            <span className="cream-text">Legal Professionals</span>
          </h2>
          <p className="text-white/55 text-lg max-w-md mx-auto">
            Numbers that reflect our commitment to your success.
          </p>
        </div>

        {/* stats */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {stats.map((s) => (
            <div
              key={s.label}
              className="stat-card glass-warm rounded-2xl p-6 text-center group hover:scale-105 transition-transform duration-300 cursor-default"
            >
              <s.icon
                className="w-7 h-7 mx-auto mb-3"
                style={{ color: s.color }}
              />
              <div
                className="font-heading text-3xl font-extrabold mb-1"
                style={{ color: s.color }}
              >
                <Counter end={s.value} suffix={s.suffix} />
              </div>
              <p className="text-white/55 text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </div>

        {/* toppers */}
        <p className="text-center font-heading text-2xl font-bold text-white mb-7">
          Our <span className="cream-text">Star Performers</span>
        </p>
        <div className="toppers-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {toppers.map((t) => (
            <div
              key={t.name}
              className="topper-card relative glass-warm rounded-2xl p-5 overflow-hidden group hover:border-[#E58423]/50 transition-colors duration-300"
            >
              {/* rank badge */}
              <span className="absolute top-3 right-3 bg-[#E58423] text-white font-bold text-[11px] px-2.5 py-1 rounded-full">
                {t.rank}
              </span>
              {/* avatar */}
              <div className="w-13 h-13 w-12 h-12 rounded-full bg-[#BA3D03]/40 border-2 border-[#E8C581]/40 flex items-center justify-center mb-3">
                <span className="text-[#E8C581] font-extrabold text-lg">
                  {t.name.charAt(0)}
                </span>
              </div>
              <h4 className="text-white font-bold mb-0.5">{t.name}</h4>
              <p className="text-[#E58423] text-sm font-medium mb-0.5">
                {t.exam}
              </p>
              <p className="text-white/45 text-xs">{t.college}</p>
              <div className="absolute inset-0 bg-[#E58423]/4 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
