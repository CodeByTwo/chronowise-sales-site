"use client";

import { ReactNode, useRef, useEffect, useState } from "react";

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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Make visible immediately to prevent blank content
    const timer = setTimeout(() => setIsVisible(true), 50);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      }`}
      style={{ willChange: "opacity, transform" }}
    >
      <Component
        className={`font-serif tracking-wide ${gradient ? "text-gold-gradient" : ""} ${className}`}
      >
        {children}
      </Component>
    </div>
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
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback: make visible after a short delay regardless of intersection
    const fallbackTimer = setTimeout(() => setIsVisible(true), 100 + delay * 1000);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay before showing
          setTimeout(() => setIsVisible(true), delay * 1000);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "50px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [delay]);

  const directionClasses = {
    up: isVisible ? "translate-y-0" : "translate-y-6",
    down: isVisible ? "translate-y-0" : "-translate-y-6",
    left: isVisible ? "translate-x-0" : "translate-x-6",
    right: isVisible ? "translate-x-0" : "-translate-x-6",
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${directionClasses[direction]} ${className}`}
      style={{ willChange: "opacity, transform" }}
    >
      {children}
    </div>
  );
}

