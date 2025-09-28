// next.config.js - For development (remove output: 'export')
/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',

  trailingSlash: true,
  images: {
    domains: ["bestgearbuy.com"],
  },
};

module.exports = nextConfig;
