/** @type {import('next').NextConfig} */
const isProd = process.env.VERCEL_ENV === "production";

const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:slug*",
        headers: [
          {
            key: "content-type",
            value: "image/svg+xml",
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
  assetPrefix: isProd ? process.env.NEXT_PUBLIC_CDN_URL : undefined,
  swcMinify: true,
};

module.exports = nextConfig;
