/**
 * Ordered list of case studies for navigation (next/previous) and display.
 */
export const CASE_STUDIES_ORDER = [
  { id: 'homepage', link: '/koodorebrand', title: 'Koodo Mobile Homepage Rebrand' },
  { id: 'koodoEcommerce', link: '/koodoecommerce', title: 'Koodo Ecommerce' },
  { id: 'storeLocator', link: '/koodostorelocator', title: 'Koodo Mobile Store Locator' },
]

/**
 * Returns the next case study in CASE_STUDIES_ORDER.
 * @param currentProjectId - The id of the current case study
 * @returns The next case study, or null if current is last or not found
 */
export const getNextCaseStudy = (currentProjectId: string) => {
  const index = CASE_STUDIES_ORDER.findIndex(c => c.id === currentProjectId)
  if (index === -1 || index === CASE_STUDIES_ORDER.length - 1) return null
  return CASE_STUDIES_ORDER[index + 1]
}

/**
 * Returns the previous case study in CASE_STUDIES_ORDER.
 * @param currentProjectId - The id of the current case study
 * @returns The previous case study, or null if current is first or not found
 */
export const getPreviousCaseStudy = (currentProjectId: string) => {
  const index = CASE_STUDIES_ORDER.findIndex(c => c.id === currentProjectId)
  if (index <= 0) return null
  return CASE_STUDIES_ORDER[index - 1]
}

/**
 * Normalizes content to an array of paragraphs.
 * Strings are split on double newlines; arrays are used as-is (filtered for truthy).
 * @param text - String (split by \n\n), array of strings, or null
 * @returns Array of non-empty paragraph strings
 */
export const toParagraphs = (text: string | string[] | null) => {
  if (text == null) return []
  if (Array.isArray(text)) return text.filter(Boolean)
  if (typeof text !== 'string') return []
  return text
    .split(/\n\n+/)
    .map(p => p.trim())
    .filter(Boolean)
}
