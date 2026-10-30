

"use client"


import {
    House, Leaf, Warehouse,
    Box,
    Sofa,
    PencilRuler,
} from "lucide-react";



import { Playfair_Display, Poppins } from "next/font/google";
import ServiceCard from "./ServiceCard";
import serviceData from "@/app/data/services.json";
import { Eyebrow, SectionDescription, SectionHeiglightText, SectionTitle } from "../SectionHeader";

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
                <div className="flex justify-center">
                    <Eyebrow text={serviceData.section.eyebrow} className="text-center mx-auto" />
                </div>

                <SectionTitle className="text-center mx-auto">
                    Architecture Solutions
                    <br />
                    <SectionHeiglightText text="Tailored to Your Vision" />
                </SectionTitle>

                <SectionDescription text={serviceData.section.description} className="lg:w-6/12 sm:w-9/12 text-center mx-auto" />

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
