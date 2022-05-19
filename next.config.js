const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.BUNDLE_ANALYZE === 'true'
})
const ThreeMinifierPlugin = require('@yushijinhun/three-minifier-webpack')

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en-US', 'vi-VN', 'fi-FI'],
    defaultLocale: 'en-US'
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.cache = false
      const threeMinifier = new ThreeMinifierPlugin()
      config.plugins.unshift(threeMinifier)
      config.resolve.plugins.unshift(threeMinifier.resolver)
      config.experiments = { topLevelAwait: true }
    }
    return config
  }
})
