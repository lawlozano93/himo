"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import { ReactNode } from "react";

interface ScrollColorTriggerProps {
    children: ReactNode;
    color: string;
    viewportAmount?: number;
    id?: string;
}

export default function ScrollColorTrigger({ 
    children, 
    color, 
    viewportAmount = 0.5, 
    id 
}: ScrollColorTriggerProps) {
    const { setBackgroundColor } = useTheme();

    return (
        <motion.div
            id={id}
            onViewportEnter={() => setBackgroundColor(color)}
            viewport={{ amount: viewportAmount }}
        >
            {children}
        </motion.div>
    );
}
