"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const GOLD = "#c9954f";

const testimonials = [
    {
        name: "Priya Mehta",
        role: "Homeowner, Gurugram",
        avatar: "/profile-1.jpg",
        text: "From the first meeting they listened carefully and turned our rough ideas into a living room we love. Every material and finish was chosen with care.",
    },
    {
        name: "Rahul Sharma",
        role: "Homeowner, New Delhi",
        avatar: "/profile-1.jpg",
        text: "Our home was just a basic space before, but their design completely transformed it into a beautiful and functional home. The team understood our needs, suggested creative ideas and delivered exactly what we imagined. Very professional, timely and great attention to detail. Highly recommended!",
    },
    {
        name: "Ankit Verma",
        role: "Villa Owner, Noida",
        avatar: "/profile-1.jpg",
        text: "Delivered on schedule and within budget. The lighting and woodwork gave our villa a warm, premium feel that guests always comment on.",
    },
    {
        name: "Neha Kapoor",
        role: "Apartment Owner, Faridabad",
        avatar: "/profile-1.jpg",
        text: "A smooth experience from concept to handover. Smart storage ideas made our compact apartment feel open and elegant.",
    },
];

export default function TestimonialSection() {
    const [index, setIndex] = useState(1);
    const [paused, setPaused] = useState(false);
    const reduce = useReducedMotion();

    useEffect(() => {
        if (paused) return;
        const id = setInterval(
            () => setIndex((i) => (i + 1) % testimonials.length),
            5000
        );
        return () => clearInterval(id);
    }, [paused]);

    const item = testimonials[index];

    return (
        <section
            id="testimonials"
            className="relative flex flex-col overflow-hidden bg-[#0b141d] lg:block lg:min-h-[820px]"
        >
            {/* ===== Room image: full-height panel on the right (desktop), stacked on mobile ===== */}
            <motion.div
                initial={reduce ? false : { opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative order-2 h-72 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]"
            >
                <Image
                    src="/service-1.png"
                    alt="Luxury living room interior"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover"
                />
            </motion.div>

            {/* ===== Left content ===== */}
            <div className="relative z-10 order-1 px-4 pb-10 pt-12 sm:px-6 lg:px-0 lg:pb-16 lg:pl-[5%] lg:pt-20">
                {/* Eyebrow */}
                <div className="flex items-center gap-5">
                    <span className="h-px w-14 bg-[#c9954f] sm:w-20" />
                    <p className="text-sm font-medium uppercase tracking-[0.3em] text-[#c9954f]">
                        Testimonial
                    </p>
                    <span className="h-px w-14 bg-[#c9954f] sm:w-28" />
                </div>

                {/* Heading */}
                <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-bold leading-tight sm:text-5xl lg:text-5xl lg:w-5/12 mb-6 sm:w-10/12">
                    What They’re Talking About{" "}
                    <span style={{ color: GOLD }}>Our Work</span> ?
                </h2>

                {/* Card (wider than left column so it overlaps the image) */}
                <motion.div
                    initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="w-full lg:w-[51.5vw]"
                >
                    <div
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        className="relative flex w-full flex-col border-l-[5px] bg-gradient-to-br from-[#17222d] to-[#111b25] shadow-[0_20px_50px_rgba(0,0,0,0.55)] lg:min-h-[478px] lg:flex-row"
                        style={{ borderColor: GOLD }}
                    >
                        {/* Dots */}
                        <div className="flex flex-row gap-[18px] px-6 pt-5 lg:flex-col lg:justify-center lg:pl-14 lg:pr-28 lg:pt-0">
                            {testimonials.map((_, i) => (
                                <motion.button
                                    key={i}
                                    aria-label={`Show testimonial ${i + 1}`}
                                    aria-pressed={i === index}
                                    onClick={() => setIndex(i)}
                                    whileHover={{ scale: 1.3 }}
                                    whileTap={{ scale: 0.9 }}
                                    animate={{ scale: i === index ? 1.15 : 1 }}
                                    className="h-4 w-4 cursor-pointer rounded-full border-[1.5px]"
                                    style={
                                        i === index
                                            ? { borderColor: GOLD, backgroundColor: GOLD }
                                            : { borderColor: "#77808a", backgroundColor: "transparent" }
                                    }
                                />
                            ))}
                        </div>

                        {/* Content */}
                        <div className="flex-1 px-6 pb-7 pt-5 lg:py-12 lg:pl-0 lg:pr-12">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={index}
                                    className="flex h-full flex-col justify-between"
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -24 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                >
                                    <p className="mb-8 max-w-[690px] text-[17px] leading-[1.8] text-[#cfd5db] lg:text-[22px] lg:leading-[1.7]">
                                        {item.text}
                                    </p>

                                    <div className="flex items-center gap-5">
                                        <motion.div
                                            className="h-20 w-20 flex-none overflow-hidden rounded-full border-2 lg:h-28 lg:w-28"
                                            style={{ borderColor: GOLD }}
                                            initial={{ scale: 0.6, rotate: -20 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            transition={{ type: "spring", stiffness: 200, damping: 14 }}
                                        >
                                            <Image
                                                src={item.avatar}
                                                alt={item.name}
                                                width={112}
                                                height={112}
                                                className="h-full w-full object-cover"
                                            />
                                        </motion.div>

                                        <div>
                                            <div className="font-[family-name:var(--font-serif)] text-2xl font-bold text-white lg:text-[28px]">
                                                {item.name}
                                            </div>
                                            <div className="mt-1 text-lg text-[#cfd5db] lg:text-xl">
                                                {item.role}
                                            </div>
                                        </div>

                                        <motion.div
                                            className="ml-auto h-[60px] font-[family-name:var(--font-serif)] text-[90px] font-bold leading-[0.8] lg:text-[130px]"
                                            style={{ color: GOLD }}
                                            initial={{ opacity: 0, scale: 0.5 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 0.2, duration: 0.4 }}
                                        >
                                            ”
                                        </motion.div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}