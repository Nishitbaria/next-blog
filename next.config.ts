import { withContentlayer } from 'next-contentlayer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  serverExternalPackages: ['shiki']
};

export default withContentlayer(nextConfig);