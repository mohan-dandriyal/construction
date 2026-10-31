"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Playfair_Display, Poppins } from "next/font/google";
import TeamCard from "@/app/component/team/Teamcard";
import Pagination from "@/app/component/team/Pagination";
import { teamMembers, teamSectionData } from "@/app/utills/teams";
import {
  Eyebrow,
  SectionDescription,
  SectionHeiglightText,
  SectionTitle,
} from "../SectionHeader";

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

const PAGE_SIZE = 8;

const grid = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function TeamSection() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(teamMembers.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visible = teamMembers.slice(start, start + PAGE_SIZE);

  const changePage = (p: number) => {
    if (p < 1 || p > totalPages || p === page) return;
    setPage(p);
    sectionRef.current?.scrollIntoView({
      behavior: reduce ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <section
        ref={sectionRef}
        id={teamSectionData.id}
        className={`${serif.variable} ${sans.variable} relative overflow-hidden bg-[#0b141d] px-4 py-14 font-[family-name:var(--font-sans)] text-white sm:px-8 lg:py-20`}
      >
        <div className="flex justify-center">
          <Eyebrow text={teamSectionData.eyebrow} />
        </div>

        <SectionTitle className="mx-auto text-center">
          {teamSectionData.title}{" "}
          <SectionHeiglightText text={teamSectionData.accent} />
        </SectionTitle>
        <SectionDescription
          className="mx-auto text-center sm:w-10/12 lg:w-6/12"
          text={teamSectionData.description}
        />

        {/* dotted decoration, bottom-left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-4 hidden h-40 w-52 opacity-30 [background-image:radial-gradient(#d9a55b_1.2px,transparent_1.2px)] [background-size:18px_18px] [mask-image:linear-gradient(to_top_right,black,transparent_85%)] lg:block"
        />

        <div className="relative mx-auto mt-10 max-w-[1300px]">
          <motion.ul
            key={page}
            variants={grid}
            initial={reduce ? "show" : "hidden"}
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {visible.map((member) => (
              <TeamCard key={member.slug} member={member} />
            ))}
          </motion.ul>

          <Pagination
            page={page}
            totalPages={totalPages}
            onChange={changePage}
            label={teamSectionData.paginationAriaLabel}
          />
        </div>
      </section>
    </div>
  );
}
