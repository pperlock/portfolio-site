import type { AboutContent } from '@/types'
import { getSingleEntry } from '@portfolio/cms'

/**
 * Fetch About page content from Contentful.
 * Returns null if Contentful is not configured or the entry is missing.
 */
export const getAboutContent = async (): Promise<AboutContent | null> =>
  getSingleEntry<AboutContent>('aboutPage')
