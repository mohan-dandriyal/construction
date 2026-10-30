"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  House,
  Leaf,
  Warehouse,
  Box,
  Sofa,
  PencilRuler,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import service from "@/app/data/services.json"

import ServiceCard from "@/app/component/home/ServiceCard";

import { Playfair_Display, Poppins } from "next/font/google";
import { Eyebrow, SectionDescription, SectionHeiglightText, SectionTitle } from "../SectionHeader";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const PAGE_SIZE = 6; // services shown at one time
const serviceIcons = [House, Leaf, Warehouse, Box, Sofa, PencilRuler];


function Services() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(service.items.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visibleServices = service.items.slice(start, start + PAGE_SIZE);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages || p === page) return;
    setPage(p);
    sectionRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`${serif.variable} ${sans.variable} bg-[#0a0e13] px-4 py-16 font-[family-name:var(--font-sans)] text-white sm:px-8`}
    >
      <div className="mx-auto max-w-350">
       

        <div>
          <div className="flex justify-center">
            <Eyebrow text={service.section.eyebrow} />
          </div>

          <SectionTitle className="mx-auto text-center">
            {service.section.title} <br />
            <SectionHeiglightText text={service.section.accent} />
          </SectionTitle>

          <SectionDescription className="lg:w-6/12 sm:w-8/12 mx-auto text-center" text={service.section.description} />
        </div>

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, i) => (
            // global index in the key: some titles repeat, and it remounts cards on page change
            <ServiceCard
              key={start + i}
              service={{ ...service, icon: serviceIcons[(start + i) % serviceIcons.length] }}
              index={i}
              total={visibleServices.length}
            />
          ))}
        </div>

        {/* ---------- Pagination ---------- */}
        {totalPages > 1 && (
          <nav
            aria-label="Services pagination"
            className="mt-12 flex items-center justify-center gap-3"
          >
            {page > 1 && (
              <PageButton
                label="Previous page"
                onClick={() => goToPage(page - 1)}
                reduceMotion={reduceMotion}
                muted
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </PageButton>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PageButton
                key={n}
                label={`Page ${n}`}
                active={n === page}
                onClick={() => goToPage(n)}
                reduceMotion={reduceMotion}
              >
                {n}
              </PageButton>
            ))}

            {page < totalPages && (
              <PageButton
                label="Next page"
                onClick={() => goToPage(page + 1)}
                reduceMotion={reduceMotion}
                muted
              >
                <ChevronRight size={18} strokeWidth={2} />
              </PageButton>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}

function PageButton({
  children,
  label,
  active,
  muted,
  onClick,
  reduceMotion,
}: {
  children: ReactNode;
  label: string;
  active?: boolean;
  muted?: boolean;
  onClick: () => void;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      className={`grid h-11 w-11 place-items-center rounded-full border text-base font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9a55b] ${active
          ? "border-[#d9a55b] bg-[#d9a55b] text-[#1b1b1b]"
          : muted
            ? "border-white/20 text-white hover:border-[#d9a55b] hover:text-[#d9a55b]"
            : "border-white/40 text-white/90 hover:border-[#d9a55b] hover:text-[#d9a55b]"
        }`}
    >
      {children}
    </motion.button>
  );
}

export default Services;