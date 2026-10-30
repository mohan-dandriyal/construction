
"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type SectionTitleProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
};

type EyebrowProps = {
    text: string;
    className?: string;
    left?: boolean;
};

type SectionDescriptionProps = {
    text: string;
    className?: string;
    delay?: number;
};

function reveal(
    reduce: boolean | null,
    from: { x?: number; y?: number; scale?: number } = {},
    delay = 0
) {
    return {
        initial: reduce ? false : { opacity: 0, ...from },
        whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
        viewport: { once: true, amount: 0.2 },
        transition: {
            duration: reduce ? 0 : 0.8,
            delay: reduce ? 0 : delay,
            ease,
        },
    };
}

export const Eyebrow = ({
    text,
    className = "",
    left = true,
}: EyebrowProps) => {
    const reduce = useReducedMotion();

    return (
        <motion.div
            {...reveal(reduce, { y: 16 }, 0.05)}
            className={`mb-5 flex items-center gap-4 text-[#d9a850] ${className}`}
        >
            {
                left &&
                <motion.span
                    initial={reduce ? false : { scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: reduce ? 0 : 0.8,
                        ease,
                    }}
                    style={{ originX: 0 }}
                    className="h-px w-12 bg-[#d9a850] sm:w-20"
                />
            }

            <span className="text-xs font-semibold uppercase tracking-[0.3em] sm:text-sm sm:tracking-[0.35em]">
                {text}
            </span>

            <motion.span
                initial={reduce ? false : { scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: reduce ? 0 : 0.8,
                    ease,
                }}
                style={{ originX: 0 }}
                className="h-px w-12 bg-[#d9a850] sm:w-20"
            />
        </motion.div>
    );
};

export const SectionTitle = ({
    children,
    className = "",
    delay = 0.1,
}: SectionTitleProps) => {
    const reduce = useReducedMotion();

    return (
        <motion.h2
            {...reveal(reduce, { y: 30 }, delay)}
            className={`max-w-[700px] font-[family-name:var(--font-serif)] text-4xl font-medium leading-[1.08] tracking-[-0.045em] text-var(--title-color) text-white/90 sm:text-5xl lg:text-[54px] xl:text-[62px] ${className}`}
        >
            {children}
        </motion.h2>
    );
};

export const SectionHeiglightText = ({
    text,
    className = "",
}: {
    text: string;
    className?: string;
}) => {
    return (
        <span className={`text-[#c8963e] ${className}`}>
            {text}
        </span>
    );
};

export const SectionDescription = ({
    text,
    className = "",
    delay = 0.2,
}: SectionDescriptionProps) => {
    const reduce = useReducedMotion();

    return (
        <motion.p
            {...reveal(reduce, { y: 24 }, delay)}
            className={`mt-2 text-[16px] leading-8 text-gray-400 text-var(--title-color) sm:text-[17px] sm:leading-[2] ${className}`}
        >
            {text}
        </motion.p>
    );
};

