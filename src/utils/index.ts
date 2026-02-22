export const CASE_STUDIES_ORDER = [
  { id: 'homepage', link: '/koodorebrand', title: 'Koodo Mobile Homepage Rebrand' },
  { id: 'koodoEcommerce', link: '/koodoecommerce', title: 'Koodo Ecommerce' },
  { id: 'storeLocator', link: '/koodostorelocator', title: 'Koodo Mobile Store Locator' },
]

export function getNextCaseStudy(currentProjectId: string) {
  const index = CASE_STUDIES_ORDER.findIndex(c => c.id === currentProjectId)
  if (index === -1 || index === CASE_STUDIES_ORDER.length - 1) return null
  return CASE_STUDIES_ORDER[index + 1]
}

export function getPreviousCaseStudy(currentProjectId: string) {
  const index = CASE_STUDIES_ORDER.findIndex(c => c.id === currentProjectId)
  if (index <= 0) return null
  return CASE_STUDIES_ORDER[index - 1]
}

/** Normalizes content to an array of paragraphs: string split by \n\n, or array used as-is. */
export function toParagraphs(text: string | string[] | null) {
  if (text == null) return []
  if (Array.isArray(text)) return text.filter(Boolean)
  if (typeof text !== 'string') return []
  return text
    .split(/\n\n+/)
    .map(p => p.trim())
    .filter(Boolean)
}
