"use client";

import { motion } from "motion/react";
import { ArrowRight, Phone, MessageCircle, Scale } from "lucide-react";

export default function FinalCTA() {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="py-24 bean-gradient relative overflow-hidden noise">
      {/* decorative blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#E8C581]/40 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#BA3D03]/25 rounded-full blur-[100px]" />
        <Scale className="absolute top-10 right-16 w-28 h-28 text-[#E8C581]/8" />
        <Scale className="absolute bottom-10 left-16 w-16 h-16 text-[#E8C581]/8 rotate-12" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* pill */}
          <div className="inline-flex items-center gap-2 bg-[#E8C581]/10 border border-[#E8C581]/25 rounded-full px-4 py-1.5 mb-7">
            <Scale className="w-4 h-4 text-[#E8C581]" />
            <span className="text-[#E8C581] text-[11px] font-bold tracking-[0.18em] uppercase">
              Of the Lawyers · By the Lawyers · For the Lawyers
            </span>
          </div>

          <h2
            className="font-heading font-extrabold text-white leading-tight mb-6
            text-5xl sm:text-6xl lg:text-7xl"
          >
            Your Law Career
            <br />
            <span className="cream-text">Starts Today</span>
          </h2>

          <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Don&apos;t let another batch begin without you. Join IN2LAW Academy
            and take the first step toward your legal career with India&apos;s
            most trusted legal coaches.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => go("demo")}
              className="group w-full sm:w-auto bg-[#E58423] hover:bg-[#f09838] text-white font-extrabold text-lg px-10 py-5 rounded-full shadow-2xl shadow-[#E58423]/40 hover:shadow-[#E58423]/60 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
            >
              Book Free Demo Class
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <a
              href="tel:+919999999999"
              className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-[#E8C581]/35 hover:border-[#E58423] text-white hover:text-[#E8C581] font-extrabold text-lg px-10 py-5 rounded-full transition-all hover:-translate-y-1 duration-300"
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

          <div className="flex flex-wrap gap-6 justify-center text-white/40 text-sm">
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
