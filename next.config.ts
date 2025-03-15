import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["ui-avatars.com"], // Allow external image sources
  },
};

export default nextConfig;
