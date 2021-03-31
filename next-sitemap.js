module.exports = {
  siteUrl: 'https://wuh.site',
  generateRobotsTxt: true,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/_next/static/css/*.css',
          '/_next/static/chunks/*.js',
          '/build/static/chunks/*.js',
          '/build/static/chunks/*.css',
          '/build/static/chunks/*.gz'
        ]
      }
    ],
    additionalSitemaps: [
      "https://wuh.site/sitemap.xml"
    ],
  },
}