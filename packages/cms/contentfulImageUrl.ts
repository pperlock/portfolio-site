/**
 * Convert a Contentful asset URL to an absolute URL for next/image.
 * Contentful returns protocol-relative URLs (//images.ctfassets.net/...) which
 * next/image rejects; this prepends "https:" when needed.
 */
export const contentfulImageUrl = (url: string): string => {
  if (!url || typeof url !== 'string') return url
  if (url.startsWith('//')) return `https:${url}`
  return url
}
