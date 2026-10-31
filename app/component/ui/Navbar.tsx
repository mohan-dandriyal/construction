"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { AlarmClock, ChevronDown, Mail, Phone, X } from "lucide-react";
import { FaLinkedinIn, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import type { Dispatch, SetStateAction } from "react";
import siteData from "@/app/data/site.json";

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const navigation: NavItem[] = siteData.navigation.links;

const contactIconMap = {
  phone: Phone,
  mail: Mail,
  clock: AlarmClock,
} as const;

const contactInfo = siteData.navigation.contactInfo.map((info) => ({
  ...info,
  icon: contactIconMap[info.kind as keyof typeof contactIconMap] ?? Phone,
}));

const socialIconMap = {
  twitter: FaTwitter,
  facebook: FaFacebookF,
  linkedin: FaLinkedinIn,
  instagram: FaInstagram,
} as const;

const socials = siteData.navigation.socials.map((social) => ({
  ...social,
  icon: socialIconMap[social.icon as keyof typeof socialIconMap] ?? FaTwitter,
}));

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Navbar({ menuOpen, setMenuOpen }: NavbarProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const closeMenu = useCallback(() => setMenuOpen(false), [setMenuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [closeMenu, menuOpen]);

  return (
    <AnimatePresence>
      {menuOpen && (
        <>
          <motion.div
            key="overlay"
            className="fixed inset-0 z-40 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <motion.aside
            key="drawer"
            id="about-navigation"
            role="dialog"
            aria-modal="true"
            aria-label={siteData.navigation.ariaLabel}
            className="fixed inset-y-0 right-0 z-50 flex w-[min(90vw,400px)] flex-col overflow-y-auto bg-[#242424] text-white shadow-2xl"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-2">
              <Link href="/" onClick={closeMenu} className="relative block h-14 w-52">
                <Image
                  src={siteData.logo.src}
                  alt={siteData.logo.alt}
                  fill
                  sizes="208px"
                  className="object-contain object-left"
                />
              </Link>
              <button
                type="button"
                aria-label={siteData.navigation.closeMenuAria}
                onClick={closeMenu}
                className="group flex h-10 w-10 cursor-pointer items-center justify-center bg-white/10 text-white/80 transition-colors duration-500 hover:bg-[#d59a4c] hover:text-white"
              >
                <X size={22} className="duration-500 group-hover:rotate-90" />
              </button>
            </div>

            <nav>
              {navigation.map((item) => {
                const hasChildren = !!item.children?.length;
                const isOpen = openDropdown === item.label;

                return (
                  <div key={item.label} className="border-b border-white/10">
                    <div className="flex items-stretch">
                      {hasChildren ? (
                        <button
                          type="button"
                          onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                          className="flex-1 px-6 py-4 text-left text-sm transition-colors hover:text-[#efb85f]"
                        >
                          {item.label}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="flex-1 px-6 py-4 text-sm transition-colors hover:text-[#efb85f]"
                        >
                          {item.label}
                        </Link>
                      )}

                      {hasChildren && (
                        <button
                          type="button"
                          aria-label={`${siteData.navigation.toggleSubmenuPrefix} ${item.label} ${siteData.navigation.toggleSubmenuSuffix}`}
                          aria-expanded={isOpen}
                          onClick={() => setOpenDropdown(isOpen ? null : item.label)}
                          className="my-3 flex w-14 items-center justify-center border-l border-white/10"
                        >
                          <ChevronDown
                            size={20}
                            className={`transition-transform duration-300 ${
                              isOpen ? "rotate-180 text-[#efb85f]" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    <AnimatePresence initial={false}>
                      {hasChildren && isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-black/20"
                        >
                          {item.children!.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              onClick={closeMenu}
                              className="block px-10 py-3 text-base text-white/75 transition-colors hover:text-[#efb85f]"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>

            <div className="grid gap-4 px-6 py-8">
              {contactInfo.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-5">
                  <Icon size={25} strokeWidth={1.5} className="mt-1 flex-none" />
                  <div>
                    <p className="text-xs uppercase tracking-wide text-[#b98748]">
                      {label}
                    </p>
                    <p className="mt-1 text-sm leading-snug">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-4 divide-x divide-white/10 border-t border-white/10">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center justify-center py-5 transition-colors hover:bg-white/5 hover:text-[#efb85f]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
