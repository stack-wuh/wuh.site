const nextComposePlugins = require('next-compose-plugins')
const withPreact = require('next-plugin-preact')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const {
  green
} = require('chalk')

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
    keepAlive: true
  },
  experimental: {
    pageDataCollectionTimeout: 120000
  },
  webpack: (config) => {
    config.plugins.push(new ProgressBarPlugin({
      format: `build [:bar] ${green.bold(':percent')} (:elapsed s, :current / :total) :msg`,
      clear: false
    }))

    return config
  }
}

module.exports = nextComposePlugins([withPreact, withBundleAnalyzer], config)