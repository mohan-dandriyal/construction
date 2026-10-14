
import { Phone, Mail, MapPin, Clock, type LucideIcon } from "lucide-react";

export type ContactItem = {
  icon: LucideIcon;
  title: string;
  lines: string[];
  /** solid icon (phone, pin) vs outline icon (mail, clock) */
  filled?: boolean;
};

export const intro =
  "We’d love to hear from you. Whether you have a project in mind, need expert advice, or simply want to say hello, our team is here to help.";

export const contactItems: ContactItem[] = [
  { icon: Phone, title: "Phone Number", lines: ["+1 000000000",], filled: true },
  { icon: Mail, title: "Email Address", lines: ["info@xyz.com"] },
  {
    icon: MapPin,
    title: "Our Office",
    lines: ["2309 Mayflower Dr, Lynchburg, VA 24501, United States"],
    filled: true,
  },
  { icon: Clock, title: "Working Hours", lines: ["Mon - Sat: 9:00 AM - 6:00 PM", "Sunday: Closed"] },
];