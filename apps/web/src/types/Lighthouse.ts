export type LighthouseScores = Partial<
  Record<'performance' | 'accessibility' | 'best-practices' | 'seo', number>
>

export interface LighthouseMetrics {
  firstContentfulPaint?: string
  largestContentfulPaint?: string
  totalBlockingTime?: string
  cumulativeLayoutShift?: string
  speedIndex?: string
}

export interface PageLighthouseState {
  loading: boolean
  scores: LighthouseScores
  metrics?: LighthouseMetrics
  pageSpeedUrl?: string
  error?: string
}

export interface ApiResponse {
  scores?: LighthouseScores
  metrics?: LighthouseMetrics
  pageSpeedUrl?: string
  error?: string
}

export type LighthouseCategoryId = 'performance' | 'accessibility' | 'best-practices' | 'seo'
