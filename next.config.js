const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const isAnalyze = typeof process.env.BUNDLE_ANALYZE !== 'undefined'
const ThreeMinifierPlugin = require('@yushijinhun/three-minifier-webpack')

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'vi-VN', 'fi-FI'],
    defaultLocale: 'en-US'
  },
  webpack: (config, { dev, isServer }) => {
    if (isAnalyze) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 1111 : 1112,
          openAnalyzer: true
        })
      )
    }
    if (!dev) {
      config.cache = false
      const threeMinifier = new ThreeMinifierPlugin()
      config.plugins.unshift(threeMinifier)
      config.resolve.plugins.unshift(threeMinifier.resolver)
      config.experiments = { topLevelAwait: true };
    }
    return config
  }
}
