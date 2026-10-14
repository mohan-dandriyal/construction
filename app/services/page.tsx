
import React from 'react'
import InnerPageHeroSection from '../component/InnerPageHeroSection'
import Services from '../component/services/Services'

function ServicesPage() {
    return (
        <div>
            <InnerPageHeroSection
                title={"Our Services"}
                image={"/banner/about-banner.png"}
                curentPage={"Our Services"}
            />


            {/* ----------  services section --------- */}
            <Services />

        </div>
    )
}

export default ServicesPage