/** @type {import('next').NextConfig} */
const path = require("path");

const imagesDomains = process.env.UPLOAD_DOMAINS.split(",");

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [...imagesDomains],
  },
  eslint: {
    ignoreDuringBuilds: true, // Menonaktifkan ESLint saat build
  },
};

module.exports = nextConfig;
