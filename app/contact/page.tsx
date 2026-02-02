"use client";

import { useState, useRef } from "react";
import { Turnstile, type TurnstileInstance } from "@marsidev/react-turnstile";
import { Navbar, Footer, SectionWrapper, FadeIn } from "@/components/marketing";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileRef = useRef<TurnstileInstance>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!turnstileToken) {
      setError("Please complete the security check.");
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
      turnstileToken,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || "Failed to send message");
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again or email us directly."
      );
      // Reset turnstile on error
      turnstileRef.current?.reset();
      setTurnstileToken(null);
    } finally {
      setIsSubmitting(false);
    }
  };

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
              Contact
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wide">
              Let's discuss your{" "}
              <span className="text-gold-gradient">requirements.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're ready for a demo or have questions about ChronoWise,
              we're here to help.
            </p>
          </FadeIn>
        </div>
      </section>

      <SectionWrapper className="bg-[#0D0D0F] pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <FadeIn>
            <div className="p-8 rounded-2xl bg-card border border-white/10">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle size={32} className="text-gold" />
                  </div>
                  <h3 className="text-2xl font-serif text-foreground mb-4">
                    Message received
                  </h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We've sent a confirmation to your
                    email and will be in touch within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="Your name"
                        className="bg-background border-white/10 focus:border-gold/50 focus:ring-gold/20 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="bg-background border-white/10 focus:border-gold/50 focus:ring-gold/20 h-12"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-foreground">
                        Company
                      </Label>
                      <Input
                        id="company"
                        name="company"
                        required
                        placeholder="Your boutique name"
                        className="bg-background border-white/10 focus:border-gold/50 focus:ring-gold/20 h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground">
                        Phone{" "}
                        <span className="text-muted-foreground">(optional)</span>
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+44 20 1234 5678"
                        className="bg-background border-white/10 focus:border-gold/50 focus:ring-gold/20 h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      className="bg-background border-white/10 focus:border-gold/50 focus:ring-gold/20 resize-none"
                    />
                  </div>

                  {/* Turnstile Widget */}
                  <div className="flex justify-center">
                    <Turnstile
                      ref={turnstileRef}
                      siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                      onSuccess={setTurnstileToken}
                      onError={() => setTurnstileToken(null)}
                      onExpire={() => setTurnstileToken(null)}
                      options={{
                        theme: "dark",
                      }}
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                      <AlertCircle size={20} className="text-red-400 flex-shrink-0" />
                      <p className="text-sm text-red-400">{error}</p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={isSubmitting || !turnstileToken}
                    className="w-full bg-gold hover:bg-gold-light text-background font-medium tracking-wider h-12 transition-all duration-300 hover:shadow-lg hover:shadow-gold/20 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={16} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* Contact Info */}
          <FadeIn delay={0.2}>
            <div className="space-y-8">
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-6">
                  Get in touch
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ready to transform your waitlist management? Our team is here
                  to answer your questions and arrange a personalised
                  demonstration.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href="mailto:hello@chronowise.co.uk"
                  className="flex items-center gap-4 p-4 rounded-xl bg-card border border-white/10 hover:border-gold/30 transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <Mail size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground">hello@chronowise.co.uk</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-white/10">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <MapPin size={20} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Oxfordshire, United Kingdom</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gold/5 border border-gold/20">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  Prefer a scheduled call?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Book a time that works for you and we'll call to discuss your
                  requirements in detail.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </SectionWrapper>

      <Footer />
    </main>
  );
}
