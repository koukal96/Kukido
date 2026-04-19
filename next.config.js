/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Kukido', // <-- SEM NAPIŠ PŘESNÝ NÁZEV TVÉHO REPOZITÁŘE
  images: {
    unoptimized: true,
  }
}
module.exports = nextConfig
