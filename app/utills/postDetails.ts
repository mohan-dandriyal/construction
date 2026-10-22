import data from "@/app/data/blog.json";
export interface PostSection { title: string; accent: string; paragraphs: string[]; quote?: string; }
export interface Post { id: string; day: string; monthYear: string; category: string; title: string; accent: string; lead: string; intro: string; image: string; imageAlt: string; sections: PostSection[]; }
export const posts: Post[] = data.posts;
