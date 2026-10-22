"use client";

import { useEffect, useRef, useState } from "react";
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

/**
 * Counts from 0 to `end` once the element scrolls into view.
 * Skips the animation if the user prefers reduced motion.
 */
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
          const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
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
    <div
      ref={ref}
      className={`flex items-center justify-center px-4 py-6 ${
        index > 0 ? "lg:border-l lg:border-[#8a6f45]/50" : ""
      } ${index % 2 === 1 ? "max-lg:border-l max-lg:border-[#8a6f45]/50" : ""}`}
    >
      <span
        aria-label={`${value}`}
        className="bg-gradient-to-b from-[#c2a574] via-[#8f7248] to-[#5c4729] bg-clip-text font-[family-name:var(--font-serif)] text-[96px] font-medium leading-none tabular-nums text-transparent sm:text-[120px] xl:text-[160px] mb-10"
      >
        {count}
      </span>
      <span className="-ml-6 max-w-[9rem] text-lg font-medium leading-snug text-white sm:-ml-8 sm:text-xl xl:-ml-10 xl:text-2xl">
        {label}
      </span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      className={`${serif.variable} ${sans.variable} bg-[#0a1118] px-4 py-8 font-[family-name:var(--font-sans)] sm:px-8`}
    >
      <div className="mx-auto grid max-w-350 grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <StatItem key={stat.label} {...stat} index={i} />
        ))}
      </div>
    </section>
  );
}
