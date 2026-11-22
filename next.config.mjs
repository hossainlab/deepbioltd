/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized for Vercel deployment
  trailingSlash: true,
  // Tree-shake heavy icon/util packages so only used symbols ship.
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // Cache optimized remote images at the edge for 30 days.
    minimumCacheTTL: 2592000,
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
  // Training lives on DeepBio Academy; forward old /training links there.
  async redirects() {
    return [
      { source: '/training', destination: 'https://deepbioacademy.com/', permanent: false },
      // Retired pages from the pre-2026-11 site, archived in backups/old-pages-2026-11-22.
      // Permanent (308) so search engines drop the old URLs.
      { source: '/about', destination: '/', permanent: true },
      { source: '/team', destination: '/', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      { source: '/research-programs', destination: '/research', permanent: true },
      { source: '/labs', destination: '/research', permanent: true },
      { source: '/labs/:path*', destination: '/research', permanent: true },
      { source: '/methodology', destination: '/services', permanent: true },
      { source: '/brochure', destination: '/services', permanent: true },
      { source: '/research-assistant-recruitment', destination: '/join-us', permanent: true },
      { source: '/lab-onboarding', destination: '/join-us', permanent: true },
      { source: '/ambassadors', destination: '/join-us', permanent: true },
      { source: '/our-ambassadors', destination: '/join-us', permanent: true },
      { source: '/ambassador-handbook', destination: '/join-us', permanent: true },
      { source: '/career-guide', destination: 'https://deepbioacademy.com/', permanent: true },
      { source: '/career-guide/:path*', destination: 'https://deepbioacademy.com/', permanent: true },
      { source: '/thesis-support', destination: 'https://deepbioacademy.com/', permanent: true },
    ]
  },
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
