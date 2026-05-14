"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIntersection } from "@/hooks/use-intersection";

interface AnimatedWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "header" | "li";
}

export function AnimatedWrapper({
  children,
  className,
  delay = 0,
  as = "div",
}: AnimatedWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref, { threshold: 0.08 });
  const reducedMotion = useReducedMotion();

  const MotionTag = motion[as] as typeof motion.div;

  if (reducedMotion) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <MotionTag
      ref={ref as React.RefObject<HTMLDivElement>}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.35, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerWrapperProps {
  children: React.ReactNode[];
  className?: string;
  itemClassName?: string;
  staggerMs?: number;
}

export function StaggerWrapper({
  children,
  className,
  itemClassName,
  staggerMs = 60,
}: StaggerWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref, { threshold: 0.05 });
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return (
      <div ref={ref} className={className}>
        {children.map((child, i) => (
          <div key={i} className={itemClassName}>{child}</div>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            duration: 0.32,
            delay: Math.min(i * (staggerMs / 1000), 0.3),
            ease: "easeOut",
          }}
          className={itemClassName}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}
