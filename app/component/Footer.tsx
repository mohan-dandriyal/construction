"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";
import siteData from "@/app/data/site.json";
import serviceData from "@/app/data/services.json";
import contactData from "@/app/data/contact.json";

/**
 * Scroll-reveal props (replaces AOS).
 * Spread onto any motion.* element: <motion.div {...reveal(reduce, { y: 30 }, 0.2)} />
 */
function reveal(
  reduce: boolean | null,
  from: { x?: number; y?: number; scale?: number } = {},
  delay = 0
): MotionProps {
  return {
    initial: reduce ? false : { opacity: 0, ...from },
    whileInView: { opacity: 1, x: 0, y: 0, scale: 1 },
    viewport: { once: true, amount: 0.15 },
    transition: { duration: 0.8, delay, ease: "easeOut" as const },
  };
}

/* lucide-react no longer ships brand logos, so these four use the same
   24x24 / 2px-stroke style as lucide's icons and accept the same props. */
function BrandSvg({ size = 20, children }: { size?: number; children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}
const Facebook = (p: { size?: number }) => (
  <BrandSvg {...p}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </BrandSvg>
);
const Instagram = (p: { size?: number }) => (
  <BrandSvg {...p}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </BrandSvg>
);
const Linkedin = (p: { size?: number }) => (
  <BrandSvg {...p}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </BrandSvg>
);
const Youtube = (p: { size?: number }) => (
  <BrandSvg {...p}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </BrandSvg>
);

const quickLinks = siteData.navigation.links;

const services = serviceData.items.map((service) => service.title);

const socials = [
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "YouTube", href: "#", Icon: Youtube },
];

const contactIconMap = { phone: Phone, mail: Mail, location: MapPin } as const;
const contacts = contactData.contactLines.map((contact) => ({
  Icon: contactIconMap[contact.kind as keyof typeof contactIconMap] ?? Clock,
  lines: [contact.main, ...contact.sub],
}));


function Heading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8">
      <h4 className="font-display text-[18px] font-medium text-white">{children}</h4>
      <span className="mt-2 block h-0.5 w-14 bg-[#e0a04c]" />
    </div>
  );
}

export default function Footer() {
  const reduce = useReducedMotion();

  return (
    <footer id="contact" className="relative overflow-hidden bg-[#0a121a] text-[#cfd5db]">
      {/* Faded building in the bottom-left */}
      <div className="pointer-events-none absolute bottom-0 left-0 hidden h-95 w-[100%] opacity-30 [mask-image:linear-gradient(to_right,black_40%,transparent)] lg:block">
        <Image
          src="/footer-bg.png"
          alt=""
          fill
          className="object-contain object-left-bottom"
        />
      </div>

      <div className="relative mx-auto max-w-350 px-6 pt-14 pb-12 sm:px-10 lg:px-[4%]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.1fr_1.3fr] lg:gap-0">
          {/* Brand */}
          <motion.div {...reveal(reduce, { y: 30 })}>
            <Image
              src="/logo.png"
              alt="Arcova Architecture Studio"
              width={440}
              height={130}
              className="h-auto w-[300px] max-w-full lg:w-[400px]"
            />

            <p className="mt-8 text-[15px] leading-8">
              At Arcova Architecture Studio, we design inspiring spaces that blend
              creativity, functionality and sustainability, turning your vision into
              timeless environments.
            </p>

            <div className="mt-8 flex gap-4">
              {socials.map(({ label, href, Icon }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...reveal(reduce, { y: 16, scale: 0.8 }, 0.3 + i * 0.08)}
                  whileHover={reduce ? undefined : { y: -5, scale: 1.08 }}
                  whileTap={reduce ? undefined : { scale: 0.92 }}
                  className="grid h-[42px] w-[42px] place-items-center rounded-full border-[1.5px] border-gold text-white transition-colors border-[#e0a04c] hover:bg-gold bg-[#1f2a35]"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            {...reveal(reduce, { y: 30 }, 0.1)}
            className="lg:border-l lg:border-[#1f2a35] lg:px-8"
          >
            <Heading>Quick Links</Heading>
            <ul className="space-y-[18px]">
              {quickLinks.map(({ label, href }, i) => (
                <motion.li key={label} {...reveal(reduce, { x: -16 }, 0.25 + i * 0.05)}>
                  <motion.div
                    whileHover={reduce ? undefined : { x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href={href} className="flex items-center gap-2 transition-colors hover:text-gold text-sm">
                      <ChevronRight size={16} className="text-gold text-[#e0a04c]" />
                      {label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            {...reveal(reduce, { y: 30 }, 0.2)}
            className="lg:border-l lg:border-[#1f2a35] lg:px-8"
          >
            <Heading>Our Services</Heading>
            <ul className="space-y-[15px]">
              {services.map((label, i) => (
                <motion.li key={label} {...reveal(reduce, { x: -16 }, 0.35 + i * 0.05)}>
                  <motion.div
                    whileHover={reduce ? undefined : { x: 6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link href="/services" className="flex items-center gap-2 transition-colors hover:text-gold text-sm">
                      <ChevronRight size={16} className="shrink-0 text-gold text-[#e0a04c] " />
                      {label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            {...reveal(reduce, { y: 30 }, 0.3)}
            className="lg:border-l lg:border-[#1f2a35] lg:px-8"
          >
            <Heading>Contact Information</Heading>
            <ul className="space-y-6">
              {contacts.map(({ Icon, lines }, i) => (
                <motion.li
                  key={i}
                  {...reveal(reduce, { y: 20 }, 0.4 + i * 0.1)}
                  className="flex items-center gap-3"
                >
                  <motion.span
                    whileHover={reduce ? undefined : { rotate: 12, scale: 1.1 }}
                    className="grid h-[40px] w-[40px] shrink-0 place-items-center rounded-full bg-[#a97c45] text-white"
                  >
                    <Icon size={18} />
                  </motion.span>
                  <div className="text-[15px] leading-7 text-sm">
                    {lines.map((l) => (
                      <div key={l} className=" text-sm">
                        {l}
                      </div>
                    ))}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>

      {/* Bottom bar */}
      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative border-t border-gold/40"
      >
        <p className="mx-auto max-w-350 px-6 py-8 text-[15px] sm:px-10 lg:px-[4%]">
          © 2026 Arcova Architecture Studio. All Rights Reserved.
        </p>
      </motion.div>
    </footer>
  );
}
