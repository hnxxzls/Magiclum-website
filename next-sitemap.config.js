/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://magic-lum.vercel.app',
  generateRobotsText: true,
  generateIndexSitemap: false,
  exclude: ['/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/']
      }
    ],
    additionalSitemaps: [
      'https://magic-lum.vercel.app/sitemap.xml'
    ]
  },
  transform: async (config, path) => {
    // Configuración personalizada para diferentes páginas
    const customConfig = {
      '/': {
        priority: 1.0,
        changefreq: 'weekly'
      },
      '/calculadora': {
        priority: 0.8,
        changefreq: 'monthly'
      }
    }

    return {
      loc: path,
      changefreq: customConfig[path]?.changefreq || 'monthly',
      priority: customConfig[path]?.priority || 0.7,
      lastmod: new Date().toISOString(),
    }
  }
}