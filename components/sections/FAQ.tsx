"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const P = {
  bg: "#1a0f08",
  canvas: "#2e2612",
  mid: "#4a2e0a",
  warm: "#6b3e0f",
  copper: "#b26a19",
  amber: "#c88a3a",
  linen: "#ede3d7",
  panel: "rgba(252,248,242,0.97)",
  white: "#ffffff",
} as const;
const SHADOW =
  "0 32px 80px rgba(46,38,18,0.45), 0 0 0 1px rgba(237,227,215,0.25)";

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
      className="relative rounded-2xl overflow-hidden transition-all duration-300"
      style={{
        background: P.panel,
        boxShadow: open
          ? `0 32px 80px rgba(46,38,18,0.35),0 0 0 1px ${P.copper}40`
          : SHADOW,
        borderLeft: open ? `3px solid ${P.copper}` : "3px solid transparent",
      }}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        style={{ background: "transparent" }}
      >
        <span
          className="font-semibold text-sm sm:text-[0.95rem] leading-snug transition-colors"
          style={{ color: open ? P.copper : P.canvas }}
        >
          {faq.q}
        </span>
        <div
          className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all"
          style={
            open
              ? { background: P.copper, color: P.canvas }
              : {
                  background: "rgba(178,106,25,0.08)",
                  color: P.copper,
                  border: "1px solid rgba(178,106,25,0.2)",
                }
          }
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
            <div
              className="px-6 pb-5 text-sm leading-relaxed pt-4"
              style={{
                borderTop: "1px solid rgba(46,38,18,0.07)",
                color: "rgba(46,38,18,0.65)",
              }}
            >
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

  return (
    <section id="faq" className="py-24 relative" style={{ background: P.bg }}>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 30%,rgba(107,62,15,0.2) 0%,transparent 60%)`,
        }}
      />
      <hr className="hr-warm absolute top-0 inset-x-0 border-none h-px" />

      <div className="max-w-3xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-xs font-bold tracking-[0.22em] uppercase mb-3"
            style={{ color: P.copper }}
          >
            FAQ
          </span>
          <h2
            className="font-heading text-4xl sm:text-5xl font-extrabold mb-3"
            style={{ color: P.white }}
          >
            Common{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#ede3d7,#f5ece2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Questions
            </span>
          </h2>
          <p
            className="text-lg max-w-md mx-auto"
            style={{ color: "rgba(237,227,215,0.55)" }}
          >
            Everything you need to know before joining IN2LAW Academy.
          </p>
        </motion.div>

        <div className="space-y-3 mb-12">
          {faqs.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.45,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <FAQItem
                faq={f}
                open={openIdx === i}
                toggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <p
            className="mb-4 text-sm"
            style={{ color: "rgba(237,227,215,0.5)" }}
          >
            Still have questions?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center justify-center gap-2 font-bold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
              style={{
                background: `linear-gradient(135deg,${P.canvas},${P.mid})`,
                color: P.linen,
                border: `1px solid rgba(237,227,215,0.15)`,
              }}
            >
              Call Us Directly
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20have%20a%20question%20about%20IN2LAW%20Academy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-6 py-3 rounded-xl hover:bg-green-600 transition-colors hover:-translate-y-0.5"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
