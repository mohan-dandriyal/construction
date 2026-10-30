"use client";

import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  Users,
  Lightbulb,
  Settings,
  BadgeCheck,
  House,
  Leaf,
} from "lucide-react";
import homeData from "@/app/data/home.json";
import { SectionDescription, SectionHeiglightText, SectionTitle } from "../SectionHeader";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});
const inter = Inter({ subsets: ["latin"], display: "swap" });

const featureIcons = [Users, Lightbulb, Settings, BadgeCheck, House, Leaf];
const features = homeData.whyChooseUs.features.map((feature, index) => ({ ...feature, icon: featureIcons[index] }));

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="why-choose-us"
      className={`${inter.className} relative overflow-hidden bg-[#0b121a] px-5 py-16 text-white sm:px-8 lg:px-12 lg:py-20`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        {/* ---------- Image with gold offset frame ---------- */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
          {/* gold frame behind the image */}
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 h-40 w-3/5 rounded-md bg-gradient-to-br from-[#d9a850] to-[#a8742a] sm:-left-6 sm:-top-6 sm:h-48 lg:h-[88%] lg:w-[88%]"
          />
          <motion.div
            whileHover={reduceMotion ? undefined : { scale: 1.015 }}
            transition={{ duration: 0.4 }}
            className="relative ml-2 mt-2 aspect-[4/3] overflow-hidden rounded-md shadow-2xl shadow-black/50 sm:ml-4 sm:mt-4 lg:aspect-[1.15]"
          >
            <Image
              src="/why-choose-us.png"
              alt="Modern two-storey house with warm interior lighting at dusk"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
          </motion.div>
        </div>

        {/* ---------- Content ---------- */}
        <div>
          {/* eyebrow */}
          <div
            className="mb-5 flex items-center gap-4 text-[#d9a850]"
          >
            <span className="h-px w-16 bg-[#d9a850] sm:w-20" />
            <span className="text-sm font-medium uppercase tracking-[0.35em]">
              {homeData.whyChooseUs.eyebrow}
            </span>
            <span className="hidden h-px w-16 bg-[#d9a850] sm:block sm:w-20" />
          </div>

        

          <SectionTitle >
          {homeData.whyChooseUs.title} <br />
            <SectionHeiglightText text={homeData.whyChooseUs.accent} />
          </SectionTitle>

          <SectionDescription className="sm:w-10/12" text={homeData.whyChooseUs.description} />

          {/* feature grid */}
          <motion.ul
            variants={container}
            initial={reduceMotion ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
          >
            {features.map(({ icon: Icon, title, text }) => (
              <motion.li
                key={title}
                variants={card}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group rounded-md flex flex-col items-center border border-white/10 bg-white/[0.02] px-5 py-6 text-center transition-colors duration-300 hover:border-[#c8963e]/60 hover:bg-white/[0.04]"
              >
                <motion.span
                  whileHover={reduceMotion ? undefined : { rotate: 360 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="mb-4 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#7a5628] text-[#f3dcb0]"
                >
                  <Icon className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
                </motion.span>
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {text}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
}
