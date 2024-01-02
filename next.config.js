/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['puppeteer-core', '@sparticuz/chromium']
  },
  images: {
    remotePatterns: [
      {
        hostname: '0xfozowwtae3snn2.public.blob.vercel-storage.com',
      },
    ],
  },
}

module.exports = nextConfig
