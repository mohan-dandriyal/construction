import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "aos/dist/aos.css";
import "./globals.css";
import Footer from "./component/Footer";
import siteData from "@/app/data/site.json";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: siteData.metadata.title,
  description: siteData.metadata.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
