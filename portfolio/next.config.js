/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: isProd ? 'https://cdn.statically.io/gh/krishv2/krishv2.github.io/gh-pages/'
}

const isProd = process.env.NODE_ENV === 'production'

module.exports = nextConfig
