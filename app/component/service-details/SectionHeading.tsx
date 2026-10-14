import Reveal from "./Reveal";

type Props = {
  title: string;
  accent: string;
  /** "main" = page title with eyebrow label, "sub" = section title with short gold bar */
  variant?: "main" | "sub";
  eyebrow?: string;
};

export default function SectionHeading({ title, accent, variant = "sub", eyebrow }: Props) {
  if (variant === "main") {
    return (
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="h-px w-14 bg-[#d9a55b]" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-[#d9a55b]">
            {eyebrow}
          </span>
        </div>
        <h1 className="mt-3 font-[family-name:var(--font-serif)] text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
          {title} <span className="text-[#d9a55b]">{accent}</span>
        </h1>
      </Reveal>
    );
  }

  return (
    <Reveal>
      <span className="block h-0.5 w-14 bg-[#d9a55b]" />
      <h2 className="mt-5 font-[family-name:var(--font-serif)] text-3xl font-semibold leading-tight text-white sm:text-4xl">
        {title} <span className="text-[#d9a55b]">{accent}</span>
      </h2>
    </Reveal>
  );
}