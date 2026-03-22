import { METRIC_ROWS } from '@/constants'
import type { PageLighthouseState, LighthouseMetrics } from '@/types'
import { PERFORMANCE_AUDIT_IDS, CATEGORY_IDS } from '@/constants'

/**
 * Extracts category scores from the PageSpeed/Lighthouse API response.
 * Converts the API's 0–1 score to a 0–100 integer for each category.
 *
 * @param categories - `lighthouseResult.categories` from the API (e.g. `{ performance: { score: 0.92 }, ... }`)
 * @returns Object with keys `performance`, `accessibility`, `best-practices`, `seo` and 0–100 number values, or empty object if missing
 */
export const parseScores = (
  categories: Record<string, { score?: number | null }> | undefined
): PageLighthouseState['scores'] => {
  if (!categories) return {}
  const out: PageLighthouseState['scores'] = {}
  for (const id of CATEGORY_IDS) {
    const score = categories[id]?.score
    if (typeof score === 'number' && !Number.isNaN(score)) {
      out[id] = Math.round(score * 100)
    }
  }
  return out
}

/**
 * Extracts performance metric display values from the PageSpeed/Lighthouse API audits.
 * Maps each audit id (e.g. `first-contentful-paint`) to its `displayValue` string (e.g. `"1,234 ms"`).
 *
 * @param audits - `lighthouseResult.audits` from the API
 * @returns Object with keys like `largestContentfulPaint`, `firstContentfulPaint`, `totalBlockingTime`, etc., and string values for display
 */
export const parseMetrics = (
  audits: Record<string, { displayValue?: string }> | undefined
): LighthouseMetrics => {
  if (!audits) return {}
  const out: LighthouseMetrics = {}
  for (const [key, auditId] of Object.entries(PERFORMANCE_AUDIT_IDS)) {
    const displayValue = audits[auditId]?.displayValue
    if (typeof displayValue === 'string' && displayValue) {
      out[key as keyof LighthouseMetrics] = displayValue
    }
  }
  return out
}

/**
 * Parse API value and normalize to the threshold unit.
 * displayValue can be "1,234 ms", "1.2 s", or "0.05". Pass unit so seconds can be converted to ms.
 */
export const parseMetricValue = (
  value: string | number | undefined | null,
  unit: 'ms' | 's' | null
): number | null => {
  if (!value) return null
  const raw = String(value).trim()
  const num = typeof value === 'number' ? value : parseFloat(raw.replace(/,/g, ''))

  if (Number.isNaN(num)) return null
  if (!unit) return num

  return unit === 's' ? num * 1000 : num
}

/**
 * Calculates a "Health Score" from 0-100.
 * Higher = better performance. Value should be in the same unit as the metric's threshold (ms or unitless).
 */
export const calculateHealth = (label: string, value: number | null): number => {
  if (value == null) return 0

  let val = value
  const row = METRIC_ROWS.find((r: { label: string }) => r.label === label)
  if (!row) return 0

  const limit = row.threshold
  const target = row.eliteTarget
  if (
    target === undefined ||
    typeof target !== 'number' ||
    !Number.isFinite(target) ||
    typeof limit !== 'number' ||
    !Number.isFinite(limit)
  ) {
    return 0
  }

  // Normalize: if time metric and value looks like seconds (< 20), convert to ms
  if ((label === 'LCP' || label === 'FCP' || label === 'SI') && value < 20 && value > 0) {
    val = value * 1000
  }

  if (val <= target) return 100

  const range = limit - target
  if (range <= 0 || !Number.isFinite(range)) return 15

  const currentDisplacement = val - target
  const health = 100 - (currentDisplacement / range) * 60

  return Math.max(15, Math.round(health))
}

export const formatAuditDate = (date: Date): string => {
  return date.toLocaleString(undefined, {
    dateStyle: 'medium',
    timeStyle: 'short',
  })
}
