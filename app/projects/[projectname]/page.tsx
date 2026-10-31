import { Suspense } from "react";
import InnerPageHeroSection from "@/app/component/InnerPageHeroSection";
import KeyFeatures from "@/app/component/project/KeyFeatures";
import ProjectOverview from "@/app/component/project/Projectoverview";
import ProjectShowcase from "@/app/component/project/Projectshowcase";
import ProjectSpecifications from "@/app/component/project/ProjectSpecifications";
import LoadingScreen from "@/app/component/LoadingScreen";
import siteData from "@/app/data/site.json";
import projectsData from "@/app/data/projects.json";

export function generateStaticParams() {
  return projectsData.projects.map((p) => ({
    projectname: p.id,
  }));
}

interface PageProps {
  params: Promise<{ projectname: string }>;
}

async function ProjectDetailContent({ params }: PageProps) {
  const { projectname } = await params;
  const decoded = decodeURIComponent(projectname).toLowerCase().trim();

  const project =
    projectsData.projects.find(
      (p, idx) =>
        p.id.toLowerCase() === decoded || String(idx + 1) === decoded
    ) ?? projectsData.projects[0];

  return (
    <div>
      <InnerPageHeroSection
        title={project.title}
        image={siteData.pageHeroes.projectDetails.image}
        curentPage={project.title}
      />

      <ProjectShowcase project={project} />

      <ProjectOverview overview={project.overview} />

      <KeyFeatures data={project.keyFeatures} />

      <ProjectSpecifications data={project.specifications} />
    </div>
  );
}

export default function ProjectDetailsPage({ params }: PageProps) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ProjectDetailContent params={params} />
    </Suspense>
  );
}
