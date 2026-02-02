"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  description: string;
  price: { monthly: number; annually: number };
  features: string[];
  isPopular?: boolean;
  billingPeriod: "monthly" | "annually";
}

export function PricingCard({
  name,
  description,
  price,
  features,
  isPopular = false,
  billingPeriod,
}: PricingCardProps) {
  const currentPrice =
    billingPeriod === "monthly" ? price.monthly : price.annually;
  const savings =
    billingPeriod === "annually"
      ? Math.round(((price.monthly * 12 - price.annually * 12) / (price.monthly * 12)) * 100)
      : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative p-8 rounded-2xl transition-all duration-500 ${
        isPopular
          ? "bg-card border-2 border-gold/50 shadow-xl shadow-gold/10"
          : "bg-card border border-white/10 hover:border-white/20"
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="px-4 py-1.5 rounded-full bg-gold text-background text-xs font-medium tracking-wider uppercase">
            Recommended
          </span>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="font-serif text-2xl text-foreground mb-2">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <div className="text-center mb-8">
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-muted-foreground">£</span>
          <span className="text-5xl font-serif text-foreground">{currentPrice}</span>
          <span className="text-muted-foreground">/mo</span>
        </div>
        {billingPeriod === "annually" && savings > 0 && (
          <p className="mt-2 text-sm text-gold">Save {savings}% with annual billing</p>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center mt-0.5">
              <Check size={12} className="text-gold" />
            </div>
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact" className="block">
        <Button
          className={`w-full h-12 tracking-wider transition-all duration-300 ${
            isPopular
              ? "bg-gold hover:bg-gold-light text-background hover:shadow-lg hover:shadow-gold/20"
              : "bg-transparent border border-white/20 hover:border-white/40 text-foreground hover:bg-white/5"
          }`}
        >
          Get Started
        </Button>
      </Link>
    </motion.div>
  );
}
