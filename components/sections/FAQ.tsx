"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Is CLAT difficult to crack? What rank is needed for top NLUs?",
    a: "CLAT is competitive but very much crackable with the right preparation. ~60,000–70,000 students compete for ~2,500 seats. For top NLUs like NLSIU or NLU Delhi, aim for the top 100–200. With 12 months of structured prep and strong mock-test discipline, this is a realistic goal.",
  },
  {
    q: "Do you offer online classes? What is the mode of teaching?",
    a: "Yes — both offline (Pune centre) and live online classes. Online students get recorded lectures for revision, live doubt sessions, and access to all mocks and study material. Teaching quality is identical across both modes.",
  },
  {
    q: "What is the batch size? How personalised is the attention?",
    a: "Strict maximum of 20 students per batch. Every student gets direct faculty interaction, in-class question resolution, and individual performance tracking. One-on-one doubt sessions are available on request.",
  },
  {
    q: "How frequently are mock tests conducted?",
    a: "Full-length mocks every weekend, sectional tests 2–3 times per week. You sit 70+ full-length mocks over the program. Each mock is followed by a detailed analytics report and a 1-on-1 performance review.",
  },
  {
    q: "How is IN2LAW's Judiciary prep different from other institutes?",
    a: "Our Judiciary preparation is taught by practicing advocates who appear in court regularly — this brings real-world context. We cover substantive law, procedure, evidence, and Constitution thoroughly, plus mock viva and judgment writing practice that most institutes skip.",
  },
  {
    q: "Are scholarships or EMIs available?",
    a: "Yes — merit-based scholarships for students who score well in our entrance test, and EMI options are available for all courses. Book a free demo for the latest details and to check your scholarship eligibility.",
  },
  {
    q: "Can Class 11 students join? When should I start for CLAT?",
    a: "Absolutely — we strongly recommend starting in Class 11. Two full years allows you to build a strong current affairs foundation, sharpen reading comprehension, and clock extensive practice. Students who start early consistently achieve better ranks.",
  },
];

function FAQItem({
  faq,
  open,
  toggle,
}: {
  faq: (typeof faqs)[0];
  open: boolean;
  toggle: () => void;
}) {
  return (
    <div
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        open
          ? "border-[#BA3D03]/50 shadow-lg shadow-[#BA3D03]/5"
          : "border-[#BA3D03]/12 bg-white"
      }`}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-[#fdf6ec] transition-colors"
      >
        <span
          className={`font-semibold text-sm sm:text-[0.95rem] leading-snug transition-colors ${open ? "text-[#BA3D03]" : "text-[#3D1202]"}`}
        >
          {faq.q}
        </span>
        <div
          className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            open
              ? "bg-[#BA3D03] text-white rotate-0"
              : "bg-[#BA3D03]/10 text-[#BA3D03]"
          }`}
        >
          {open ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-[#3D1202]/65 text-sm leading-relaxed border-t border-[#BA3D03]/10 pt-4">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        y: 20,
        opacity: 0,
        duration: 0.45,
        stagger: 0.07,
        ease: "power2.out",
        scrollTrigger: { trigger: ".faq-list", start: "top 80%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={ref} className="py-24 bg-white relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#BA3D03]/20 to-transparent" />

      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-[#BA3D03] text-xs font-bold tracking-[0.22em] uppercase mb-3">
            FAQ
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#3D1202] mb-3">
            Common <span className="orange-text">Questions</span>
          </h2>
          <p className="text-[#3D1202]/55 text-lg max-w-md mx-auto">
            Everything you need to know before joining IN2LAW Academy.
          </p>
        </div>

        <div className="faq-list space-y-3 mb-12">
          {faqs.map((f, i) => (
            <div key={i} className="faq-item">
              <FAQItem
                faq={f}
                open={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[#3D1202]/50 mb-4 text-sm">
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center gap-2 bg-[#3D1202] text-[#E8C581] font-bold px-6 py-3 rounded-xl hover:bg-[#5a1c03] transition-colors"
            >
              Call Us Directly
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20a%20question%20about%20IN2LAW%20Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
