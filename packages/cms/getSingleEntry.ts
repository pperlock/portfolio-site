import { getContentfulClient } from './client'
import { stripContentfulKeys } from './mapContentful'

interface QueryParams {
  locale?: string
  content_type: string
  limit?: number
  include?: number
  [key: string]: unknown
}

/**
 * Generic helper to fetch a single entry by Contentful content type.
 * Strips Contentful metadata keys and returns the fields typed as T, or null.
 */
export const getSingleEntry = async <T>(
  contentType: string,
  params: Omit<QueryParams, 'content_type'> = {}
): Promise<T | null> => {
  const client = getContentfulClient()
  if (!client) return null

  try {
    const query: QueryParams = {
      content_type: contentType,
      limit: 1,
      include: 10,
      ...params,
    }

    const { items } = await client.getEntries(query)

    const entry = items[0]
    if (!entry || !entry.fields) return null

    const raw = stripContentfulKeys<T>(entry.fields)
    return raw
  } catch (err) {
    console.error(`[SSR]: Error retrieving Contentful entry for ${contentType}:`, err)
    return null
  }
}
