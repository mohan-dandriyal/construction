import React from 'react'
import InnerPageHeroSection from '../component/InnerPageHeroSection'
import TeamSection from '../component/team/Teamsection'
import StatsCounterSection from '../component/home/StatsCounterSection'

function Teams() {
    return (
        <div>
            <InnerPageHeroSection
                title={"Our Teams"}
                image={"/banner/about-banner.png"}
                curentPage={"Our Teams"}
            />


            <div >
                <TeamSection />
            </div>


        </div>
    )
}

export default Teams