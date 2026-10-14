export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  /** put photos in public/team/{slug}.jpg or change this path */
  image: string;
};

export const teamMembers: TeamMember[] = [
  {
    slug: "#",
    name: "Rohit Sharma",
    role: "Founder & Director",
    bio: "Visionary leader with 15+ years of experience in architecture and design.",
    image: "/teams/img-3.png",
  },
  {
    slug: "#",
    name: "Priya Mehta",
    role: "Lead Architect",
    bio: "Creative architect skilled in modern and sustainable design solutions.",
    image: "/teams/img-1.png",
  },
  {
    slug: "#",
    name: "Amit Verma",
    role: "Project Director",
    bio: "Expert in project management and on-time delivery of complex builds.",
    image: "/teams/img-6.png",
  },
  {
    slug: "#",
    name: "Neha Kapoor",
    role: "Site Supervisor",
    bio: "Ensures quality, safety and smooth execution at every project site.",
    image: "/teams/img-2.png",
  },
  {
    slug: "#",
    name: "Vikas Singh",
    role: "Construction Manager",
    bio: "Manages construction operations with efficiency and precision.",
    image: "/teams/img-5.png",
  },
  {
    slug: "#",
    name: "Kavya Iyer",
    role: "Interior Designer",
    bio: "Designs elegant and functional interiors for modern spaces.",
    image: "/teams/img-4.png",
  },
  {
    slug: "#",
    name: "Arjun Nair",
    role: "Civil Engineer",
    bio: "Specialized in structural design and civil engineering solutions.",
    image: "/teams/img-5.png",
  },
  {
    slug: "#",
    name: "Simran Kaur",
    role: "Project Coordinator",
    bio: "Coordinates project planning, client communication and execution.",
    image: "/teams/img-1.png",
  },
];