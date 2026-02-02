import { Metadata } from "next";
import { Navbar, Footer, SectionWrapper, FadeIn } from "@/components/marketing";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "ChronoWise terms of service and conditions of use. Read our service agreement, user responsibilities, and legal terms.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://chronowise.co.uk/terms",
  },
};

export default function TermsPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-12 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground tracking-wide mb-4">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: February 2026
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionWrapper className="bg-background pt-8">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="space-y-8 text-muted-foreground">
              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  1. Agreement to Terms
                </h2>
                <p className="leading-relaxed">
                  By accessing or using ChronoWise, you agree to be bound by
                  these Terms of Service. If you do not agree to these terms,
                  please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  2. Description of Service
                </h2>
                <p className="leading-relaxed">
                  ChronoWise provides a cloud-based waitlist management platform
                  designed for luxury watch jewellers. Our service includes
                  customer management, wishlist tracking, analytics, and
                  communication tools.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  3. Account Registration
                </h2>
                <p className="leading-relaxed">
                  To use ChronoWise, you must register for an account. You agree
                  to provide accurate information and keep your account
                  credentials secure. You are responsible for all activities
                  that occur under your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  4. Acceptable Use
                </h2>
                <p className="leading-relaxed mb-4">You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the service for any unlawful purpose</li>
                  <li>Attempt to gain unauthorised access to our systems</li>
                  <li>Interfere with or disrupt the service</li>
                  <li>Upload malicious code or harmful content</li>
                  <li>Resell or redistribute the service without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  5. Data Ownership
                </h2>
                <p className="leading-relaxed">
                  You retain ownership of all data you input into ChronoWise.
                  We do not claim ownership of your customer data, watch
                  catalogues, or other business information. You grant us a
                  limited licence to process this data solely to provide our
                  services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  6. Payment Terms
                </h2>
                <p className="leading-relaxed">
                  Subscription fees are billed in advance on a monthly or annual
                  basis. All fees are non-refundable except as required by law
                  or as explicitly stated in our refund policy. We reserve the
                  right to modify pricing with 30 days notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  7. Service Availability
                </h2>
                <p className="leading-relaxed">
                  We strive to maintain high availability but do not guarantee
                  uninterrupted access. We may perform scheduled maintenance
                  with reasonable notice. We are not liable for any downtime or
                  service interruptions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  8. Limitation of Liability
                </h2>
                <p className="leading-relaxed">
                  To the maximum extent permitted by law, ChronoWise shall not
                  be liable for any indirect, incidental, special, or
                  consequential damages arising from your use of the service.
                  Our total liability shall not exceed the fees paid by you in
                  the twelve months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  9. Termination
                </h2>
                <p className="leading-relaxed">
                  Either party may terminate this agreement with 30 days written
                  notice. Upon termination, you may export your data within 30
                  days. We reserve the right to terminate accounts that violate
                  these terms without notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  10. Contact
                </h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us
                  at{" "}
                  <a
                    href="mailto:legal@chronowise.co.uk"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    legal@chronowise.co.uk
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
