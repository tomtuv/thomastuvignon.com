/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
  images: {
    remotePatterns: [{ protocol: "https", hostname: "images.ctfassets.net" }],
  },
  async rewrites() {
    return [
      {
        source: "/fr",
        destination: "/",
        locale: false,
      },
    ];
  },
};

module.exports = nextConfig;
