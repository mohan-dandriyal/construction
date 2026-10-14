

"use client"


import {
   House, Leaf, Warehouse,
  Box,
  Sofa,
  PencilRuler,
} from "lucide-react";

import {SectionTitle, ColorFullTitleText } from '@/app/component/SectionTitle';


import { Playfair_Display, Poppins } from "next/font/google";
import ServiceCard from "./ServiceCard";

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

const services = [
  {
    title: "Home Interior Design",
    description:
      "Stylish and functional interiors that reflect your personality and enhance everyday living.",
    image: "/service-1.png",
    icon: House,
    href: "/services/home-interior-design",
  },
  {
    title: "Home Exterior Design",
    description:
      "Elegant and durable exterior designs that create a lasting first impression with modern aesthetics.",
    image: "/ser-2.jpg",
    icon: Warehouse,
    href: "/services/home-exterior-design",
  },
  {
    title: "2D/3D Design Layout",
    description:
      "Detailed 2D and 3D design layouts to help you visualize your dream space before construction.",
    image: "/ser-3.png",
    icon: Box,
    href: "/services/2d-3d-design-layout",
  },
  {
    title: "Furniture's Design",
    description:
      "Custom furniture designs that blend style, comfort, and functionality for modern spaces.",
    image: "/ser-4.webp",
    icon: Sofa,
    href: "/services/furnitures-design",
  },
  {
    title: "Modern Home Interior",
    description:
      "Contemporary interior solutions with innovative design and space optimization for modern homes.",
    image: "/ser-5.jpg",
    icon: PencilRuler,
    href: "/services/modern-home-interior",
  },
  {
    title: "Custom Design Plan",
    description:
      "Personalized design plans tailored to your needs, lifestyle, and budget.",
    image: "/ser-6.webp",
    icon: Leaf,
    href: "/services/custom-design-plan",
  },
];



function ServiceSection() {
    return (
        <section
            id="services"
            className={`${serif.variable} ${sans.variable} bg-[#0a0e13] px-4 py-16 font-[family-name:var(--font-sans)] text-white sm:px-8`}
        >

            <div className="mx-auto max-w-350">
                {/* ----------- title --------  */}
                <SectionTitle
                    innerTitle={"Our Services"}
                    mainTitle={<div>
                        Architecture Solutions <br />
                        <ColorFullTitleText content=" Tailored to Your Vision" />
                    </div>}
                    description={"From concept to completion, we offer a comprehensive range of  architectural services tailored to your vision. Our expert team creates functional, aesthetic, and sustainable spaces for modern living."}
                />

                {/* Grid */}
                <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, i) => (
                        <ServiceCard key={i + 1} service={service} index={i} total={services.length} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ServiceSection