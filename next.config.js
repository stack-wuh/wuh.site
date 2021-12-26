const CompressionWebpackPlugin = require('compression-webpack-plugin')
const nextComposePlugins = require('next-compose-plugins')
const withPreact = require('next-plugin-preact')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const { green } = require('chalk')

/** @type {import('next').NextConfig} */
let config = {
  reactStrictMode: true,
  webpack5: true,
  compress: true,
  generateEtags: false,
  poweredByHeader: false,
  trailingSlash: false,
  productionBrowserSourceMaps: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  images: {
    domains: ['src.wuh.site'],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    pageDataCollectionTimeout: 120000,
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.plugins.push(
        new CompressionWebpackPlugin({
          algorithm: 'gzip',
          test: /\.js$|\.css$/,
          threshold: 10240,
          exclude: /\/node_modules/,
          filename: '[base].gz',
          deleteOriginalAssets: false,
        })
      )
    }
    config.plugins.push(
      new ProgressBarPlugin({
        format: `build [:bar] ${green.bold(
          ':percent'
        )} (:elapsed s, :current / :total) :msg`,
        clear: false,
      })
    )

    return config
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextComposePlugins([withPreact, withBundleAnalyzer], config)
