import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'www.matrixedu.in',
      },
    ],
    unoptimized: true,
  }
};

export default nextConfig;
