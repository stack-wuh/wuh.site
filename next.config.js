const CompressionPlugin = require('compression-webpack-plugin')
const withPreact = require('next-plugin-preact')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const chalk = require('chalk')
const nextComposePlugins = require('next-compose-plugins')

let config = {
  // Webpack 5 is enabled by default
  // https://nextjs.org/docs/messages/webpack5
  webpack5: false,
  // distDir: 'output',
  cleanDistDir: false,
  images: {
    domains: ['wuh.site', 'src.wuh.site', 'cdn.wuh.site']
  },
  webpack: (config, {
    isServer,
    webpack
  }) => {
    console.log(webpack.version)
    config.plugins.push(new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240,
      exclude: /\/node_modules/,
      filename: '[name][fragment].gz',
      deleteOriginalAssets: false
    }))
    config.plugins.push(new ProgressBarPlugin({
      format: `build [:bar] ${chalk.green.bold(':percent')} (:elapsed s, :current / :total) :msg`,
      clear: false
    }))

    if (isServer) {
      require('./lib/generator-sitemap')
    }

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
  },
  experimental: {
    pageDataCollectionTimeout: 1000
  }
}

module.exports = nextComposePlugins([withPreact, withBundleAnalyzer], config)
// module.exports = config