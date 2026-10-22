
import InnerPageHeroSection from "../InnerPageHeroSection";
import siteData from "@/app/data/site.json";


export default function HeroSection() {

    return (
        <InnerPageHeroSection
            title={siteData.pageHeroes.about.title}
            image={siteData.pageHeroes.about.image}
            curentPage={siteData.pageHeroes.about.currentPage}
        />
    );
}
