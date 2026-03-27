"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ConcentricLines } from "@/components/ui/ConcentricLines";

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-creme">
      {/* Concentric circles — centered */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <ConcentricLines
          variant="wide"
          className="h-[160vw] w-[160vw] text-goud opacity-30 md:h-[110vh] md:w-[110vh]"
        />
      </div>

      {/* Video circle — large, centered, behind the title */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-[60vw] w-[60vw] overflow-hidden rounded-full md:h-[50vh] md:w-[50vh]"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          >
            <source
              src="https://assets.mixkit.co/videos/439/439-720.mp4"
              type="video/mp4"
            />
          </video>
        </motion.div>
      </div>

      {/* Content — title centered, CTA at bottom */}
      <div className="relative flex min-h-svh flex-col items-center justify-center px-6 text-center md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[clamp(3.5rem,10vw,8.5rem)] leading-none tracking-tight text-donker"
        >
          {"Klankentapper".split("").map((char, i) => (
            <span
              key={`${char}-${i}`}
              style={{
                animation: `hero-char-color 16s ease-in-out ${i * 0.13 + 1.8}s infinite`,
              }}
            >
              {char}
            </span>
          ))}
        </motion.h1>

        {/* CTA pinned to bottom of hero, clear of the video */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 md:bottom-16"
        >
          <Link
            href="/aanbod"
            className="inline-block border border-donker/30 px-8 py-4 font-body text-sm uppercase tracking-[0.15em] text-donker no-underline transition-all duration-200 hover:border-donker hover:bg-donker hover:text-creme"
          >
            Ontdek het aanbod
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
