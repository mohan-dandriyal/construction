import Reveal from "@/app/component/contact/Reveal";
import {
  Instagram,
  Facebook,
  Linkedin,
  Pinterest,
} from "@/app/component/contact/Socialicons";
import {
  contactLines,
  contactSection,
  contactSocials,
  intro,
} from "@/app/utills/Enquiry";
import {
  Eyebrow,
  SectionDescription,
  SectionHeiglightText,
  SectionTitle,
} from "../SectionHeader";

const socialIconMap = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  pinterest: Pinterest,
} as const;

const socials = contactSocials.map((s) => ({
  ...s,
  Icon: socialIconMap[s.icon as keyof typeof socialIconMap] ?? Instagram,
}));

export default function EnquiryIntro() {
  return (
    <div className="relative min-w-0">
      <Reveal>
        <Eyebrow text={contactSection.eyebrow} left={false} />

        <SectionTitle>
          {contactSection.title}{" "}
          <SectionHeiglightText text={contactSection.accent} />
        </SectionTitle>
        <SectionDescription text={intro} />
      </Reveal>

      {/* contact details */}
      <ul className="mt-8 space-y-6">
        {contactLines.map(({ icon: Icon, main, sub }, i) => (
          <li key={main}>
            <Reveal
              x={-30}
              y={0}
              delay={0.15 + i * 0.1}
              className="group flex items-start gap-5"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full border-2 border-[#d4a050] text-[#d4a050] transition-colors duration-300 group-hover:bg-[#d4a050] group-hover:text-[#14110c]">
                <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm text-white">{main}</p>
                <div className="mt-1 text-[13px] leading-7 text-[#b9c0c8]">
                  {sub.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>

      {/* divider + socials */}
      <Reveal delay={0.4}>
        <span className="mt-8 block h-px w-full max-w-64 bg-[#d4a050]" />
        <ul className="mt-8 flex items-center gap-7">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white transition-all duration-300 hover:-translate-y-1 hover:text-[#d4a050] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a050]"
              >
                <Icon size={28} />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </div>
  );
}
