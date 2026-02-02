import { Metadata } from "next";
import {
  Navbar,
  Footer,
  SectionWrapper,
  FadeIn,
} from "@/components/marketing";
import { FAQ } from "@/components/marketing/faq";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing | ChronoWise",
  description:
    "Simple, affordable pricing for luxury watch jewellers. No enterprise complexity, no hidden fees.",
};

const features = [
  "Full customer management",
  "Wishlist pipeline tracking",
  "Complete watch catalogue",
  "GDPR compliance tools",
  "Analytics & reporting",
  "Email templates",
  "Team access",
  "CSV import & export",
  "Two-factor authentication",
  "Priority support",
];

const comparisonPoints = [
  { feature: "Purpose-built for watch retail", chronowise: true, others: false },
  { feature: "Setup in minutes, not months", chronowise: true, others: false },
  { feature: "No technical expertise required", chronowise: true, others: false },
  { feature: "GDPR compliance out of the box", chronowise: true, others: false },
  { feature: "Simple, affordable pricing", chronowise: true, others: false },
  { feature: "No per-seat licensing complexity", chronowise: true, others: false },
  { feature: "No implementation consultants needed", chronowise: true, others: false },
];

const faqItems = [
  {
    question: "How does your pricing compare to Salesforce or HubSpot?",
    answer:
      "ChronoWise is designed to be accessible for independent jewellers and boutiques. Unlike enterprise CRMs that can cost thousands per month plus implementation fees, our pricing is straightforward and affordable. No consultants, no lengthy setup projects, no hidden costs.",
  },
  {
    question: "Is there a free trial?",
    answer:
      "Yes, we offer a 14-day free trial with full access to all features so you can experience the platform before making any commitment.",
  },
  {
    question: "Are there any setup fees?",
    answer:
      "No. There are no setup fees or implementation costs. You can import your existing customer data via CSV and be operational within minutes.",
  },
  {
    question: "What's included?",
    answer:
      "Everything. One simple plan with all features included. Customer management, wishlist pipeline, watch catalogue, analytics, email templates, team access, GDPR tools—it's all there from day one.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We use robust encryption for all data at rest and in transit. Your customer data and watch information are protected with industry-leading security standards.",
  },
  {
    question: "Can I import my existing customer data?",
    answer:
      "Yes, CSV import is included. If you're coming from spreadsheets or another system, we can help you migrate your data smoothly.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. We offer flexible billing options and believe in earning your business through the quality of our platform, not locking you in.",
  },
];

export default function PricingPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(198,169,98,0.08) 0%, transparent 70%)" }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs tracking-widest uppercase mb-6">
              Pricing
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wide">
              One plan.{" "}
              <span className="text-gold-gradient">Everything included.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              No confusing tiers. No feature gating. Just simple, affordable
              pricing that gives you access to everything ChronoWise offers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Single Plan */}
      <SectionWrapper className="bg-background pt-0">
        <FadeIn>
          <div className="max-w-xl mx-auto">
            <div className="relative p-10 rounded-2xl bg-card border-2 border-gold/30">
              <div className="text-center mb-8">
                <h2 className="font-serif text-3xl text-foreground mb-3">
                  ChronoWise
                </h2>
                <p className="text-muted-foreground">
                  Complete waitlist management for your boutique
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gold/10 flex items-center justify-center">
                      <Check size={12} className="text-gold" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link href="/contact" className="block">
                <Button className="w-full h-14 bg-gold hover:bg-gold-light text-background font-medium tracking-wider text-base transition-all duration-300 hover:shadow-xl hover:shadow-gold/20 group">
                  Get Pricing
                  <ArrowRight
                    size={18}
                    className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Button>
              </Link>

              <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  14-day free trial
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  No setup fees
                </span>
              </div>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* Comparison */}
      <SectionWrapper className="bg-[#0D0D0F]">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
              Why pay enterprise prices for features you'll never use?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Traditional CRM platforms like Salesforce and HubSpot are built
              for general sales teams. Adapting them for watch retail means
              expensive customisation, consultants, and months of setup.
              ChronoWise is ready from day one.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-white/10 overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 bg-white/5">
              <div className="text-muted-foreground text-sm"></div>
              <div className="text-center">
                <span className="text-gold font-medium">ChronoWise</span>
              </div>
              <div className="text-center">
                <span className="text-muted-foreground text-sm">Complex CRMs</span>
              </div>
            </div>
            {comparisonPoints.map((point, index) => (
              <div
                key={point.feature}
                className={`grid grid-cols-3 gap-4 p-4 ${
                  index !== comparisonPoints.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div className="text-sm text-muted-foreground">{point.feature}</div>
                <div className="flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check size={14} className="text-gold" />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                    <X size={14} className="text-muted-foreground" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper className="bg-background">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground text-center mb-12">
              Frequently asked questions
            </h2>
          </FadeIn>
          <FAQ items={faqItems} />
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <SectionWrapper className="bg-[#0D0D0F]">
        <div className="text-center max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-6">
              Ready to see ChronoWise in action?
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-lg text-muted-foreground mb-8">
              Book a demo and we'll show you exactly how ChronoWise works—and
              provide transparent pricing tailored to your boutique.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
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
          </FadeIn>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
