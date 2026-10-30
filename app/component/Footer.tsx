
"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type MotionProps,
} from "framer-motion";
import type { ReactNode, ComponentType } from "react";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
} from "lucide-react";

import footerData from "@/app/data/footer.json";

type RevealFrom = {
  x?: number;
  y?: number;
  scale?: number;
};

// Scroll reveal animation
function reveal(
  reduce: boolean | null,
  from: RevealFrom = {},
  delay = 0
): MotionProps {
  return {
    initial: reduce ? false : { opacity: 0, ...from },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: reduce ? 0 : 0.8,
      delay: reduce ? 0 : delay,
      ease: "easeOut",
    },
  };
}

// Brand icon component
function BrandSvg({
  size = 20,
  children,
}: {
  size?: number;
  children: ReactNode;
}) {
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

// Social icons
const Facebook = ({ size = 20 }: { size?: number }) => (
  <BrandSvg size={size}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </BrandSvg>
);

const Instagram = ({ size = 20 }: { size?: number }) => (
  <BrandSvg size={size}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </BrandSvg>
);

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <BrandSvg size={size}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </BrandSvg>
);

const Youtube = ({ size = 20 }: { size?: number }) => (
  <BrandSvg size={size}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </BrandSvg>
);

// Dynamic icon maps
const socialIconMap: Record<
  string,
  ComponentType<{ size?: number }>
> = {
  facebook: Facebook,
  instagram: Instagram,
  linkedin: Linkedin,
  youtube: Youtube,
};

const contactIconMap = {
  phone: Phone,
  mail: Mail,
  location: MapPin,
  clock: Clock,
};

// Reusable heading
function Heading({ children }: { children: ReactNode }) {
  return (
    <div className="mb-8">
      <h4 className="font-display text-[18px] font-medium text-white">
        {children}
      </h4>

      <span className="mt-2 block h-0.5 w-14 bg-[#e0a04c]" />
    </div>
  );
}

