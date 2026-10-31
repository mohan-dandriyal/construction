import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import QuoteBlock from "./QuoteBlock";
import FeatureList from "./FeatureList";
import ProcessSteps from "./ProcessSteps";
import {
  defaultSteps,
  serviceDetailText,
  splitLast,
  type Service,
} from "@/app/utills/services";

export default function ServiceDetail({ service }: { service: Service }) {
  const [titleStart, titleAccent] = splitLast(service.title);
  const [shortFirst, ...shortRest] = service.short.split(" ");

  return (
    <article className="order-1 min-w-0 lg:order-2">
      {/* Hero image */}
      <Reveal
        y={-20}
        scale={0.98}
        className="group relative aspect-[16/9] overflow-hidden rounded-lg sm:aspect-[5/2]"
      >
        <Image
          src={service.heroImage ?? service.image}
          alt={service.title}
          fill
          priority
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
      </Reveal>

      {/* Intro */}
      <div className="mt-8">
        <SectionHeading
          variant="main"
          eyebrow={service.category}
          title={titleStart}
          accent={titleAccent}
        />
        <div className="mt-5 space-y-4">
          {service.paragraphs.map((text, i) => (
            <Reveal key={i} delay={0.1 + i * 0.1}>
              <p className="max-w-4xl text-base leading-8 text-[#b9c0c8]">
                {text}
              </p>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="mt-8">
        <QuoteBlock>{service.quote}</QuoteBlock>
      </div>

      {/* Why choose us */}
      <section className="mt-12">
        <SectionHeading
          title={serviceDetailText.whyTitle}
          accent={`${service.short} ${serviceDetailText.whyAccentSuffix}`}
        />
        <Reveal delay={0.1}>
          <p className="mt-4 max-w-3xl text-base leading-8 text-[#c7cdd4]">
            {service.whyIntro}
          </p>
        </Reveal>
        <FeatureList items={service.features} />
      </section>

      {/* Wide image */}
      <Reveal
        scale={0.97}
        className="group relative mt-10 aspect-[16/7] overflow-hidden rounded-lg sm:aspect-[4/1]"
      >
        <Image
          src={service.wideImage ?? service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
      </Reveal>

      {/* Process */}
      <section className="mt-12">
        <SectionHeading
          title={`${serviceDetailText.processTitlePrefix} ${shortFirst}`}
          accent={`${shortRest.join(" ")} ${serviceDetailText.processAccentSuffix}`.trim()}
        />
        <Reveal delay={0.1}>
          <p className="mt-3 text-base text-[#c7cdd4]">{service.processIntro}</p>
        </Reveal>
        <ProcessSteps
          steps={service.steps ?? defaultSteps}
          image={service.processImage ?? service.image}
          alt={service.title}
        />
      </section>
    </article>
  );
}
