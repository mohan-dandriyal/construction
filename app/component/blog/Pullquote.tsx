import { Quote } from "lucide-react";
import Reveal from "./Reveal";

/** Text wrapped in *asterisks* is shown in gold. */
function renderQuote(text: string) {
  return text.split("*").map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="font-semibold text-[#e0a85c]">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function PullQuote({ children }: { children: string }) {
  return (
    <Reveal
      scale={0.97}
      className="mt-12 flex items-center gap-5 rounded-lg border border-[#d9a55b]/60 bg-gradient-to-r from-[#4a3622] to-[#2b241d] px-5 py-7 sm:gap-8 sm:px-9"
    >
      <Quote className="h-12 w-12 shrink-0 fill-[#e0b46c] text-[#e0b46c] sm:h-16 sm:w-16" aria-hidden="true" />
      <span aria-hidden="true" className="hidden h-16 w-px bg-white/20 sm:block" />
      <blockquote className="font-[family-name:var(--font-serif)] text-lg leading-relaxed text-white sm:text-2xl sm:leading-[1.7]">
        “{renderQuote(children)}”
      </blockquote>
    </Reveal>
  );
}