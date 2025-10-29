import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";
import type { NextConfig } from "next";
import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
    loaderFile: "./image-loader.ts",
  },
  experimental: {
    reactCompiler: true,
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
