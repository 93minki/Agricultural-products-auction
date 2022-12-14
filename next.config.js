/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/agromarket-settle",
        destination: `${process.env.NEXT_PUBLIC_API_SETTLEMENT_PRICE}?serviceKey=${process.env.NEXT_PUBLIC_API_KEY}`,
      },
      {
        source: "/agromarket-realtime",
        destination: `${process.env.NEXT_PUBLIC_API_REALTIME_PRICE}?serviceKey=${process.env.NEXT_PUBLIC_API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
