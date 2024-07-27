import mdx from '@next/mdx'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // https://zenn.dev/akfm/articles/nextjs-cache-default-update
    staleTimes: {
      dynamic: 0, // default: 0
      static: 300, // default: 300
    },
  },
};

// https://blog.logrocket.com/mdx-integration-strategies-next-js/
// https://www.codeconcisely.com/posts/nextjs-mdx/
const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: '@mdx-js/react',
  },
});

export default withMDX({
  ...nextConfig,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
