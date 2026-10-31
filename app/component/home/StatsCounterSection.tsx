"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Barlow } from "next/font/google";
import homeData from "@/app/data/home.json";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-serif",
});
const sans = Barlow({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

const stats = homeData.stats;

function useCounter(end: number, duration = 2000) {
  const ref = useRef<HTMLDivElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let frame: number | undefined;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame = requestAnimationFrame(() => setCount(end));
      return () => {
        if (frame !== undefined) cancelAnimationFrame(frame);
      };
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.round(eased * end));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [end, duration]);

  return [ref, count] as const;
}

function StatItem({
  value,
  label,
  index,
}: {
  value: number;
  label: string;
  index: number;
}) {
  const [ref, count] = useCounter(value);

  return (
    <div>
      <motion.div
        ref={ref}
        whileHover={{ y: -5 }}
        className={`flex min-w-0 flex-col items-center justify-center px-3 py-7 text-center sm:flex-row sm:gap-4 sm:text-left lg:justify-center lg:px-5 lg:py-8 ${
          index > 0 ? "lg:border-l lg:border-[#8a6f45]/50" : ""
        } ${index % 2 === 1 ? "max-lg:border-l max-lg:border-[#8a6f45]/50" : ""}`}
      >
        <span
          aria-label={`${count} ${label}`}
          className="shrink-0 bg-gradient-to-b from-[#e5c999] via-[#b99158] to-[#72572f] bg-clip-text font-[family-name:var(--font-serif)] text-[clamp(3.25rem,8vw,6.25rem)] font-medium leading-none tabular-nums text-transparent"
        >
          {count}
        </span>

        <span className="mt-2 max-w-[8rem] text-sm font-medium leading-snug text-white/90 sm:mt-0 sm:text-base lg:mt-8 xl:text-lg">
          {label}
        </span>
      </motion.div>
    </div>
  );
}

export default function StatsCounterSection() {
  return (
    <div>
      <section
        id={homeData.statsSection.id}
        className={`${serif.variable} ${sans.variable} border-y border-white/[0.04] bg-[#0a1118] px-4 py-2 font-[family-name:var(--font-sans)] sm:px-8 lg:py-3`}
      >
        <div className="mx-auto grid max-w-350 grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <StatItem key={stat.label} {...stat} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
