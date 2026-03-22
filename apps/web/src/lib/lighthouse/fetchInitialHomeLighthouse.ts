import axios from 'axios'
import type { PageLighthouseState } from '@/types'
import { parseScores, parseMetrics } from '@/utils'
import { PAGESPEED_API_BASE, HOME_URL, CATEGORY_IDS } from '@/constants'

export interface InitialHomeLighthouseResult {
  selectedPageId: 'home'
  state: Record<string, PageLighthouseState>
}

/**
 * Fetches Lighthouse data for the homepage on the server.
 * Use inside a Suspense boundary so the rest of the page can render immediately.
 */
export const fetchInitialHomeLighthouse = async (): Promise<InitialHomeLighthouseResult | null> => {
  const apiKey = process.env.PAGESPEED_INSIGHTS_API_KEY
  if (!apiKey) return null

  const apiUrl = new URL(PAGESPEED_API_BASE)
  apiUrl.searchParams.set('url', HOME_URL)
  apiUrl.searchParams.set('strategy', 'desktop')
  apiUrl.searchParams.set('key', apiKey)
  CATEGORY_IDS.forEach(cat => apiUrl.searchParams.append('category', cat))

  try {
    const { data } = await axios.get(apiUrl.toString())

    const categories = data?.lighthouseResult?.categories
    const audits = data?.lighthouseResult?.audits
    const scores = parseScores(categories)
    const metrics = parseMetrics(audits)

    const pageState: PageLighthouseState = {
      loading: false,
      scores,
      metrics,
      pageSpeedUrl: `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(HOME_URL)}`,
      error: undefined,
    }

    return {
      selectedPageId: 'home',
      state: { home: pageState },
    }
  } catch {
    return null
  }
}
