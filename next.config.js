const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  experimental: {
    // https://zenn.dev/akfm/articles/nextjs-cache-default-update
    staleTimes: {
      dynamic: 0, // default: 0
      static: 300, // default: 300
    },
  },
};

module.exports = withMDX(nextConfig)
