import { Metadata } from "next";
import { Navbar, Footer, SectionWrapper, FadeIn } from "@/components/marketing";

export const metadata: Metadata = {
  title: "Privacy Policy | ChronoWise",
  description: "ChronoWise privacy policy and data protection information.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-12 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground tracking-wide mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground">
              Last updated: February 2026
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionWrapper className="bg-background pt-8">
        <div className="max-w-4xl mx-auto prose prose-invert prose-gold">
          <FadeIn>
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  1. Introduction
                </h2>
                <p className="leading-relaxed">
                  ChronoWise ("we", "our", or "us") is committed to protecting
                  your privacy. This Privacy Policy explains how we collect,
                  use, disclose, and safeguard your information when you use our
                  waitlist management platform and website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  2. Information We Collect
                </h2>
                <p className="leading-relaxed mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Account information (name, email, company details)</li>
                  <li>Customer data you input into the platform</li>
                  <li>Communication preferences</li>
                  <li>Payment information (processed securely by our payment provider)</li>
                  <li>Support correspondence</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  3. How We Use Your Information
                </h2>
                <p className="leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process transactions and send related information</li>
                  <li>Send technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  4. Data Security
                </h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organisational measures
                  to protect your personal data against unauthorised access,
                  alteration, disclosure, or destruction. This includes
                  encryption at rest and in transit, regular security audits,
                  and strict access controls.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  5. Data Retention
                </h2>
                <p className="leading-relaxed">
                  We retain your personal data for as long as necessary to
                  provide our services and fulfil the purposes described in this
                  policy. When you close your account, we will delete or
                  anonymise your data within 90 days, unless retention is
                  required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  6. Your Rights
                </h2>
                <p className="leading-relaxed mb-4">
                  Under GDPR and applicable data protection laws, you have the
                  right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access your personal data</li>
                  <li>Rectify inaccurate data</li>
                  <li>Request erasure of your data</li>
                  <li>Restrict processing of your data</li>
                  <li>Data portability</li>
                  <li>Object to processing</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  7. Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have any questions about this Privacy Policy or our
                  data practices, please contact us at{" "}
                  <a
                    href="mailto:privacy@chronowise.io"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    privacy@chronowise.io
                  </a>
                  .
                </p>
              </section>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
