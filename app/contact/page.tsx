
import React from 'react'
import InnerPageHeroSection from '../component/InnerPageHeroSection'
import EnquirySection from '../component/contact/Enquirysection'
import MapLocation from '../component/contact/MapLocation'
import siteData from "@/app/data/site.json"

function EnquiryNow() {
  return (
    <div>
      <InnerPageHeroSection
        title={siteData.pageHeroes.contact.title}
        image={siteData.pageHeroes.contact.image}
        curentPage={siteData.pageHeroes.contact.currentPage}
      />


      <div>
        <EnquirySection />
      </div>

      <MapLocation />

    </div>
  )
}

export default EnquiryNow
