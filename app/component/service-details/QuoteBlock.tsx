import { Quote } from "lucide-react";
import Reveal from "./Reveal";

export default function QuoteBlock({ children }: { children: string }) {
  return (
    <Reveal
      scale={0.96}
      className="flex items-center gap-5 rounded-md border border-[#d9a55b]/50 bg-[#4a3b28]/80 px-5 py-6 sm:gap-6 sm:px-7"
    >
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-[#7a5628] text-[#f3dcb0] sm:h-16 sm:w-16">
        <Quote className="h-7 w-7 fill-current" aria-hidden="true" />
      </span>
      <span aria-hidden="true" className="hidden h-12 w-px bg-white/20 sm:block" />
      <blockquote className="text-lg leading-relaxed text-white sm:text-xl">
        “{children}”
      </blockquote>
    </Reveal>
  );
}