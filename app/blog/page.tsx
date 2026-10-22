import BlogSection from "../component/blog/BlogSection"
import InnerPageHeroSection from "../component/InnerPageHeroSection"
import siteData from "@/app/data/site.json"


function Blog() {
    return (
        <div>
            <InnerPageHeroSection
                title={siteData.pageHeroes.blog.title}
                image={siteData.pageHeroes.blog.image}
                curentPage={siteData.pageHeroes.blog.currentPage}
            />

            <BlogSection />

        </div>
    )
}

export default Blog
