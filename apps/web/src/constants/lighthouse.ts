import type { LighthouseMetrics, LighthouseCategoryId, PageLighthouseState } from '@/types'

export const PAGESPEED_API_BASE = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
export const HOME_URL = 'https://www.pattiperlock.com/'

/**
 * Form factor for PageSpeed API runs and for links to pagespeed.web.dev (must stay in sync).
 * Change here only — client fetch, API route, and report URLs all use this.
 */
export const LIGHTHOUSE_STRATEGY: 'desktop' | 'mobile' = 'desktop'

/**
 * Public PageSpeed Insights report URL for a page, matching the strategy used for audits.
 */
export function buildPageSpeedWebReportUrl(
  pageUrl: string,
  strategy: 'desktop' | 'mobile' = LIGHTHOUSE_STRATEGY
): string {
  const u = new URL('https://pagespeed.web.dev/analysis')
  u.searchParams.set('url', pageUrl)
  u.searchParams.set('form_factor', strategy)
  return u.toString()
}

/** True when this page has a completed Lighthouse run with scores and a report URL to open. */
export function hasLighthouseReportReady(state: PageLighthouseState | undefined): boolean {
  if (!state || state.loading || state.error) return false
  const hasScore = Object.values(state.scores ?? {}).some(s => typeof s === 'number')
  return Boolean(state.pageSpeedUrl && hasScore)
}

/** Lighthouse category scores (performance, accessibility, …): id + label in display order. */
export const LIGHTHOUSE_SCORE_CATEGORIES = [
  { id: 'performance' as const, label: 'Performance' },
  { id: 'accessibility' as const, label: 'Accessibility' },
  { id: 'best-practices' as const, label: 'Best practices' },
  { id: 'seo' as const, label: 'SEO' },
] as const

export const CATEGORY_IDS: LighthouseCategoryId[] = LIGHTHOUSE_SCORE_CATEGORIES.map(c => c.id)

/** Site pages for Lighthouse / Performance Lab; optional `tuner` places the page on the radio dial (left → right by `dialIndex`). */
export type LighthousePageEntry = {
  id: string
  title: string
  url: string
  tuner?: { dialIndex: number; readoutLabel: string }
}

export const LIGHTHOUSE_PAGE_ENTRIES: LighthousePageEntry[] = [
  {
    id: 'home',
    title: 'Home',
    url: 'https://www.pattiperlock.com/',
    tuner: { dialIndex: 0, readoutLabel: 'HOME' },
  },
  {
    id: 'about',
    title: 'About',
    url: 'https://www.pattiperlock.com/about',
    tuner: { dialIndex: 1, readoutLabel: 'ABOUT' },
  },
  {
    id: 'portfolio',
    title: 'Portfolio',
    url: 'https://www.pattiperlock.com/portfolio',
    tuner: { dialIndex: 2, readoutLabel: 'PORTFOLIO' },
  },
  {
    id: 'dev-corner',
    title: 'Dev Corner',
    url: 'https://www.pattiperlock.com/dev-corner',
    tuner: { dialIndex: 4, readoutLabel: 'DEV CORNER' },
  },
  {
    id: 'resume',
    title: 'Résumé',
    url: 'https://www.pattiperlock.com/resume',
    tuner: { dialIndex: 5, readoutLabel: 'RESUME' },
  },
  {
    id: 'contact',
    title: 'Contact',
    url: 'https://www.pattiperlock.com/contact',
    tuner: { dialIndex: 3, readoutLabel: 'CONTACT' },
  },
  {
    id: 'koodo-rebrand',
    title: 'Case study: Koodo rebrand',
    url: 'https://www.pattiperlock.com/koodorebrand',
    tuner: { dialIndex: 6, readoutLabel: 'CASE STUDY' },
  },
]

/** Flat list for Lighthouse URL lookups (same order as {@link LIGHTHOUSE_PAGE_ENTRIES}). */
export const LIGHTHOUSE_PAGES: { id: string; title: string; url: string }[] =
  LIGHTHOUSE_PAGE_ENTRIES.map(({ id, title, url }) => ({ id, title, url }))

export const LIGHTHOUSE_STALE_MS = 5 * 60 * 1000 // 5 minutes

export const METRIC_ROWS = [
  { label: 'LCP', key: 'largestContentfulPaint', unit: 's', threshold: 2500, eliteTarget: 500 },
  { label: 'FCP', key: 'firstContentfulPaint', unit: 's', threshold: 1800, eliteTarget: 300 },
  { label: 'FID', key: 'totalBlockingTime', unit: 'ms', threshold: 200, eliteTarget: 0 },
  { label: 'CLS', key: 'cumulativeLayoutShift', unit: null, threshold: 0.1, eliteTarget: 0 },
  { label: 'SI', key: 'speedIndex', unit: 's', threshold: 3400, eliteTarget: 400 },
]

export const PERFORMANCE_AUDIT_IDS: Record<keyof LighthouseMetrics, string> = {
  firstContentfulPaint: 'first-contentful-paint',
  largestContentfulPaint: 'largest-contentful-paint',
  totalBlockingTime: 'total-blocking-time',
  cumulativeLayoutShift: 'cumulative-layout-shift',
  speedIndex: 'speed-index',
}

/* ——— Performance Lab radio dial (Lighthouse tuner) ——— */

/**
 * One station on the vintage-radio dial: label, page route, angle on the arc, and derived “frequency”.
 * Pure angle/frequency math lives in `@/lib/lighthouse/tunerDialGeometry`.
 */
export interface TunerPoint {
  readoutLabel: string
  kcLabel: string
  pageId: string
  angle: number
  frequency: number
}

/** Start of the tuner sweep arc (degrees). */
export const START_ANGLE = 270
/** Arc length from start to end (degrees). */
export const SWEEP_ANGLE = 180 // 270deg -> 90deg
/** Minimum needle frequency (UI scale). */
export const MIN_FREQUENCY = 10
/** Maximum needle frequency (UI scale). */
export const MAX_FREQUENCY = 90

/** Builds {@link TunerPoint} stations from {@link LIGHTHOUSE_PAGE_ENTRIES} (`tuner` + dial order) and the fake “kHz” scale. */
export const buildTunerPoints = (): TunerPoint[] => {
  const dialPages = [...LIGHTHOUSE_PAGE_ENTRIES]
    .filter(
      (p): p is LighthousePageEntry & { tuner: NonNullable<LighthousePageEntry['tuner']> } =>
        p.tuner != null
    )
    .sort((a, b) => a.tuner.dialIndex - b.tuner.dialIndex)

  const denom = dialPages.length > 1 ? dialPages.length - 1 : 1

  return dialPages.map((p, i) => {
    const t = i / denom
    const kc = Math.round(550 + t * (1400 - 550))
    const rawAngle = START_ANGLE + t * SWEEP_ANGLE
    return {
      readoutLabel: p.tuner.readoutLabel,
      kcLabel: String(kc),
      pageId: p.id,
      /* [0, 360) so CSS rotate() never interpolates e.g. 18° → 378° (+360 spin) */
      angle: ((rawAngle % 360) + 360) % 360,
      frequency: MIN_FREQUENCY + t * (MAX_FREQUENCY - MIN_FREQUENCY),
    }
  })
}
