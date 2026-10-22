

import HeroSection from "../component/about/HeroSection";
import ProcessSection from "../component/home/ProcessSection";
import StatsCounterSection from "../component/home/StatsCounterSection";
import WhyChooseUs from "../component/about/WhyChooseUs";
import AboutSection from "../component/AboutSection";

export default function About() {
    return (
        <main>
            <HeroSection />
            <AboutSection />
            <StatsCounterSection />
            <WhyChooseUs />
            <ProcessSection />
        </main>
    );
}
