

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
import serviceData from "@/app/data/services.json";

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

const serviceIcons = [House, Warehouse, Box, Sofa, PencilRuler, Leaf];
const services = serviceData.items.map((service, index) => ({ ...service, icon: serviceIcons[index] }));



function ServiceSection() {
    return (
        <section
            id="services"
            className={`${serif.variable} ${sans.variable} bg-[#0a0e13] px-4 py-16 font-[family-name:var(--font-sans)] text-white sm:px-8`}
        >

            <div className="mx-auto max-w-350">
                {/* ----------- title --------  */}
                <SectionTitle
                    innerTitle={serviceData.section.eyebrow}
                    mainTitle={<div>
                        Architecture Solutions <br />
                        <ColorFullTitleText content=" Tailored to Your Vision" />
                    </div>}
                    description={serviceData.section.description}
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
