import type { MetadataRoute } from 'next'

import { getBlogPostSlugs } from '@/lib/blog'
import { getServicePath } from './services/serviceData'

const SITE_URL = 'https://littlejalebis.com'

const staticRoutes: Array<{
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}> = [
  { path: '/', changeFrequency: 'weekly', priority: 1 },
  { path: '/blog', changeFrequency: 'weekly', priority: 0.8 },
  { path: '/about', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/menu', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/contact', changeFrequency: 'monthly', priority: 0.8 },
  { path: '/testimonials', changeFrequency: 'monthly', priority: 0.6 },
  { path: '/services/kids-party-venue-gurgaon', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/kids-party-catering-delhi', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/kids-party-catering-faridabad', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/kids-party-catering-ghaziabad', changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/kids-party-catering-noida', changeFrequency: 'weekly', priority: 0.9 },
  { path: getServicePath('catering'), changeFrequency: 'weekly', priority: 0.9 },
  { path: '/services/kids-party-catering-gurgaon', changeFrequency: 'weekly', priority: 0.9 },
  { path: getServicePath('venue'), changeFrequency: 'weekly', priority: 0.9 },
  { path: getServicePath('boxes'), changeFrequency: 'weekly', priority: 0.9 },
  { path: '/our-promise', changeFrequency: 'monthly', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  const blogRoutes = getBlogPostSlugs().map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified,
    changeFrequency: 'monthly' as MetadataRoute.Sitemap[number]['changeFrequency'],
    priority: 0.7,
  }))

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...blogRoutes,
  ]
}