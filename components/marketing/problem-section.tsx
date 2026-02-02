"use client";

import {
  SectionWrapper,
  AnimatedHeading,
  FadeIn,
} from "./section-wrapper";
import { FileSpreadsheet, Puzzle, Shield, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: FileSpreadsheet,
    title: "Spreadsheets lose customers",
    description:
      "Manual tracking leads to missed follow-ups, forgotten preferences, and clients who slip through the cracks.",
  },
  {
    icon: Puzzle,
    title: "Generic CRMs require costly customisation",
    description:
      "Salesforce and HubSpot demand technical expertise and significant investment to adapt for watch retail.",
  },
  {
    icon: Shield,
    title: "Compliance creates complexity",
    description:
      "GDPR requirements for consent tracking and data handling add administrative burden to every interaction.",
  },
  {
    icon: TrendingDown,
    title: "Opportunities slip through the cracks",
    description:
      "Without purpose-built tools, allocation decisions rely on memory rather than data-driven insights.",
  },
];

export function ProblemSection() {
  return (
    <SectionWrapper className="bg-[#0D0D0F]">
      <div className="text-center mb-16">
        <AnimatedHeading className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
          Managing waitlists shouldn't feel like guesswork
        </AnimatedHeading>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {painPoints.map((point, index) => {
          const Icon = point.icon;
          return (
            <FadeIn key={point.title} delay={index * 0.1}>
              <div className="group relative p-8 rounded-xl bg-card/50 border border-white/5 hover:border-white/10 transition-all duration-500 h-full">
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-500">
                    <Icon
                      size={24}
                      className="text-muted-foreground group-hover:text-gold transition-colors duration-500"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {point.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
