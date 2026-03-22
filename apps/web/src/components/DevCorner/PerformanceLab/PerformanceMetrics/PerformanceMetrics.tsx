import React from 'react'
import {
  Shell,
  ConsoleContainer,
  Header,
  Screw,
  RunProgress,
  Grid,
  StatRow,
  ProgressBar,
  LiveTag,
  HeaderLabel,
} from './PerformanceMetrics.styles'
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
        {/* Subtle Daphne-blue screws in the panel corners */}
        <Screw $x="left" $y="top" aria-hidden />
        <Screw $x="right" $y="top" aria-hidden />
        <Screw $x="left" $y="bottom" aria-hidden />
        <Screw $x="right" $y="bottom" aria-hidden />

        <Header>
          <HeaderLabel isLoading={isLoading}>{headerLabel}</HeaderLabel>
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

          <div style={{ borderLeft: '1px solid #30363d', paddingLeft: '20px' }}>
            <div style={{ fontSize: '0.6rem', color: '#2f241a', marginBottom: '10px' }}>
              OPTIMIZATION_LOG
            </div>
            <div style={{ fontSize: '0.7rem', lineHeight: '1.4', color: '#2f241a' }}>
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
