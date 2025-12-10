import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Increase body size limit for large video files
  serverRuntimeConfig: {
    maxFileSize: '250mb',
  },
  // Enable static file serving for large files
  experimental: {
    serverActions: {
      bodySizeLimit: '250mb',
    },
  },
};

export default nextConfig;
