"use client";

import { Playfair_Display, Inter } from "next/font/google";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { House, Sofa, Sun, TreePalm, type LucideIcon } from "lucide-react";
import projectsData from "@/app/data/projects.json";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], display: "swap" });

const iconMap: Record<string, LucideIcon> = {
  House,
  Sofa,
  Sun,
  TreePalm,
};

export type KeyFeaturesData = {
  specsEyebrow: string;
  highlightsTitle: string;
  highlightsAccent: string;
  highlights: {
    icon: string | LucideIcon;
    title: string;
    text: string;
  }[];
};

const defaultData: KeyFeaturesData = projectsData.projects[0].keyFeatures;

const stagger = (gap = 0.1, delay = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function KeyFeatures({
  data = defaultData,
}: {
  data?: KeyFeaturesData;
}) {
  const { specsEyebrow, highlightsTitle, highlightsAccent, highlights } = data;

  const reduce = useReducedMotion();
  const initial = reduce ? "show" : "hidden";
  const viewport = { once: true, amount: 0.2 };

  return (
    <div className="border-t border-white/10">
      <section
        className={`${inter.className} overflow-hidden bg-[#050e17] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-10 lg:py-18`}
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={rise}
            initial={initial}
            whileInView="show"
            viewport={viewport}
            className="flex items-center gap-4"
          >
            <motion.span
              aria-hidden="true"
              variants={{
                hidden: { scaleX: 0 },
                show: { scaleX: 1, transition: { duration: 0.8, delay: 0.2 } },
              }}
              style={{ originX: 0 }}
              className="h-px w-14 bg-[#e8a93b] sm:w-16"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8a93b]">
              {specsEyebrow}
            </span>
          </motion.div>

          {/* ================= Highlights ================= */}
          <motion.h2
            variants={rise}
            initial={initial}
            whileInView="show"
            viewport={viewport}
            className={`${playfair.className} mt-4 text-3xl font-semibold leading-tight md:text-4xl`}
          >
            {highlightsTitle}{" "}
            <span className="text-[#f0b445]">{highlightsAccent}</span>
          </motion.h2>

          <motion.ul
            variants={stagger(0.12)}
            initial={initial}
            whileInView="show"
            viewport={viewport}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          >
            {highlights.map(({ icon, title, text }) => {
              const Icon =
                typeof icon === "string" ? iconMap[icon] ?? House : icon;

              return (
                <motion.li
                  key={title}
                  variants={rise}
                  whileHover={reduce ? undefined : { y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="rounded-lg border border-white/10 bg-white/[0.03] p-6 transition-colors duration-300 hover:border-[#e8a93b]/50"
                >
                  <motion.span
                    whileHover={reduce ? undefined : { rotate: 360 }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                    className="grid h-[72px] w-[72px] place-items-center rounded-full border border-[#e8a93b] text-[#e8a93b]"
                  >
                    <Icon
                      className="h-8 w-8"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </motion.span>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-300">
                    {text}
                  </p>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>
      </section>
    </div>
  );
}
