/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com'
      // },
    ],
  },
};

module.exports = {
  ...nextConfig,
  swcMinify: false,
  i18n: { locales: ["de"], defaultLocale: "de" },
};
