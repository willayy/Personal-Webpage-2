/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? './' : '',
  basePath: isProd ? '/Personal-Webpage-2' : ''
};
export default nextConfig;
