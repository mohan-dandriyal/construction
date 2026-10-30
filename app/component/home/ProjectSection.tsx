"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Keyboard } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Boxes,
  ArrowRight,
} from "lucide-react";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Libre_Baskerville,
  Barlow,
  Barlow_Condensed,
} from "next/font/google";

import "swiper/css";

import data from "@/app/data/home.json";
import { LinearBgButton } from "../ui/ThemeButtons";
import {
  Eyebrow,
  SectionHeiglightText,
  SectionTitle,
} from "../SectionHeader";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});

const sans = Barlow({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});

const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-condensed",
});

export default function ProjectSection() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();

  const { section, slider, navigation, projects } = data.projectSec;

  return (
    <section
      id={section.id}
      className={`${serif.variable} ${sans.variable} ${condensed.variable} px-4 py-12 font-[family-name:var(--font-sans)] sm:px-8 lg:px-0`}
      style={{ backgroundColor: section.background }}
    >
      <div className="max-w-360 mx-auto">
      {/* Section heading */}
      <div className="flex justify-center">
        <Eyebrow text={section.eyebrow} />
      </div>

      <SectionTitle className="mx-auto text-center">
        {section.title}
        <br />
        <SectionHeiglightText text={section.highlight} />
      </SectionTitle>

      <div
        className="relative mx-auto"
        style={{ maxWidth: section.maxWidth }}
      >
        {/* Previous / Next controls */}
        <div className="mb-4 flex justify-end gap-3 lg:absolute lg:right-[6.3%] lg:top-[20px] lg:z-20 lg:mb-0">
          <button
            type="button"
            aria-label={navigation.previousLabel}
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b9803a] text-white transition hover:bg-[#d09448] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9a55b] sm:h-[60px] sm:w-[60px]"
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            aria-label={navigation.nextLabel}
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b9803a] text-white transition hover:bg-[#d09448] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9a55b] sm:h-[60px] sm:w-[60px]"
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>
        </div>

        {/* Project slider */}
        <Swiper
          modules={[A11y, Keyboard]}
          loop={slider.loop}
          keyboard={{ enabled: slider.keyboardEnabled }}
          speed={slider.speed}
          slidesPerView={slider.slidesPerView}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActive(swiper.realIndex);
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <div className="relative lg:h-[640px]">
                {/* Project image */}
                <motion.div
                  whileHover={reduceMotion ? undefined : { scale: 1.015 }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.4,
                  }}
                  className="relative z-10 aspect-[787/600] w-full overflow-hidden lg:absolute lg:left-[6.7%] lg:top-[28px] lg:aspect-auto lg:h-[500px] lg:w-[41.5%]"
                >
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 41vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Project information panel */}
                <div className="relative overflow-hidden bg-[#333333] px-5  sm:px-8 lg:absolute lg:bottom-0 lg:left-[35.7%] lg:right-[6.5%] lg:top-[112px] lg:px-0 lg:pb-0 lg:pl-[22.7%] lg:pr-[8%] lg:pt-0">
                  <span className="absolute left-6 top-0 h-4 w-[134px] bg-[#c4883c] lg:left-[29.7%]" />

                  <Boxes
                    aria-hidden="true"
                    size={120}
                    strokeWidth={1}
                    className="absolute right-8 top-6 text-white/5"
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={project.id}
                      initial={
                        reduceMotion ? false : { opacity: 0, y: 18 }
                      }
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: -14 }}
                      transition={{
                        duration: reduceMotion ? 0 : 0.35,
                      }}
                      className="relative lg:flex lg:h-full lg:flex-col lg:justify-center lg:pt-6"
                    >
                      <p className="font-[family-name:var(--font-condensed)] text-lg font-medium uppercase tracking-[0.5em] text-[#c4883c]">
                        {project.eyebrow}
                      </p>

                      <h2 className="mt-6 font-[family-name:var(--font-serif)] text-3xl leading-tight text-white md:text-4xl lg:text-[50px]">
                        {project.title}
                      </h2>

                      <p className="mt-6 max-w-[640px] text-base leading-7 text-white/65 sm:text-lg sm:leading-8 lg:mt-8">
                        {project.text}
                      </p>

                      <div className="mt-8 self-start">
                        <LinearBgButton href={project.href}>
                          <span className="flex items-center gap-2">
                            {navigation.buttonText}

                            <motion.span
                              initial="rest"
                              whileHover="hover"
                              variants={{
                                rest: { x: 0 },
                                hover: { x: 5 },
                              }}
                              className="grid h-8 w-8 place-items-center rounded-full bg-gold text-navy"
                            >
                              <ArrowRight size={16} />
                            </motion.span>
                          </span>
                        </LinearBgButton>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination dots */}
        {navigation.showPagination && (
          <div
            className="relative z-10 mt-6 flex cursor-pointer justify-center gap-4 lg:absolute lg:left-[6.7%] lg:top-[648px] lg:mt-0 lg:w-[41.5%]"
            role="tablist"
            aria-label="Project slides"
          >
            {projects.map((project, index) => (
              <button
                key={project.id}
                type="button"
                role="tab"
                aria-selected={active === index}
                aria-label={`Go to slide ${index + 1}`}
                onClick={() => {
                  swiperRef.current?.slideToLoop(index);
                }}
                className={`h-4 w-4 rounded-full border-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9a55b] ${
                  active === index
                    ? "border-[#d9a55b] bg-[#d9a55b]"
                    : "border-white/60 bg-transparent hover:border-[#d9a55b]"
                }`}
              />
            ))}
          </div>
        )}
      </div>
      </div>
    </section>
  );
}