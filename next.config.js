/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['packschool.s3.amazonaws.com', 'packagingschool.com'],
  },
  async redirects() {
    return [
      // Path Matching - will match `/old-blog/a`, but not `/old-blog/a/b`
      {
        source: '/courses/:slug',
        destination: 'https://www.packagingschool.com/blog/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
