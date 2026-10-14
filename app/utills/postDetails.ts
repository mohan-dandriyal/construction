export type PostSection = {
  /** "\n" forces a line break inside the heading */
  title: string;
  /** gold part of the heading */
  accent: string;
  paragraphs: string[];
  /** optional pull quote shown after this section; wrap gold words in *asterisks* */
  quote?: string;
};

export type Post = {
  id: number
  slug: string;
  category: string;
  title: string;
  /** second line of the h1, shown in gold */
  accent: string;
  day: string;
  monthYear: string;
  lead: string;
  intro: string;
  sections: PostSection[];
};

export const posts: Post[] = [
  {
    id: 1,
    slug: "modern-living-room-design-ideas-for-indian-homes",
    category: "Architecture",
    title: "Modern Living Room Design Ideas",
    accent: "for Indian Homes",
    day: "12",
    monthYear: "Oct 2024",
    lead: "Discover stylish and functional living room design ideas that combine comfort, tradition and modern aesthetics, perfect for Indian homes.",
    intro:
      "The living room is the heart of every home. It’s where families spend quality time, welcome guests, and create memories. In modern Indian homes, living room design has evolved to reflect a perfect blend of contemporary style and cultural warmth. With thoughtful planning, the right materials, and smart furniture choices, you can create a living space that is not only beautiful but also functional and comfortable for everyday living.",
    sections: [
      {
        title: "Blend of Modern\nand",
        accent: "Traditional Elements",
        paragraphs: [
          "Indian homes often embrace a mix of modern design and traditional touches. You can use a modern sofa set with clean lines and neutral tones, paired with handcrafted decor, wooden accents, or ethnic artwork. This combination creates a warm and inviting atmosphere while maintaining a contemporary look.",
        ],
        quote:
          "A well-designed living room is more than just a space; it’s a reflection of your *lifestyle, values, and personality* — creating a welcoming environment for family and guests.",
      },
      {
        title: "Functional and",
        accent: "Aesthetic Design",
        paragraphs: [
          "A great living room works as hard as it looks. Smart storage, flexible seating and a clear layout keep the space comfortable for daily routines, festive gatherings and everything in between.",
          "Choose furniture that fits the room’s proportions, keep walkways open, and use built-in units to hide clutter while still leaving space for the pieces you love to display.",
        ],
      },
      {
        title: "Lighting That Sets",
        accent: "the Mood",
        paragraphs: [
          "Layered lighting transforms a living room. Combine soft cove lighting, warm accent lamps and focused spotlights for artwork, so the space can shift from bright and lively to calm and cozy.",
          "Maximize natural light with light curtains, and use warm white bulbs in the evening to keep the atmosphere inviting.",
        ],
      },
    ],
  },
];