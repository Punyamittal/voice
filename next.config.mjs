/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Ensure proper routing for Netlify
  trailingSlash: false,
  // Use export for static hosting
  output: 'export',
  // Exclude API routes from static export
  distDir: 'out',
}

export default nextConfig
