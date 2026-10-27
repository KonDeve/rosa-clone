import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/data/projects';

const BASE_URL = 'https://rosa-clone.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const infoPages = ['styleguide', 'licenses', 'changelog'];

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...infoPages.map((page) => ({
      url: `${BASE_URL}/info/${page}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    })),
    ...PROJECTS.map((project) => ({
      url: `${BASE_URL}/project/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.8,
    })),
  ];
}
