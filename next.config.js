/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: '/krishv2.github.io',
  assetPrefix: isProd ? '/krishv2.github.io/': '',
  // images: {
  //   loader: 'akamai',
  //   path: '',
  // },
}


module.exports = {
  basePath: '',
  assetPrefix: isProd ? '': '',
}
