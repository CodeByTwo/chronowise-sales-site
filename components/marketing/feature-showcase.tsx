"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SectionWrapper,
  AnimatedHeading,
  FadeIn,
} from "./section-wrapper";
import { LayoutDashboard, Users, Layers, TrendingUp } from "lucide-react";

const features = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    title: "Dashboard",
    description:
      "Get a complete overview of your waitlist performance at a glance. Track key metrics, monitor pipeline health, and identify trends.",
    mockup: (
      <DashboardMockup />
    ),
  },
  {
    id: "customers",
    icon: Users,
    title: "Customer Management",
    description:
      "Comprehensive customer profiles with contact details, preferences, purchase history, and communication logs. Everything you need to nurture relationships.",
    mockup: (
      <CustomersMockup />
    ),
  },
  {
    id: "pipeline",
    icon: Layers,
    title: "Wishlist Pipeline",
    description:
      "Visual pipeline with six status stages from initial interest to final allocation. Track time on waitlist, prioritise clients, and never miss an opportunity.",
    mockup: (
      <PipelineMockup />
    ),
  },
  {
    id: "analytics",
    icon: TrendingUp,
    title: "Analytics",
    description:
      "Understand demand patterns across brands, models, and collections. Make data-driven allocation decisions with beautiful, actionable insights.",
    mockup: (
      <AnalyticsMockup />
    ),
  },
];

function DashboardMockup() {
  return (
    <div className="bg-[#111113] rounded-lg border border-white/10 p-6 h-full">
      <div className="grid grid-cols-3 gap-4 mb-6">
        {["Active Waitlists", "Pending Offers", "This Month"].map((label, i) => (
          <div key={label} className="bg-[#18181B] rounded-lg p-4">
            <p className="text-xs text-muted-foreground mb-1">{label}</p>
            <p className="text-2xl font-serif text-gold">{[247, 18, 12][i]}</p>
          </div>
        ))}
      </div>
      <div className="bg-[#18181B] rounded-lg p-4 h-32 flex items-end gap-2">
        {[40, 65, 45, 80, 55, 70, 90, 60, 75, 85, 50, 95].map((h, i) => (
          <div
            key={i}
            className="flex-1 bg-gold/30 rounded-t"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

function CustomersMockup() {
  const customers = [
    { name: "James Morrison", status: "VIP", watches: 3 },
    { name: "Sophie Chen", status: "Premium", watches: 2 },
    { name: "Alexander Wright", status: "Standard", watches: 1 },
  ];
  return (
    <div className="bg-[#111113] rounded-lg border border-white/10 p-6 h-full">
      <div className="space-y-3">
        {customers.map((c) => (
          <div key={c.name} className="bg-[#18181B] rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-serif">
                {c.name.charAt(0)}
              </div>
              <div>
                <p className="text-foreground text-sm">{c.name}</p>
                <p className="text-xs text-muted-foreground">{c.watches} on waitlist</p>
              </div>
            </div>
            <span className={`text-xs px-2 py-1 rounded ${c.status === 'VIP' ? 'bg-gold/20 text-gold' : 'bg-white/5 text-muted-foreground'}`}>
              {c.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PipelineMockup() {
  const stages = [
    { name: "Waiting", count: 124, color: "bg-white/10" },
    { name: "Prioritised", count: 45, color: "bg-blue-500/20" },
    { name: "Offered", count: 18, color: "bg-gold/30" },
    { name: "Accepted", count: 8, color: "bg-green-500/20" },
  ];
  return (
    <div className="bg-[#111113] rounded-lg border border-white/10 p-6 h-full">
      <div className="grid grid-cols-4 gap-3 h-full">
        {stages.map((stage) => (
          <div key={stage.name} className={`${stage.color} rounded-lg p-3`}>
            <p className="text-xs text-muted-foreground mb-1">{stage.name}</p>
            <p className="text-xl font-serif text-foreground">{stage.count}</p>
            <div className="mt-3 space-y-2">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="bg-[#18181B] rounded h-8" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnalyticsMockup() {
  const brands = [
    { name: "Premium Brand A", pct: 45 },
    { name: "Premium Brand B", pct: 30 },
    { name: "Premium Brand C", pct: 25 },
  ];
  return (
    <div className="bg-[#111113] rounded-lg border border-white/10 p-6 h-full">
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[#18181B] rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-3">Demand by Brand</p>
          <div className="space-y-3">
            {brands.map((b) => (
              <div key={b.name}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-foreground">{b.name}</span>
                  <span className="text-muted-foreground">{b.pct}%</span>
                </div>
                <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-gold rounded-full" style={{ width: `${b.pct}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#18181B] rounded-lg p-4">
          <p className="text-xs text-muted-foreground mb-3">Conversion Rate</p>
          <div className="flex items-center justify-center h-24">
            <div className="text-center">
              <p className="text-3xl font-serif text-gold">68%</p>
              <p className="text-xs text-muted-foreground mt-1">+12% vs last quarter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function FeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const active = features.find((f) => f.id === activeFeature) || features[0];

  return (
    <SectionWrapper className="bg-background">
      <div className="text-center mb-16">
        <AnimatedHeading className="text-3xl sm:text-4xl lg:text-5xl text-foreground">
          From enquiry to allocation. Seamless.
        </AnimatedHeading>
      </div>

      <FadeIn>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Feature tabs */}
          <div className="lg:w-1/3 space-y-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              const isActive = feature.id === activeFeature;
              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-300 ${
                    isActive
                      ? "bg-card border-gold/30 shadow-lg shadow-gold/5"
                      : "bg-transparent border-white/5 hover:border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors duration-300 ${
                        isActive ? "bg-gold/20" : "bg-white/5"
                      }`}
                    >
                      <Icon
                        size={20}
                        className={isActive ? "text-gold" : "text-muted-foreground"}
                      />
                    </div>
                    <span
                      className={`font-medium transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {feature.title}
                    </span>
                  </div>
                  {isActive && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-4 text-sm text-muted-foreground leading-relaxed"
                    >
                      {feature.description}
                    </motion.p>
                  )}
                </button>
              );
            })}
          </div>

          {/* Feature preview */}
          <div className="lg:w-2/3">
            <div className="relative rounded-2xl bg-[#0D0D0F] border border-white/10 p-4 overflow-hidden">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                  <div className="w-3 h-3 rounded-full bg-white/10" />
                </div>
                <div className="flex-1 h-6 bg-white/5 rounded-md mx-8" />
              </div>

              {/* Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="aspect-[16/10]"
                >
                  {active.mockup}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </FadeIn>
    </SectionWrapper>
  );
}
