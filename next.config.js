/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.pixabay.com', 'yourdomain.com'], // ඔයාගේ image sources
  },
  output: 'standalone',
}

module.exports = nextConfig
