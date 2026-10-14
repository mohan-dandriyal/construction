
import { Suspense } from "react";
import { connection } from "next/server";
import BlogHero from "@/app/component/blog/Bloghero";
import BlogHeader from "@/app/component/blog/Blogheader";
import ArticleSection from "@/app/component/blog/Articlesection";


import { notFound } from "next/navigation";
import { Playfair_Display, Poppins } from "next/font/google";
import { posts } from "@/app/utills/postDetails";
import InnerPageHeroSection from "@/app/component/InnerPageHeroSection";
import LoadingScreen from "@/app/component/LoadingScreen";

const serif = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-serif",
});
const sans = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-sans",
});


interface PageProps {
  params: Promise<{ id: number }>;
}

async function BlogContent({ params }: PageProps) {
  await connection();

  const { id } = await params;
  const post = posts.find((p) => p.id == id);

  if (!post) notFound();


  return (
    <div>

      <InnerPageHeroSection
        title={"Blog Details"}
        image={"/banner/about-banner.png"}
        curentPage={"Blog Details"}
      />


      <section
        className={`${serif.variable} ${sans.variable} bg-[#08121b] px-4 py-10 font-[family-name:var(--font-sans)] text-white sm:px-8 lg:py-16`}
      >
        <article className="mx-auto max-w-[1300px]">
          <BlogHero
            image={`/service-1.png`}
            alt={`${post.title} ${post.accent}`}
            day={post.day}
            monthYear={post.monthYear}
          />

          <BlogHeader
            category={post.category}
            title={post.title}
            accent={post.accent}
            lead={post.lead}
            intro={post.intro}
          />

          {post.sections.map((section, i) => (
            <ArticleSection
              key={section.accent}
              section={section}
              image={`/ser-5.jpg`}
              alt={`${section.title.replace("\n", " ")} ${section.accent}`}
              reverse={i % 2 === 1}
            />
          ))}
        </article>
      </section>

    </div>
  );
}




export default function BlogDetailsPage({ params }: PageProps) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <BlogContent params={params} />
    </Suspense>
  );
}
