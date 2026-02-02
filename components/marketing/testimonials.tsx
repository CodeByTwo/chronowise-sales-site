"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  AnimatedHeading,
  StaggerChildren,
  fadeInVariants,
} from "./section-wrapper";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "ChronoWise has transformed how we manage our waitlists. What used to take hours in spreadsheets now happens in minutes.",
    author: "James Richardson",
    role: "Owner",
    company: "Heritage Timepieces, London",
  },
  {
    quote:
      "The GDPR compliance features alone justify the investment. Digital signatures and consent tracking give us complete peace of mind.",
    author: "Sophie Laurent",
    role: "Operations Director",
    company: "Maison du Temps, Paris",
  },
  {
    quote:
      "Finally, a platform that understands luxury watch retail. The insights we gain from the analytics have improved our allocation decisions significantly.",
    author: "Marcus Weber",
    role: "Sales Director",
    company: "Chronos AG, Zurich",
  },
];

const stats = [
  { value: "150+", label: "Boutiques" },
  { value: "12", label: "Countries" },
  { value: "50K+", label: "Waitlist entries managed" },
];

export function Testimonials() {
  return (
    <SectionWrapper className="bg-background">
      <div className="text-center mb-16">
        <AnimatedHeading className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
          Trusted by discerning jewellers
        </AnimatedHeading>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-3 gap-8 mb-20 max-w-2xl mx-auto"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <p className="text-3xl lg:text-4xl font-serif text-gold">{stat.value}</p>
            <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Testimonial cards */}
      <StaggerChildren className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.author}
            variants={fadeInVariants}
            className="group relative p-8 rounded-xl bg-card border border-white/5 hover:border-gold/20 transition-all duration-500"
          >
            {/* Quote icon */}
            <Quote
              size={40}
              className="text-gold/20 mb-6"
            />

            <blockquote className="text-foreground leading-relaxed mb-8">
              "{testimonial.quote}"
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                <span className="text-gold font-serif text-lg">
                  {testimonial.author.charAt(0)}
                </span>
              </div>
              <div>
                <p className="text-foreground font-medium">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>

            {/* Subtle gold glow on hover */}
            <div className="absolute inset-0 rounded-xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </motion.div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
