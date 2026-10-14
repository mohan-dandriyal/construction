import ContactSection from "../component/contact/Contactsection"
import MapLocation from "../component/contact/MapLocation"
import InnerPageHeroSection from "../component/InnerPageHeroSection"


function Contact() {
    return (
        <div>
            <InnerPageHeroSection
                title={"Contact Us"}
                image={"/banner/about-banner.png"}
                curentPage={"Contact Us"}
            />



            <div>
                <ContactSection />

                <MapLocation />
            </div>
        </div>
    )
}

export default Contact