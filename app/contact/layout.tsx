import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with ChronoWise. Request a demo, ask questions, or discuss your luxury watch waitlist management requirements.",
  openGraph: {
    title: "Contact | ChronoWise",
    description:
      "Get in touch with ChronoWise. Request a demo or discuss your waitlist management requirements.",
    url: "https://chronowise.co.uk/contact",
  },
  alternates: {
    canonical: "https://chronowise.co.uk/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
