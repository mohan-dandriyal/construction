import data from "@/app/data/services.json";
export type Step = { title: string; description: string };
export type Service = { slug: string; title: string; category: string; short: string; description: string; image: string; href: string; paragraphs: string[]; quote: string; whyIntro: string; features: string[]; processIntro: string; steps?: Step[]; };
export function splitLast(text: string): [string, string] { const words = text.trim().split(" "); const last = words.pop() ?? ""; return [words.join(" "), last]; }
export const defaultSteps: Step[] = data.defaultSteps;
export const services: Service[] = data.items.map((service) => ({ ...service, steps: defaultSteps }));
