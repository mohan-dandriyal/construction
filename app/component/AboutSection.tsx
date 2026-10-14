"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  animate,
  useInView,
  useReducedMotion,
  type MotionProps,
} from "framer-motion";
import { Lightbulb, Users, Leaf, Award, ArrowRight, Plus } from "lucide-react";
import { LinearBgButton } from "./ui/ThemeButtons";

const features = [
  { Icon: Lightbulb, label: "Innovative Design" },
  { Icon: Users, label: "Client Focused" },
  { Icon: Leaf, label: "Sustainable Solutions" },
  { Icon: Award, label: "Expert Team" },
];

const tagline = ["SHAPING", "SPACES", "ENRICHING", "LIVES"];

/**
 * Scroll-reveal props (replaces AOS).
 * Spread onto any motion.* element: <motion.div {...reveal(reduce, { y: 30 })} />
 */
function reveal(
  reduce: boolean | null,
  from: { x?: number; y?: number; scale?: number } = {},
  delay = 0
): MotionProps {
  return {
    initial: reduce ? false : { opacity: 0, ...from },
    whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  };
}

// Counts up from 0 when scrolled into view
function CountUp({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display text-[64px] leading-none font-medium text-white">
      {n}
      <span className="text-gold">{suffix}</span>
    </span>
  );
}

export default function AboutSection({ isShowButton = false }: { isShowButton?: boolean }) {
  const reduce = useReducedMotion();

  return (
    <section id="about" className="relative overflow-hidden bg-[#0b1218] px-4 py-16 sm:px-8 lg:px-[4%] lg:py-20">
      {/* Blueprint drawing, bottom-right */}
      <motion.div
        {...reveal(reduce, { x: 40 }, 0.3)}
        className="pointer-events-none absolute right-0 bottom-0 hidden h-[420px] w-[44%] opacity-70 lg:block"
      >
        <Image
          src="/about-right.png"
          alt=""
          fill
          className=""
        />
      </motion.div>

      {/* Vertical tagline, far right */}
      <motion.div
        {...reveal(reduce, { x: 40 }, 0.5)}
        className="absolute top-14 right-[6%] hidden xl:block"
      >
        <Plus className="text-gold" size={28} strokeWidth={1.5} />
        <div className="mt-3 ml-3 flex gap-8">
          {/* line draws downward */}
          <motion.span
            initial={reduce ? false : { scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="block  w-px bg-gold border-l border-[#c8963e]"
          />
          <div className="space-y-1 pt-3 text-[17px] leading-8 tracking-wide text-[#aeb6bf]">
            {tagline.map((w, i) => (
              <motion.div
                key={w}
                {...reveal(reduce, { y: 12 }, 0.8 + i * 0.12)}
                className={i === tagline.length - 1 ? "text-white" : ""}
              >
                {w}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative mx-auto grid max-w-350 items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-8 xl:gap-12">
        {/* Image collage */}
        <motion.div
          {...reveal(reduce, { x: -60 })}
          className="relative mx-auto h-[460px] w-full max-w-[600px] sm:h-[560px] lg:h-[660px] lg:max-w-none"
        >
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0"
          >
            <Image
              src="/about-left.png"
              alt="A bright living room and sculptural staircase in a modern home"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-contain object-left"
            />
          </motion.div>

          {/* Years badge */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 140, damping: 16, delay: 0.5 }}
            whileHover={{ scale: 1.04 }}
            className="absolute right-0 bottom-0 flex h-[30%] w-[34%] min-w-[150px] flex-col items-center justify-center rounded-md border border-gold/70 bg-[#0d141b] text-center shadow-[0_20px_40px_rgba(0,0,0,0.5)] border-[#e0a04c]"
          >
            <CountUp to={15} suffix="+" />
            <span className="my-3 block h-px w-8 bg-gold/70" />
            <span className="text-[15px] text-[#aeb6bf]">Years of</span>
            <span className="mt-1 text-[15px] font-medium text-white">Design Excellence</span>
          </motion.div>
        </motion.div>

        {/* Text content */}
        <div className="relative lg:max-w-[640px]">


          <div className="w-8/12">
            <div
              className="mb-5 flex items-center gap-4 text-[#d9a850]"
            >
              <span className="h-px w-16 bg-[#d9a850] sm:w-20" />
              <span className="text-sm font-medium uppercase tracking-[0.35em]">
                ABOUT ARCOVA
              </span>
              <span className="hidden h-px w-16 bg-[#d9a850] sm:block sm:w-20" />
            </div>

            <motion.h2
              {...reveal(reduce, { y: 30 }, 0.1)}
              className="mt-4 font-display text-5xl leading-[1.15] font-bold text-white sm:text-4.5xl"
            >
              Architecture
              <span className="text-[#c8963e]"> Beyond Walls</span>
            </motion.h2>
          </div>



          <motion.p
            {...reveal(reduce, { y: 30 }, 0.2)}
            className="mt-8 max-w-[600px] text-[17px] leading-8 text-[#c3cad1]"
          >
            We are a passionate team of architects and designers creating meaningful
            spaces for modern living. From concept to completion, we focus on
            innovative design, smart planning and sustainable solutions that enhance
            the way people live, work and connect.
          </motion.p>

          <div className="mt-10 grid max-w-[520px] grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
            {features.map(({ Icon, label }, i) => (
              <motion.div key={label} {...reveal(reduce, { scale: 0.85 }, 0.3 + i * 0.1)}>
                <motion.div whileHover={{ x: 4 }} className="flex items-center gap-4">
                  <motion.span
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-full border border-gold/70 bg-gold/10 text-gold"
                  >
                    <Icon size={22} strokeWidth={1.5} />
                  </motion.span>
                  <span className="text-base text-white">{label}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {
            isShowButton && (
              <motion.div {...reveal(reduce, { y: 30 }, 0.7)} className="mt-10">
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} className="inline-block">
                  <LinearBgButton href="/about">
                    <div className="flex items-center gap-2">
                      More About Us
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/60">
                        <ArrowRight size={18} />
                      </span>
                    </div>
                  </LinearBgButton>
                </motion.div>
              </motion.div>

            )
          }
        </div>
      </div>
    </section>
  );
}
