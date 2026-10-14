import Image from "next/image";
import Reveal from "./Reveal";

export default function BlogHero({
  image,
  alt,
  day,
  monthYear,
}: {
  image: string;
  alt: string;
  day: string;
  monthYear: string;
}) {
  return (
    <Reveal scale={0.98} y={-20} className="group relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[8/3]">
      <Image
        src={image}
        alt={alt}
        fill
        priority
        sizes="(min-width: 1350px) 1300px, 100vw"
        className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
      />

      {/* date badge */}
      <Reveal x={-20} y={0} delay={0.4} className="absolute left-4 top-4 sm:left-8 sm:top-8">
        <div className="border border-[#d9a55b] bg-[#1a1917]/90 px-5 py-3 text-center backdrop-blur-sm sm:px-7 sm:py-4">
          <p className="font-[family-name:var(--font-serif)] text-4xl font-medium leading-none text-white sm:text-5xl">
            {day}
          </p>
          <p className="mt-2 text-xs uppercase tracking-[0.2em] text-[#e0b46c] sm:text-sm">
            {monthYear}
          </p>
        </div>
      </Reveal>
    </Reveal>
  );
}