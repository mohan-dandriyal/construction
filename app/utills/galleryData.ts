export interface GalleryItem {
  id: number;
  title: string;
  category: "Architecture" | "Interior" | "Exterior" | "Residential" | "Commercial";
  location: string;
  image: string;
  description: string;
}

export const galleryCategories = [
  "All",
  "Architecture",
  "Interior",
  "Exterior",
  "Residential",
  "Commercial",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    category: "Architecture",
    location: "Noida, Uttar Pradesh",
    image: "/proj-1.png",
    description:
      "Contemporary villa facade with warm architectural lighting, expansive cantilevered decks, and private lap pool.",
  },
  {
    id: 2,
    title: "Open Concept Living",
    category: "Interior",
    location: "Gurugram, Haryana",
    image: "/service-1.png",
    description:
      "Spacious luxury living room featuring bespoke sectional seating, wall paneling, and integrated cove ceiling.",
  },
  {
    id: 3,
    title: "Geometric Facade Design",
    category: "Exterior",
    location: "South Delhi",
    image: "/ser-2.jpg",
    description:
      "Striking contemporary exterior architecture with premium weather-resistant cladding and vertical louvers.",
  },
  {
    id: 4,
    title: "Grand Dining & Spatial Layout",
    category: "Interior",
    location: "Noida, Uttar Pradesh",
    image: "/ser-3.png",
    description:
      "Expansive dining pavilion with ambient pendant lighting, natural stone finishes, and seamless garden connection.",
  },
  {
    id: 5,
    title: "Bespoke Furnishing Suite",
    category: "Interior",
    location: "Chandigarh",
    image: "/ser-4.webp",
    description:
      "Handcrafted designer furniture tailored to modern spatial dimensions with rich textures and elegant brass trims.",
  },
  {
    id: 6,
    title: "Master Bedroom Retreat",
    category: "Residential",
    location: "New Delhi",
    image: "/ser-5.jpg",
    description:
      "Calm and refined master bedroom with soft acoustic wall paneling and subtle warm recessed cove glow.",
  },
  {
    id: 7,
    title: "Architectural 3D Elevation",
    category: "Architecture",
    location: "Jaipur, Rajasthan",
    image: "/ser-6.webp",
    description:
      "Comprehensive 2D plan and 3D volumetric elevation visualization highlighting precision and modern aesthetics.",
  },
  {
    id: 8,
    title: "Sunset Poolside Lounge",
    category: "Exterior",
    location: "Noida, Uttar Pradesh",
    image: "/why-choose-us.png",
    description:
      "Private outdoor lounge deck and illuminated infinity pool backdrop crafted for seamless indoor-outdoor living.",
  },

  // {
  //   id: 10,
  //   title: "Contemporary Villa Complex",
  //   category: "Residential",
  //   location: "Goa",
  //   image: "/about-right.png",
  //   description:
  //     "Luxury tropical villa architecture balancing central breezy courtyards with private residential wings.",
  // },
  // {
  //   id: 11,
  //   title: "Arcova Flagship Pavilion",
  //   category: "Architecture",
  //   location: "Noida, Uttar Pradesh",
  //   image: "/home-about.png",
  //   description:
  //     "Flagship architectural design demonstrating balance, scale, and sustainable materiality in luxury architecture.",
  // },
  // {
  //   id: 12,
  //   title: "Twilight Horizon Villa",
  //   category: "Residential",
  //   location: "Kasauli, Himachal",
  //   image: "/enquiry-now-bg.png",
  //   description:
  //     "Panoramic cliffside luxury residence overlooking rolling hills with floor-to-ceiling panoramic glass at dusk.",
  // },
];
