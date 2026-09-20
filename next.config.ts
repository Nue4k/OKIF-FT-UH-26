import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/formatif',
        destination: '/berita#formatif',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
