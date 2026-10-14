import React from 'react'
import ProjectCard from '../component/project/ProjectCard'
import InnerPageHeroSection from '../component/InnerPageHeroSection'

function Project() {
  return (
    <div>

      {/* ------ hero section start --------- */}
      <InnerPageHeroSection
        title={"Our Projects"}
        image={"/banner/about-banner.png"}
        curentPage={"Our Projects"}
      />
      {/* ------ hero section end --------- */}

      <ProjectCard />

    </div>
  )
}

export default Project