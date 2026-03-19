import type { MetadataRoute } from 'next'

import { getServicePath } from './services/serviceData'

const SITE_URL = 'https://littlejalebis.com'

const staticRoutes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/menu', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/testimonials', changeFrequency: 'monthly', priority: 0.6 },
  { path: getServicePath('catering'), changeFrequency: 'weekly', priority: 0.9 },
  { path: getServicePath('venue'), changeFrequency: 'weekly', priority: 0.9 },
  { path: getServicePath('boxes'), changeFrequency: 'weekly', priority: 0.9 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return staticRoutes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }))
}