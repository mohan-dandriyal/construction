"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion, type Variants } from "framer-motion";
import {
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowRight,
} from "lucide-react";


import data from "@/app/data/gallery.json"

import { Playfair_Display, Poppins } from "next/font/google";
import { Eyebrow, SectionDescription, SectionHeiglightText, SectionTitle } from "../SectionHeader";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

export default function GallerySection() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const filteredItems = data.items;

  const activeItem: (typeof data.items)[number] | null =
    activeModalIndex !== null ? filteredItems[activeModalIndex] ?? null : null;

  const handlePrev = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) =>
      prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }, [activeModalIndex, filteredItems.length]);

  const handleNext = useCallback(() => {
    if (activeModalIndex === null) return;
    setActiveModalIndex((prev) =>
      prev === null ? null : (prev + 1) % filteredItems.length
    );
  }, [activeModalIndex, filteredItems.length]);

  const handleClose = useCallback(() => {
    setActiveModalIndex(null);
  }, []);

  // Keyboard controls for modal
  useEffect(() => {
    if (activeModalIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModalIndex, handleClose, handlePrev, handleNext]);

  return (
    <section
      className={`${serif.variable} ${sans.variable} bg-[#08121b] px-4 py-16 font-[family-name:var(--font-sans)] text-white sm:px-8 lg:py-24`}
    >
      <div className="mx-auto max-w-360">
        <div className="flex justify-center">
          <Eyebrow text={data.section.Eyebrow} />
        </div>

        <SectionTitle className="text-center mx-auto">
          {data.section.title}
          <SectionHeiglightText text={data.section.lightTitle} />
        </SectionTitle>
        <SectionDescription className="lg:w-6/12 sm:w-10/12 mx-auto text-center" text={data.section.dis} />


        {/* Gallery Grid */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.article
                key={item.id}
                layout
                variants={cardVariants}
                initial="hidden"
                animate="show"
                exit="exit"
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.4 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0b1520] transition-colors duration-300 hover:border-[#d59a4c]/60 shadow-xl shadow-black/40"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#070e17]">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1520] via-black/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-85" />

                  {/* Category Pill */}
                  {/* <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-[#efb85f] backdrop-blur-md">
                    {item.category}
                  </span> */}

                  {/* Expand Button Icon */}
                  <button
                    type="button"
                    onClick={() => setActiveModalIndex(index)}
                    aria-label={`Enlarge ${item.title}`}
                    className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full border border-white/20 bg-black/60 text-white opacity-0 backdrop-blur-md transition-all duration-300 hover:bg-[#d59a4c] hover:text-[#0f1720] group-hover:opacity-100"
                  >
                    <Maximize2 size={16} />
                  </button>
                </div>

                {/* Content Block */}
                {/* <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#aeb6bf]">
                      <MapPin size={13} className="text-[#d59a4c]" />
                      <span>{item.location}</span>
                    </div>

                    <h3 className="mt-2 font-[family-name:var(--font-serif)] text-xl font-semibold text-white transition-colors duration-300 group-hover:text-[#efb85f]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-relaxed text-[#aeb6bf] line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveModalIndex(index)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#d59a4c] transition-colors hover:text-white"
                    >
                      <span>View Project</span>
                      <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                    </button>

                    <span className="text-xs font-mono text-white/40">
                      #{String(item.id).padStart(2, "0")}
                    </span>
                  </div>
                </div> */}
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {activeItem && activeModalIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={handleClose}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md sm:p-8"
              role="dialog"
              aria-modal="true"
              aria-label={activeItem.title}
            >
              {/* Modal Container */}
              <motion.div
                initial={{ scale: 0.94, opacity: 0, y: 16 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.94, opacity: 0, y: 16 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                onClick={(e) => e.stopPropagation()}
                className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#0b1520] shadow-2xl shadow-black"
              >
                {/* Header Controls */}
                <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-[#d59a4c]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#efb85f]">
                      {activeItem.category}
                    </span>
                    <span className="text-xs font-medium text-[#aeb6bf]">
                      {activeModalIndex + 1} of {filteredItems.length}
                    </span>
                  </div>

                  <button
                    type="button"
                    onClick={handleClose}
                    aria-label="Close modal"
                    className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white/70 transition-colors hover:border-white hover:bg-white/10 hover:text-white"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Main Image Area */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black sm:aspect-[16/9]">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    priority
                    sizes="(min-width: 1200px) 1100px, 95vw"
                    className="object-contain"
                  />

                  {/* Navigation Arrows */}
                  {filteredItems.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous project"
                        className="absolute left-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-[#d59a4c] hover:text-[#0f1720]"
                      >
                        <ChevronLeft size={22} />
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next project"
                        className="absolute right-4 top-1/2 -translate-y-1/2 grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-black/60 text-white backdrop-blur-md transition-all hover:bg-[#d59a4c] hover:text-[#0f1720]"
                      >
                        <ChevronRight size={22} />
                      </button>
                    </>
                  )}
                </div>

                {/* Footer Caption */}
                <div className="flex flex-col justify-between gap-4 border-t border-white/10 p-6 sm:flex-row sm:items-center">
                  <div>
                    <h4 className="font-[family-name:var(--font-serif)] text-2xl font-semibold text-white">
                      {activeItem.title}
                    </h4>
                    <p className="mt-1 text-xs text-[#aeb6bf] flex items-center gap-1.5">
                      <MapPin size={13} className="text-[#d59a4c]" />
                      {activeItem.location}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-[#c7cdd4]">
                      {activeItem.description}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="shrink-0 inline-flex items-center justify-center gap-2 rounded-full bg-[#d59a4c] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#0f1720] transition-colors hover:bg-[#efb85f]"
                  >
                    <span>Inquire About This Style</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
