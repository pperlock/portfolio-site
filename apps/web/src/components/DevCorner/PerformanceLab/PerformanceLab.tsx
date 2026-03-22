import React from 'react'
import { VscLinkExternal } from 'react-icons/vsc'
import type { PageLighthouseState } from '@/types'
import { LIGHTHOUSE_PAGES, hasLighthouseReportReady } from '@/constants'

import { PerformanceSection, LighthouseMetricsColumn, ReportLink } from './PerformanceLab.styles'
import LighthouseTuner from './LightHouseTuner/LighthouseTuner'
import LighthouseScores from './LighthouseScores/LighthouseScores'
import usePerformanceLab from './hooks/usePerformanceLab'

import PagePreview from './PagePreview'
import PerformanceMetrics from './PerformanceMetrics'
import { devCornerContent } from '@/data/dev-corner-content'

interface PerformanceLabProps {
  initialSelectedPageId?: string
  initialPageState?: Record<string, PageLighthouseState>
  content: typeof devCornerContent.performanceLab
}

const PerformanceLab: React.FC<PerformanceLabProps> = ({
  initialSelectedPageId,
  initialPageState,
  content,
}) => {
  const { selectedPageId, currentPageData, isRunning, auditRunAt, handlePageSelect } =
    usePerformanceLab({
      initialSelectedPageId,
      initialPageState,
    })

  const lighthouseReportUrl =
    currentPageData && hasLighthouseReportReady(currentPageData)
      ? currentPageData.pageSpeedUrl
      : undefined

  return (
    <PerformanceSection>
      <PagePreview
        page={selectedPageId ? LIGHTHOUSE_PAGES.find(p => p.id === selectedPageId)?.url : undefined}
      />
      <LighthouseMetricsColumn>
        <LighthouseTuner selectedPageId={selectedPageId ?? undefined} onChange={handlePageSelect} />
        <LighthouseScores scores={currentPageData?.scores} loading={currentPageData?.loading} />

        <PerformanceMetrics
          metrics={currentPageData?.metrics}
          isLoading={isRunning}
          auditRunAt={auditRunAt}
          score={currentPageData?.scores.performance}
        />

        {lighthouseReportUrl ? (
          <ReportLink href={lighthouseReportUrl} target="_blank" rel="noopener noreferrer">
            {content.reportLinkText}
            <VscLinkExternal />
          </ReportLink>
        ) : null}
      </LighthouseMetricsColumn>
    </PerformanceSection>
  )
}

export default PerformanceLab
