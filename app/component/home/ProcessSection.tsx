import { Playfair_Display, Poppins } from "next/font/google";
import { HardHat, PencilRuler, DraftingCompass, Handshake } from "lucide-react";
import { ColorFullTitleText, SectionTitle } from "../SectionTitle";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-serif",
});
const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});

const steps = [
  {
    title: "Visit Project",
    description:
      "We understand your requirements and visit the site to assess the space and possibilities.",
    icon: HardHat,
  },
  {
    title: "Planning Design",
    description:
      "Our team creates detailed plans and design concepts tailored to your needs.",
    icon: PencilRuler,
  },
  {
    title: "Project Sketch",
    description:
      "We develop 2D/3D sketches and visualizations to give you a clear view of the final outcome.",
    icon: DraftingCompass,
  },
  {
    title: "Start Working",
    description:
      "Once approved, we begin execution with quality materials and expert craftsmanship.",
    icon: Handshake,
  },
];

/* Wavy dashed line + glowing dot linking one step to the next (desktop only) */
function Connector() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute left-[calc(50%+110px)] top-[90px] hidden h-10 w-[calc(100%-220px)] lg:block"
    >
      <svg
        viewBox="0 0 200 40"
        preserveAspectRatio="none"
        className="h-full w-full overflow-visible"
      >
        <path
          d="M0 20 C 30 -2, 70 2, 100 22 S 170 34, 200 22"
          fill="none"
          stroke="#d9a55b"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
      <span className="absolute left-1/2 top-[55%] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f3d9a4] shadow-[0_0_12px_3px_rgba(217,165,91,0.7)]" />
    </div>
  );
}

export default function ProcessSection() {
  return (
    <section
      id="process"
      className={`${serif.variable} ${sans.variable} bg-[#0c1218] px-4 py-16 font-[family-name:var(--font-sans)] sm:px-8`}
    >

      <SectionTitle
        innerTitle={"Our Process"}
        mainTitle={<div>
          Our <ColorFullTitleText content="Working Process" />  
        </div>}
        description={"From initial consultation to final execution, we follow a streamlined process to deliver exceptional design solutions with precision and care."}
      />

      <ol className="mx-auto mt-10 grid max-w-350 grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {steps.map(({ title, description, icon: Icon }, i) => (
          <li key={title} className="relative flex flex-col items-center px-4 text-center">
            {/* Circle */}
            <div className="relative flex h-[170px] w-[170px] items-center justify-center rounded-full border-3 border border-dashed border-[#d9a55b]/60">
              <div className="flex h-[150px] w-[150px] items-center justify-center rounded-full border-2 border-[#c4883c] bg-[radial-gradient(circle_at_50%_30%,#3a3123_0%,#1a1b1d_55%,#10151b_100%)] shadow-[0_0_30px_rgba(196,136,60,0.15)]">
                <Icon
                  size={60}
                  strokeWidth={1.25}
                  className="text-[#d9a55b]"
                  aria-hidden
                />
              </div>

              {/* Number badge */}
              <span className="absolute -left-3 -top-1 flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-[#eaab5b]/70 bg-gradient-to-br from-[#814e12] to-[#8f5d22] text-xl font-semibold text-white shadow-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>

            {i < steps.length - 1 && <Connector />}

            <h3 className="mt-8 font-[family-name:var(--font-serif)] text-2xl font-bold text-white">
              {title}
            </h3>
            <p className="mt-4 max-w-[330px] text-base font-light leading-8 text-white/70">
              {description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}