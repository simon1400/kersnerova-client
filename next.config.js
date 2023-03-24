/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    APP_API: process.env.APP_API
  },
  experimental: {
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } },
    ],
  },
}

module.exports = nextConfig
