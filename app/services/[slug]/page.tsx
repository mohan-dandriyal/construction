import { Playfair_Display, Poppins } from "next/font/google";

import InnerPageHeroSection from "@/app/component/InnerPageHeroSection";
import ServiceSidebar from "@/app/component/service-details/ServiceSidebar";
import ServiceDetail from "@/app/component/service-details/ServiceDetail";
import { services } from "@/app/utills/services";
import { Suspense } from "react";
import LoadingScreen from "@/app/component/LoadingScreen";

const serif = Playfair_Display({
    subsets: ["latin"],
    weight: ["500", "600", "700"],
    variable: "--font-serif",
});
const sans = Poppins({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-sans",
});

export function generateStaticParams() {
  return services.map((s) => ({
    slug: s.slug,
  }));
}

interface PageProps {
    params: Promise<{ slug: string }>;
}

async function ServicesContent({ params }: PageProps) {
    const { slug } = await params;
    const decodedSlug = decodeURIComponent(slug).toLowerCase().trim();
    const service = services.find((s) => s.slug.toLowerCase() === decodedSlug) ?? services[0];

    return (
        <div>
            <InnerPageHeroSection
                title={service.title}
                image={"/banner/about-banner.png"}
                curentPage={service.title}
            />

            <section
                className={`${serif.variable} ${sans.variable} bg-[#08121b] px-4 py-10 font-[family-name:var(--font-sans)] text-white sm:px-8 lg:py-16`}
            >
                <div className="mx-auto grid max-w-[1400px] gap-10 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] xl:gap-12">
                    <ServiceSidebar activeSlug={service.slug} />
                    <ServiceDetail service={service} />
                </div>
            </section>
        </div>
    );
}

export default function ServiceDetailsPage({ params }: PageProps) {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <ServicesContent params={params} />
    </Suspense>
  );
}
