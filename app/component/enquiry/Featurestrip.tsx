
import Reveal from "./Reveal";
import { features } from "@/app/utills/Enquiry";

export default function FeatureStrip() {
  return (
    <div className="border-t border-white/10">
      <ul className="mx-auto grid max-w-[1300px] gap-y-10 px-4 py-12 sm:grid-cols-2 sm:px-8 lg:grid-cols-4">
        {features.map(({ icon: Icon, title, text }, i) => (
          <li key={title} className={`px-4 text-center ${i > 0 ? "lg:border-l lg:border-white/15" : ""}`}>
            <Reveal delay={i * 0.12} className="group">
              <Icon
                size={52}
                strokeWidth={1.25}
                className="mx-auto text-[#d4a050] transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-base font-medium uppercase tracking-[0.08em] text-white">{title}</h3>
              <p className="mt-2 text-[15px] text-[#b9c0c8]">{text}</p>
            </Reveal>
          </li>
        ))}
      </ul>
    </div>
  );
}