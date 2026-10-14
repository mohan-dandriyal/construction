import Image from "next/image";
import Reveal from "./Reveal";
import type { Step } from "@/app/utills/services";

export default function ProcessSteps({
  steps,
  image,
  alt,
}: {
  steps: Step[];
  image: string;
  alt: string;
}) {
  return (
    <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.95fr)]">
      <ol>
        {steps.map((step, i) => (
          <li key={step.title} className="relative">
            <Reveal
              x={-24}
              y={0}
              delay={i * 0.12}
              className={`flex gap-5 ${i < steps.length - 1 ? "pb-8" : ""}`}
            >
              <span className="z-10 grid h-10 w-10 shrink-0 place-items-center rounded-md bg-gradient-to-b from-[#ecb865] to-[#d09442] text-lg font-semibold text-[#14110c]">
                {i + 1}
              </span>
              <div>
                <h3 className=" text-white">{step.title}</h3>
                <p className="mt-1 max-w-sm text-[15px] leading-relaxed text-[#b9c0c8]">
                  {step.description}
                </p>
              </div>
            </Reveal>

            {/* dotted connector to the next step */}
            {i < steps.length - 1 && (
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-5 top-12 border-l border-dashed border-[#d9a55b]/50"
              />
            )}
          </li>
        ))}
      </ol>

      <Reveal x={40} y={0} className="group relative min-h-[300px] overflow-hidden rounded-lg lg:min-h-[420px]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 35vw, 100vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
      </Reveal>
    </div>
  );
}