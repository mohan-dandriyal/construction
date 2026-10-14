"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  x?: number;
  y?: number;
  scale?: number;
  delay?: number;
  duration?: number;
};

/** Scroll-reveal wrapper: fades/slides/scales its children in once when they enter the viewport. */
export default function Reveal({
  children,
  className,
  x = 0,
  y = 24,
  scale = 1,
  delay = 0,
  duration = 0.7,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, x, y, scale }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}