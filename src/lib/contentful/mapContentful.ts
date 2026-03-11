/**
 * Keys that Contentful adds to entries and nested objects. We strip these
 * so the result only contains content fields.
 */
const CONTENTFUL_META_KEYS = ['sys', 'metadata'] as const

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

/**
 * Recursively remove Contentful metadata keys (sys, metadata, etc.) from an
 * object. Unwraps:
 * - sys, metadata (stripped)
 * - objects that only have a "fields" key (resolved entry reference → use fields as the object)
 * - locale-keyed objects (e.g. { 'en-US': value }) by using the first value
 */
export const stripContentfulKeys = <T>(value: unknown): T => {
  if (value === null || value === undefined) {
    return value as T
  }

  if (Array.isArray(value)) {
    return value.map(item => stripContentfulKeys(item)) as T
  }

  if (typeof value === 'object') {
    const obj = value as Record<string, unknown>
    const out: Record<string, unknown> = {}

    for (const [key, val] of Object.entries(obj)) {
      if (CONTENTFUL_META_KEYS.includes(key as (typeof CONTENTFUL_META_KEYS)[number])) {
        continue
      }
      out[key] = stripContentfulKeys(val)
    }

    // Resolved entry reference: { fields: { ... } } → unwrap to inner object.
    // Skip unwrap when inner would be empty (unresolved link → fields: {}).
    if (Object.keys(out).length === 1 && 'fields' in out && typeof out.fields === 'object' && out.fields !== null) {
      const inner = stripContentfulKeys(out.fields) as Record<string, unknown>
      if (Object.keys(inner).length > 0) return inner as T
    }

    // Locale-keyed object: { 'en-US': value } → unwrap to first non-empty locale value
    const keys = Object.keys(out)
    if (keys.length > 0 && keys.every(k => k.includes('-') && k.length >= 5)) {
      for (const k of keys) {
        const unwrapped = stripContentfulKeys(out[k]) as Record<string, unknown>
        if (unwrapped !== null && typeof unwrapped === 'object' && Object.keys(unwrapped).length > 0) {
          return unwrapped as T
        }
      }
      // All locale values were empty; return first to avoid losing the array/item
      return stripContentfulKeys(out[keys[0]]) as T
    }

    return out as T
  }

  return value as T
}
