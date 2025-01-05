/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? 'Personal-Webpage-2/' : '',
  basePath: isProd ? '/personal-webpage-2' : '',
  output: 'export'
};

export default nextConfig;