export default function Footer() {
  const reduce = useReducedMotion();

  const {
    id,
    background,
    textColor,
    logo,
    backgroundImage,
    brand,
    headings,
    navigation,
    services,
    socials,
    contactLines,
    copyright,
  } = footerData.footer;

  return (
    <footer
      id={id}
      className="relative overflow-hidden"
      style={{
        backgroundColor: background,
        color: textColor,
      }}
    >
      {/* Background Image */}

      <div
        className="
          pointer-events-none absolute bottom-0 left-0
          hidden h-95 w-full
          lg:block
        "
        style={{
          opacity: backgroundImage.opacity / 100,
          maskImage:
            "linear-gradient(to right, black 40%, transparent)",
        }}
      >
        <Image
          src={backgroundImage.src}
          alt={backgroundImage.alt}
          fill
          sizes="100vw"
          className="object-contain object-left-bottom"
        />
      </div>

      {/* Footer Content */}

      <div className="
        relative mx-auto max-w-350
        px-6 pb-12 pt-14
        sm:px-10 lg:px-[4%]
      ">

        <div className="
          grid gap-12
          sm:grid-cols-2
          lg:grid-cols-[1.6fr_1fr_1.1fr_1.3fr]
          lg:gap-0
        ">

          {/* Brand Section */}

          <motion.div {...reveal(reduce, { y: 30 })}>

            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              className="
                h-auto w-[300px] max-w-full
                lg:w-[400px]
              "
            />

            <p className="
              mt-8 pr-4
              text-[15px] leading-8
            ">
              {brand.description}
            </p>

            {/* Social Links */}

            <div className="mt-8 flex gap-4">

              {socials.map((social, i) => {
                const Icon =
                  socialIconMap[social.icon] ?? Facebook;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    {...reveal(
                      reduce,
                      { y: 16, scale: 0.8 },
                      0.3 + i * 0.08
                    )}
                    whileHover={
                      reduce
                        ? undefined
                        : { y: -5, scale: 1.08 }
                    }
                    whileTap={
                      reduce
                        ? undefined
                        : { scale: 0.92 }
                    }
                    className="
                      grid h-[42px] w-[42px]
                      place-items-center
                      rounded-full
                      border-[1.5px]
                      border-[#e0a04c]
                      bg-[#1f2a35]
                      text-white
                      transition-colors
                      hover:bg-[#e0a04c]
                    "
                  >
                    <Icon size={18} />
                  </motion.a>
                );
              })}

            </div>
          </motion.div>

          {/* Quick Links */}

          <motion.div
            {...reveal(reduce, { y: 30 }, 0.1)}
            className="
              lg:border-l lg:border-[#1f2a35]
              lg:px-8
            "
          >
            <Heading>{headings.quickLinks}</Heading>

            <ul className="space-y-[18px]">

              {navigation.map((item, i) => (
                <motion.li
                  key={item.label}
                  {...reveal(
                    reduce,
                    { x: -16 },
                    0.25 + i * 0.05
                  )}
                >
                  <motion.div
                    whileHover={
                      reduce ? undefined : { x: 6 }
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={item.href}
                      className="
                        flex items-center gap-2
                        text-sm
                        transition-colors
                        hover:text-[#e0a04c]
                      "
                    >
                      <ChevronRight
                        size={16}
                        className="shrink-0 text-[#e0a04c]"
                      />

                      {item.label}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}

            </ul>
          </motion.div>

          {/* Services */}

          <motion.div
            {...reveal(reduce, { y: 30 }, 0.2)}
            className="
              lg:border-l lg:border-[#1f2a35]
              lg:px-8
            "
          >
            <Heading>{headings.services}</Heading>

            <ul className="space-y-[15px]">

              {services.map((service, i) => (
                <motion.li
                  key={service.title}
                  {...reveal(
                    reduce,
                    { x: -16 },
                    0.35 + i * 0.05
                  )}
                >
                  <motion.div
                    whileHover={
                      reduce ? undefined : { x: 6 }
                    }
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={service.href}
                      className="
                        flex items-center gap-2
                        text-sm
                        transition-colors
                        hover:text-[#e0a04c]
                      "
                    >
                      <ChevronRight
                        size={16}
                        className="shrink-0 text-[#e0a04c]"
                      />

                      {service.title}
                    </Link>
                  </motion.div>
                </motion.li>
              ))}

            </ul>
          </motion.div>

          {/* Contact Information */}

          <motion.div
            {...reveal(reduce, { y: 30 }, 0.3)}
            className="
              lg:border-l lg:border-[#1f2a35]
              lg:px-8
            "
          >
            <Heading>{headings.contact}</Heading>

            <ul className="space-y-6">

              {contactLines.map((contact, i) => {
                const Icon =
                  contactIconMap[
                    contact.icon as keyof typeof contactIconMap
                  ] ?? Clock;

                return (
                  <motion.li
                    key={contact.id}
                    {...reveal(
                      reduce,
                      { y: 20 },
                      0.4 + i * 0.1
                    )}
                    className="flex items-center gap-3"
                  >
                    <motion.span
                      whileHover={
                        reduce
                          ? undefined
                          : { rotate: 12, scale: 1.1 }
                      }
                      className="
                        grid h-[40px] w-[40px]
                        shrink-0 place-items-center
                        rounded-full
                        bg-[#a97c45] text-white
                      "
                    >
                      <Icon size={18} />
                    </motion.span>

                    <div className="text-sm leading-7">

                      {contact.lines.map((line, index) => (
                        <div key={`${contact.id}-${index}`}>
                          {line}
                        </div>
                      ))}

                    </div>
                  </motion.li>
                );
              })}

            </ul>
          </motion.div>

        </div>
      </div>

      {/* Copyright */}

      <motion.div
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: reduce ? 0 : 0.8,
          delay: reduce ? 0 : 0.2,
        }}
        className="relative border-t border-[#e0a04c]/40"
      >
        <p className="
          mx-auto max-w-350
          px-6 py-8
          text-[15px]
          sm:px-10 lg:px-[4%]
        ">
          © {copyright.year} {copyright.text} {copyright.rights}
        </p>
      </motion.div>

    </footer>
  );
}
