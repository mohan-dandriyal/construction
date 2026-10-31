"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import siteData from "@/app/data/site.json";

export default function LoadingScreen() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={siteData.loading.ariaLabel}
      className="fixed inset-0 z-[100] flex h-dvh w-full flex-col items-center justify-center gap-8 bg-[#0b141d]"
    >
      {/* Soft gold glow behind the logo */}
      <div
        aria-hidden
        className="pointer-events-none absolute h-72 w-72 rounded-full bg-[#c9954f]/10 blur-3xl"
      />

      {/* Logo: fade in, then gentle pulse */}
      <motion.div
        className="relative h-16 w-56 sm:h-20 sm:w-72"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: [0.6, 1, 0.6], y: 0 }}
        transition={{
          y: { duration: 0.6, ease: "easeOut" },
          opacity: { duration: 1.8, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <Image
          src={siteData.logo.src}
          alt={siteData.logo.alt}
          fill
          priority
          sizes="288px"
          className="object-contain"
        />
      </motion.div>

      {/* Gold progress line */}
      <div className="relative h-px w-40 overflow-hidden bg-white/10 sm:w-56">
        <motion.span
          className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-[#d9a55b] to-transparent"
          animate={{ x: ["-100%", "300%"] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Label */}
      <p className="text-xs font-medium uppercase tracking-[0.4em] text-[#c9954f]">
        {siteData.loading.label}
      </p>
    </div>
  );
}
