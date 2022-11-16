/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.shopify.com', 'image.ibb.co', 'www.fireeye.com'],
  },
};

module.exports = nextConfig;
