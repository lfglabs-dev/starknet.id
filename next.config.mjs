import createMDX from "@next/mdx";

const isProd = process.env.VERCEL_ENV === "production";

/** @type {import('next').NextConfig} */
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
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({});
export default withMDX(nextConfig);


