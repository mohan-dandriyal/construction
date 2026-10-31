"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import serviceData from "@/app/data/services.json";

function ServiceCard({
  service,
  index,
  total = 6,
}: {
  service: {
    title: string;
    description: string;
    image: string;
    icon: LucideIcon;
    href: string;
  };
  index: number;
  total?: number;
}) {
  const Icon = service.icon;
  const reduce = useReducedMotion();

  const isLast = index === total - 1;

  const showVSm = index % 2 === 0 && !isLast;
  const showVLg = index % 3 !== 2 && !isLast;

  const lastRowSm = Math.floor(index / 2) === Math.floor((total - 1) / 2);
  const lastRowLg = Math.floor(index / 3) === Math.floor((total - 1) / 3);

  const hBase = isLast ? "hidden" : "block";
  const hSm = lastRowSm ? "sm:hidden" : "sm:block";
  const hLg = lastRowLg ? "lg:hidden" : "lg:block";

  const vSm = showVSm ? "sm:block" : "";
  const vLg = showVLg ? "lg:block" : "lg:hidden";

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: "easeOut" }}
      className="group/card relative flex min-w-0 items-start gap-4 px-4 py-7 sm:gap-5 sm:px-6 sm:py-8"
    >
      {/* horizontal divider (bottom) */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-[#c9964a]/50 ${hBase} ${hSm} ${hLg}`}
      />
      {/* vertical divider (right) */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-3 right-0 top-3 hidden w-px bg-[#c9964a]/50 ${vSm} ${vLg}`}
      />

      <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl sm:h-32 sm:w-32">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="144px"
          className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
        />
      </div>

      <div className="min-w-0">
        <motion.span
          whileHover={reduce ? undefined : { rotate: 360 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-[#d9a55b] text-[#d9a55b]"
        >
          <Icon size={18} strokeWidth={1.5} />
        </motion.span>

        <h3 className="font-[family-name:var(--font-serif)] text-xl font-semibold text-white">
          {service.title}
        </h3>
        <span className="my-3 block h-0.5 w-10 bg-[#d9a55b] transition-all duration-500 group-hover/card:w-16" />

        <p className="text-sm leading-relaxed text-white/80">
          {service.description}
        </p>

        <Link
          href={service.href}
          className="group mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#d9a55b] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9a55b]"
        >
          {serviceData.section.readMoreLabel}
          <ArrowRight
            size={16}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>
      </div>
    </motion.article>
  );
}

export default ServiceCard;
