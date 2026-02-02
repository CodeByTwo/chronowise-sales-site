import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EnquiryConfirmationEmailProps {
  name: string;
  company?: string;
  baseUrl: string;
}

export default function EnquiryConfirmationEmail({
  name,
  company,
  baseUrl,
}: EnquiryConfirmationEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for your enquiry - ChronoWise</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src={`${baseUrl}/logo.png`}
              width="180"
              height="32"
              alt="ChronoWise"
              style={logo}
            />
          </Section>

          {/* Gold accent line */}
          <Hr style={goldLine} />

          {/* Main content */}
          <Section style={content}>
            <Heading style={heading}>Thank you for your enquiry</Heading>

            <Text style={paragraph}>Dear {name},</Text>

            <Text style={paragraph}>
              Thank you for reaching out to ChronoWise
              {company ? ` on behalf of ${company}` : ""}. We have received your
              enquiry and a member of our team will be in touch within one
              business day.
            </Text>

            <Text style={paragraph}>
              In the meantime, feel free to explore our platform features and
              learn more about how ChronoWise can transform your waitlist
              management.
            </Text>

            {/* CTA Button */}
            <Section style={buttonContainer}>
              <Link href={`${baseUrl}/features`} style={button}>
                Explore Features
              </Link>
            </Section>

            <Text style={paragraph}>
              We look forward to speaking with you soon.
            </Text>

            <Text style={signature}>
              Warm regards,
              <br />
              The ChronoWise Team
            </Text>
          </Section>

          {/* Gold accent line */}
          <Hr style={goldLine} />

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              ChronoWise · Oxfordshire, United Kingdom
            </Text>
            <Text style={footerText}>
              <Link href={baseUrl} style={footerLink}>
                chronowise.co.uk
              </Link>
              {" · "}
              <Link href="mailto:hello@chronowise.co.uk" style={footerLink}>
                hello@chronowise.co.uk
              </Link>
            </Text>
            <Text style={footerTagline}>
              Purpose-built waitlist management for luxury watch jewellers.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles matching the website design
const main = {
  backgroundColor: "#0A0A0B",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
};

const header = {
  textAlign: "center" as const,
  padding: "20px 0",
};

const logo = {
  margin: "0 auto",
};

const goldLine = {
  borderColor: "#C6A962",
  borderWidth: "1px",
  margin: "0",
  opacity: 0.5,
};

const content = {
  padding: "40px 0",
};

const heading = {
  fontSize: "28px",
  fontWeight: "400",
  color: "#FFFFFF",
  textAlign: "center" as const,
  margin: "0 0 30px 0",
  fontFamily: "Georgia, serif",
  letterSpacing: "0.5px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#A1A1AA",
  margin: "0 0 20px 0",
};

const buttonContainer = {
  textAlign: "center" as const,
  margin: "30px 0",
};

const button = {
  backgroundColor: "#C6A962",
  color: "#0A0A0B",
  fontSize: "14px",
  fontWeight: "500",
  textDecoration: "none",
  padding: "14px 28px",
  borderRadius: "8px",
  display: "inline-block",
  letterSpacing: "1px",
};

const signature = {
  fontSize: "16px",
  lineHeight: "26px",
  color: "#FFFFFF",
  margin: "30px 0 0 0",
};

const footer = {
  textAlign: "center" as const,
  padding: "30px 0 0 0",
};

const footerText = {
  fontSize: "13px",
  color: "#71717A",
  margin: "0 0 8px 0",
};

const footerLink = {
  color: "#C6A962",
  textDecoration: "none",
};

const footerTagline = {
  fontSize: "12px",
  color: "#52525B",
  fontStyle: "italic",
  margin: "16px 0 0 0",
};
