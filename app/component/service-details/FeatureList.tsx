import { Check } from "lucide-react";
import Reveal from "./Reveal";

export default function FeatureList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 grid gap-x-10 gap-y-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <li key={item}>
          <Reveal x={-16} y={0} delay={Math.floor(i / 2) * 0.1} className="flex items-center gap-4">
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#e3ab5a] text-[#14110c]">
              <Check size={16} strokeWidth={3} aria-hidden="true" />
            </span>
            <span className="text-[15px] text-[#d5dae0]">{item}</span>
          </Reveal>
        </li>
      ))}
    </ul>
  );
}