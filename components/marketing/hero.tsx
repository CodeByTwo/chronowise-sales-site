"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { WatchFace } from "./watch-face";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background gradient layers */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-[#111113]" />

        {/* Radial gold glow - using gradient instead of blur for performance */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(198,169,98,0.08) 0%, transparent 70%)" }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Grain texture */}
        <div className="absolute inset-0 grain-overlay" />

        {/* Animated watch face */}
        <WatchFace />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            For discerning jewellers
          </span>
        </div>

        {/* Headline */}
        <h1
          className="mt-8 font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-foreground animate-fade-in-up"
          style={{ animationDelay: "150ms" }}
        >
          <span className="block">Waitlist management,</span>
          <span className="block mt-2 text-gold-gradient">refined.</span>
        </h1>

        {/* Subheadline */}
        <p
          className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "300ms" }}
        >
          Purpose-built for luxury watch jewellers. Manage your allocations,
          nurture your clientele, and streamline operations with elegance.
        </p>

        {/* CTAs */}
        <div
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
          style={{ animationDelay: "450ms" }}
        >
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-gold hover:bg-gold-light text-background font-medium tracking-wider px-8 h-14 text-base transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 group"
            >
              Request a Demo
              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </Button>
          </Link>
          <Link href="/features">
            <Button
              variant="outline"
              size="lg"
              className="border-white/20 hover:border-white/40 text-foreground bg-transparent hover:bg-white/5 tracking-wider px-8 h-14 text-base transition-all duration-300"
            >
              Explore Features
            </Button>
          </Link>
        </div>

        {/* Trust indicator */}
        <p
          className="mt-12 text-sm text-muted-foreground animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          Developed in partnership with established UK watch retailers
        </p>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111113] to-transparent" />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in"
        style={{ animationDelay: "900ms" }}
      >
        <div className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center p-2 animate-bounce-slow">
          <div className="w-1 h-2 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
}
