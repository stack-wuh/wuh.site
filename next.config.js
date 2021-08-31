const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  webpack5: false,
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
  reactStrictMode: true
}
