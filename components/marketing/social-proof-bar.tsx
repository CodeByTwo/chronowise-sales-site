"use client";

import { motion } from "framer-motion";
import { Clock, Shield, Award } from "lucide-react";

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center items-center gap-8 lg:gap-16"
        >
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <Icon size={18} className="text-gold" />
                <span className="text-sm tracking-wide">{item.text}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
