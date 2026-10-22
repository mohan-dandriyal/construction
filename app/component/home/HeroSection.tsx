"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Menu,
    X,
} from "lucide-react";
import Navbar from "../ui/Navbar";
import siteData from "@/app/data/site.json";

export default function HeroSection() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* ===== Side drawer ===== */}
            <Navbar
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen}
            />

            <section id="home" className="hero">
                <Image
                    className="hero__background"
                    src={siteData.hero.image}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                />
                <div className="hero__shade" aria-hidden="true" />

                <div className="mx-auto max-w-350">
                    <header className="site-header mx-auto max-w-350">
                        <Link className="site-logo" href="/" aria-label="Arcova Architecture Studio home">
                            <Image
                                src="/logo.png"
                                alt="Arcova Architecture Studio"
                                fill
                                priority
                                sizes="(max-width: 600px) 220px, 320px"
                            />
                        </Link>
                        <button
                            className="menu-button"
                            type="button"
                            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                            aria-expanded={menuOpen}
                            aria-controls="hero-navigation"
                            onClick={() => setMenuOpen((open) => !open)}
                        >
                            {menuOpen ? <X size={25} /> : <Menu size={25} />}
                        </button>

                    </header>



                    <motion.div
                        className="hero-card"
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <motion.div
                            className="eyebrow"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15, duration: 0.6 }}
                        >
                            <span />
                            <p>{siteData.hero.eyebrow}</p>
                            <span />
                        </motion.div>

                        <h1 id="hero-title">
                            {siteData.hero.title}
                            <span>{siteData.hero.accent}</span>
                        </h1>

                        <p className="hero-card__description">
                            Transforming ideas into timeless architectural experiences. We create
                            innovative, functional, and elegant spaces that reflect your vision
                            and lifestyle.
                        </p>

                        <div className="hero-actions">
                            <Link
                                className="button button--primary"
                                href="/projects"
                            // whileHover={{ y: -3 }}
                            // whileTap={{ scale: 0.98 }}
                            >
                                {siteData.hero.button}
                                <ArrowRight aria-hidden="true" size={21} strokeWidth={1.8} />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
