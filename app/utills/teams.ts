import data from "@/app/data/team.json";

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const teamSectionData = data.section;
export const teamMembers: TeamMember[] = data.members;
