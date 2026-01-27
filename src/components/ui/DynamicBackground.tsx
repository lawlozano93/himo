"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";

export default function DynamicBackground() {
    const { backgroundColor } = useTheme();

    return (
        <motion.div
            animate={{ backgroundColor }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 -z-50 h-full w-full pointer-events-none"
        />
    );
}
