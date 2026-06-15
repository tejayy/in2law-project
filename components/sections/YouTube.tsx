"use client";

import { motion } from "motion/react";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

/* ─── Palette ─────────────────────────────────────────────── */
const C = {
  bg: "#1a0f08",
  deep: "#2e2612",
  mid: "#4a2e0a",
  bright: "#6b3e0f",
  copper: "#b26a19",
  amber: "#c88a3a",
  linen: "#ede3d7",
} as const;

/* ─── Video Data ──────────────────────────────────────────── */
const CHANNEL_URL = "https://www.youtube.com/@In2Law"; // Replace with actual channel URL

interface Video {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
}

const featuredVideo: Video = {
  id: "lEnZ_PMjhdU", // Replace with actual video ID
  title:
    "50 Years of Emergency 1975 | आणीबाणी आणि संविधान | कायदेशीर पुनरावलोकन | Dr. Adv. S E AVHAD | IN2LAW",
  date: "1 January 2026",
  thumbnail: "https://img.youtube.com/vi/lEnZ_PMjhdU/maxresdefault.jpg",
};

const sidebarVideos: Video[] = [
  {
    id: "dRAGaQuravs", // Replace with actual video IDs
    title: "Legal Reasoning Masterclass — Mock breakdown",
    date: "1 Jan",
    thumbnail: "https://img.youtube.com/vi/dRAGaQuravs/mqdefault.jpg",
  },
  {
    id: "vK06ByCSC5E",
    title: "Judiciary Prep — Answer writing that scores",
    date: "1 Jan",
    thumbnail: "https://img.youtube.com/vi/vK06ByCSC5E/mqdefault.jpg",
  },
  {
    id: "Ws-gP4Nguc4",
    title: "MH LAW CET — Last 7 days revision plan",
    date: "1 Jan",
    thumbnail: "https://img.youtube.com/vi/Ws-gP4Nguc4/mqdefault.jpg",
  },
];

/* ─── Component ───────────────────────────────────────────── */
export default function YouTube() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <section
      id="youtube"
      className="relative py-20 lg:py-28 overflow-hidden noise"
      style={{ background: C.bg }}
    >
      {/* Background subtle glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(178,106,25,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* ── Header ──────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12">
          <div>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10.5px] font-semibold tracking-[0.22em] uppercase"
                style={{
                  background: "rgba(178,106,25,0.1)",
                  border: "1px solid rgba(237,227,215,0.22)",
                  color: C.linen,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: "#22c55e" }}
                />
                Live from our Channel
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-black text-[clamp(1.8rem,3.5vw,2.8rem)] leading-[1.1] mb-4"
              style={{ color: C.linen }}
            >
              Lectures, breakdowns,{" "}
              <span className="italic text-copper">straight from court.</span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-[14px] leading-[1.7] max-w-md"
              style={{ color: "rgba(237,227,215,0.5)" }}
            >
              Free, full-length classes uploaded weekly — strategy, current
              affairs, and exam dissections by our faculty.
            </motion.p>
          </div>

          {/* Subscribe button */}
          <motion.a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl font-bold text-[13px] transition-all shrink-0 self-start lg:self-center"
            style={{
              background: "rgba(178,106,25,0.12)",
              border: "1px solid rgba(178,106,25,0.4)",
              color: C.amber,
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Subscribe on YouTube
          </motion.a>
        </div>

        {/* ── Video Grid ──────────────────────────────────── */}
        <div className="grid lg:grid-cols-[1fr_380px] gap-5">
          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden"
            style={{
              background: C.deep,
              border: "1px solid rgba(237,227,215,0.08)",
            }}
          >
            {/* Video embed / thumbnail */}
            <div className="relative aspect-video w-full overflow-hidden">
              {playingId === featuredVideo.id ? (
                <iframe
                  src={`https://www.youtube.com/embed/${featuredVideo.id}?autoplay=1&rel=0`}
                  title={featuredVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              ) : (
                <button
                  onClick={() => setPlayingId(featuredVideo.id)}
                  className="group relative w-full h-full cursor-pointer"
                  aria-label={`Play ${featuredVideo.title}`}
                >
                  {/* Thumbnail */}
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark overlay */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300" />
                  {/* "Latest Upload" badge */}
                  <span
                    className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-[0.15em] uppercase"
                    style={{
                      background: "rgba(178,106,25,0.85)",
                      color: C.linen,
                    }}
                  >
                    Latest Upload
                  </span>
                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{
                        background: "rgba(178,106,25,0.9)",
                        boxShadow: "0 8px 32px rgba(178,106,25,0.4)",
                      }}
                    >
                      <Play
                        className="w-6 h-6 ml-1"
                        style={{ color: C.linen, fill: C.linen }}
                      />
                    </div>
                  </div>
                  {/* Resolution badge */}
                  <span
                    className="absolute bottom-4 left-4 px-2 py-1 rounded text-[12px] font-bold"
                    style={{
                      background: "rgba(0,0,0,0.6)",
                      color: C.linen,
                    }}
                  >
                    4K
                  </span>
                </button>
              )}
            </div>

            {/* Video info */}
            <div className="p-5">
              <h3
                className="font-bold text-[15px] leading-snug mb-1.5"
                style={{ color: C.linen }}
              >
                {featuredVideo.title}
              </h3>
              <p
                className="text-[12px]"
                style={{ color: "rgba(237,227,215,0.4)" }}
              >
                {featuredVideo.date}
              </p>
            </div>
          </motion.div>

          {/* Sidebar playlist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-3"
          >
            {sidebarVideos.map((video, i) => (
              <motion.a
                key={`${video.id}-${i}`}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                whileHover={{ x: 4 }}
                className="group flex items-center gap-4 p-3 rounded-xl transition-colors"
                style={{
                  background: "rgba(46,38,18,0.4)",
                  border: "1px solid rgba(237,227,215,0.06)",
                }}
              >
                {/* Thumbnail */}
                <div className="relative w-28 h-16 rounded-lg overflow-hidden shrink-0">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  {/* Resolution badge */}
                  <span
                    className="absolute bottom-1 left-1 px-1.5 py-0.5 rounded text-[9px] font-bold"
                    style={{
                      background: "rgba(178,106,25,0.85)",
                      color: C.linen,
                    }}
                  >
                    4K
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4
                    className="font-semibold text-[13px] leading-snug mb-1 line-clamp-2 group-hover:text-amber-200 transition-colors"
                    style={{ color: C.linen }}
                  >
                    {video.title}
                  </h4>
                  <p
                    className="text-[11px]"
                    style={{ color: "rgba(237,227,215,0.35)" }}
                  >
                    {video.date}
                  </p>
                </div>
              </motion.a>
            ))}

            {/* Watch all uploads link */}
            <motion.a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              whileHover={{ y: -2 }}
              className="group flex items-center justify-between px-5 py-4 rounded-xl mt-1 transition-colors"
              style={{
                background: "rgba(46,38,18,0.3)",
                border: "1px solid rgba(237,227,215,0.1)",
              }}
            >
              <span
                className="text-[13px] font-medium"
                style={{ color: "rgba(237,227,215,0.6)" }}
              >
                Watch all uploads
              </span>
              <ExternalLink
                className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5"
                style={{ color: "rgba(237,227,215,0.4)" }}
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
