import axios from 'axios'
import type { ApiResponse, PageLighthouseState } from '@/types'
import { LIGHTHOUSE_STRATEGY, buildPageSpeedWebReportUrl } from '@/constants'

const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

/**
 * Client fetch for Lighthouse (backup when SSR did not hydrate this query, or after staleTime).
 * Accepts 2xx/502/503 bodies so the shape matches {@link fetchLighthousePageState} from the server.
 * Retries once on HTTP 502 (transient PageSpeed / upstream failures).
 */
export const fetchLighthouse = async (url: string): Promise<PageLighthouseState> => {
  const pageSpeedUrl = buildPageSpeedWebReportUrl(url, LIGHTHOUSE_STRATEGY)

  for (let attempt = 0; attempt < 2; attempt++) {
    const { data, status } = await axios.get<ApiResponse & { hint?: string }>('/api/lighthouse', {
      params: { url, strategy: LIGHTHOUSE_STRATEGY },
      validateStatus: s => (s >= 200 && s < 300) || s === 502 || s === 503,
    })

    const resolvedPageSpeedUrl = data.pageSpeedUrl ?? pageSpeedUrl

    if (attempt === 0 && status === 502) {
      await sleep(8000)
      continue
    }

    if (status === 503 || status === 502 || data.error) {
      return {
        loading: false,
        scores: {},
        metrics: data.metrics,
        pageSpeedUrl: resolvedPageSpeedUrl,
        error: typeof data.error === 'string' ? data.error : 'Could not run Lighthouse check.',
      }
    }

    return {
      loading: false,
      scores: data.scores ?? {},
      metrics: data.metrics,
      pageSpeedUrl: resolvedPageSpeedUrl,
      error: undefined,
    }
  }

  return {
    loading: false,
    scores: {},
    metrics: undefined,
    pageSpeedUrl,
    error: 'Could not run Lighthouse check.',
  }
}

export const getLighthouseQueryKey = (pageId: string, url: string) =>
  ['lighthouse', pageId, url, LIGHTHOUSE_STRATEGY] as const
