"use client";

import {
  HardHat,
  PencilRuler,
  DraftingCompass,
  Handshake,
  type LucideIcon,
} from "lucide-react";

import { Playfair_Display, Poppins } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";

import data from "@/app/data/home.json";
const processData = data.process;

import {
  Eyebrow,
  SectionDescription,
  SectionHeiglightText,
  SectionTitle,
} from "../SectionHeader";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
});

const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const iconMap: Record<string, LucideIcon> = {
  HardHat,
  PencilRuler,
  DraftingCompass,
  Handshake,
};

const ease = [0.22, 1, 0.36, 1] as const;

/* Connector with infinitely pulsing gold dot */
function Connector({ index }: { index: number }) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute left-[calc(50%+90px)] top-[75px] z-0 hidden h-5 w-[calc(100%-180px)] lg:block"
    >
      {/* Animated dashed line */}
      <svg
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <motion.path
          d="M0 10 C 30 -2, 70 2, 100 10 S 170 22, 200 10"
          fill="none"
          stroke={processData.connector.color}
          strokeWidth={processData.connector.strokeWidth}
          strokeDasharray={processData.connector.dashArray}
          vectorEffect="non-scaling-stroke"
          initial={
            reduceMotion
              ? { pathLength: 1, opacity: 1 }
              : { pathLength: 0, opacity: 0 }
          }
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 1.2,
            ease,
            delay: reduceMotion ? 0 : 0.3,
          }}
        />
      </svg>

      {/* Infinite glowing pulse */}
      <motion.span
        initial={false}
        animate={
          reduceMotion
            ? {
                scale: 1,
                opacity: 1,
                boxShadow: "0 0 8px 2px rgba(217,165,91,0.5)",
              }
            : {
                scale: [0.7, 1.5, 0.7],
                opacity: [0.7, 1, 0.7],
                boxShadow: [
                  "0 0 5px 1px rgba(217,165,91,0.3)",
                  "0 0 16px 5px rgba(217,165,91,0.85)",
                  "0 0 5px 1px rgba(217,165,91,0.3)",
                ],
              }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                duration: 1.8,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
                delay: index * 0.25,
              }
        }
        className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3d9a4]"
      />
    </div>
  );
}

export default function ProcessSection() {
  const reduceMotion = useReducedMotion();

  const { section, animation, connector, steps } = processData;

  return (
    <section
      id={section.id}
      className={`${serif.variable} ${sans.variable} overflow-hidden bg-[#0c1218] px-4 py-16 font-[family-name:var(--font-sans)] sm:px-6 sm:py-20 lg:px-8 lg:py-24`}
    >
      <div className="mx-auto max-w-360">
        {/* Section eyebrow */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: reduceMotion ? 0 : animation.duration,
            ease,
          }}
          className="flex justify-center"
        >
          <Eyebrow text={section.eyebrow} />
        </motion.div>

        {/* Section heading */}
        <SectionTitle className="mx-auto text-center">
          {section.title}
          <SectionHeiglightText text={section.highlight} />
        </SectionTitle>

        {/* Section description */}
        <SectionDescription
          text={section.description}
          className="mx-auto max-w-2xl text-center"
          delay={0.15}
        />

        {/* Process steps */}
        <ol className="relative mx-auto mt-14 grid grid-cols-1 gap-y-14 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 lg:mt-20 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0">
          {steps.map((step, index) => {
            const Icon = iconMap[step.icon] ?? HardHat;

            return (
              <motion.li
                key={step.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 36 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: animation.viewportAmount,
                }}
                transition={{
                  duration: reduceMotion ? 0 : animation.duration,
                  delay: reduceMotion
                    ? 0
                    : index * animation.stagger,
                  ease,
                }}
                className="relative flex min-w-0 flex-col items-center px-3 text-center sm:px-4 lg:px-2"
              >
                {/* Connecting line and pulsing dot */}
                {connector.enabled && index < steps.length - 1 && (
                  <Connector index={index} />
                )}

                {/* Icon circle */}
                <motion.div
                  whileHover={
                    reduceMotion
                      ? undefined
                      : { y: -5, scale: 1.035 }
                  }
                  transition={{ duration: 0.3, ease }}
                  className="relative z-10 flex h-36 w-36 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[#d9a55b]/60 sm:h-40 sm:w-40 lg:h-[170px] lg:w-[170px]"
                >
                  <div className="flex h-[82%] w-[82%] items-center justify-center rounded-full border-2 border-[#c4883c] bg-[radial-gradient(circle_at_50%_30%,#3a3123_0%,#1a1b1d_55%,#10151b_100%)] shadow-[0_0_30px_rgba(196,136,60,0.15)]">
                    <Icon
                      size={48}
                      strokeWidth={1.25}
                      className="text-[#d9a55b] sm:h-[54px] sm:w-[54px]"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Number badge */}
                  <span className="absolute -left-2 -top-1 flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#eaab5b]/70 bg-gradient-to-br from-[#814e12] to-[#8f5d22] text-base font-semibold text-white shadow-lg sm:h-[52px] sm:w-[52px] sm:text-lg">
                    {step.number}
                  </span>
                </motion.div>

                {/* Step title */}
                <h3 className="mt-6 font-[family-name:var(--font-serif)] text-xl font-bold leading-snug text-white/90 sm:mt-8 sm:text-2xl">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="mt-3 max-w-[330px] text-sm font-light leading-7 text-white/70 sm:mt-4 sm:text-base sm:leading-8">
                  {step.description}
                </p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}