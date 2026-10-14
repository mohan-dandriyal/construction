import { Playfair_Display, Poppins, Barlow_Condensed } from "next/font/google";
import SectionLabel from "@/app/component/contact/Sectionlabel";
import ContactForm from "@/app/component/contact/Contactform";
import ContactInfo from "@/app/component/contact/Contactinfo";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});
const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});
const cond = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-cond",
});

export default function ContactSection() {
  return (
    <section
      id="contact"
      className={`${serif.variable} ${sans.variable} ${cond.variable} bg-[#0e1318] px-4 py-14 font-[family-name:var(--font-sans)] text-white sm:px-8 lg:py-20`}
    >
      <div className="mx-auto grid max-w-[1300px] gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        {/* Left: form */}
        <div className="min-w-0">
          <SectionLabel eyebrow="Send us email" title="Feel free to" accent="write" />
          <ContactForm />
        </div>

        {/* Right: contact details */}
        <div className="min-w-0">
          <SectionLabel eyebrow="Need any help?" title="Get in" accent="touch" />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
}