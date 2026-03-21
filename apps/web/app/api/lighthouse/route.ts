import { NextRequest, NextResponse } from 'next/server'

import { runLighthousePageSpeed } from '@/lib/lighthouse/fetchLighthouseServer'

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url)
  const url = searchParams.get('url')
  const strategy = searchParams.get('strategy') === 'mobile' ? 'mobile' : 'desktop'

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
