
import React from 'react'
import InnerPageHeroSection from '../component/InnerPageHeroSection'
import EnquirySection from '../component/contact/Enquirysection'
import MapLocation from '../component/contact/MapLocation'

function EnquiryNow() {
  return (
    <div>
      <InnerPageHeroSection
        title={"Contact Us"}
        image={"/banner/about-banner.png"}
        curentPage={"Contact Us"}
      />


      <div>
        <EnquirySection />
      </div>

      <MapLocation />

    </div>
  )
}

export default EnquiryNow