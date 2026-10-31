"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Playfair_Display, DM_Sans, Barlow } from "next/font/google";
import { motion, useReducedMotion } from "framer-motion";
import { Building2, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { LinearBgButton } from "../ui/ThemeButtons";
import { Eyebrow, SectionHeiglightText, SectionTitle } from "../SectionHeader";
import data from "@/app/data/projects.json";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});
const dmSans = DM_Sans({ subsets: ["latin"], display: "swap" });
const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const PAGE_SIZE = 3;

export default function ProjectCard() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);

  const projects = data.projects ?? [];
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visibleProjects = projects.slice(start, start + PAGE_SIZE);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages || p === page) return;
    setPage(p);
    sectionRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section className="mt-12 sm:mt-20">
      <div className="mx-auto max-w-360">
        <div className="flex justify-center">
          <Eyebrow text={data.section.Eyebrow} />
        </div>

        <SectionTitle className="mx-auto text-center">
          {data.section.title} <br />
          <SectionHeiglightText text={data.section.accent} />
        </SectionTitle>

        <div
          ref={sectionRef}
          className={`${dmSans.className} flex flex-col gap-10 overflow-hidden px-4 py-12 sm:px-6 lg:px-10 lg:py-10`}
        >
          {visibleProjects.map((project, i) => {
            const ind = start + i;

            return (
              <div
                key={project.id}
                className={`mx-auto w-full sm:w-10/12 md:flex ${
                  ind % 2 !== 0 ? "flex-row-reverse" : ""
                }`}
              >
                {/* ---------- Image ---------- */}
                <div className="group relative aspect-[5/4] flex-1 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    priority={i === 0}
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  />
                </div>

                {/* ---------- Content card ---------- */}
                <div className="mt-auto h-[90%] flex-1">
                  <div className="relative flex h-full flex-col justify-center overflow-hidden bg-[#2a2a2a] px-6 py-10 sm:px-10 sm:py-12 lg:px-12">
                    {/* gold bar */}
                    <motion.span
                      aria-hidden="true"
                      initial={reduceMotion ? false : { scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                      style={{ originX: 0 }}
                      className="absolute left-6 top-0 h-[10px] w-28 bg-[#d49a46] sm:left-10 lg:left-12"
                    />

                    {/* faint decorative icon */}
                    <Building2
                      aria-hidden="true"
                      strokeWidth={1}
                      className="pointer-events-none absolute right-6 top-6 h-20 w-20 text-white/10"
                    />

                    <p
                      className={`${barlow.className} text-sm font-medium uppercase tracking-[0.3em] text-[#d49a46]`}
                    >
                      {project?.category}
                    </p>

                    <h2
                      className={`${playfair.className} mt-4 text-2xl leading-tight text-white sm:text-3xl`}
                    >
                      {project?.title}
                    </h2>

                    <p className="mt-6 max-w-lg text-base leading-relaxed text-neutral-400 sm:text-lg">
                      {project?.description}
                    </p>

                    <LinearBgButton href={`/projects/${project.id}`}>
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 -z-0 origin-left scale-x-0 bg-[#d49a46] transition-transform duration-300 ease-out group-hover/btn:scale-x-100"
                        />
                        <span className="relative z-10">
                          {data.section.buttonLabel}
                        </span>
                        <ArrowRight
                          aria-hidden="true"
                          className="relative z-10 h-4 w-4 -translate-x-1 transition-all duration-300 group-hover:ml-2 group-hover/btn:translate-x-0 group-hover/btn:opacity-100"
                        />
                      </div>
                    </LinearBgButton>
                  </div>
                </div>
              </div>
            );
          })}

          {/* ---------- Pagination ---------- */}
          {totalPages > 1 && (
            <nav
              aria-label={data.section.paginationAriaLabel}
              className={`${barlow.className} mt-4 flex items-center justify-center gap-3`}
            >
              {page > 1 && (
                <PageButton
                  label={data.section.prevPageLabel}
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
                  label={`${data.section.pagePrefix} ${n}`}
                  active={n === page}
                  onClick={() => goToPage(n)}
                  reduceMotion={reduceMotion}
                >
                  {n}
                </PageButton>
              ))}

              {page < totalPages && (
                <PageButton
                  label={data.section.nextPageLabel}
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
  children: React.ReactNode;
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
      className={`grid h-11 w-11 place-items-center rounded-full border text-base font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d49a46] ${
        active
          ? "border-[#d49a46] bg-[#d49a46] text-[#1b1b1b]"
          : muted
          ? "border-white/20 text-white hover:border-[#d49a46] hover:text-[#d49a46]"
          : "border-white/40 text-white/90 hover:border-[#d49a46] hover:text-[#d49a46]"
      }`}
    >
      {children}
    </motion.button>
  );
}
