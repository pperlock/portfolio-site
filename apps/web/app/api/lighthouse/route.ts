import axios from 'axios'
import { NextRequest, NextResponse } from 'next/server'
import { parseScores, parseMetrics } from '@/utils'
import { PAGESPEED_API_BASE, CATEGORY_IDS } from '@/constants'

const apiKey = process.env.PAGESPEED_INSIGHTS_API_KEY

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  const strategy = searchParams.get('strategy') === 'mobile' ? 'mobile' : 'desktop'

  if (!url) {
    return NextResponse.json({ error: 'Missing url query parameter' }, { status: 400 })
  }

  if (!apiKey) {
    const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`
    return NextResponse.json(
      {
        error: 'PageSpeed API key not configured',
        pageSpeedUrl,
        hint: 'Set PAGESPEED_INSIGHTS_API_KEY in your environment to run Lighthouse from this page.',
      },
      { status: 503 }
    )
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
    const pageSpeedUrl = `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`

    return NextResponse.json({
      url: data?.lighthouseResult?.finalUrl ?? url,
      strategy,
      scores,
      metrics: {
        ...metrics,
        lighthouseScore: scores.performance,
      },
      pageSpeedUrl,
    })
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
    return NextResponse.json({ error: String(message) }, { status: 502 })
  }
}
