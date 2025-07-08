/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true, // 🚨 This enables support for Clerk and other server action APIs
  },
};

module.exports = nextConfig;
