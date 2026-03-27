"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ConcentricLines } from "@/components/ui/ConcentricLines";
import { WaveLine } from "@/components/ui/WaveLine";

export function Hero() {
  return (
    <section className="relative min-h-svh overflow-hidden bg-creme">
      {/* Concentric circles — centered */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <ConcentricLines
          variant="wide"
          className="h-[160vw] w-[160vw] text-koraal opacity-20 md:h-[110vh] md:w-[110vh]"
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
              key={`hero-char-${i}-${char}`}
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
            className="group relative inline-flex items-center gap-4 overflow-hidden bg-roos-licht px-10 py-5 font-body text-xs uppercase tracking-[0.2em] text-donker no-underline transition-all duration-300 hover:bg-donker hover:text-wit"
          >
            <span className="relative z-10">Ontdek het aanbod</span>
            <WaveLine 
              className="relative z-10 w-8 transition-all duration-300 group-hover:w-12" 
              color="currentColor"
              width="auto"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
