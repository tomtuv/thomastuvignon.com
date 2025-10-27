import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  experimental: {
    useLightningcss: true,
    viewTransition: true,
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

initOpenNextCloudflareForDev();
