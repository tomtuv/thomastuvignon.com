import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.ctfassets.net" }],
  },
  async redirects() {
    return [
      {
        source: "/:locale/projects",
        destination: "/:locale",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
