import Reveal from "./Reveal";
import { contactItems, intro } from "@/app/utills/Contact";

export default function ContactInfo() {
  return (
    <>
      <Reveal delay={0.1}>
        <p className="mt-8 max-w-xl text-lg leading-8 text-[#c5cbd3]">{intro}</p>
      </Reveal>

      <ul className="mt-8 space-y-6">
        {contactItems.map(({ icon: Icon, title, lines, filled }, i) => (
          <li key={title}>
            <Reveal x={40} y={0} delay={0.15 + i * 0.1} className="group flex items-center gap-6">
              <span className="grid h-15 w-15 shrink-0 place-items-center bg-[#d4a050] text-white transition-transform duration-300 group-hover:scale-105 sm:h-18  sm:w-18 rounded-md ">
                <Icon
                  size={36}
                  strokeWidth={1.75}
                  fill={filled ? "currentColor" : "none"}
                  aria-hidden="true"
                />
              </span>

              <div>
                <h3 className="text-xl font-medium text-[#d4a050]">{title}</h3>
                <div className="mt-2 leading-8 text-white">
                  {lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </>
  );
}