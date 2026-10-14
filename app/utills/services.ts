export type Step = { title: string; description: string };

export type Service = {
  slug: string;
  title: string;
  /** eyebrow label above the title */
  category: string;
  /** used in "Why Choose Our {short} Services" and "Our {short} Process" */
  short: string;
  paragraphs: string[];
  quote: string;
  whyIntro: string;
  /** read row by row in a 2-column grid */
  features: string[];
  processIntro: string;
  steps?: Step[];
};

/** "Home Interior Design" -> ["Home Interior", "Design"] (last word gets the gold accent) */
export function splitLast(text: string): [string, string] {
  const words = text.trim().split(" ");
  const last = words.pop() ?? "";
  return [words.join(" "), last];
}

export const defaultSteps: Step[] = [
  {
    title: "Consultation & Understanding",
    description: "We discuss your needs, style preferences, and budget.",
  },
  {
    title: "Design Planning",
    description: "We create detailed design concepts and 2D/3D layouts for your approval.",
  },
  {
    title: "Execution & Installation",
    description: "Our team handles the execution with precision and quality craftsmanship.",
  },
  {
    title: "Final Handover",
    description: "We ensure every detail is completed and deliver a result ready to enjoy.",
  },
];

export const services: Service[] = [
  {
    slug: "home-interior-design",
    title: "Home Interior Design",
    category: "Interior Design",
    short: "Interior Design",
    paragraphs: [
      "A well-designed home interior enhances comfort, functionality, and aesthetics, creating a space that truly feels like home. Our home interior design services focus on blending your lifestyle, personality, and preferences with modern design trends to create beautiful and practical living spaces.",
      "From space planning and color selection to furniture, lighting, and décor, we provide complete interior solutions that transform ordinary spaces into stylish, functional, and inviting homes.",
    ],
    quote:
      "Great interior design is not just about how a space looks, but how it makes you feel at home.",
    whyIntro:
      "With a focus on creativity, functionality, and attention to detail, we create interiors that reflect your style and enhance your everyday living.",
    features: [
      "Personalized design solutions",
      "Expert team of interior designers",
      "Modern and innovative concepts",
      "On-time project delivery",
      "High-quality materials and finishes",
      "Cost-effective and transparent pricing",
    ],
    processIntro:
      "We follow a streamlined process to ensure a smooth and successful project experience.",
    steps: defaultSteps,
  },
  {
    slug: "home-exterior-design",
    title: "Home Exterior Design",
    category: "Exterior Design",
    short: "Exterior Design",
    paragraphs: [
      "Your home's exterior makes the first impression. We design facades, entrances and outdoor spaces that combine modern aesthetics with durable, weather-ready materials.",
      "From elevation planning and cladding to landscaping and lighting, every detail is planned so your home looks striking in daylight and after dark.",
    ],
    quote: "The exterior is the handshake of a home. It should promise what waits inside.",
    whyIntro:
      "We balance curb appeal with long-term durability, so your exterior looks great and lasts for years.",
    features: [
      "Elegant, modern elevations",
      "Weather-resistant materials",
      "Integrated landscape and lighting",
      "Energy-efficient design choices",
      "Detailed 3D elevation previews",
      "Transparent pricing and timelines",
    ],
    processIntro: "A clear, step-by-step process from first sketch to finished facade.",
  },
  {
    slug: "2d-3d-design-layout",
    title: "2D/3D Design Layout",
    category: "Design Layout",
    short: "Layout Design",
    paragraphs: [
      "See your space before it is built. Our detailed 2D plans and realistic 3D visualizations help you understand layouts, proportions and finishes before construction begins.",
      "Walk through every room virtually, compare options, and make confident decisions that save time and cost on site.",
    ],
    quote: "A good plan on paper saves a hundred changes on site.",
    whyIntro:
      "Accurate layouts and lifelike renders give you clarity at every stage of the project.",
    features: [
      "Accurate 2D floor plans",
      "Photo-realistic 3D renders",
      "Furniture and space planning",
      "Multiple layout options",
      "Quick revisions on feedback",
      "Ready-to-build drawings",
    ],
    processIntro: "From brief to final drawings, we keep every step visible and easy to follow.",
  },
  {
    slug: "furnitures-design",
    title: "Furniture's Design",
    category: "Furniture Design",
    short: "Furniture Design",
    paragraphs: [
      "Custom furniture that fits your space, your habits and your taste. We design wardrobes, TV units, beds, tables and storage that blend comfort, style and function.",
      "Every piece is detailed for the room it lives in, using quality materials and finishes built to last.",
    ],
    quote: "Furniture should fit the way you live, not the other way around.",
    whyIntro:
      "Made-to-measure pieces use every inch of your space and match your interiors perfectly.",
    features: [
      "Made-to-measure designs",
      "Smart storage solutions",
      "Premium woods and finishes",
      "Matched to your interior style",
      "Skilled in-house craftsmanship",
      "Durable, easy-care materials",
    ],
    processIntro: "A simple process that takes your furniture from idea to installation.",
  },
  {
    slug: "modern-home-interior",
    title: "Modern Home Interior",
    category: "Modern Interior",
    short: "Modern Interior",
    paragraphs: [
      "Modern home interiors prioritize clean lines, warm minimalist aesthetics, and open-plan flow to create calm, elegant living environments.",
      "We combine smart lighting, acoustic balance, organic materials, and premium finishes to turn every room into an inspiring space tailored for modern living.",
    ],
    quote: "Simplicity is the ultimate sophistication in modern living.",
    whyIntro:
      "We design contemporary spaces that balance minimalism with cozy, functional luxury.",
    features: [
      "Open-concept space optimization",
      "Architectural cove & ambient lighting",
      "Curated material & color palettes",
      "Seamless smart-home integration",
      "Custom cabinetry & concealed storage",
      "Sustainable & eco-friendly materials",
    ],
    processIntro: "A collaborative journey from concept moodboards to flawless interior styling.",
  },
  {
    slug: "custom-design-plan",
    title: "Custom Design Plan",
    category: "Design Planning",
    short: "Design Planning",
    paragraphs: [
      "No two homes or families are alike. Our custom design plans are built around your needs, lifestyle and budget, so every decision has a clear reason behind it.",
      "We combine space planning, material selection and a phased schedule into one plan you can follow with confidence.",
    ],
    quote: "The best design plan is the one made only for you.",
    whyIntro:
      "A personalized plan keeps your project focused, on budget and true to your vision.",
    features: [
      "Plans shaped around your lifestyle",
      "Budget-first planning",
      "Phased, realistic timelines",
      "Clear material and cost breakdown",
      "Flexible changes along the way",
      "Dedicated project coordinator",
    ],
    processIntro: "A guided process that turns your goals into a plan ready to build.",
  },
];