
"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverEffect ? { scale: 1.02, boxShadow: "0 0 20px rgba(0, 243, 255, 0.3)" } : {}}
            className={cn(
                "glass-panel rounded-2xl p-6 transition-all duration-300",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}
