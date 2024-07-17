/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // https://zenn.dev/akfm/articles/nextjs-cache-default-update
    staleTimes: {
      dynamic: 0, // default: 0
      static: 300, // default: 300
    },
  },
};

export default nextConfig;
