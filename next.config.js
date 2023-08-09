/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [{ protocol: "https", hostname: "images.ctfassets.net" }],
  },
  async redirects() {
    return [
      {
        source: "/:lang/projects",
        destination: "/:lang",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
