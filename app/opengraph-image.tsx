import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ChronoWise - Luxury Watch Waitlist Management";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0A0A0B",
          backgroundImage:
            "radial-gradient(circle at 50% 50%, rgba(198,169,98,0.15) 0%, transparent 50%)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "64px",
                height: "64px",
                borderRadius: "16px",
                background: "linear-gradient(135deg, #C6A962 0%, #D4B86A 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0A0A0B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <span
              style={{
                fontSize: "56px",
                fontWeight: "600",
                color: "#FAFAFA",
                letterSpacing: "-0.02em",
              }}
            >
              ChronoWise
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "16px",
              marginTop: "16px",
            }}
          >
            <span
              style={{
                fontSize: "32px",
                color: "#C6A962",
                fontWeight: "500",
                letterSpacing: "0.05em",
              }}
            >
              Luxury Watch Waitlist Management
            </span>
            <span
              style={{
                fontSize: "20px",
                color: "#A1A1AA",
                maxWidth: "700px",
                textAlign: "center",
                lineHeight: "1.5",
              }}
            >
              Purpose-built for luxury watch jewellers. GDPR compliant, secure,
              and elegant.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "32px",
            }}
          >
            {["Customer Management", "Wishlist Pipeline", "Watch Catalogue"].map(
              (feature) => (
                <div
                  key={feature}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      backgroundColor: "#C6A962",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#71717A",
                    }}
                  >
                    {feature}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
