import type { Metadata } from "next";
import InnerPageHeroSection from "../component/InnerPageHeroSection";
import GallerySection from "../component/gallery/GallerySection";
import siteData from "@/app/data/site.json";

export const metadata: Metadata = {
  title: siteData.pageHeroes.gallery.metaTitle,
  description: siteData.pageHeroes.gallery.metaDescription,
};

export default function GalleryPage() {
  return (
    <main>
      <InnerPageHeroSection
        title={siteData.pageHeroes.gallery.title}
        image={siteData.pageHeroes.gallery.image}
        curentPage={siteData.pageHeroes.gallery.currentPage}
      />

      <GallerySection />
    </main>
  );
}
