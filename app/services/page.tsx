
import React from 'react'
import InnerPageHeroSection from '../component/InnerPageHeroSection'
import Services from '../component/services/Services'
import siteData from "@/app/data/site.json"

function ServicesPage() {
    return (
        <div>
            <InnerPageHeroSection
                title={siteData.pageHeroes.services.title}
                image={siteData.pageHeroes.services.image}
                curentPage={siteData.pageHeroes.services.currentPage}
            />


            {/* ----------  services section --------- */}
            <Services />

        </div>
    )
}

export default ServicesPage
