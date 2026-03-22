'use client'
import { useState, useMemo } from 'react'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import { fetchLighthouse, getLighthouseQueryKey } from '@/lib/lighthouse/fetchLighthouse'
import {
  LIGHTHOUSE_PAGES,
  LIGHTHOUSE_STALE_MS,
  buildPageSpeedWebReportUrl,
  LIGHTHOUSE_STRATEGY,
} from '@/constants'
import type { ApiResponse, PageLighthouseState } from '@/types/Lighthouse'

interface UseLighthouseLabsOptions {
  initialSelectedPageId?: string
  initialPageState?: Record<string, PageLighthouseState>
}

const useLighthouseLabs = (options?: UseLighthouseLabsOptions) => {
  const queryClient = useQueryClient()
  const [selectedPageId, setSelectedPageId] = useState<string>(
    options?.initialSelectedPageId ?? 'home'
  )

  const selectedPage = useMemo(
    () => LIGHTHOUSE_PAGES.find(p => p.id === selectedPageId),
    [selectedPageId]
  )

  const {
    data: currentPageData,
    isLoading: currentPageLoading,
    isError: currentPageError,
    error: currentPageQueryError,
  } = useQuery({
    queryKey: selectedPage
      ? getLighthouseQueryKey(selectedPageId, selectedPage.url)
      : ['lighthouse', selectedPageId],
    queryFn: () => {
      const page = selectedPage
      if (!page) throw new Error('Lighthouse query ran without selectedPage')
      return fetchLighthouse(page.url)
    },
    enabled: Boolean(selectedPageId && selectedPage?.url),
    staleTime: LIGHTHOUSE_STALE_MS,
  })

  // Build pageLighthouseState: current page from query, others from cache
  const pageLighthouseState = useMemo(() => {
    const state: Record<string, PageLighthouseState> = { ...options?.initialPageState }

    for (const page of LIGHTHOUSE_PAGES) {
      if (page.id === selectedPageId && selectedPage) {
        if (currentPageLoading) {
          state[page.id] = {
            loading: true,
            scores: {},
            error: undefined,
          }
        } else if (currentPageError && axios.isAxiosError(currentPageQueryError)) {
          const resData = currentPageQueryError.response?.data as ApiResponse | undefined
          state[page.id] = {
            loading: false,
            scores: {},
            error: resData?.error ?? 'Could not run Lighthouse check.',
            pageSpeedUrl:
              resData?.pageSpeedUrl ?? buildPageSpeedWebReportUrl(page.url, LIGHTHOUSE_STRATEGY),
          }
        } else if (currentPageData) {
          state[page.id] = currentPageData
        }
      } else {
        const cached = queryClient.getQueryData<PageLighthouseState>(
          getLighthouseQueryKey(page.id, page.url)
        )
        if (cached) state[page.id] = cached
      }
    }
    return state
  }, [
    selectedPageId,
    selectedPage,
    currentPageData,
    currentPageLoading,
    currentPageError,
    currentPageQueryError,
    queryClient,
    options?.initialPageState,
  ])

  const runLighthouseCheck = (pageId: string, _url: string) => {
    setSelectedPageId(pageId)
  }

  return {
    LIGHTHOUSE_PAGES,
    pageLighthouseState,
    selectedPageId,
    setSelectedPageId,
    runLighthouseCheck,
  }
}

export default useLighthouseLabs
