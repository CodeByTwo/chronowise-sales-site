"use client";

import { motion } from "framer-motion";
import { FadeIn } from "./section-wrapper";

export function SolutionIntro() {
  return (
    <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
      {/* Gold accent line at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-gold/50 to-gold" />

      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <FadeIn>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-3 h-3 rounded-full bg-gold mx-auto mb-12"
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-wide">
            ChronoWise was built for{" "}
            <span className="text-gold-gradient">exactly this moment</span>
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A platform designed from the ground up for the unique demands of
            luxury watch retail. No compromises. No workarounds. Just elegant,
            purposeful tools that understand your business.
          </p>
        </FadeIn>
      </div>

      {/* Gold accent line at bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-transparent via-gold/50 to-gold" />
    </section>
  );
}
