/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? './' : '',
  basePath: isProd ? '/nextjs-github-pages' : '',
  output: "export",
};
export default nextConfig;
