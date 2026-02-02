import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ChronoWise | Luxury Watch Waitlist Management",
  description:
    "Purpose-built waitlist management for luxury watch jewellers. GDPR compliant, secure, and elegant. Manage your Rolex, Patek Philippe, and Audemars Piguet allocations with precision.",
  keywords: [
    "watch waitlist",
    "luxury watch management",
    "jeweller software",
    "Rolex waitlist",
    "watch allocation",
    "GDPR compliant",
  ],
  authors: [{ name: "ChronoWise" }],
  openGraph: {
    title: "ChronoWise | Luxury Watch Waitlist Management",
    description:
      "Purpose-built waitlist management for luxury watch jewellers.",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChronoWise | Luxury Watch Waitlist Management",
    description:
      "Purpose-built waitlist management for luxury watch jewellers.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
