"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { useRouter } from "next/navigation";

type ThemeButtonProps = {
    href: string;
    children: ReactNode;
};

const liftVariants = {
    rest: { y: 0, scale: 1 },
    hover: { y: -4 },
    tap: { y: -1, scale: 0.97 },
};

export const PrimaryLinkButton = (props: ThemeButtonProps) => {
    const { href, children } = props;

    return (
        <Link className="button button--secondary text-white" href={href}>
            {children}
        </Link>
    );
};

export const OutlineLinkButton = (props: ThemeButtonProps) => {
    const { href, children } = props;

    return (
        <motion.div
            whileHover="hover"
            whileTap="tap"
            initial="rest"
            animate="rest"
            variants={liftVariants}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-10 inline-block"
        >
            <Link
                href={href}
                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-md border border-[#e0a04c] px-4 py-2 text-sm font-medium tracking-wider text-[#e0a04c] transition-[color,box-shadow] duration-300 hover:text-white hover:shadow-[0_10px_30px_rgba(217,165,91,0.35)]"
            >
                {/* Gradient fill, left to right */}
                <motion.span
                    aria-hidden
                    className="absolute inset-0 origin-left bg-gradient-to-r from-[#b3803d] via-[#c68427] to-[#774d19]"
                    variants={{
                        rest: { scaleX: 0 },
                        hover: { scaleX: 1 },
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                />

                {/* Shine sweep */}
                <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    variants={{
                        rest: { x: "-150%" },
                        hover: { x: "400%" },
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />

                <span className="relative z-10 flex items-center">{children}</span>
            </Link>
        </motion.div>
    );
};

export const LinearBgButton = (props: ThemeButtonProps) => {
    const { href, children } = props;
    console.log("href ---------", href)
    return (
        <motion.div
            whileHover="hover"
            whileTap="tap"
            initial="rest"
            animate="rest"
            variants={liftVariants}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mt-10 inline-block"
        >
            <Link
                href={href}
                className="group relative inline-flex items-center gap-4 overflow-hidden rounded-full bg-gradient-to-r from-[#b3803d] via-[#c68427] to-[#774d19] bg-[length:200%_100%] bg-left px-8 py-2.5 text-sm font-medium text-white shadow-[0_10px_30px_rgba(197,143,78,0.25)] transition-[background-position,box-shadow] duration-500 ease-out hover:bg-right hover:shadow-[0_16px_40px_rgba(217,165,91,0.5)]"
            >
                {/* Shine sweep */}
                <motion.span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    variants={{
                        rest: { x: "-150%" },
                        hover: { x: "400%" },
                    }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                />
                <span className="relative z-10">{children}</span>
            </Link>
        </motion.div>
    );
};