const CompressionPlugin = require('compression-webpack-plugin')

module.exports = {
  images: {
    domains: ['wuh.site', 'src.wuh.site']
  },
  webpack: (config) => {
    const splitChunks = config.optimization && config.optimization.splitChunks
    
    if (splitChunks) {
      config.optimization.splitChunks.cacheGroups.commonChunks = {
        name: 'common-chunks',
        chunks: 'all',
        test: /[\\\/]node_modules[\\\/]/,
        priority: 10,
        minChunks: 6
      }

      config.optimization.splitChunks.cacheGroups.framework = {}
      config.optimization.splitChunks.cacheGroups.componentChunks = {
        name: 'components-chunks',
        chunks: 'all',
        test: /[\\/]components[\\/]/,
        priority: 10,
        minChunks: 6
      }

      config.optimization.splitChunks.cacheGroups.commonSheetChunks = {
        name: 'common-sheet-chunks',
        chunks: 'all',
        test: /[\\/]public\/\.css[\\/]/
      }

    }
      
      
    config.plugins.push(new CompressionPlugin({
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240,
    }))

    return config
  },
  compress: true,
  generateEtags: false,
  distDir: 'build'
}