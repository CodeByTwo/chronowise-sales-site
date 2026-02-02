import { Metadata } from "next";
import {
  Navbar,
  Footer,
  CTASection,
  SectionWrapper,
  FadeIn,
} from "@/components/marketing";
import { Target, Heart, Shield, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About | ChronoWise",
  description:
    "Built by those who understand the craft. Learn about ChronoWise and our mission to transform luxury watch retail.",
};

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every feature is crafted with the same attention to detail that defines fine horology. No unnecessary complexity, no wasted motion.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "We succeed when our customers succeed. Your challenges are our challenges, and we're committed to solving them together.",
  },
  {
    icon: Shield,
    title: "Trust",
    description:
      "Your clients trust you with their most coveted purchases. We hold ourselves to the same standard with your data and business.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "The watch industry evolves, and so do we. We continuously refine our platform based on real feedback from real jewellers.",
  },
];

export default function AboutPage() {
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
              Our Story
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wide">
              Built by those who{" "}
              <span className="text-gold-gradient">understand the craft.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              ChronoWise was born from a decade of passion for watches and a
              frustration with the tools available to those who sell them.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Origin Story */}
      <SectionWrapper className="bg-[#0D0D0F]">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
              A collector's frustration, a developer's solution
            </h2>
          </FadeIn>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <FadeIn delay={0.1}>
              <p>
                For over a decade, I've been captivated by the world of fine
                horology. What started as an appreciation for craftsmanship
                evolved into a genuine passion for collecting—the thrill of
                tracking down a grail piece, building relationships with
                trusted dealers, and the patience required when the most
                sought-after references have years-long waitlists.
              </p>
            </FadeIn>
            <FadeIn delay={0.15}>
              <p>
                Through countless conversations with authorised dealers and
                independent jewellers, I began to understand their side of the
                story. These professionals were managing complex waitlists with
                spreadsheets, notebooks, and enterprise CRM platforms that were
                never designed for their unique needs. Systems like Salesforce
                and HubSpot required expensive customisation and technical
                expertise just to handle basic watch-specific workflows.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p>
                As a software developer and co-founder of{" "}
                <span className="text-foreground">CodeByTwo</span>, I
                recognised this as a problem I could solve. The industry
                didn't need another bloated enterprise platform—it needed
                something modern, intuitive, and purpose-built. A tool that
                understood the difference between a Submariner and a Daytona,
                that could track GDPR consent seamlessly, and that any jeweller
                could master without an IT department.
              </p>
            </FadeIn>
            <FadeIn delay={0.25}>
              <p>
                ChronoWise is the result of that vision. Built by someone who
                genuinely understands both sides—the collector's anticipation
                and the jeweller's responsibility. Every feature exists because
                it solves a real problem I've witnessed firsthand.
              </p>
            </FadeIn>
          </div>
        </div>
      </SectionWrapper>

      {/* Mission */}
      <SectionWrapper className="bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground mb-8">
              The mission
            </h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To give every luxury watch jeweller access to the same calibre of
              tools that enterprise retailers enjoy—without the complexity,
              without the cost, and without needing a technical team to make it
              work.
            </p>
          </FadeIn>
        </div>
      </SectionWrapper>

      {/* Values */}
      <SectionWrapper className="bg-[#0D0D0F]">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
              What guides us
            </h2>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <FadeIn key={value.title} delay={0.1 + index * 0.1}>
                <div className="p-8 rounded-xl bg-card border border-white/5">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h3 className="text-xl font-medium text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </SectionWrapper>

      <CTASection
        title="Ready to experience ChronoWise?"
        description="Join the jewellers who have transformed their waitlist management."
        primaryCTA="Request a Demo"
        secondaryCTA="View Features"
        secondaryHref="/features"
      />

      <Footer />
    </main>
  );
}
