"use client";

import {
  SectionWrapper,
  AnimatedHeading,
  FadeIn,
} from "./section-wrapper";
import { Upload, Watch, Layers, MessageSquare } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Upload,
    title: "Import your customers",
    description:
      "Upload your existing client database via CSV or start fresh. Either way, you're operational within minutes.",
  },
  {
    number: "02",
    icon: Watch,
    title: "Add watches to your catalogue",
    description:
      "Build your watch inventory with detailed specifications. Reference numbers, materials, complications—everything organised.",
  },
  {
    number: "03",
    icon: Layers,
    title: "Manage your waitlist pipeline",
    description:
      "Track every client through your pipeline from initial interest to final allocation. Visual, intuitive, complete.",
  },
  {
    number: "04",
    icon: MessageSquare,
    title: "Track, communicate, convert",
    description:
      "Send personalised updates, log interactions, and convert interest into sales with precision.",
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper className="bg-[#0D0D0F]">
      <div className="text-center mb-20">
        <AnimatedHeading className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
          Begin in minutes. Master in days.
        </AnimatedHeading>
        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Four simple steps to transform your waitlist management
          </p>
        </FadeIn>
      </div>

      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.number} delay={index * 0.15}>
                <div className="relative text-center lg:text-left">
                  {/* Step number with gold accent */}
                  <div className="relative inline-block mb-6">
                    <div className="w-16 h-16 rounded-full bg-card border border-gold/30 flex items-center justify-center mx-auto lg:mx-0">
                      <Icon size={28} className="text-gold" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gold text-background text-xs font-medium flex items-center justify-center">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-medium text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
