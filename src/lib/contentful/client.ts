import * as contentful from 'contentful'

function getEnv(name: string): string | undefined {
  return process.env[name]
}

/**
 * Contentful client for the Content Delivery API (read-only, published content).
 * Only created when CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN are set.
 */
export function getContentfulClient(): contentful.ContentfulClientApi<undefined> | null {
  const space = getEnv('CONTENTFUL_SPACE_ID')
  const accessToken = getEnv('CONTENTFUL_ACCESS_TOKEN')
  if (!space || !accessToken) return null
  return contentful.createClient({ space, accessToken })
}

/**
 * Use preview token to fetch draft/unpublished content.
 */
export function getContentfulPreviewClient(): contentful.ContentfulClientApi<undefined> | null {
  const space = getEnv('CONTENTFUL_SPACE_ID')
  const token = getEnv('CONTENTFUL_PREVIEW_ACCESS_TOKEN')
  if (!space || !token) return null
  return contentful.createClient({
    space,
    accessToken: token,
    host: 'preview.contentful.com',
  })
}
