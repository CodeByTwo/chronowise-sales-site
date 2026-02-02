"use client";

import { motion } from "framer-motion";
import {
  SectionWrapper,
  AnimatedHeading,
  StaggerChildren,
  fadeInVariants,
} from "./section-wrapper";
import {
  Target,
  ShieldCheck,
  Lock,
  Zap,
  UserCheck,
  BarChart3,
} from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "Purpose-built for watch waitlists",
    description:
      "Every feature designed specifically for managing luxury watch allocations and client relationships.",
  },
  {
    icon: ShieldCheck,
    title: "GDPR compliant out of the box",
    description:
      "Digital signatures, consent tracking, and audit trails built into every workflow.",
  },
  {
    icon: Lock,
    title: "Bank-grade security",
    description:
      "Two-factor authentication, encrypted data storage, and enterprise-level protection for your client data.",
  },
  {
    icon: Zap,
    title: "Up and running in minutes",
    description:
      "Import your existing data and start managing waitlists immediately. No lengthy implementation.",
  },
  {
    icon: UserCheck,
    title: "No technical skills required",
    description:
      "Intuitive interface designed for jewellers, not IT specialists. If you can use a smartphone, you can use ChronoWise.",
  },
  {
    icon: BarChart3,
    title: "Beautiful analytics & insights",
    description:
      "Understand demand patterns, track conversion rates, and make informed allocation decisions.",
  },
];

export function BenefitsGrid() {
  return (
    <SectionWrapper className="bg-[#0D0D0F]">
      <div className="text-center mb-16">
        <AnimatedHeading className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
          Purpose-built for the world of fine horology
        </AnimatedHeading>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto"
        >
          Six pillars of excellence that set ChronoWise apart
        </motion.p>
      </div>

      <StaggerChildren className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          return (
            <motion.div
              key={benefit.title}
              variants={fadeInVariants}
              className="group relative p-8 rounded-xl bg-card border border-white/5 hover:border-gold/20 transition-all duration-500 card-hover"
            >
              {/* Subtle gold glow on hover */}
              <div className="absolute inset-0 rounded-xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-500">
                  <Icon size={28} className="text-gold" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </StaggerChildren>
    </SectionWrapper>
  );
}
