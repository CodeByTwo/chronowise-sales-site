import { Resend } from "resend";
import { NextResponse } from "next/server";
import EnquiryConfirmationEmail from "@/emails/enquiry-confirmation";

async function verifyTurnstileToken(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not set");
    return false;
  }

  const response = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    }
  );

  const data = await response.json();
  return data.success === true;
}

export async function POST(request: Request) {
  console.log("Contact form API called");

  // Check if API key is present
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  console.log("API key found, length:", process.env.RESEND_API_KEY.length);

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const body = await request.json();
    const { name, email, company, phone, message, turnstileToken } = body;

    console.log("Form data received:", { name, email, company, phone: !!phone, message: !!message });

    // Verify Turnstile token
    if (!turnstileToken) {
      console.error("Missing Turnstile token");
      return NextResponse.json(
        { error: "Security verification required" },
        { status: 400 }
      );
    }

    const isValidToken = await verifyTurnstileToken(turnstileToken);
    if (!isValidToken) {
      console.error("Invalid Turnstile token");
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 400 }
      );
    }

    console.log("Turnstile verification passed");

    // Validate required fields
    if (!name || !email || !message) {
      console.error("Missing required fields");
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    // Send confirmation email to the enquirer
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://chronowise.co.uk";
    console.log("Sending confirmation email to:", email);
    const { data: confirmationData, error: confirmationError } = await resend.emails.send({
      from: "ChronoWise <hello@web.chronowise.co.uk>",
      to: email,
      subject: "Thank you for your enquiry - ChronoWise",
      react: EnquiryConfirmationEmail({ name, company, baseUrl }),
    });

    if (confirmationError) {
      console.error("Failed to send confirmation email:", JSON.stringify(confirmationError));
    } else {
      console.log("Confirmation email sent:", confirmationData);
    }

    // Send notification email to ChronoWise team
    console.log("Sending notification email to: hello@chronowise.co.uk");
    const { data: notificationData, error: notificationError } = await resend.emails.send({
      from: "ChronoWise <hello@web.chronowise.co.uk>",
      to: "hello@chronowise.co.uk",
      subject: `New Enquiry from ${name}${company ? ` (${company})` : ""}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || "Not provided"}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (notificationError) {
      console.error("Failed to send notification email:", JSON.stringify(notificationError));
      return NextResponse.json(
        { error: "Failed to send notification" },
        { status: 500 }
      );
    }

    console.log("Notification email sent:", notificationData);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
