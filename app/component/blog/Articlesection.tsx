import Image from "next/image";
import Reveal from "@/app/component/blog/Reveal";
import PullQuote from "@/app/component/blog/Pullquote";
import type { PostSection } from "@/app/utills/postDetails";

export default function ArticleSection({
  section,
  image,
  alt,
  reverse = false,
}: {
  section: PostSection;
  image: string;
  alt: string;
  /** image on the left, text on the right */
  reverse?: boolean;
}) {
  return (
    <>
      <div
        className={`mt-12 grid items-start gap-8 lg:gap-12 ${
          reverse
            ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)]"
            : "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]"
        }`}
      >
        {/* text */}
        <div className={reverse ? "lg:order-2" : "lg:pl-9"}>
          <Reveal x={reverse ? 30 : -30} y={0}>
            <span className="block h-0.5 w-14 bg-[#d9a55b] sm:w-20" />
            <h2 className="mt-5 whitespace-pre-line font-[family-name:var(--font-serif)] text-3xl font-semibold leading-tight text-white sm:text-4xl">
              {section.title} <span className="text-[#e0a85c]">{section.accent}</span>
            </h2>
          </Reveal>

          <div className="mt-5 space-y-4">
            {section.paragraphs.map((text, i) => (
              <Reveal key={i} delay={0.1 + i * 0.1}>
                <p className="text-base leading-8 text-[#b9c0c8]">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>

        {/* image */}
        <Reveal
          x={reverse ? -50 : 50}
          y={0}
          scale={0.97}
          className={`group relative aspect-[11/6] overflow-hidden rounded-xl ${reverse ? "lg:order-1" : ""}`}
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
          />
        </Reveal>
      </div>

      {section.quote && <PullQuote>{section.quote}</PullQuote>}
    </>
  );
}