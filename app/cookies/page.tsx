import { Metadata } from "next";
import { Navbar, Footer, SectionWrapper, FadeIn } from "@/components/marketing";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "ChronoWise cookie policy. Learn about the cookies we use, their purposes, and how to manage your cookie preferences.",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://chronowise.co.uk/cookies",
  },
};

export default function CookiesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      <section className="relative pt-32 pb-12 bg-background">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <FadeIn>
            <h1 className="font-serif text-4xl sm:text-5xl text-foreground tracking-wide mb-4">
              Cookie Policy
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
                  1. What Are Cookies
                </h2>
                <p className="leading-relaxed">
                  Cookies are small text files stored on your device when you
                  visit a website. They help websites remember your preferences
                  and improve your browsing experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  2. How We Use Cookies
                </h2>
                <p className="leading-relaxed mb-4">
                  ChronoWise uses cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong className="text-foreground">Essential cookies:</strong>{" "}
                    Required for the website to function properly, including
                    authentication and security.
                  </li>
                  <li>
                    <strong className="text-foreground">Functional cookies:</strong>{" "}
                    Remember your preferences and settings to enhance your
                    experience.
                  </li>
                  <li>
                    <strong className="text-foreground">Analytics cookies:</strong>{" "}
                    Help us understand how visitors interact with our website to
                    improve our services.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  3. Types of Cookies We Use
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse mt-4">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="text-left py-3 pr-4 text-foreground font-medium">
                          Cookie
                        </th>
                        <th className="text-left py-3 pr-4 text-foreground font-medium">
                          Purpose
                        </th>
                        <th className="text-left py-3 text-foreground font-medium">
                          Duration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">session_id</td>
                        <td className="py-3 pr-4">Authentication</td>
                        <td className="py-3">Session</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">preferences</td>
                        <td className="py-3 pr-4">User settings</td>
                        <td className="py-3">1 year</td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 pr-4">_ga</td>
                        <td className="py-3 pr-4">Analytics</td>
                        <td className="py-3">2 years</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  4. Third-Party Cookies
                </h2>
                <p className="leading-relaxed">
                  We may use third-party services that set their own cookies,
                  such as analytics providers. These cookies are governed by the
                  respective third-party privacy policies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  5. Managing Cookies
                </h2>
                <p className="leading-relaxed">
                  You can control cookies through your browser settings. Most
                  browsers allow you to block or delete cookies. However,
                  blocking essential cookies may affect the functionality of our
                  website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  6. Updates to This Policy
                </h2>
                <p className="leading-relaxed">
                  We may update this Cookie Policy from time to time. We will
                  notify you of any significant changes by posting a notice on
                  our website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-serif text-foreground mb-4">
                  7. Contact Us
                </h2>
                <p className="leading-relaxed">
                  If you have questions about our use of cookies, please contact
                  us at{" "}
                  <a
                    href="mailto:privacy@chronowise.co.uk"
                    className="text-gold hover:text-gold-light transition-colors"
                  >
                    privacy@chronowise.co.uk
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
