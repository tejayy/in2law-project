"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, MessageCircle } from "lucide-react";

const options = [
  {
    label: "Book Free Demo",
    msg: "Hi! I'd like to book a free demo class at IN2LAW Academy.",
  },
  {
    label: "CLAT Enquiry",
    msg: "Hi! I want to know about your CLAT preparation program.",
  },
  {
    label: "MH LAW CET Enquiry",
    msg: "Hi! I want to know about your MH LAW CET program.",
  },
  {
    label: "Judiciary Prep",
    msg: "Hi! I'm interested in Judiciary exam preparation at IN2LAW.",
  },
  {
    label: "General Enquiry",
    msg: "Hi! I'd like to know more about IN2LAW Academy.",
  },
];

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="rounded-2xl shadow-2xl overflow-hidden w-60"
            style={{
              background: "#fdf8f2",
              border: "1px solid rgba(178,106,25,0.18)",
            }}
          >
            <div className="bg-[#25D366] px-4 py-3">
              <p className="text-white font-bold text-sm">Chat on WhatsApp</p>
              <p className="text-white/75 text-xs mt-0.5">
                Usually replies within minutes
              </p>
            </div>
            <div className="p-2.5 space-y-0.5">
              {options.map((o) => (
                <a
                  key={o.label}
                  href={`https://wa.me/919999999999?text=${encodeURIComponent(o.msg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2.5 rounded-xl transition-colors text-sm font-medium"
                  style={{ color: "#2e2612" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(178,106,25,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                  }}
                >
                  <div
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ background: "#b26a19" }}
                  />
                  {o.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen(!open)}
        aria-label="WhatsApp chat"
        className="wa-float w-14 h-14 bg-[#25D366] hover:bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-green-600/35 transition-colors"
      >
        <AnimatePresence mode="wait">
          {open ? (
            <motion.div
              key="x"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="wa"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            >
              <MessageCircle className="w-7 h-7 text-white fill-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
