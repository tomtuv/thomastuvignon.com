module.exports = {
  reactStrictMode: true,
  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "fr",
  },
  images: {
    domains: ["images.ctfassets.net"],
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: true,
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
