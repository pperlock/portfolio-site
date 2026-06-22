import { getContentfulClient, getSingleEntry } from '@portfolio/cms'
import type { CaseStudyContent, CaseStudyRoute } from '@/types'
import type { CaseStudyPageContentfulFields } from '@/types/CaseStudyContentful'

type CaseStudyRouteEntryFields = {
  id?: unknown
  order?: number | null
  project?: {
    fields?: {
      title?: unknown
      route?: unknown
    }
  }
}

const CASE_STUDY_CONTENT_TYPE =
  process.env.CONTENTFUL_CASE_STUDY_CONTENT_TYPE?.trim() || 'caseStudyPage'
const CASE_STUDY_PAGE_ID_FIELD = 'id'

async function fetchFieldsById(lookupKey: string): Promise<CaseStudyPageContentfulFields | null> {
  return getSingleEntry<CaseStudyPageContentfulFields>(CASE_STUDY_CONTENT_TYPE, {
    [`fields.${CASE_STUDY_PAGE_ID_FIELD}`]: lookupKey,
  })
}

async function fetchAllCaseStudyRoutes(): Promise<CaseStudyRoute[]> {
  const client = getContentfulClient()
  if (!client) return []

  try {
    const { items } = await client.getEntries({
      content_type: CASE_STUDY_CONTENT_TYPE,
      include: 1,
      limit: 200,
    })

    const getFieldString = (value: unknown): string => {
      if (typeof value === 'string') return value.trim()
      if (value && typeof value === 'object') {
        const localeValue = Object.values(value as Record<string, unknown>).find(
          v => typeof v === 'string'
        )
        if (typeof localeValue === 'string') return localeValue.trim()
      }
      return ''
    }

    const navigationRoutes = items.map(({ fields }) => {
      const entryFields = fields as CaseStudyRouteEntryFields
      const id = getFieldString(entryFields.id)
      const navigationOrder = entryFields.order ?? 0
      const title = getFieldString(entryFields.project?.fields?.title)
      const route = getFieldString(entryFields.project?.fields?.route)
      const link = route ? (route.startsWith('/') ? route : `/${route}`) : ''
      return { id, title, link, navigationOrder }
    })

    return navigationRoutes.sort((a, b) => a.navigationOrder - b.navigationOrder)
  } catch (error) {
    console.error('[Contentful] Failed to load case study routes:', error)
    return []
  }
}

/**
 * Loads a case study from Contentful only. Returns null if the client is not configured,
 * the entry is missing, or the request fails.
 */
export async function getCaseStudyProject(appProjectId: string): Promise<CaseStudyContent | null> {
  const [fields, caseStudyRoutes] = await Promise.all([
    fetchFieldsById(appProjectId),
    fetchAllCaseStudyRoutes(),
  ])

  if (!fields) return null
  return {
    ...(fields as unknown as CaseStudyContent),
    caseStudyRoutes,
  }
}
