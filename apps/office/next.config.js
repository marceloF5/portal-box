/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"],
  },
  reactStrictMode: true,
  transpilePackages: ["@repo/ui"],
};

module.exports = nextConfig;
