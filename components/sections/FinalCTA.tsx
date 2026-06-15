"use client";

import { motion } from "motion/react";
import { ArrowRight, Phone, MessageCircle, Scale } from "lucide-react";

const P = {
  bg: "#1a0f08",
  canvas: "#2e2612",
  mid: "#4a2e0a",
  warm: "#6b3e0f",
  copper: "#b26a19",
  amber: "#c88a3a",
  linen: "#ede3d7",
  white: "#ffffff",
} as const;

export default function FinalCTA() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg,${P.bg} 0%,${P.canvas} 50%,${P.bg} 100%)`,
      }}
    >
      <hr className="hr-warm absolute top-0 inset-x-0 border-none h-px" />
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 900,
          height: 450,
          borderRadius: "50%",
          background: `radial-gradient(ellipse,rgba(107,62,15,0.4) 0%,transparent 65%)`,
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute glow-pulse pointer-events-none"
        style={{
          top: "10%",
          right: "8%",
          width: 320,
          height: 320,
          borderRadius: "50%",
          background: `radial-gradient(circle,rgba(178,106,25,0.07) 0%,transparent 65%)`,
          filter: "blur(30px)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle,rgba(237,227,215,0.06) 1px,transparent 1px)`,
          backgroundSize: "36px 36px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%,black 30%,transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 50%,black 30%,transparent 100%)",
        }}
      />
      <Scale
        className="absolute"
        style={{
          top: 40,
          right: 64,
          width: 112,
          height: 112,
          color: "rgba(237,227,215,0.04)",
        }}
      />
      <Scale
        className="absolute"
        style={{
          bottom: 40,
          left: 64,
          width: 64,
          height: 64,
          color: "rgba(237,227,215,0.04)",
          transform: "rotate(12deg)",
        }}
      />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7"
            style={{
              background: "rgba(237,227,215,0.07)",
              border: "1px solid rgba(237,227,215,0.16)",
            }}
          >
            <Scale className="w-4 h-4" style={{ color: P.linen }} />
            <span
              className="text-[11px] font-bold tracking-[0.18em] uppercase"
              style={{ color: P.linen }}
            >
              Of the Lawyers · By the Lawyers · For the Lawyers
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-white leading-tight mb-6 text-5xl sm:text-6xl lg:text-7xl">
            Your Law Career
            <br />
            <span
              style={{
                background: "linear-gradient(135deg,#ede3d7,#f5ece2)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Starts Today
            </span>
          </h2>

          <p
            className="text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            style={{ color: "rgba(237,227,215,0.6)" }}
          >
            Don&apos;t let another batch begin without you. Join IN2LAW Academy
            and take the first step toward your legal career with India&apos;s
            most trusted legal coaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => go("demo")}
              className="btn-primary pulse-cta group w-full sm:w-auto font-extrabold text-lg px-10 py-5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: "0 12px 40px rgba(178,106,25,0.3)" }}
            >
              Book Free Demo Class
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+919999999999"
              className="w-full sm:w-auto flex items-center justify-center gap-2 font-extrabold text-lg px-10 py-5 rounded-full transition-all hover:-translate-y-1 duration-300"
              style={{
                border: "2px solid rgba(237,227,215,0.22)",
                color: P.white,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  P.copper;
                (e.currentTarget as HTMLAnchorElement).style.color = P.amber;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(237,227,215,0.22)";
                (e.currentTarget as HTMLAnchorElement).style.color = P.white;
              }}
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%27m%20interested%20in%20IN2LAW%20Academy."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366] hover:bg-green-500 text-white font-extrabold text-lg px-10 py-5 rounded-full hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-green-900/30"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          <div
            className="flex flex-wrap gap-6 justify-center text-sm"
            style={{ color: "rgba(237,227,215,0.4)" }}
          >
            {[
              "✓ No Registration Fee for Demo",
              "✓ Limited seats — act fast",
              "✓ Online & offline available",
            ].map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
