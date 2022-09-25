/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/agromarket",
        destination: `${process.env.NEXT_PUBLIC_API_END_POINT}`,
      },
    ];
  },
};

module.exports = nextConfig;
