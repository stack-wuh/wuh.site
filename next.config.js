const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  images: {
    domains: ['wuh.site', 'shadow-web.oss-cn-beijing.aliyuncs.com']
  },
  webpack: (config) => {
    config.plugins.push(new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240,
      deleteOriginalAssets: true
    }))
    return config
  },
  compress: true,
  generateEtags: false,
  distDir: 'dist'
}