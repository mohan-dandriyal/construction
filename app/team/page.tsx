import React from 'react'
import InnerPageHeroSection from '../component/InnerPageHeroSection'
import TeamSection from '../component/team/Teamsection'
import siteData from "@/app/data/site.json"

function Teams() {
    return (
        <div>
            <InnerPageHeroSection
            title={siteData.pageHeroes.team.title}
            image={siteData.pageHeroes.team.image}
            curentPage={siteData.pageHeroes.team.currentPage}
            />


            <div >
                <TeamSection />
            </div>


        </div>
    )
}

export default Teams
