import Reveal from "./Reveal";

export default function SectionLabel({
  eyebrow,
  title,
  accent,
}: {
  eyebrow: string;
  title: string;
  accent: string;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-5">
        <span className="font-[family-name:var(--font-cond)] text-sm font-medium uppercase tracking-[0.35em] text-[#d4a050]">
          {eyebrow}
        </span>
        <span className="h-px w-16 bg-[#d4a050] sm:w-20" />
      </div>
      <h2 className="mt-4 font-[family-name:var(--font-serif)] text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-4.5xl">
        {title} <span className="text-[#d4a050]">{accent}</span>
      </h2>
    </Reveal>
  );
}