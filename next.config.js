/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Kukido',
  assetPrefix: '/Kukido/',
  images: {
    unoptimized: true,
  }
}
module.exports = nextConfig
