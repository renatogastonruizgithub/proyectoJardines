/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
  reactStrictMode: true,
    sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
     images: {
    domains: ['localhost']
  },
}

module.exports = nextConfig
