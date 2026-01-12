/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimized for Vercel deployment
  trailingSlash: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
      },
    ],
  },
  // Enable React strict mode for better development experience
  reactStrictMode: true,
  // Compress responses for better performance
  compress: true,
}

export default nextConfig
