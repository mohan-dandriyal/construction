"use client";

import BlogCard from "../BlogCard";
import {
  Eyebrow,
  SectionDescription,
  SectionHeiglightText,
  SectionTitle,
} from "../SectionHeader";
import blog from "@/app/data/blog.json";

export default function BlogSection() {
  return (
    <section
      id={blog.section.id}
      className="bg-[#08111a] px-4 py-14 sm:px-8 lg:px-16"
    >
      <div className="flex justify-center">
        <Eyebrow text={blog.section.eyebrow} />
      </div>
      <SectionTitle className="mx-auto text-center">
        {blog.section.title}{" "}
        <SectionHeiglightText text={blog.section.accent} />{" "}
        {blog.section.suffix}
      </SectionTitle>

      <SectionDescription
        className="mx-auto text-center sm:w-8/12 lg:w-6/12"
        text={blog.section.description}
      />

      <div className="mx-auto mt-10 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blog.blogs?.map((post, i) => (
          <BlogCard key={post.slug ?? i + 1} post={post} ind={i} />
        ))}
      </div>
    </section>
  );
}
