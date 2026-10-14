"use client";

import { useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./LoadingScreen";

const LOADING_MS = 2000; // change this to set the duration

export default function PageLoader({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(true);

    // Hide the loader after LOADING_MS
    useEffect(() => {
        const id = setTimeout(() => setLoading(false), LOADING_MS);
        return () => clearTimeout(id);
    }, []);

    // Lock page scroll while the loader is visible
    useEffect(() => {
        document.body.style.overflow = loading ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [loading]);

    return (
        <>
            {children}

            <AnimatePresence>
                {loading && (
                    <motion.div
                        key="page-loader"
                        className="fixed inset-0 z-[100]"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <LoadingScreen />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}