"use client";

import { motion } from "framer-motion";

const placeholderLogos = [
  "Maison Horlogère",
  "Crown Jewellers",
  "Prestige Time",
  "Royal Watch Co",
  "Heritage Gems",
  "Elite Horology",
];

export function SocialProofBar() {
  return (
    <section className="relative bg-[#111113] py-16 overflow-hidden">
      {/* Top border accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-sm tracking-widest uppercase text-muted-foreground mb-12"
        >
          Trusted by discerning jewellers worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 lg:gap-16"
        >
          {placeholderLogos.map((name, index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="text-muted-foreground/40 hover:text-muted-foreground/60 transition-colors duration-300"
            >
              <span className="font-serif text-lg tracking-wider whitespace-nowrap">
                {name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom border accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
    </section>
  );
}
