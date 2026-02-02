"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "./section-wrapper";

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export function CTASection({
  title = "Ready to transform your waitlist management?",
  description = "Join the jewellers who have elevated their client relationships with ChronoWise.",
  primaryCTA = "Request a Demo",
  primaryHref = "/contact",
  secondaryCTA = "Explore Features",
  secondaryHref = "/features",
}: CTASectionProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#111113] to-background" />

      {/* Gold glow - using gradient instead of blur for performance */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(198,169,98,0.08) 0%, transparent 70%)" }}
      />

      {/* Border accents */}
      <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-wide">
            {title}
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={primaryHref}>
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-light text-background font-medium tracking-wider px-8 h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 group"
              >
                {primaryCTA}
                <ArrowRight
                  size={18}
                  className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                />
              </Button>
            </Link>
            {secondaryCTA && (
              <Link href={secondaryHref}>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/20 hover:border-white/40 text-foreground bg-transparent hover:bg-white/5 tracking-wider px-8 h-14 text-base transition-all duration-300"
                >
                  {secondaryCTA}
                </Button>
              </Link>
            )}
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              14-day free trial
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              No setup fees
            </span>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
