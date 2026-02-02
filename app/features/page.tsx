import { Metadata } from "next";
import {
  Navbar,
  Footer,
  CTASection,
  SectionWrapper,
  AnimatedHeading,
  FadeIn,
} from "@/components/marketing";
import {
  Users,
  Layers,
  Watch,
  Shield,
  Mail,
  BarChart3,
  Lock,
  Palette,
  MapPin,
  Search,
  Upload,
  UserX,
  Clock,
  FileText,
  Signature,
  History,
  Key,
  Database,
  ShieldCheck,
  UserCog,
  Moon,
  Smartphone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Features | ChronoWise",
  description:
    "Explore the complete ChronoWise platform. Purpose-built features for luxury watch waitlist management.",
};

const featureCategories = [
  {
    id: "customers",
    title: "Customer Management",
    description: "Complete client relationship tools designed for luxury retail",
    icon: Users,
    features: [
      {
        icon: Users,
        title: "Full Customer Profiles",
        description:
          "Comprehensive profiles with contact details, addresses, preferences, and notes.",
      },
      {
        icon: MapPin,
        title: "Google Maps Integration",
        description:
          "Address autocomplete for accurate customer location data.",
      },
      {
        icon: Search,
        title: "Advanced Search & Filter",
        description: "Find customers instantly by name, email, or phone number.",
      },
      {
        icon: Upload,
        title: "Bulk CSV Import",
        description:
          "Migrate your existing customer database in minutes with CSV import.",
      },
      {
        icon: UserX,
        title: "Customer Blacklist",
        description:
          "Flag and manage problematic clients to protect your business.",
      },
      {
        icon: Watch,
        title: "Owned Watch Tracking",
        description:
          "Track customer-owned watches with encrypted serial number storage.",
      },
    ],
  },
  {
    id: "pipeline",
    title: "Wishlist Pipeline",
    description: "Visual workflow management from enquiry to allocation",
    icon: Layers,
    features: [
      {
        icon: Layers,
        title: "Six-Stage Pipeline",
        description:
          "Visual tracking through Waiting, Prioritised, Followed Up, Offered, Accepted, and Rejected stages.",
      },
      {
        icon: Clock,
        title: "Time-on-Wishlist Tracking",
        description:
          "Automatically calculate wait times to inform prioritisation decisions.",
      },
      {
        icon: FileText,
        title: "Notes & Comments",
        description:
          "Add detailed notes to each wishlist entry for complete context.",
      },
      {
        icon: Watch,
        title: "Preowned Preferences",
        description:
          "Track whether clients are open to preowned or new pieces only.",
      },
      {
        icon: ShieldCheck,
        title: "Duplicate Prevention",
        description:
          "Automatic checks prevent the same watch being added twice for a customer.",
      },
      {
        icon: Layers,
        title: "Quick-Add from Dashboard",
        description:
          "Rapidly add new wishlist entries without leaving your overview.",
      },
    ],
  },
  {
    id: "catalogue",
    title: "Watch Catalogue",
    description: "Comprehensive watch database with complete specifications",
    icon: Watch,
    features: [
      {
        icon: Watch,
        title: "Complete Watch Database",
        description:
          "Store brand, model, reference, collection, metal, bracelet, bezel, and dial details.",
      },
      {
        icon: Clock,
        title: "Service & Warranty Tracking",
        description:
          "Monitor service intervals and warranty periods for your inventory.",
      },
      {
        icon: FileText,
        title: "Manufacturer Reference Links",
        description:
          "Quick access to manufacturer specifications and documentation.",
      },
      {
        icon: Layers,
        title: "Wishlist Availability Toggle",
        description: "Control which watches appear on your waitlist offerings.",
      },
      {
        icon: FileText,
        title: "CPO Price Label Generator",
        description:
          "Generate professional PDF price labels for retail display.",
      },
    ],
  },
  {
    id: "compliance",
    title: "Marketing & GDPR Compliance",
    description: "Built-in tools for regulatory compliance and consent management",
    icon: Shield,
    features: [
      {
        icon: Shield,
        title: "Marketing Consent Tracking",
        description:
          "Record and manage marketing preferences with date stamps.",
      },
      {
        icon: Signature,
        title: "Digital Signature Capture",
        description:
          "Collect legally-binding digital signatures for consent records.",
      },
      {
        icon: ShieldCheck,
        title: "Privacy Acceptance Tracking",
        description: "Document privacy policy acceptance for each customer.",
      },
      {
        icon: History,
        title: "Full Audit Trail",
        description:
          "Complete history of all consent changes for regulatory compliance.",
      },
    ],
  },
  {
    id: "communication",
    title: "Communication Tools",
    description: "Professional email templates and communication logging",
    icon: Mail,
    features: [
      {
        icon: Mail,
        title: "Customisable Email Templates",
        description:
          "Create branded email templates for consistent communication.",
      },
      {
        icon: FileText,
        title: "Dynamic Placeholders",
        description:
          "Automatically insert customer, watch, and staff data into emails.",
      },
      {
        icon: History,
        title: "Email Logs",
        description: "Complete sent history for every customer interaction.",
      },
      {
        icon: Database,
        title: "Template Version Control",
        description: "Track changes to templates over time.",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics & Reporting",
    description: "Data-driven insights to inform your allocation decisions",
    icon: BarChart3,
    features: [
      {
        icon: BarChart3,
        title: "Dashboard Metrics",
        description:
          "At-a-glance overview of your waitlist health and performance.",
      },
      {
        icon: Layers,
        title: "Status Distribution Charts",
        description: "Visual breakdown of wishlist entries by pipeline stage.",
      },
      {
        icon: BarChart3,
        title: "Conversion Rate Tracking",
        description:
          "Monitor how effectively you convert interest into sales.",
      },
      {
        icon: Watch,
        title: "Top Wishlisted Watches",
        description: "Identify your most in-demand timepieces at a glance.",
      },
      {
        icon: BarChart3,
        title: "Brand & Collection Grid",
        description: "Understand demand patterns across your portfolio.",
      },
      {
        icon: Upload,
        title: "CSV Export",
        description: "Export data for external analysis and reporting.",
      },
    ],
  },
  {
    id: "security",
    title: "Security & Access Control",
    description: "Enterprise-grade protection for your sensitive data",
    icon: Lock,
    features: [
      {
        icon: Key,
        title: "Two-Factor Authentication",
        description: "MFA/TOTP support for secure account access.",
      },
      {
        icon: History,
        title: "Complete Audit Logging",
        description: "Every action is logged for security and compliance.",
      },
      {
        icon: ShieldCheck,
        title: "Password Policy Enforcement",
        description: "Strong password requirements protect all accounts.",
      },
      {
        icon: UserCog,
        title: "Role-Based Access",
        description:
          "Admin and Staff roles with appropriate permission levels.",
      },
    ],
  },
  {
    id: "experience",
    title: "User Experience",
    description: "Modern, intuitive interface designed for daily use",
    icon: Palette,
    features: [
      {
        icon: Moon,
        title: "Light & Dark Mode",
        description: "Choose the theme that suits your working environment.",
      },
      {
        icon: Smartphone,
        title: "Fully Responsive",
        description: "Works beautifully on desktop, tablet, and mobile devices.",
      },
      {
        icon: Palette,
        title: "Modern Interface",
        description:
          "Clean, intuitive design that requires minimal training.",
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <main className="relative min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-background overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/20 bg-gold/5 text-gold text-xs tracking-widest uppercase mb-6">
              Platform
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-wide">
              Every detail, <span className="text-gold-gradient">considered.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the complete ChronoWise platform. Purpose-built features
              for luxury watch waitlist management.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Feature Categories */}
      {featureCategories.map((category, categoryIndex) => {
        const CategoryIcon = category.icon;
        return (
          <SectionWrapper
            key={category.id}
            id={category.id}
            className={categoryIndex % 2 === 0 ? "bg-[#0D0D0F]" : "bg-background"}
          >
            <div className="mb-12">
              <FadeIn>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                    <CategoryIcon size={24} className="text-gold" />
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-foreground">
                    {category.title}
                  </h2>
                </div>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p className="text-muted-foreground text-lg max-w-2xl">
                  {category.description}
                </p>
              </FadeIn>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.features.map((feature, featureIndex) => {
                const FeatureIcon = feature.icon;
                return (
                  <FadeIn key={feature.title} delay={0.1 + featureIndex * 0.05}>
                    <div className="group p-6 rounded-xl bg-card border border-white/5 hover:border-gold/20 transition-all duration-500">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                        <FeatureIcon size={20} className="text-gold" />
                      </div>
                      <h3 className="text-lg font-medium text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </SectionWrapper>
        );
      })}

      <CTASection
        title="Ready to see ChronoWise in action?"
        description="Request a personalised demonstration of the platform."
        primaryCTA="Request a Demo"
        secondaryCTA="View Pricing"
        secondaryHref="/pricing"
      />

      <Footer />
    </main>
  );
}
