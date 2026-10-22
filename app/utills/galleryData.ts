import data from "@/app/data/gallery.json";
export interface GalleryItem { id: number; title: string; category: "Architecture" | "Interior" | "Exterior" | "Residential" | "Commercial"; location: string; image: string; description: string; }
export const galleryCategories = data.categories as unknown as readonly ["All", "Architecture", "Interior", "Exterior", "Residential", "Commercial"];
export type GalleryCategory = (typeof galleryCategories)[number];
export const galleryItems: GalleryItem[] = data.items.map((item) => ({ ...item, category: item.category as GalleryItem["category"] }));
