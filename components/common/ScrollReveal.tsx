"use client";

import { motion, useInView, Variant } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animation?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: {
    duration?: number;
    delay?: number;
    staggerChildren?: number;
  };
  threshold?: number;
}

const defaultAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const defaultTransition = {
  duration: 0.8,
  delay: 0.2,
  staggerChildren: 0.1,
};

export default function ScrollReveal({
  children,
  animation = defaultAnimation,
  transition = defaultTransition,
  threshold = 0.2,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    amount: threshold,
    margin: "0px 0px -100px 0px",
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animation}
      transition={{
        ...transition,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
