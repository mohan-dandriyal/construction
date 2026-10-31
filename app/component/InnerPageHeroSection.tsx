"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Menu } from "lucide-react";
import Navbar from "./ui/Navbar";
import siteData from "@/app/data/site.json";

export default function InnerPageHeroSection({
  title,
  image,
  curentPage,
}: {
  title: string;
  image: string;
  curentPage: string;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />

      <section className="about-hero">
        <Image
          className="about-hero__background"
          src={image}
          alt={title}
          fill
          priority
          sizes="100vw"
        />
        <div className="about-hero__shade" aria-hidden="true" />

        <header className="site-header mx-auto max-w-350">
          <Link
            className="site-logo"
            href="/"
            aria-label={siteData.logo.homeAriaLabel}
          >
            <Image
              src={siteData.logo.src}
              alt={siteData.logo.alt}
              fill
              priority
              sizes="(max-width: 600px) 190px, 320px"
            />
          </Link>

          <button
            className="menu-button"
            type="button"
            aria-label={siteData.hero.openMenuAria}
            aria-expanded={menuOpen}
            aria-controls="about-navigation"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={25} />
          </button>
        </header>

        <div className="about-hero__content">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {title}
          </motion.h1>
          <motion.nav
            aria-label={siteData.breadcrumb.ariaLabel}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease: "easeOut" }}
            className="about-hero__breadcrumb text-sm"
          >
            <Link href="/" className="text-xs">
              {siteData.breadcrumb.homeLabel}
            </Link>
            <ChevronRight aria-hidden="true" size={15} />
            <span aria-current="page" className="text-xs">
              {curentPage}
            </span>
          </motion.nav>
        </div>
      </section>
    </>
  );
}
