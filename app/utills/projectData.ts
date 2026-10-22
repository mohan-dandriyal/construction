import data from "@/app/data/projects.json";
export const projectDetails = data.projects.map((project) => ({ ...project, discription: project.description }));
