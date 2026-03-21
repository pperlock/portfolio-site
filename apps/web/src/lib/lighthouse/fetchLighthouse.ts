import axios from 'axios'
import type { ApiResponse, PageLighthouseState } from '@/types'

const fallbackPageSpeedUrl = (url: string) =>
  `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`

/**
 * Client fetch for Lighthouse (backup when SSR did not hydrate this query, or after staleTime).
 * Accepts 2xx/502/503 bodies so the shape matches {@link fetchLighthousePageState} from the server.
 */
export const fetchLighthouse = async (url: string): Promise<PageLighthouseState> => {
  const { data, status } = await axios.get<ApiResponse & { hint?: string }>('/api/lighthouse', {
    params: { url, strategy: 'desktop' },
    validateStatus: s => (s >= 200 && s < 300) || s === 502 || s === 503,
  })

  const pageSpeedUrl = data.pageSpeedUrl ?? fallbackPageSpeedUrl(url)

  if (status === 503 || status === 502 || data.error) {
    return {
      loading: false,
      scores: {},
      metrics: data.metrics,
      pageSpeedUrl,
      error:
        typeof data.error === 'string'
          ? data.error
          : 'Could not run Lighthouse check.',
    }
  }

  return {
    loading: false,
    scores: data.scores ?? {},
    metrics: data.metrics,
    pageSpeedUrl,
    error: undefined,
  }
}

export const getLighthouseQueryKey = (pageId: string, url: string) => {
  return ['lighthouse', pageId, url] as const
}
