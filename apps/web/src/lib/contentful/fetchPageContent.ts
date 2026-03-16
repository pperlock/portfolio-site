import type { AboutContent } from '@/types'
import type { ResumePage } from '@/types'
import { getSingleEntry } from '@portfolio/cms'

/**
 * Fetch About page content from Contentful.
 * Returns null if Contentful is not configured or the entry is missing.
 */
export const getAboutContent = async (): Promise<AboutContent | null> =>
  getSingleEntry<AboutContent>('aboutPage')

/**
 * Fetch Resume page content from Contentful (content type: resumePage).
 * Returns null if Contentful is not configured or the entry is missing.
 */
export const getResumePageContent = async (): Promise<ResumePage | null> => {
  const res = await getSingleEntry<ResumePage>('resumePage')
  return res
}
