import { NextRequest, NextResponse } from 'next/server'

import { LIGHTHOUSE_STRATEGY } from '@/constants'
import { runLighthousePageSpeed } from '@/lib/lighthouse/fetchLighthouseServer'

/**
 * PageSpeed Insights runs Lighthouse remotely and often needs 30–120s+ on heavier pages
 * (e.g. Dev Corner). Without this, the default serverless limit can return 502 before Google responds.
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config#maxduration
 */
/** Match `vercel.json` so PageSpeed can finish on heavy routes (requires Vercel Pro-level limits). */
export const maxDuration = 300

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  const rawStrategy = searchParams.get('strategy')
  const strategy: 'desktop' | 'mobile' =
    rawStrategy === 'mobile' ? 'mobile' : rawStrategy === 'desktop' ? 'desktop' : LIGHTHOUSE_STRATEGY

  if (!url) {
    return NextResponse.json({ error: 'Missing url query parameter' }, { status: 400 })
  }

  const apiKey = process.env.PAGESPEED_INSIGHTS_API_KEY
  const result = await runLighthousePageSpeed(url, strategy)

  if (!apiKey) {
    return NextResponse.json(
      {
        error: result.state.error,
        pageSpeedUrl: result.state.pageSpeedUrl,
        hint: 'Set PAGESPEED_INSIGHTS_API_KEY in your environment to run Lighthouse from this page.',
      },
      { status: 503 }
    )
  }

  if (!result.ok) {
    return NextResponse.json(
      { error: result.state.error, pageSpeedUrl: result.state.pageSpeedUrl },
      { status: 502 }
    )
  }

  return NextResponse.json({
    url: result.finalUrl,
    strategy,
    scores: result.state.scores,
    metrics: result.state.metrics,
    pageSpeedUrl: result.state.pageSpeedUrl,
  })
}
