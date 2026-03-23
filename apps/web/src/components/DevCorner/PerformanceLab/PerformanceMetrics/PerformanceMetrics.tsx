import React from 'react'
import {
  Shell,
  ConsoleContainer,
  Header,
  RunProgress,
  Grid,
  StatRow,
  ProgressBar,
  LiveTag,
  HeaderLabel,
} from './PerformanceMetrics.styles'
import { DialCornerScrews } from '../DialCornerScrews'
import { VINTAGE_THEME } from '@portfolio/design'
import { METRIC_ROWS } from '@/constants'
import { parseMetricValue, calculateHealth, formatAuditDate } from '@/utils'
import type { LighthouseMetrics } from '@/types'

interface PerformanceMetricsProps {
  metrics?: LighthouseMetrics
  isLoading?: boolean
  auditRunAt?: Date | null
  score?: number | null
}

const PerformanceMetrics = ({
  metrics = {},
  isLoading = false,
  auditRunAt = null,
  score = null,
}: PerformanceMetricsProps) => {
  const headerLabel = isLoading
    ? `${'>'} RUNNING_AUDIT...`
    : auditRunAt
      ? `LATEST AUDIT — ${formatAuditDate(auditRunAt)}`
      : 'LATEST AUDIT'

  return (
    <Shell>
      <ConsoleContainer>
        <DialCornerScrews />

        <Header>
          <HeaderLabel $isLoading={isLoading}>{headerLabel}</HeaderLabel>
          {!isLoading && <LiveTag>● LIVE_SYSTEM_READY</LiveTag>}
        </Header>
        {isLoading && <RunProgress aria-label="Lighthouse audit in progress" />}

        <Grid>
          <div>
            {METRIC_ROWS.map(({ label, key, unit }) => {
              const value = metrics?.[key]
              const display = value != null ? `${value}` : '—'

              const numericValue = parseMetricValue(value, unit as 'ms' | 's' | null)
              const healthScore = calculateHealth(label, numericValue)

              return (
                <StatRow key={label}>
                  <span>{label}</span>
                  <ProgressBar score={healthScore} />
                  <span>{display}</span>
                </StatRow>
              )
            })}
          </div>

          <div
            style={{
              borderLeft: `1px solid ${VINTAGE_THEME.ui.borderDivider}`,
              paddingLeft: '20px',
            }}
          >
            <div
              style={{
                fontSize: '0.6rem',
                color: VINTAGE_THEME.ink.primary,
                marginBottom: '10px',
              }}
            >
              OPTIMIZATION_LOG
            </div>
            <div
              style={{
                fontSize: '0.7rem',
                lineHeight: '1.4',
                color: VINTAGE_THEME.ink.primary,
              }}
            >
              [OK] React v18.3.0
              <br />
              [OK] Tree-shaking active
              <br />
              [OK] Gzip compression
              <br />
              <span>[!] Lighthouse: {score ?? '—'}/100</span>
            </div>
          </div>
        </Grid>
      </ConsoleContainer>
    </Shell>
  )
}

export default PerformanceMetrics
