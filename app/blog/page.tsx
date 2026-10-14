import BlogSection from "../component/blog/BlogSection"
import InnerPageHeroSection from "../component/InnerPageHeroSection"


function Blog() {
    return (
        <div>
            <InnerPageHeroSection
                title={"Our Blogs"}
                image={"/banner/about-banner.png"}
                curentPage={"Our Blogs"}
            />

            <BlogSection />

        </div>
    )
}

export default Blog