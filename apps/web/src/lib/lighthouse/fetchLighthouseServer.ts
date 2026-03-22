import axios from 'axios'

import { PAGESPEED_API_BASE, CATEGORY_IDS } from '@/constants'
import type { PageLighthouseState } from '@/types'
import { parseScores, parseMetrics } from '@/utils'

const pageSpeedWebUrl = (url: string) =>
  `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`

export type LighthousePageSpeedResult =
  | { ok: true; state: PageLighthouseState; finalUrl: string }
  | { ok: false; state: PageLighthouseState }

/**
 * Runs PageSpeed / Lighthouse for a URL on the server (same behavior as GET /api/lighthouse).
 * Used for SSR prefetch + hydration and by the route handler.
 */
export async function runLighthousePageSpeed(
  url: string,
  strategy: 'desktop' | 'mobile' = 'desktop'
): Promise<LighthousePageSpeedResult> {
  const apiKey = process.env.PAGESPEED_INSIGHTS_API_KEY
  const pageSpeedUrl = pageSpeedWebUrl(url)

  if (!apiKey) {
    return {
      ok: false,
      state: {
        loading: false,
        scores: {},
        pageSpeedUrl,
        error: 'PageSpeed API key not configured',
      },
    }
  }

  const apiUrl = new URL(PAGESPEED_API_BASE)
  apiUrl.searchParams.set('url', url)
  apiUrl.searchParams.set('strategy', strategy)
  apiUrl.searchParams.set('key', apiKey)
  CATEGORY_IDS.forEach(cat => apiUrl.searchParams.append('category', cat))

  try {
    const { data } = await axios.get(apiUrl.toString())

    const categories = data?.lighthouseResult?.categories
    const audits = data?.lighthouseResult?.audits
    const scores = parseScores(categories)
    const metrics = parseMetrics(audits)

    const state: PageLighthouseState = {
      loading: false,
      scores,
      metrics: {
        ...metrics,
        lighthouseScore: scores.performance,
      } as PageLighthouseState['metrics'],
      pageSpeedUrl,
      error: undefined,
    }

    return {
      ok: true,
      state,
      finalUrl: data?.lighthouseResult?.finalUrl ?? url,
    }
  } catch (err) {
    const body = axios.isAxiosError(err) ? err.response?.data : undefined
    const message =
      body && typeof body === 'object'
        ? ((body as { error?: { message?: string }; message?: string }).error?.message ??
          (body as { message?: string }).message ??
          'PageSpeed API error')
        : err instanceof Error
          ? err.message
          : 'Failed to run Lighthouse'

    return {
      ok: false,
      state: {
        loading: false,
        scores: {},
        pageSpeedUrl,
        error: String(message),
      },
    }
  }
}

export async function fetchLighthousePageState(
  url: string,
  strategy: 'desktop' | 'mobile' = 'desktop'
): Promise<PageLighthouseState> {
  const result = await runLighthousePageSpeed(url, strategy)
  return result.state
}
