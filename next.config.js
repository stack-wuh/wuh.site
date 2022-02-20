const CompressionWebpackPlugin = require('compression-webpack-plugin')
const nextComposePlugins = require('next-compose-plugins')
const withPreact = require('next-plugin-preact')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const withPWA = require('next-pwa')
const runtimeCaching = require('next-pwa/cache')
const { green } = require('chalk')
const dayjs = require('dayjs')

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
    modern: true,
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
  generateBuildId: async () => {
    return dayjs().format('YYYYMMDD.HHmmss')
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 4,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: process.env.NODE_ENV === 'production',
    runtimeCaching,
  },
}

module.exports = nextComposePlugins(
  [withPreact, withPWA, withBundleAnalyzer],
  config
)
