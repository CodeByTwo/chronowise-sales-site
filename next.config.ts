import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Removed static export to enable API routes for contact form
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
