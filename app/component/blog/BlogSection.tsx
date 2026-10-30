"use client";

import BlogCard from "../BlogCard";
import { Eyebrow, SectionDescription, SectionHeiglightText, SectionTitle } from "../SectionHeader";
import blog from "@/app/data/blog.json"

export default function BlogSection() {
    return (
        <section id="journal" className="bg-[#08111a] px-4 py-14 sm:px-8 lg:px-16">

            {/*  -------- section title ----------- */}


            <div className="flex justify-center">
                <Eyebrow text={blog.section.eyebrow} />
            </div>
            <SectionTitle className="text-center mx-auto">
                {blog.section.title} {" "} <SectionHeiglightText text={blog.section.accent} /> {" "}  {blog.section.suffix}
            </SectionTitle>

            <SectionDescription className="lg:w-6/12 sm:w-8/12 mx-auto text-center" text="Explore our latest articles, expert tips and design insights to help you create better spaces and a more beautiful tomorrow." />


            <div className="mx-auto grid max-w-7xl mt-10 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blog.blogs?.map((post, i) => (
                    <BlogCard
                        key={i + 1}
                        post={post}
                        ind={i} />
                ))}
            </div>
        </section>
    );
}