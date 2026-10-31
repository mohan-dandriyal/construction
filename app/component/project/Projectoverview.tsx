"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import projectsData from "@/app/data/projects.json";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], display: "swap" });

export type ProjectOverviewData = {
  eyebrow: string;
  titleStart: string;
  titleAccent: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
  };
};

const defaultOverview: ProjectOverviewData = projectsData.projects[0].overview;

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ProjectOverview({
  overview = defaultOverview,
}: {
  overview?: ProjectOverviewData;
}) {
  const { eyebrow, titleStart, titleAccent, paragraphs, image } = overview;
  const reduce = useReducedMotion();

  return (
    <section
      className={`${inter.className} overflow-hidden border-t border-white/10 bg-[#050e17] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-10 lg:py-20`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.3fr)] lg:gap-12 xl:gap-16">
        {/* ---------- Image ---------- */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="group relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl shadow-black/50 lg:aspect-[3/2]"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        </motion.div>

        {/* ---------- Text ---------- */}
        <motion.div
          variants={stagger}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* eyebrow */}
          <motion.div variants={rise} className="flex items-center gap-4">
            <motion.span
              aria-hidden="true"
              variants={{
                hidden: { scaleX: 0 },
                show: { scaleX: 1, transition: { duration: 0.8, delay: 0.2 } },
              }}
              style={{ originX: 0 }}
              className="h-px w-14 bg-[#e8a93b] sm:w-20"
            />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8a93b]">
              {eyebrow}
            </span>
          </motion.div>

          {/* heading */}
          <motion.h2
            variants={rise}
            className={`${playfair.className} mt-4 text-3xl font-semibold leading-tight md:text-4xl`}
          >
            {titleStart} <span className="text-[#f0b445]">{titleAccent}</span>
          </motion.h2>

          {/* paragraphs */}
          <div className="mt-5 space-y-4">
            {paragraphs.map((text, i) => (
              <motion.p
                key={i}
                variants={rise}
                className="text-base leading-relaxed text-slate-300 sm:text-[17px] sm:leading-8"
              >
                {text}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
