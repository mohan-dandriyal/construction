"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    Gem,
    House,
    Leaf,
    Menu,
    Play,
    Users,
    X,
} from "lucide-react";
import { PrimaryLinkButton } from "../ui/ThemeButtons";
import Navbar from "../ui/Navbar";

const highlights = [
    { label: ["Modern", "Designs"], icon: House },
    { label: ["Sustainable", "Solutions"], icon: Leaf },
    { label: ["Timeless", "Excellence"], icon: Gem },
    { label: ["Client", "Focused"], icon: Users },
];

const navigation = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/Gallery" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
];

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
                src="/banner/hero-banner.png"
                alt=""
                fill
                priority
                sizes="100vw"
            />
            <div className="hero__shade" aria-hidden="true" />

            <header className="site-header">
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
                    <p>Arcova Architecture Studio</p>
                    <span />
                </motion.div>

                <h1 id="hero-title">
                    We Design Spaces
                    <span>That Inspire Life</span>
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
                        Explore Our Projects
                        <ArrowRight aria-hidden="true" size={21} strokeWidth={1.8} />
                    </Link>
                </div>

                {/* <div className="hero-highlights">
                    {highlights.map(({ icon: Icon, label }, index) => (
                        <motion.div
                            className="hero-highlight"
                            key={label.join(" ")}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 + index * 0.1, duration: 0.45 }}
                        >
                            <span className="hero-highlight__icon">
                                <Icon aria-hidden="true" size={32} strokeWidth={1.7} />
                            </span>
                            <span className="hero-highlight__label">
                                {label.map((line) => <span key={line}>{line}</span>)}
                            </span>
                        </motion.div>
                    ))}
                </div> */}
            </motion.div>
        </section>
        </>
    );
}
