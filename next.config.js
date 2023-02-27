/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['packschool.s3.amazonaws.com'],
  },
};

module.exports = nextConfig;
