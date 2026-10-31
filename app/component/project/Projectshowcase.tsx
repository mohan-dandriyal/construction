"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type PanInfo,
  type Variants,
} from "framer-motion";
import {
  MapPin,
  House,
  Ruler,
  CalendarDays,
  ChevronRight,
} from "lucide-react";
import projectsData from "@/app/data/projects.json";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const iconMap: Record<string, LucideIcon> = {
  MapPin,
  House,
  Ruler,
  CalendarDays,
};

export type ProjectDetailInput = {
  icon: string | LucideIcon;
  label: string;
  value: string;
};

export type ProjectImage = {
  src: string;
  alt: string;
};

export type ProjectShowcaseData = {
  category: string;
  titleTop: string;
  titleAccent: string;
  description: string;
  details: ProjectDetailInput[];
  images: ProjectImage[];
};

const defaultProject: ProjectShowcaseData = projectsData.projects[0];

const stagger: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const rise: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

type ProjectShowcaseProps = {
  project?: ProjectShowcaseData;
};

export default function ProjectShowcase({
  project = defaultProject,
}: ProjectShowcaseProps) {
  const {
    category,
    titleTop,
    titleAccent,
    description,
    details,
    images,
  } = project;

  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  const stripRef = useRef<HTMLDivElement | null>(null);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeIndex =
    images.length === 0 ? 0 : Math.min(active, images.length - 1);

  const goTo = (index: number) => {
    if (images.length === 0) return;
    setActive((index + images.length) % images.length);
  };

  useEffect(() => {
    const strip = stripRef.current;
    const thumb = thumbRefs.current[activeIndex];

    if (!strip || !thumb) return;

    strip.scrollTo({
      left:
        thumb.offsetLeft - (strip.clientWidth - thumb.clientWidth) / 2,
      behavior: reduce ? "auto" : "smooth",
    });
  }, [activeIndex, reduce]);

  const onDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ) => {
    if (info.offset.x < -60) {
      goTo(activeIndex + 1);
    } else if (info.offset.x > 60) {
      goTo(activeIndex - 1);
    }
  };

  const activeImage = images[activeIndex];

  return (
    <section
      className={`${inter.className} overflow-hidden bg-[#060d17] px-4 py-12 text-white sm:px-6 sm:py-16 lg:px-10 lg:py-20`}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.5fr)] lg:gap-12 xl:gap-16">
        {/* Information column */}
        <motion.div
          variants={stagger}
          initial={reduce ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="order-2 lg:order-1"
        >
          {/* Category */}
          <motion.div variants={rise} className="flex items-center gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#e8a93b] sm:text-sm">
              {category}
            </span>

            <motion.span
              aria-hidden="true"
              variants={{
                hidden: { scaleX: 0 },
                show: {
                  scaleX: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.3,
                  },
                },
              }}
              style={{ originX: 0 }}
              className="h-px w-16 bg-[#e8a93b]"
            />
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={rise}
            className={`${playfair.className} mt-3 text-3xl font-semibold leading-[1.1] md:text-4xl`}
          >
            {titleTop}

            <span className="block text-[#f0b445]">{titleAccent}</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={rise}
            className="mt-6 max-w-md text-[15px] leading-relaxed text-slate-300"
          >
            {description}
          </motion.p>

          {/* Project details */}
          <ul className="mt-8 max-w-md">
            {details.map(({ icon, label, value }) => {
              const Icon =
                typeof icon === "string"
                  ? iconMap[icon] ?? MapPin
                  : icon;

              return (
                <motion.li
                  key={label}
                  variants={rise}
                  whileHover={reduce ? undefined : { x: 6 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 22,
                  }}
                  className="flex items-center gap-5 border-b border-white/10 py-4 last:border-b-0"
                >
                  <Icon
                    aria-hidden="true"
                    className="h-9 w-9 shrink-0 text-[#e8a93b]"
                    strokeWidth={1.5}
                  />

                  <div className="text-sm leading-snug">
                    <p className="text-slate-300">{label}</p>
                    <p className="text-white">{value}</p>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </motion.div>

        {/* Gallery column */}
        <motion.div
          initial={reduce ? false : { opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="order-1 min-w-0 lg:order-2"
        >
          {/* Main image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#0d1724] shadow-2xl shadow-black/50 sm:aspect-[16/10]">
            {activeImage && (
              <motion.div
                drag={images.length > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.15}
                dragSnapToOrigin
                onDragEnd={onDragEnd}
                className="absolute inset-0 cursor-grab active:cursor-grabbing"
              >
                <AnimatePresence initial={false}>
                  <motion.div
                    key={activeImage.src}
                    initial={
                      reduce ? false : { opacity: 0, scale: 1.05 }
                    }
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.7,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeImage.src}
                      alt={activeImage.alt}
                      fill
                      priority={activeIndex === 0}
                      draggable={false}
                      sizes="(min-width: 1024px) 60vw, 100vw"
                      className="select-none object-cover"
                    />
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            )}

            {/* Image counter */}
            {activeImage && (
              <p
                aria-live="polite"
                className="absolute bottom-3 left-3 z-10 rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-sm"
              >
                {activeIndex + 1} / {images.length}
              </p>
            )}
          </div>

          {/* Thumbnails and next button */}
          <div className="mt-4 flex items-center gap-3 sm:gap-4">
            <div
              ref={stripRef}
              className="relative flex min-w-0 flex-1 gap-3 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {images.map((img, i) => {
                const isActive = i === activeIndex;

                return (
                  <button
                    key={img.src}
                    ref={(el) => {
                      thumbRefs.current[i] = el;
                    }}
                    type="button"
                    onClick={() => goTo(i)}
                    aria-label={`${projectsData.showcase.showImageAriaPrefix} ${i + 1}: ${img.alt}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`relative aspect-[4/3] shrink-0 basis-[calc((100%-1.5rem)/3)] overflow-hidden rounded-md border-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8a93b] lg:basis-[calc((100%-2.25rem)/4)] ${
                      isActive
                        ? "border-[#e8a93b]"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 15vw, 30vw"
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>

            {/* Next image */}
            <motion.button
              type="button"
              onClick={() => goTo(activeIndex + 1)}
              aria-label={projectsData.showcase.nextImageAria}
              whileHover={reduce ? undefined : { scale: 1.08 }}
              whileTap={reduce ? undefined : { scale: 0.92 }}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-[#e8a93b] text-[#e8a93b] transition-colors duration-300 hover:bg-[#e8a93b] hover:text-[#060d17] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e8a93b] sm:h-14 sm:w-14"
            >
              <ChevronRight
                aria-hidden="true"
                className="h-5 w-5 sm:h-6 sm:w-6"
                strokeWidth={2}
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
