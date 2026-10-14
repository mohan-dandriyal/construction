import { Suspense } from "react";
import BlogSection from "./component/home/BlogSection";
import HeroSection from "./component/home/HeroSection";
import ProcessSection from "./component/home/ProcessSection";
import ProjectSection from "./component/home/ProjectSection";
import ServiceSection from "./component/home/ServiceSection";
import StatsCounterSection from "./component/home/StatsCounterSection";
import TestimonialSection from "./component/home/TestImonialSection";
import AboutSection from "./component/AboutSection";


export default function Home() {
  return (
    <main>
      <HeroSection />

      <AboutSection isShowButton={true} />

      <ServiceSection />

      <Suspense>
        <ProjectSection />
      </Suspense>


      <StatsCounterSection />

      <ProcessSection />

      <TestimonialSection />

      <BlogSection />
    </main>
  );
}
