import type { LighthouseMetrics, LighthouseCategoryId, LighthouseScores } from '@/types'

export const PAGESPEED_API_BASE = 'https://www.googleapis.com/pagespeedonline/v5/runPagespeed'
export const HOME_URL = 'https://www.pattiperlock.com/'

export const LIGHTHOUSE_PAGES: { id: string; title: string; url: string }[] = [
  { id: 'home', title: 'Home', url: 'https://www.pattiperlock.com/' },
  { id: 'about', title: 'About', url: 'https://www.pattiperlock.com/about' },
  { id: 'portfolio', title: 'Portfolio', url: 'https://www.pattiperlock.com/portfolio' },
  { id: 'dev-corner', title: 'Dev Corner', url: 'https://www.pattiperlock.com/dev-corner' },
  { id: 'resume', title: 'Résumé', url: 'https://www.pattiperlock.com/resume' },
  { id: 'contact', title: 'Contact', url: 'https://www.pattiperlock.com/contact' },
  {
    id: 'koodo-rebrand',
    title: 'Case study: Koodo rebrand',
    url: 'https://www.pattiperlock.com/koodorebrand',
  },
  {
    id: 'koodo-store-locator',
    title: 'Case study: Koodo store locator',
    url: 'https://www.pattiperlock.com/koodostorelocator',
  },
  {
    id: 'koodo-ecommerce',
    title: 'Case study: Koodo ecommerce',
    url: 'https://www.pattiperlock.com/koodoecommerce',
  },
]

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

export const CATEGORY_IDS: LighthouseCategoryId[] = [
  'performance',
  'accessibility',
  'best-practices',
  'seo',
]

export const CATEGORY_LABELS: Record<keyof LighthouseScores, string> = {
  performance: 'Performance',
  accessibility: 'Accessibility',
  'best-practices': 'Best practices',
  seo: 'SEO',
}
