
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
    motion,
    AnimatePresence,
    useReducedMotion,
} from "framer-motion";

import testimonialsData from "@/app/data/home.json";
import { Eyebrow, SectionHeiglightText, SectionTitle } from "../SectionHeader";

const data = testimonialsData.testimonialSec;
const GOLD = data.theme.gold;

export default function TestimonialSection() {
    const [index, setIndex] = useState(
        Math.min(
            data.carousel.initialIndex,
            data.testimonials.length - 1
        )
    );
    const [paused, setPaused] = useState(false);
    const reduce = useReducedMotion();

    const testimonials = data.testimonials;
    const item = testimonials[index];

    useEffect(() => {
        if (paused || testimonials.length <= 1) return;

        const id = setInterval(() => {
            setIndex((current) => (current + 1) % testimonials.length);
        }, data.carousel.autoplayInterval);

        return () => clearInterval(id);
    }, [paused, testimonials.length]);

    if (!item) return null;

    return (
        <section
            id={data.section.id}
            className="relative flex flex-col overflow-hidden bg-[#0b141d] lg:block lg:min-h-[820px]"
        >
            {/* Right-side room image */}
            <motion.div
                initial={reduce ? false : { opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                    duration: data.animation.imageDuration,
                    ease: "easeOut",
                }}
                className="relative order-2 h-72 w-full sm:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[52%]"
            >
                <Image
                    src={data.section.image}
                    alt={data.section.imageAlt}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover"
                />
            </motion.div>

            {/* Left content */}
            <div className="relative mx-auto max-w-360">
                <div className="relative z-10 order-1 px-4 pb-10 pt-12 sm:px-6 lg:px-0 lg:pb-16 lg:pl-[5%] lg:pt-20">
                    {/* Eyebrow */}
                    <div className="lg:w-5/12 mb-10">
                        <Eyebrow text={data.section.eyebrow} />

                        <SectionTitle >
                            {data.section.headingStart} {" "}
                            <SectionHeiglightText text={data.section.headingAccent} />
                            {data.section.headingEnd}
                        </SectionTitle>
                    </div>


                    {/* Testimonial card */}
                    <motion.div
                        initial={reduce ? false : { opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: data.animation.cardDuration,
                            delay: data.animation.cardDelay,
                            ease: "easeOut",
                        }}
                        className="w-full lg:w-[51.5vw]"
                    >
                        <div
                            onMouseEnter={() => {
                                if (data.carousel.pauseOnHover) {
                                    setPaused(true);
                                }
                            }}
                            onMouseLeave={() => setPaused(false)}
                            className="relative flex w-full flex-col border-l-[5px] bg-gradient-to-br from-[#17222d] to-[#111b25] shadow-[0_20px_50px_rgba(0,0,0,0.55)] lg:min-h-[308px] lg:flex-row"
                            style={{ borderColor: GOLD }}
                        >
                            {/* Navigation dots */}
                            <div className="flex flex-row gap-[18px] px-6 pt-5 lg:flex-col lg:justify-center lg:pl-14 lg:pr-28 lg:pt-0">
                                {testimonials.map((testimonial, i) => (
                                    <motion.button
                                        key={testimonial.name}
                                        type="button"
                                        aria-label={`Show testimonial ${i + 1}`}
                                        aria-pressed={i === index}
                                        onClick={() => setIndex(i)}
                                        whileHover={{ scale: 1.3 }}
                                        whileTap={{ scale: 0.9 }}
                                        animate={{
                                            scale: i === index ? 1.15 : 1,
                                        }}
                                        className="h-4 w-4 cursor-pointer rounded-full border-[1.5px]"
                                        style={
                                            i === index
                                                ? {
                                                    borderColor: GOLD,
                                                    backgroundColor: GOLD,
                                                }
                                                : {
                                                    borderColor: "#77808a",
                                                    backgroundColor: "transparent",
                                                }
                                        }
                                    />
                                ))}
                            </div>

                            {/* Testimonial content */}
                            <div className="flex-1 px-6 pb-7 pt-5 lg:py-12 lg:pl-0 lg:pr-12">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={index}
                                        className="flex h-full flex-col justify-between"
                                        initial={
                                            reduce
                                                ? { opacity: 0 }
                                                : { opacity: 0, y: 24 }
                                        }
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={
                                            reduce
                                                ? { opacity: 0 }
                                                : { opacity: 0, y: -24 }
                                        }
                                        transition={{
                                            duration: reduce
                                                ? 0
                                                : data.animation.contentDuration,
                                            ease: "easeOut",
                                        }}
                                    >
                                        <p className="mb-8 max-w-[690px] text-[17px] leading-[1.8] text-[#cfd5db] lg:text-[22px] lg:leading-[1.7]">
                                            {item.text}
                                        </p>

                                        <div className="flex items-center gap-5">
                                            {/* Avatar */}
                                            <motion.div
                                                className="h-20 w-20 flex-none overflow-hidden rounded-full border-2 lg:h-28 lg:w-28"
                                                style={{ borderColor: GOLD }}
                                                initial={
                                                    reduce
                                                        ? false
                                                        : {
                                                            scale: 0.6,
                                                            rotate: -20,
                                                        }
                                                }
                                                animate={{
                                                    scale: 1,
                                                    rotate: 0,
                                                }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness:
                                                        data.animation.avatarStiffness,
                                                    damping:
                                                        data.animation.avatarDamping,
                                                }}
                                            >
                                                <Image
                                                    src={item.avatar}
                                                    alt={item.name}
                                                    width={112}
                                                    height={112}
                                                    className="h-full w-full object-cover"
                                                />
                                            </motion.div>

                                            {/* Name and role */}
                                            <div>
                                                <div className="font-[family-name:var(--font-serif)] text-2xl font-bold text-white lg:text-[28px]">
                                                    {item.name}
                                                </div>

                                                <div className="mt-1 text-lg text-[#cfd5db] lg:text-xl">
                                                    {item.role}
                                                </div>
                                            </div>

                                            {/* Decorative quote */}
                                            <motion.div
                                                className="ml-auto h-[60px] font-[family-name:var(--font-serif)] text-[90px] font-bold leading-[0.8] lg:text-[130px]"
                                                style={{ color: GOLD }}
                                                initial={
                                                    reduce
                                                        ? false
                                                        : {
                                                            opacity: 0,
                                                            scale: 0.5,
                                                        }
                                                }
                                                animate={{
                                                    opacity: 1,
                                                    scale: 1,
                                                }}
                                                transition={{
                                                    delay: reduce
                                                        ? 0
                                                        : data.animation.quoteDelay,
                                                    duration: reduce ? 0 : 0.4,
                                                }}
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
            </div>
        </section>
    );
}
