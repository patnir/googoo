/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // Serve images directly from /public — Vercel image optimization is disabled on this plan
    unoptimized: true,
  },
}

export default nextConfig
