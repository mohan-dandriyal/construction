
import { Playfair_Display, Poppins } from "next/font/google";
import EnquiryIntro from "@/app/component/enquiry/Enquiryintro";
import EnquiryForm from "@/app/component/enquiry/Enquiryform";
import FeatureStrip from "@/app/component/enquiry/Featurestrip";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});
const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
});

export default function EnquirySection() {
  return (
    <section
      id="enquiry"
      className={`${serif.variable} ${sans.variable} overflow-hidden bg-[#0a141d] font-[family-name:var(--font-sans)] text-white`}
    >
      <div className="mx-auto grid max-w-[1300px] gap-12 px-4 py-14 sm:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-14 lg:py-20">
        <EnquiryIntro />
        <div className="min-w-0 lg:self-start">
          <EnquiryForm />
        </div>
      </div>

      <FeatureStrip />
    </section>
  );
}