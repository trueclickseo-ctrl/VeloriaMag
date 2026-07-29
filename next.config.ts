import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required for Hostinger hPanel Node.js deployment
  output: "standalone",
  env: {
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL || 'https://veloriamag.com',
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME || 'VeloriaMag',
  },
};

export default nextConfig;
