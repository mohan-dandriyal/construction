
"use client";

import blogs from "@/app/data/blog.json";

import homeData from "@/app/data/home.json"
import BlogCard from "../BlogCard";
import {
  Eyebrow,
  SectionDescription,
  SectionHeiglightText,
  SectionTitle,
} from "../SectionHeader";

const blog =  homeData.blog

const data = blogs as typeof blogs & {
  blogs: (typeof blogs.blogs)[number][];
};

export default function BlogSection() {
  const visibleBlogs = data.blogs;

  return (
    <section
      id={blog.id}
      className="px-4 py-14 pt-20 bg-[#0c1218] sm:px-8 lg:px-16"
    >
      {/* Section heading */}
      <div className="max-w-360 mx-auto">
        <div className="flex justify-center">
          <Eyebrow text={blog.eyebrow} />
        </div>

        <SectionTitle className="mx-auto text-center">
          {blog.titleStart}{" "}
          <SectionHeiglightText text={blog.titleHighlight} />{" "}
          {blog.titleEnd}
        </SectionTitle>

        <SectionDescription
          className="mx-auto text-center lg:w-6/12 sm:w-8/12"
          text={blog.description}
        />
      </div>

      {/* Dynamic blog cards */}
      <div className="mx-auto mt-10 grid max-w-[1280px] gap-8 md:grid-cols-2 lg:grid-cols-3">
        {visibleBlogs.map((post, index) => (
          <BlogCard
            key={index +1}
            post={post}
            ind={index}
          />
        ))}
      </div>
    </section>
  );
}
