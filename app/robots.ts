import type { MetadataRoute } from 'next'

const SITE_URL = 'https://littlejalebis.com'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '',
        disallow: ['/api/', '/terms&conditions'],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}