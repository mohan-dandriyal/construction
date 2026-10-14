
"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import { A11y, Keyboard } from "swiper/modules";
import { ChevronLeft, ChevronRight, Boxes, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Libre_Baskerville, Barlow, Barlow_Condensed } from "next/font/google";

import "swiper/css";
import { SectionTitle, ColorFullTitleText } from "../SectionTitle";
import { LinearBgButton } from "../ui/ThemeButtons";

const serif = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-serif",
});
const sans = Barlow({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-sans",
});
const condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-condensed",
});

// Put your images in /public/images/slider/
const slides = [
  {
    eyebrow: "Modern",
    title: "3D Visualizations",
    text: "Interior inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
    image: "/proj-1.png",
    href: "/services/3d-visualizations",
  },
  {
    eyebrow: "Contemporary",
    title: "Interior Design",
    text: "Interior inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
    image: "/proj-1.png",
    href: "/services/interior-design",
  },
  {
    eyebrow: "Elegant",
    title: "Exterior Design",
    text: "Interior inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
    image: "/proj-1.png",
    href: "/services/exterior-design",
  },
  {
    eyebrow: "Detailed",
    title: "Architectural Plans",
    text: "Interior inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
    image: "/proj-1.png",
    href: "/services/architectural-plans",
  },
  {
    eyebrow: "Tailored",
    title: "Custom Projects",
    text: "Interior inilla duiman at elit finibus viverra nec a lacus themo the nesudea seneoice misuscipit non sagie fermen ziverra tristiue duru the ivite dianne onen nivami acsestion augue artine.",
    image: "/proj-1.png",
    href: "/services/custom-projects",
  },
];

export default function ProjectSection() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const [active, setActive] = useState(0);

  return (
    <section
      id="projects"
      className={`${serif.variable} ${sans.variable} ${condensed.variable} bg-[#0d1319] px-4 py-12 font-[family-name:var(--font-sans)] sm:px-8 lg:px-0`}
    >

      <SectionTitle
        innerTitle={"Our Projects"}
        mainTitle={<div>
          Architecture Solutions <br />
          <ColorFullTitleText content=" for Every Space" />
        </div>}
      />


      <div className="relative mx-auto max-w-[1900px]">
        {/* Prev / Next */}
        <div className="mb-4 flex justify-end gap-3 lg:absolute lg:right-[6.3%] lg:top-[20px] lg:z-20 lg:mb-0">

          <button
            type="button"
            aria-label="Next slide"
            onClick={() => swiperRef.current?.slideNext()}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b9803a] text-white transition hover:bg-[#d09448] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9a55b] sm:h-[60px] sm:w-[60px]"
          >
            <ChevronLeft size={26} strokeWidth={2.5} />
          </button>

          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => swiperRef.current?.slidePrev()}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#b9803a] text-white transition hover:bg-[#d09448] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9a55b] sm:h-[60px] sm:w-[60px]"
          >
            <ChevronRight size={26} strokeWidth={2.5} />
          </button>
        </div>

        <Swiper
          modules={[A11y, Keyboard]}
          loop
          keyboard={{ enabled: true }}
          speed={600}
          slidesPerView={1}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActive(swiper.realIndex)}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.title}>
              <div className="relative lg:h-[740px]">
                {/* Image */}
                <motion.div
                  whileHover={{ scale: 1.015 }}
                  transition={{ duration: 0.4 }}
                  className="relative z-10 aspect-[787/600] w-full overflow-hidden lg:absolute lg:left-[6.7%] lg:top-[28px] lg:aspect-auto lg:h-[600px] lg:w-[41.5%]"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(min-width: 1024px) 41vw, 100vw"
                    className="object-cover"
                  />
                </motion.div>

                {/* Panel */}
                <div className="relative overflow-hidden bg-[#333333] px-5 pb-10 pt-9 sm:px-8 lg:absolute lg:bottom-0 lg:left-[35.7%] lg:right-[6.5%] lg:top-[112px] lg:px-0 lg:pb-0 lg:pl-[22.7%] lg:pr-[8%] lg:pt-0">
                  <span className="absolute left-6 top-0 h-4 w-[134px] bg-[#c4883c] lg:left-[29.7%]" />
                  <Boxes
                    aria-hidden
                    size={120}
                    strokeWidth={1}
                    className="absolute right-8 top-6 text-white/5"
                  />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={slide.title}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -14 }}
                      transition={{ duration: 0.35 }}
                      className="lg:flex lg:h-full lg:flex-col lg:justify-center lg:pt-6"
                    >
                      <p className="font-[family-name:var(--font-condensed)] text-lg font-medium uppercase tracking-[0.5em] text-[#c4883c]">
                        {slide.eyebrow}
                      </p>

                      <h2 className="mt-6 font-[family-name:var(--font-serif)] text-4xl leading-tight text-white sm:text-5xl lg:text-[64px]">
                        {slide.title}
                      </h2>

                      <p className="mt-6 max-w-[640px] text-base leading-7 text-white/65 sm:text-lg sm:leading-8 lg:mt-8">
                        {slide.text}
                      </p>

                      <LinearBgButton href="/projects">

                        <div className='flex items-center gap-2'>
                          Discover More
                          <motion.span
                            variants={{ rest: { x: 0 }, hover: { x: 5 } }}
                            className="grid h-8 w-8 place-items-center rounded-full bg-gold text-navy"
                          >
                            <ArrowRight size={16} />
                          </motion.span>
                        </div>
                      </LinearBgButton>

                      {/* <Link
                      href={slide.href}
                      className="mt-10 inline-block self-start border border-[#c4883c] px-8 py-5 font-[family-name:var(--font-condensed)] text-lg font-medium uppercase tracking-[0.2em] text-[#c4883c] transition hover:bg-[#c4883c] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d9a55b]"
                    >
                      Discover More
                    </Link> */}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Dots */}
        <div
          className="mt-6 flex justify-center gap-4 lg:absolute lg:left-[6.7%] lg:top-[648px] lg:mt-0 lg:w-[41.5%] z-10 cursor-pointer"
          role="tablist"
          aria-label="Slides"
        >
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              role="tab"
              aria-selected={active === i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={`h-4 w-4 rounded-full border-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d9a55b] ${active === i
                ? "border-[#d9a55b] bg-[#d9a55b]"
                : "border-white/60 bg-transparent hover:border-[#d9a55b]"
                }`}
            />
          ))}
        </div>
      </div>


    </section>
  );
}