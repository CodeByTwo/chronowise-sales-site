import {
  Navbar,
  Footer,
  Hero,
  SocialProofBar,
  ProblemSection,
  SolutionIntro,
  BenefitsGrid,
  FeatureShowcase,
  HowItWorks,
  Testimonials,
  CTASection,
} from "@/components/marketing";

export default function HomePage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <SocialProofBar />
      <ProblemSection />
      <SolutionIntro />
      <BenefitsGrid />
      <FeatureShowcase />
      <Testimonials />
      <HowItWorks />
      <CTASection />
      <Footer />
    </main>
  );
}
