import { NextResponse } from 'next/server'

import { fetchIssuesWithProjectStatus } from '@/lib/github'

export async function GET() {
  try {
    const issues = await fetchIssuesWithProjectStatus()
    return NextResponse.json({ issues })
  } catch (err) {
    console.error('GET /api/github/issues:', err)
    return NextResponse.json({ error: 'Failed to load roadmap issues' }, { status: 502 })
  }
}
