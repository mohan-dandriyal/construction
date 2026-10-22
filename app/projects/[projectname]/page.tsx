
import InnerPageHeroSection from '@/app/component/InnerPageHeroSection'
import KeyFeatures from '@/app/component/project/KeyFeatures'
import ProjectOverview from '@/app/component/project/Projectoverview'
import ProjectShowcase from '@/app/component/project/Projectshowcase'
import ProjectSpecifications from '@/app/component/project/ProjectSpecifications'
import React from 'react'
import siteData from '@/app/data/site.json'

function page() {
  return (
    <div>
         {/* ------ hero section start --------- */}
              <InnerPageHeroSection
                title={siteData.pageHeroes.projectDetails.title}
                image={siteData.pageHeroes.projectDetails.image}
                curentPage={siteData.pageHeroes.projectDetails.currentPage}
              />

              <ProjectShowcase />


              <ProjectOverview />

              <KeyFeatures />

              <ProjectSpecifications />

    </div>

  )
}

export default page
