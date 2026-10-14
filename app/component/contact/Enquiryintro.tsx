import Reveal from "@/app/component/contact/Reveal";
import { Instagram, Facebook, Linkedin, Pinterest } from "@/app/component/contact/Socialicons";
import { contactLines, intro } from "@/app/utills/Enquiry";

const socials = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
  { label: "Pinterest", href: "#", Icon: Pinterest },
];

export default function EnquiryIntro() {
  return (
    <div className="relative min-w-0">
      <Reveal>
        <p className="text-sm font-medium uppercase tracking-[0.35em] text-[#d4a050]">
          Get in touch
        </p>
        <h2 className="mt-4 font-[family-name:var(--font-serif)] text-3xl md:text-4xl font-semibold leading-[1.15]">
          <span className="block bg-gradient-to-b from-white to-[#aab0b8] bg-clip-text text-transparent">
            Start Your
          </span>
          <span className="block bg-gradient-to-b from-[#ebbd70] to-[#a97832] bg-clip-text text-transparent">
            Project With Us
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <p className="mt-6 max-w-lg text-lg leading-8 text-sm text-[#d5dae0]">{intro}</p>
      </Reveal>

      {/* contact details */}
      <ul className="mt-8 space-y-6">
        {contactLines.map(({ icon: Icon, main, sub }, i) => (
          <li key={main}>
            <Reveal x={-30} y={0} delay={0.15 + i * 0.1} className="group flex items-start gap-5">
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
        <span className="mt-8 block h-px w-64 bg-[#d4a050]" />
        <ul className="mt-8 flex items-center gap-7">
          {socials.map(({ label, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                target="_blanck"
                className="block text-white transition-all duration-300 hover:-translate-y-1 hover:text-[#d4a050] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#d4a050]"
              >
                <Icon size={28} />
              </a>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* architectural illustration */}
      {/* <Reveal scale={0.97} y={30} delay={0.3} className="relative mt-6 h-64 sm:h-80 lg:h-95">
        <Image
          src="/enquiry-now.png"
          alt=""
          fill
          sizes="(min-width: 1024px) 45vw, 100vw"
          className="object-contain object-left-bottom"
        />
      </Reveal> */}
    </div>
  );
}