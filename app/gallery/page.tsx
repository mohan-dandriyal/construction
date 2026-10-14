import type { Metadata } from "next";
import InnerPageHeroSection from "../component/InnerPageHeroSection";
import GallerySection from "../component/gallery/GallerySection";

export const metadata: Metadata = {
  title: "Project Gallery | Arcova Architecture Studio",
  description:
    "Explore our visual portfolio of architectural designs, luxury villa transformations, and premium bespoke interiors.",
};

export default function GalleryPage() {
  return (
    <main>
      <InnerPageHeroSection
        title={"Our Gallery"}
        image={"/banner/about-banner.png"}
        curentPage={"Gallery"}
      />

      <GallerySection />
    </main>
  );
}