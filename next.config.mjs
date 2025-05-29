/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Images configuration
  basePath: process.env.NODE_ENV === 'production' ? '/afridirahmanbondhon.github.io' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/afridirahmanbondhon.github.io/' : '',
  trailingSlash: true,
};

export default nextConfig;
