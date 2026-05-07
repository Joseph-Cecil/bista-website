"use client";

import { motion } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";
import { useRef } from "react";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedWrapper({ children, className, delay = 0 }: AnimatedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref, { threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
