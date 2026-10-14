
import InnerPageHeroSection from '@/app/component/InnerPageHeroSection'
import KeyFeatures from '@/app/component/project/KeyFeatures'
import ProjectOverview from '@/app/component/project/Projectoverview'
import ProjectShowcase from '@/app/component/project/Projectshowcase'
import ProjectSpecifications from '@/app/component/project/ProjectSpecifications'
import React from 'react'

function page() {
  return (
    <div>
         {/* ------ hero section start --------- */}
              <InnerPageHeroSection
                title={"Project Details"}
                image={"/banner/about-banner.png"}
                curentPage={"Project Details"}
              />

              <ProjectShowcase />


              <ProjectOverview />

              <KeyFeatures />

              <ProjectSpecifications />

    </div>

  )
}

export default page