import { MetadataRoute } from 'next'
import { beritaService } from '@/services/berita.service'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://okifftuh.com'

  // Fetch all dynamic news routes
  const allBerita = await beritaService.getAll(false)
  const beritaUrls = allBerita.map((berita) => ({
    url: `${baseUrl}/berita/${berita.slug}`,
    lastModified: new Date(berita.updatedAt || berita.createdAt || Date.now()),
    changeFrequency: 'yearly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/hmif`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dmmif`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/berita`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...beritaUrls,
  ]
}
