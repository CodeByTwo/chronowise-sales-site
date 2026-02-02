"use client";

import { Clock, Shield, Award } from "lucide-react";
import { FadeIn } from "./section-wrapper";

const highlights = [
  {
    icon: Clock,
    text: "Built for luxury watch retail",
  },
  {
    icon: Award,
    text: "Developed with heritage jewellers",
  },
  {
    icon: Shield,
    text: "GDPR compliant by design",
  },
];

export function SocialProofBar() {
  return (
    <section className="relative bg-[#111113] py-12 overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-16">
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <Icon size={18} className="text-gold" />
                  <span className="text-sm tracking-wide">{item.text}</span>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
