
import React from 'react'
import InnerPageHeroSection from '../component/InnerPageHeroSection'
import EnquirySection from '../component/enquiry/Enquirysection'

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

    </div>
  )
}

export default EnquiryNow