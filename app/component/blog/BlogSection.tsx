"use client";

import { SectionTitle, ColorFullTitleText } from "../SectionTitle";
import { blogs } from "@/app/utills/blogData";
import BlogCard from "../BlogCard";


export default function BlogSection() {
    return (
        <section id="journal" className="bg-[#08111a] px-4 py-14 sm:px-8 lg:px-16">

            {/*  -------- section title ----------- */}

            <SectionTitle
                innerTitle={"Our Blog"}
                mainTitle={<div>
                    Latest <ColorFullTitleText content="Articles" />  & Insights
                </div>}
                description={"Explore our latest articles, expert tips and design insights to help you create better spaces and a more beautiful tomorrow."}
            />


            <div className="mx-auto grid max-w-7xl mt-10 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {blogs?.map((post, i) => (
                    <BlogCard
                        key={i + 1}
                        post={post}
                        ind={i} />
                ))}
            </div>
        </section>
    );
}