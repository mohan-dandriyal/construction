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

export type ProjectSpecificationsData = {
  specsEyebrow: string;
  specsTitle: string;
  specsAccent: string;
  specs: { label: string; value: string }[];
  image: {
    src: string;
    alt: string;
  };
};

const defaultData: ProjectSpecificationsData =
  projectsData.projects[0].specifications;

const stagger = (gap = 0.1, delay = 0.1): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});
const rise: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const fade: Variants = {
  hidden: { opacity: 0, x: -16 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProjectSpecifications({
  data = defaultData,
}: {
  data?: ProjectSpecificationsData;
}) {
  const { specsEyebrow, specsTitle, specsAccent, specs, image } = data;

  const reduce = useReducedMotion();
  const initial = reduce ? "show" : "hidden";
  const viewport = { once: true, amount: 0.2 };

  return (
    <div className="border-t border-white/10">
      <section
        className={`${inter.className} overflow-hidden bg-[#050e17] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-10 lg:py-20`}
      >
        <div className="mx-auto max-w-7xl">
          {/* ================= Specifications ================= */}
          <div className="grid items-stretch gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] lg:gap-12">
            <div className="min-w-0">
              {/* eyebrow */}
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
                    show: {
                      scaleX: 1,
                      transition: { duration: 0.8, delay: 0.2 },
                    },
                  }}
                  style={{ originX: 0 }}
                  className="h-px w-14 bg-[#e8a93b] sm:w-16"
                />
                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8a93b]">
                  {specsEyebrow}
                </span>
              </motion.div>

              <motion.h2
                variants={rise}
                initial={initial}
                whileInView="show"
                viewport={viewport}
                className={`${playfair.className} mt-3 text-3xl font-semibold leading-tight md:text-4xl`}
              >
                {specsTitle}{" "}
                <span className="text-[#f0b445]">{specsAccent}</span>
              </motion.h2>

              {/* table */}
              <motion.div
                variants={stagger(0.07, 0.15)}
                initial={initial}
                whileInView="show"
                viewport={viewport}
                className="mt-6 overflow-hidden rounded-lg border border-white/15"
              >
                <table className="w-full border-collapse text-left text-sm sm:text-base">
                  <tbody>
                    {specs.map(({ label, value }) => (
                      <motion.tr
                        key={label}
                        variants={fade}
                        className="border-b border-white/15 transition-colors duration-300 last:border-b-0 hover:bg-white/[0.03]"
                      >
                        <th
                          scope="row"
                          className="w-[38%] border-r border-white/15 px-4 py-3 align-middle font-normal text-slate-200 sm:px-7"
                        >
                          {label}
                        </th>
                        <td className="px-4 py-3 align-middle text-slate-300 sm:px-7">
                          {value}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            </div>

            {/* image */}
            <motion.div
              initial={reduce ? false : { opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group relative min-h-[280px] overflow-hidden rounded-xl shadow-2xl shadow-black/50 sm:min-h-[360px] lg:min-h-0"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
