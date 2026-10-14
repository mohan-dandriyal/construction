import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { MotionConfig } from "framer-motion";
import AOSInit from "./AOSInit";
import "aos/dist/aos.css";
import "./globals.css";
import Footer from "./component/Footer";
import LoadingScreen from "@/app/component/LoadingScreen";
import { Suspense } from "react";
import PageLoader from "@/app/component/PageLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arcova Architecture Studio",
  description:
    "We design modern, sustainable spaces that inspire life. Discover Arcova Architecture Studio.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>
        <AOSInit />
        <MotionConfig reducedMotion="user">
          <PageLoader>
            <Suspense fallback={<LoadingScreen />}>
              {children}
              <Footer />
            </Suspense>
          </PageLoader>
        </MotionConfig>
      </body>
    </html>
  );
}
