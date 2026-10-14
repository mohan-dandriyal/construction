"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  House,
  Leaf,
  Warehouse,
  Box,
  Sofa,
  PencilRuler,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { SectionTitle, ColorFullTitleText } from "@/app/component/SectionTitle";
import ServiceCard from "@/app/component/home/ServiceCard";

import { Playfair_Display, Poppins } from "next/font/google";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});

const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const PAGE_SIZE = 6; // services shown at one time

const services = [
  {
    title: "Home Interior Design",
    description:
      "Stylish and functional interiors that reflect your personality and enhance everyday living.",
    image: "/service-1.png",
    icon: House,
    href: "/services/home-interior-design",
  },
  {
    title: "Home Exterior Design",
    description:
      "Elegant and durable exterior designs that create a lasting first impression with modern aesthetics.",
    image: "/ser-2.jpg",
    icon: Warehouse,
    href: "/services/home-exterior-design",
  },
  {
    title: "2D/3D Design Layout",
    description:
      "Detailed 2D and 3D design layouts to help you visualize your dream space before construction.",
    image: "/ser-3.png",
    icon: Box,
    href: "/services/2d-3d-design-layout",
  },
  {
    title: "Furniture's Design",
    description:
      "Custom furniture designs that blend style, comfort, and functionality for modern spaces.",
    image: "/ser-4.webp",
    icon: Sofa,
    href: "/services/furnitures-design",
  },
  {
    title: "Modern Home Interior",
    description:
      "Contemporary interior solutions with innovative design and space optimization for modern homes.",
    image: "/ser-5.jpg",
    icon: PencilRuler,
    href: "/services/modern-home-interior",
  },
  {
    title: "Custom Design Plan",
    description:
      "Personalized design plans tailored to your needs, lifestyle, and budget.",
    image: "/ser-6.webp",
    icon: Leaf,
    href: "/services/custom-design-plan",
  },
  {
    title: "Home Interior Design",
    description:
      "Stylish and functional interiors that reflect your personality and enhance everyday living.",
    image: "/service-1.png",
    icon: House,
    href: "/services/home-interior-design",
  },
  {
    title: "Home Exterior Design",
    description:
      "Elegant and durable exterior designs that create a lasting first impression with modern aesthetics.",
    image: "/ser-2.jpg",
    icon: Warehouse,
    href: "/services/home-exterior-design",
  },
  {
    title: "2D/3D Design Layout",
    description:
      "Detailed 2D and 3D design layouts to help you visualize your dream space before construction.",
    image: "/ser-3.png",
    icon: Box,
    href: "/services/2d-3d-design-layout",
  },
];

function Services() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const [page, setPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(services.length / PAGE_SIZE));
  const start = (page - 1) * PAGE_SIZE;
  const visibleServices = services.slice(start, start + PAGE_SIZE);

  const goToPage = (p: number) => {
    if (p < 1 || p > totalPages || p === page) return;
    setPage(p);
    sectionRef.current?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`${serif.variable} ${sans.variable} bg-[#0a0e13] px-4 py-16 font-[family-name:var(--font-sans)] text-white sm:px-8`}
    >
      <div className="mx-auto max-w-350">
        {/* ----------- title --------  */}
        <SectionTitle
          innerTitle={"Our Services"}
          mainTitle={
            <div>
              Architecture Solutions <br />
              <ColorFullTitleText content=" Tailored to Your Vision" />
            </div>
          }
          description={
            "From concept to completion, we offer a comprehensive range of  architectural services tailored to your vision. Our expert team creates functional, aesthetic, and sustainable spaces for modern living."
          }
        />

        {/* Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service, i) => (
            // global index in the key: some titles repeat, and it remounts cards on page change
            <ServiceCard key={start + i} service={service} index={i} total={visibleServices.length} />
          ))}
        </div>

        {/* ---------- Pagination ---------- */}
        {totalPages > 1 && (
          <nav
            aria-label="Services pagination"
            className="mt-12 flex items-center justify-center gap-3"
          >
            {page > 1 && (
              <PageButton
                label="Previous page"
                onClick={() => goToPage(page - 1)}
                reduceMotion={reduceMotion}
                muted
              >
                <ChevronLeft size={18} strokeWidth={2} />
              </PageButton>
            )}

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <PageButton
                key={n}
                label={`Page ${n}`}
                active={n === page}
                onClick={() => goToPage(n)}
                reduceMotion={reduceMotion}
              >
                {n}
              </PageButton>
            ))}

            {page < totalPages && (
              <PageButton
                label="Next page"
                onClick={() => goToPage(page + 1)}
                reduceMotion={reduceMotion}
                muted
              >
                <ChevronRight size={18} strokeWidth={2} />
              </PageButton>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}

function PageButton({
  children,
  label,
  active,
  muted,
  onClick,
  reduceMotion,
}: {
  children: ReactNode;
  label: string;
  active?: boolean;
  muted?: boolean;
  onClick: () => void;
  reduceMotion: boolean | null;
}) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      whileHover={reduceMotion ? undefined : { scale: 1.08 }}
      whileTap={reduceMotion ? undefined : { scale: 0.94 }}
      className={`grid h-11 w-11 place-items-center rounded-full border text-base font-medium transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9a55b] ${
        active
          ? "border-[#d9a55b] bg-[#d9a55b] text-[#1b1b1b]"
          : muted
          ? "border-white/20 text-white hover:border-[#d9a55b] hover:text-[#d9a55b]"
          : "border-white/40 text-white/90 hover:border-[#d9a55b] hover:text-[#d9a55b]"
      }`}
    >
      {children}
    </motion.button>
  );
}

export default Services;