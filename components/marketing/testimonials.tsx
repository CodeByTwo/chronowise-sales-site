"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  AnimatedHeading,
  FadeIn,
} from "./section-wrapper";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <SectionWrapper className="bg-background">
      <div className="text-center mb-16">
        <AnimatedHeading className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
          Trusted by heritage jewellers
        </AnimatedHeading>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Built in partnership with established luxury watch retailers who
            understand what it takes to manage high-demand timepieces.
          </p>
        </FadeIn>
      </div>

      {/* Featured testimonial */}
      <FadeIn delay={0.2}>
        <div className="max-w-3xl mx-auto">
          <div className="relative p-10 lg:p-12 rounded-2xl bg-card border border-gold/20">
            {/* Quote icon */}
            <Quote size={48} className="text-gold/30 mb-6" />

            <blockquote className="text-xl lg:text-2xl text-foreground leading-relaxed mb-8 font-serif">
              "ChronoWise has transformed how we manage our waitlists. What used
              to take hours in spreadsheets now happens in minutes. Finally, a
              platform that truly understands the nuances of luxury watch
              retail."
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-gold font-serif text-xl">H</span>
              </div>
              <div>
                <p className="text-foreground font-medium text-lg">
                  Heritage Watch Retailer
                </p>
                <p className="text-muted-foreground">
                  Established 1848 · United Kingdom
                </p>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-gold/20 rounded-tr-lg" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-gold/20 rounded-bl-lg" />
          </div>
        </div>
      </FadeIn>

      {/* Trust statement */}
      <FadeIn delay={0.3}>
        <p className="text-center text-muted-foreground mt-12 max-w-xl mx-auto">
          We work closely with our retail partners to continuously refine
          ChronoWise based on real-world feedback from the shop floor.
        </p>
      </FadeIn>
    </SectionWrapper>
  );
}
