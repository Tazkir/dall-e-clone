/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['imagevstorage.blob.core.windows.net', 'links.papareact.com'],
  },
};

module.exports = nextConfig;
