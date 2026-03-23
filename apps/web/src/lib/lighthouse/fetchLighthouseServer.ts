import axios from 'axios'

import {
  PAGESPEED_API_BASE,
  CATEGORY_IDS,
  LIGHTHOUSE_STRATEGY,
  buildPageSpeedWebReportUrl,
} from '@/constants'
import type { PageLighthouseState } from '@/types'
import { parseScores, parseMetrics } from '@/utils'

export type LighthousePageSpeedResult =
  | { ok: true; state: PageLighthouseState; finalUrl: string }
  | { ok: false; state: PageLighthouseState }

/**
 * Runs PageSpeed / Lighthouse for a URL on the server (same behavior as GET /api/lighthouse).
 * Used for SSR prefetch + hydration and by the route handler.
 */
export async function runLighthousePageSpeed(
  url: string,
  strategy: 'desktop' | 'mobile' = LIGHTHOUSE_STRATEGY
): Promise<LighthousePageSpeedResult> {
  const apiKey = process.env.PAGESPEED_INSIGHTS_API_KEY
  const pageSpeedUrl = buildPageSpeedWebReportUrl(url, strategy)

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

  /** Stay below API route `maxDuration` (see `app/api/lighthouse/route.ts` + `vercel.json`). */
  const PAGESPEED_REQUEST_MS = 280_000

  const axiosConfig = {
    timeout: PAGESPEED_REQUEST_MS,
    validateStatus: (status: number) => status < 500,
  } as const

  const sleep = (ms: number) => new Promise<void>(resolve => setTimeout(resolve, ms))

  /** Subset of PageSpeed Insights JSON used by this module. */
  type PageSpeedInsightsJson = {
    lighthouseResult?: {
      categories?: Record<string, { score?: number | null }>
      audits?: Record<string, { displayValue?: string }>
      finalUrl?: string
    }
    error?: { message?: string }
  }

  const isRetryableAxiosError = (err: unknown): boolean => {
    if (!axios.isAxiosError(err)) return false
    const s = err.response?.status
    if (s === 502 || s === 503 || s === 504) return true
    if (err.code === 'ECONNABORTED') return false
    if (!err.response) return true
    return false
  }

  let data: PageSpeedInsightsJson | undefined
  try {
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const res = await axios.get(apiUrl.toString(), axiosConfig)
        data = res.data
        break
      } catch (err) {
        const retry = attempt === 0 && isRetryableAxiosError(err)
        if (!retry) throw err
        await sleep(8000)
      }
    }
  } catch (err) {
    if (axios.isAxiosError(err)) {
      if (err.code === 'ECONNABORTED' || err.message.toLowerCase().includes('timeout')) {
        return {
          ok: false,
          state: {
            loading: false,
            scores: {},
            pageSpeedUrl,
            error:
              'PageSpeed request timed out. Heavy pages (like Dev Corner) can exceed limits—increase API route maxDuration on your host or try again.',
          },
        }
      }
    }

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

  if (data === undefined) {
    return {
      ok: false,
      state: {
        loading: false,
        scores: {},
        pageSpeedUrl,
        error: 'PageSpeed request returned no data.',
      },
    }
  }

  if (!data?.lighthouseResult) {
    const apiMsg =
      data &&
      typeof data === 'object' &&
      'error' in data &&
      data.error &&
      typeof (data as { error?: { message?: string } }).error === 'object'
        ? (data as { error: { message?: string } }).error?.message
        : undefined
    return {
      ok: false,
      state: {
        loading: false,
        scores: {},
        pageSpeedUrl,
        error:
          apiMsg ??
          'PageSpeed did not return Lighthouse results for this URL. It may be slow to load or blocked from Google’s runners.',
      },
    }
  }

  const categories = data.lighthouseResult?.categories
  const audits = data.lighthouseResult?.audits
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
    finalUrl: data.lighthouseResult?.finalUrl ?? url,
  }
}

export async function fetchLighthousePageState(
  url: string,
  strategy: 'desktop' | 'mobile' = LIGHTHOUSE_STRATEGY
): Promise<PageLighthouseState> {
  const result = await runLighthousePageSpeed(url, strategy)
  return result.state
}
