import React from 'react'
import ProjectCard from '../component/project/ProjectCard'
import InnerPageHeroSection from '../component/InnerPageHeroSection'
import siteData from "@/app/data/site.json"

function Project() {
  return (
    <div>

      {/* ------ hero section start --------- */}
      <InnerPageHeroSection
        title={siteData.pageHeroes.projects.title}
        image={siteData.pageHeroes.projects.image}
        curentPage={siteData.pageHeroes.projects.currentPage}
      />
      {/* ------ hero section end --------- */}

      <ProjectCard />

    </div>
  )
}

export default Project
