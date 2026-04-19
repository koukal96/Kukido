/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/kukido',
  assetPrefix: '/kukido/',
  images: {
    unoptimized: true,
  }
}
module.exports = nextConfig
