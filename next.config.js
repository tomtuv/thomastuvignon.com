const { withPlaiceholder } = require("@plaiceholder/next");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
  images: {
    domains: ["images.ctfassets.net"],
  },
  experimental: {
    browsersListForSwc: true,
    legacyBrowsers: false,
    newNextLinkBehavior: true,
    images: {
      allowFutureImage: true,
    },
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

module.exports = withPlaiceholder(nextConfig);
