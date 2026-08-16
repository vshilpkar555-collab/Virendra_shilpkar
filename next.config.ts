import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: [], // Add domains if you host images externally
  },
};

export default nextConfig;
