"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { TeamMember } from "@/app/utills/teams";

/** Used by the parent grid's stagger: parent sets "hidden" / "show", cards inherit it. */
export const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function TeamCard({ member }: { member: TeamMember }) {
  const reduce = useReducedMotion();

  return (
    <motion.li
      variants={cardVariants}
      whileHover={reduce ? undefined : { y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="group/card overflow-hidden rounded-xl border border-white/10 bg-[#0f1a26] transition-colors duration-300 hover:border-[#d9a55b]/50"
    >
      {/* photo + role badge */}
      <div className="relative aspect-[3/2] overflow-hidden">
        <Image
          src={member.image}
          alt={`${member.name}, ${member.role}`}
          fill
          sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
          className="object-cover object-top transition-transform duration-700 ease-out group-hover/card:scale-105"
        />
        <span className="absolute bottom-0 left-3 rounded-t-md bg-[#d9a55b] px-3 py-1.5 text-sm font-semibold text-[#14110c]">
          {member.role}
        </span>
      </div>

      {/* details */}
      <div className="flex items-start justify-between gap-3 px-4 pb-5 pt-4">
        <div className="min-w-0">
          <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-white">
            {member.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-[#b9c0c8]">{member.bio}</p>
        </div>

        <motion.div
          whileHover={reduce ? undefined : { scale: 1.12 }}
          whileTap={reduce ? undefined : { scale: 0.92 }}
          className="shrink-0"
        >
        </motion.div>
      </div>
    </motion.li>
  );
}