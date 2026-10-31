"use client";

import Image from "next/image";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import { Lightbulb, Users, Leaf, Award, ArrowRight } from "lucide-react";

import { LinearBgButton } from "./ui/ThemeButtons";
import homeData from "@/app/data/home.json";
import {
  Eyebrow,
  SectionDescription,
  SectionHeiglightText,
  SectionTitle,
} from "./SectionHeader";

const GOLD = "#c8963e";

const featureIcons = [Lightbulb, Users, Leaf, Award];

const features = homeData.about.features.map((label, index) => ({
  Icon: featureIcons[index % featureIcons.length],
  label,
}));

const ease = [0.22, 1, 0.36, 1] as const;

function reveal(
  reduce: boolean | null,
  from: { x?: number; y?: number; scale?: number } = {},
  delay = 0
): MotionProps {
  return {
    initial: reduce ? false : { opacity: 0, ...from },
    whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: {
      duration: reduce ? 0 : 0.8,
      delay: reduce ? 0 : delay,
      ease,
    },
  };
}

export default function AboutSection({
  isShowButton = false,
}: {
  isShowButton?: boolean;
}) {
  const reduce = useReducedMotion();

  return (
    <section
      id={homeData.about.id}
      className="relative isolate overflow-hidden bg-[#0b1218] px-4 py-16 sm:px-8 lg:px-[4%] lg:py-24"
    >
      {/* Ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full opacity-[0.07] blur-[100px]"
        style={{ backgroundColor: GOLD }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-[#c8963e]/[0.04] blur-[120px]"
      />

      {/* Blueprint drawing */}
      <motion.div
        {...reveal(reduce, { x: 40, y: 20 }, 0.3)}
        className="pointer-events-none absolute bottom-0 right-0 hidden h-[420px] w-[44%] opacity-60 lg:block"
      >
        <Image
          src={homeData.about.blueprintImage}
          alt=""
          fill
          sizes="44vw"
          className="object-contain object-right-bottom"
        />
      </motion.div>

      <div className="relative mx-auto grid max-w-360 items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-16">
        {/* Image collage */}
        <motion.div
          {...reveal(reduce, { x: -50, y: 10 })}
          className="relative mx-auto h-[380px] w-full max-w-[620px] sm:h-[520px] lg:h-[640px] lg:max-w-none"
        >
          {/* Main image */}
          <motion.div
            whileHover={reduce ? undefined : { scale: 1.015 }}
            transition={{ duration: 0.6, ease }}
            className="absolute left-0 top-0 h-[85%] w-[74%] overflow-hidden rounded-2xl border-2 border-white/70 bg-[#0d141b] shadow-2xl"
          >
            <Image
              src={homeData.about.image[0].src}
              alt={homeData.about.image[0].alt}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1218]/35 via-transparent to-transparent" />
          </motion.div>

          {/* Secondary image */}
          {homeData.about.image[1] && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 35, x: 15 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduce ? 0 : 0.9,
                delay: reduce ? 0 : 0.25,
                ease,
              }}
              whileHover={reduce ? undefined : { scale: 1.025 }}
              className="absolute right-0 sm:right-2 top-[14%] z-10 h-[60%] w-[50%] overflow-hidden rounded-2xl border-2 border-white/70 bg-[#0d141b] shadow-[0_25px_50px_rgba(0,0,0,0.6)]"
            >
              <Image
                src={homeData.about.image[1].src}
                alt={homeData.about.image[1].alt}
                fill
                sizes="(max-width: 1024px) 50vw, 30vw"
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
            </motion.div>
          )}
        </motion.div>

        {/* Text content */}
        <div className="relative lg:max-w-[640px]">
          <Eyebrow text={homeData.about.eyebrow} left={false} />

          <SectionTitle>
            {homeData.about.title} <br />
            <SectionHeiglightText text={homeData.about.accent} className="" />
          </SectionTitle>

          <SectionDescription
            text={homeData.about.description}
            className="sm:w-10/12"
          />

          {/* Features */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: reduce ? 0 : 0.12,
                  delayChildren: reduce ? 0 : 0.15,
                },
              },
            }}
            className="mt-10 grid grid-cols-1 gap-y-5 sm:grid-cols-2"
          >
            {features.map(({ Icon, label }, index) => (
              <motion.div
                key={`${label}-${index}`}
                variants={{
                  hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      duration: reduce ? 0 : 0.6,
                      ease,
                    },
                  },
                }}
              >
                <motion.div
                  whileHover={reduce ? undefined : { x: 5 }}
                  className="group flex items-center gap-4"
                >
                  <motion.span
                    whileHover={
                      reduce ? undefined : { rotate: 8, scale: 1.08 }
                    }
                    transition={{ duration: 0.25 }}
                    className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full border border-[#d59824] bg-[#d59824] text-white transition-colors duration-300"
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </motion.span>

                  <span className="text-[15px] font-medium leading-6 text-[#e6e9ec] sm:text-base">
                    {label}
                  </span>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          {isShowButton && (
            <motion.div
              {...reveal(reduce, { y: 22 }, 0.6)}
              className="mt-2"
            >
              <motion.div
                whileHover={reduce ? undefined : { scale: 1.035 }}
                whileTap={reduce ? undefined : { scale: 0.97 }}
                className="inline-block"
              >
                <LinearBgButton href={homeData.about.button.href}>
                  <div className="flex items-center gap-3">
                    <span>{homeData.about.button.label}</span>

                    <motion.span
                      whileHover={reduce ? undefined : { rotate: -45 }}
                      transition={{ duration: 0.25 }}
                      className="grid h-9 w-9 place-items-center rounded-full border border-white/60"
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </div>
                </LinearBgButton>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
