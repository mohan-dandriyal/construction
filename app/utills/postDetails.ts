export interface PostSection {
  title: string;
  accent: string;
  paragraphs: string[];
  quote?: string;
}

export interface Post {
  id: string;
  day: string;
  monthYear: string;
  category: string;
  title: string;
  accent: string;
  lead: string;
  intro: string;
  sections: PostSection[];
}

export const posts: Post[] = [
  {
    id: "1",
    day: "12",
    monthYear: "OCT 2024",
    category: "ARCHITECTURE",
    title: "Modern Living Room",
    accent: "Design Ideas",
    lead: "Thoughtful living spaces balance comfort, character, and the way people actually live.",
    intro: "A successful living room begins with a clear understanding of movement, light, and daily rituals. The strongest designs combine practical planning with a few memorable architectural details.",
    sections: [
      {
        title: "Start with the",
        accent: "flow",
        paragraphs: [
          "Arrange the main furniture around a natural route through the room, keeping circulation open and making conversation feel effortless.",
          "Layered lighting, warm materials, and carefully chosen textures help the room feel welcoming at every time of day.",
        ],
        quote: "Good interiors make everyday life feel considered.",
      },
      {
        title: "Let the details",
        accent: "speak",
        paragraphs: [
          "Use artwork, joinery, and locally sourced finishes to give a contemporary room a sense of place without visual clutter.",
        ],
      },
    ],
  },
];
