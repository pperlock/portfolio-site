import { useEffect, useRef, useState } from 'react'
import type { PageLighthouseState } from '@/types'
import { LIGHTHOUSE_PAGES } from '@/constants'
import useLighthouseLabs from './useLighthouseLabs'

interface UsePerformanceLabArgs {
  initialSelectedPageId?: string
  initialPageState?: Record<string, PageLighthouseState>
}

interface UsePerformanceLabResult {
  selectedPageId?: string
  currentPageData?: PageLighthouseState
  isRunning: boolean
  auditRunAt: Date | null
  handlePageSelect: (nextId: string) => void
}

const usePerformanceLab = ({
  initialSelectedPageId,
  initialPageState,
}: UsePerformanceLabArgs): UsePerformanceLabResult => {
  const [auditRunAt, setAuditRunAt] = useState<Date | null>(null)
  const prevLoadingRef = useRef<boolean | null>(null)

  const { selectedPageId, pageLighthouseState, setSelectedPageId, runLighthouseCheck } =
    useLighthouseLabs({
      initialSelectedPageId,
      initialPageState,
    })

  const currentPageData = selectedPageId ? pageLighthouseState[selectedPageId] : undefined

  const isRunning =
    selectedPageId && pageLighthouseState[selectedPageId]
      ? Boolean(pageLighthouseState[selectedPageId]?.loading)
      : false

  useEffect(() => {
    const loading = Boolean(currentPageData?.loading)
    const hasResults = currentPageData?.metrics != null
    if (hasResults && prevLoadingRef.current === true && !loading) {
      setAuditRunAt(new Date())
    }
    if (!hasResults) setAuditRunAt(null)
    prevLoadingRef.current = loading
  }, [currentPageData])

  const handlePageSelect = (nextId: string) => {
    setSelectedPageId(nextId)
    const page = LIGHTHOUSE_PAGES.find(p => p.id === nextId)
    if (page) {
      void runLighthouseCheck(page.id, page.url)
    }
  }

  return {
    selectedPageId,
    currentPageData,
    isRunning,
    auditRunAt,
    handlePageSelect,
  }
}

export default usePerformanceLab
