
import React from 'react'
import { motion, type Variants } from "framer-motion";
import Image from 'next/image';
import { ArrowRight } from "lucide-react";
import { LinearBgButton, OutlineLinkButton } from '@/app/component/ui/ThemeButtons'

// Parent hover drives the image zoom and arrow nudge
const imageVariants: Variants = {
    rest: { scale: 1 },
    hover: { scale: 1.08, transition: { duration: 0.6, ease: "easeOut" } },
};

export interface BlogPost {
    Srn?: number;
    slug?: string;
    day?: string;
    month?: string;
    category?: string;
    title: string;
    excerpt?: string;
    image: string;
}

interface BlogCardProps {
    post: BlogPost;
    ind?: number;
}

function BlogCard({ post, ind = 0 }: BlogCardProps) {
    return (

        <div key={ind + 1}>
            <motion.article
                initial="rest"
                whileHover="hover"
                animate="rest"
                variants={{
                    rest: { y: 0, boxShadow: "0 0 0 rgba(0,0,0,0)" },
                    hover: {
                        y: -8,
                        boxShadow: "0 24px 50px rgba(0,0,0,0.5)",
                        transition: { duration: 0.3, ease: "easeOut" },
                    },
                }}
                className="flex h-full flex-col overflow-hidden rounded-md border border-[#1c2733] bg-[#0b141d]"
            >
                {/* Image + date badge */}
                <div className="relative h-[230px] overflow-hidden sm:h-[260px] lg:h-[230px]">
                    <motion.div variants={imageVariants} className="absolute inset-0">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                        />
                    </motion.div>

                    <div className="absolute top-3 left-3 border border-[#d9a55b] bg-[#2a2a2a]/90  px-2 py-2 text-center backdrop-blur-sm">
                        <div className="font-display text-3xl leading-none text-white">
                            {post.day}
                        </div>
                        <div className="mt-1.5 text-[10px] font-medium tracking-[0.12em] text-[#cfd5db]">
                            {post.month}
                        </div>
                    </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col border-t border-[#1c2733] px-7 py-6">
                    <div className="flex items-center gap-3 text-[11px] font-medium tracking-[0.2em] text-[#e0a04c]">
                        <span className="h-px w-10 bg-[#e0a04c]" />
                        {post.category}
                    </div>

                    <h3 className="mt-5 font-display text-[26px] leading-[1.3] font-medium text-white">
                        {post.title}
                    </h3>

                    <p className="mt-4 text-[15px] leading-[1.9] text-[#aeb6bf]">
                        {post.excerpt?.slice(0, 90)}
                    </p>

                    <div className="mt-auto ">
                        {/* <OutlineLinkButton
                            href={`/blog/1`}>
                            READ MORE
                            <motion.span
                                variants={{ rest: { x: 0 }, hover: { x: 5 } }}
                                className="grid h-8 w-8 place-items-center rounded-full bg-gold text-navy"
                            >
                                <ArrowRight size={16} />
                            </motion.span>
                        </OutlineLinkButton> */}

                        <LinearBgButton href={`/blog/1`}>
                            <div className='flex items-center gap-2'>
                                READ MORE
                                <motion.span
                                    variants={{ rest: { x: 0 }, hover: { x: 5 } }}
                                    className="grid h-8 w-8 place-items-center rounded-full bg-gold text-navy"
                                >
                                    <ArrowRight size={16} />
                                </motion.span>
                            </div>
                        </LinearBgButton>

                    </div>
                </div>
            </motion.article>
        </div>
    )
}

export default BlogCard