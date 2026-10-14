"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

type Props = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
  label?: string;
};

export default function Pagination({ page, totalPages, onChange, label = "Pagination" }: Props) {
  if (totalPages <= 1) return null;

  return (
    <nav aria-label={label} className="mt-10 flex items-center justify-center gap-3">
      <PageButton
        label="Previous page"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        tone="light"
      >
        <ChevronLeft size={18} strokeWidth={2} />
      </PageButton>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <PageButton
          key={n}
          label={`Page ${n}`}
          active={n === page}
          onClick={() => onChange(n)}
        >
          {n}
        </PageButton>
      ))}

      <PageButton
        label="Next page"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        tone="gold"
      >
        <ChevronRight size={18} strokeWidth={2} />
      </PageButton>
    </nav>
  );
}

function PageButton({
  children,
  label,
  active,
  disabled,
  tone,
  onClick,
}: {
  children: ReactNode;
  label: string;
  active?: boolean;
  disabled?: boolean;
  tone?: "light" | "gold";
  onClick: () => void;
}) {
  const reduce = useReducedMotion();

  const style = active
    ? "border-[#d9a55b] bg-[#d9a55b] text-[#14110c]"
    : tone === "gold"
    ? "border-[#d9a55b]/70 text-white hover:bg-[#d9a55b]/15"
    : "border-white/40 text-white hover:border-[#d9a55b] hover:text-[#d9a55b]";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      whileHover={reduce || disabled ? undefined : { scale: 1.1 }}
      whileTap={reduce || disabled ? undefined : { scale: 0.92 }}
      className={`grid h-10 w-10 place-items-center rounded-full border bg-[#0b1520] text-sm font-semibold transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9a55b] disabled:cursor-not-allowed disabled:opacity-40 ${style}`}
    >
      {children}
    </motion.button>
  );
}