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
  metadataBase: new URL("https://chronowise.co.uk"),
  title: {
    default: "ChronoWise | Luxury Watch Waitlist Management",
    template: "%s | ChronoWise",
  },
  description:
    "Purpose-built waitlist management for luxury watch jewellers. GDPR compliant, secure, and elegant. Manage your Rolex, Patek Philippe, and Audemars Piguet allocations with precision.",
  keywords: [
    "watch waitlist",
    "luxury watch management",
    "jeweller software",
    "Rolex waitlist",
    "watch allocation",
    "GDPR compliant",
    "watch retail software",
    "luxury retail CRM",
    "Patek Philippe waitlist",
    "Audemars Piguet allocation",
    "jewellery shop software",
    "watch dealer software",
    "UK watch retailer",
  ],
  authors: [{ name: "ChronoWise" }],
  creator: "ChronoWise",
  publisher: "ChronoWise",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico", sizes: "48x48" },
      { url: "/favicon/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: "/favicon/apple-touch-icon.png",
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "ChronoWise | Luxury Watch Waitlist Management",
    description:
      "Purpose-built waitlist management for luxury watch jewellers. GDPR compliant, secure, and elegant.",
    url: "https://chronowise.co.uk",
    siteName: "ChronoWise",
    type: "website",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChronoWise | Luxury Watch Waitlist Management",
    description:
      "Purpose-built waitlist management for luxury watch jewellers. GDPR compliant, secure, and elegant.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://chronowise.co.uk",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://chronowise.co.uk/#organization",
      name: "ChronoWise",
      url: "https://chronowise.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://chronowise.co.uk/logo.png",
        width: 512,
        height: 512,
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@chronowise.co.uk",
        contactType: "customer service",
        areaServed: "GB",
        availableLanguage: "English",
      },
      address: {
        "@type": "PostalAddress",
        addressRegion: "Oxfordshire",
        addressCountry: "GB",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": "https://chronowise.co.uk/#website",
      url: "https://chronowise.co.uk",
      name: "ChronoWise",
      description:
        "Purpose-built waitlist management for luxury watch jewellers",
      publisher: {
        "@id": "https://chronowise.co.uk/#organization",
      },
      inLanguage: "en-GB",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://chronowise.co.uk/#software",
      name: "ChronoWise",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Purpose-built waitlist management software for luxury watch jewellers. GDPR compliant, secure, and elegant.",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "GBP",
        description: "14-day free trial",
      },
      featureList: [
        "Customer Management",
        "Wishlist Pipeline Tracking",
        "Watch Catalogue",
        "GDPR Compliance Tools",
        "Analytics & Reporting",
        "Email Templates",
        "Two-Factor Authentication",
      ],
      provider: {
        "@id": "https://chronowise.co.uk/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
