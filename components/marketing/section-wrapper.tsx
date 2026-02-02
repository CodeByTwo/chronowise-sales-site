"use client";

import { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  withGrain?: boolean;
}

export function SectionWrapper({
  children,
  className = "",
  id,
  withGrain = false,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-24 lg:py-32 ${withGrain ? "grain-overlay" : ""} ${className}`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

interface AnimatedHeadingProps {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
  gradient?: boolean;
}

export function AnimatedHeading({
  children,
  className = "",
  as: Component = "h2",
  gradient = false,
}: AnimatedHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Component
        className={`font-serif tracking-wide ${gradient ? "text-gold-gradient" : ""} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
}

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export function FadeIn({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const directionOffset = {
    up: { y: 30 },
    down: { y: -30 },
    left: { x: 30 },
    right: { x: -30 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directionOffset[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface StaggerChildrenProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.1,
}: StaggerChildrenProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const fadeInVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};
