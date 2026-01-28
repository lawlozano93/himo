import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Use localhost instead of 0.0.0.0 to avoid permission issues
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000"],
    },
  },
};

export default nextConfig;
