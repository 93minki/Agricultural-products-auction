/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/agromarket-settle",
        destination: `${process.env.NEXT_PUBLIC_API_SETTLEMENT_PRICE}`,
      },
      {
        source: "/agromarket-realtime",
        destination: `${process.env.NEXT_PUBLIC_API_REALTIME_PRICE}`,
      },
    ];
  },
};

module.exports = nextConfig;
