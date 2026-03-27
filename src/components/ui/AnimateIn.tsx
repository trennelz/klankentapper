"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const motionByTag = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  p: motion.p,
  span: motion.span,
} as const;

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: keyof typeof motionByTag;
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  as = "div",
}: AnimateInProps) {
  const Component = motionByTag[as];

  return (
    <Component
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Component>
  );
}
