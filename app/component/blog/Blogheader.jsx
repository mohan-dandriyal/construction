import Reveal from "./Reveal";

export default function BlogHeader({
  category,
  title,
  accent,
  lead,
  intro,
}) {
  return (
    <header className="mt-8 lg:px-9">
      <Reveal>
        <div className="flex items-center gap-5">
          <span className="h-px w-16 bg-[#d9a55b] sm:w-20" />
          <span className="text-sm font-medium uppercase tracking-[0.3em] text-[#d9a55b]">
            {category}
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h1 className="mt-5 font-[family-name:var(--font-serif)] text-4xl font-semibold leading-[1.2] text-white sm:text-5xl lg:text-4xl">
          {title}
          <span className="block text-[#e0a85c]">{accent}</span>
        </h1>
      </Reveal>

      <Reveal delay={0.2}>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#d5dae0] sm:text-xl">{lead}</p>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="mt-5 max-w-5xl text-base leading-8 text-[#b9c0c8]">{intro}</p>
      </Reveal>
    </header>
  );
}