/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized for Vercel deployment
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Allow static HTML files in public/ to be served directly
  async rewrites() {
    return [
      {
        source: '/biohpc-deck/',
        destination: '/biohpc-deck/index.html',
      },
      {
        source: '/brand-template/',
        destination: '/brand-template/index.html',
      },
    ];
  },
  // Compress responses for better performance
  compress: true,
}

export default nextConfig
