const CompressionPlugin = require('compression-webpack-plugin')
const withPreact = require('next-plugin-preact')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

let config = withPreact({
  webpack5: false,
  distDir: 'output',
  images: {
    domains: ['wuh.site', 'src.wuh.site']
  },
  webpack: (config) => {
    config.plugins.push(new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240,
    }))

    return config
  },
  compress: true,
  generateEtags: false,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: true,
  productionBrowserSourceMaps: false,
  httpAgentOptions: {
    keepAlive: true
  }
})

config = withBundleAnalyzer(config)

module.exports = config