const fs = require('fs')
const globby = require('globby')
const packageConfig = require('../package.json')
const allowGenerate = packageConfig.version !== process.env.VERSION_LATEST

function addPage(page) {
  const path = page.replace('pages', '').replace(/\.(js?x)/, '').replace('.mdx', '')
  const route = path === '/index' ? '' : path
  const modifyNow = new Date().toISOString()

  return `<url>
    <loc>${`${process.env.WEBSITE_URL}${route}`}</loc>
    <changefreq>weekly</changefreq>
    <lastmod>${modifyNow}</lastmod>
    <priority>0.8</priority>
  </url>`
}

async function generateSitemap() {
  // 版本未更新不发布最新的脚本文件
  if (!allowGenerate) {
    console.log(`generator stop, version is same!!!`)
    return
  }

  console.log(
    `generatorSitemap start...`
  )
  try {
    // Ignore Next.js specific files (e.g., _app.js) and API routes.
    const pages = await globby([
      'pages/**/*{.js,.mdx,.jsx}',
      '!pages/post/**.jsx',
      '!pages/_*.js',
      '!pages/api',
    ])
    console.log(
      'current is pages: ', pages
    )
    const xmlPaths = [
      'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
      'xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"',
      'xmlns:xhtml="http://www.w3.org/1999/xhtml"',
      'xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"',
      'xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"',
      'xmlns:video="http://www.google.com/schemas/sitemap-video/1.1"'
    ]
    const xmlPathsString = xmlPaths.join(' ')
    const sitemap = `<urlset ${xmlPathsString}>
  ${pages.map(addPage).join('\n')}
  </urlset>`
    fs.writeFileSync('public/sitemap.xml', sitemap)
    console.log(`generator sitemap successfully!!`)
  } catch (error) {
    console.error('generator sitemap failed', error)
  }
}

generateSitemap()