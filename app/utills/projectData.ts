import data from "@/app/data/projects.json";

export type ProjectItem = (typeof data.projects)[number];

export const projectSection = data.section;
export const projectShowcaseLabels = data.showcase;
export const projectDetails = data.projects.map((project) => ({
  ...project,
  discription: project.description,
}));
