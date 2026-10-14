
import { Phone, Mail, MapPin, Ruler, ClipboardCheck, ShieldCheck, Box, type LucideIcon } from "lucide-react";

export const intro =
  "We’d love to hear about your project. Fill in the details below and our team will get back to you shortly.";

export type ContactLine = { icon: LucideIcon; main: string; sub: string[] };

export const contactLines: ContactLine[] = [
  { icon: Phone, main: "+1 00000 00000", sub: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"] },
  { icon: Mail, main: "info@xyz.com", sub: ["We reply within 24 hours"] },
  {
    icon: MapPin,
    main: "123, Design Avenue,",
    sub: ["2309 Mayflower Dr, Lynchburg, VA 24501, United States"],
  },
];

export const projectTypes = [
  "Residential Architecture",
  "Commercial Architecture",
  "Interior Design",
  "Renovation & Remodeling",
  "Landscape Design",
  "Other",
];

export const timelines = [
  "As soon as possible",
  "Within 1 month",
  "1 - 3 months",
  "3 - 6 months",
  "Just exploring",
];

export type Feature = { icon: LucideIcon; title: string; text: string };

export const features: Feature[] = [
  { icon: Ruler, title: "Personalised Design", text: "Spaces tailored to your lifestyle" },
  { icon: ClipboardCheck, title: "Expert Guidance", text: "From concept to completion" },
  { icon: ShieldCheck, title: "Transparent Process", text: "Clear communication at every step" },
  { icon: Box, title: "Timeless Spaces", text: "Designs that last for generations" },
];