'use client'

import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'

import {
  LIGHTHOUSE_PAGES,
  LIGHTHOUSE_SKIP_IDLE_PREFETCH_IDS,
  LIGHTHOUSE_STALE_MS,
} from '@/constants'
import { fetchLighthouse, getLighthouseQueryKey } from '@/lib/lighthouse/fetchLighthouse'

const prefetchOptions = (pageId: string, url: string) => ({
  queryKey: getLighthouseQueryKey(pageId, url),
  queryFn: () => fetchLighthouse(url),
  staleTime: LIGHTHOUSE_STALE_MS,
})

/**
 * Prefetches home first (matches default Performance Lab selection), then lighter pages in idle time.
 * Heavy pages listed in {@link LIGHTHOUSE_SKIP_IDLE_PREFETCH_IDS} are omitted so we don’t fire many
 * long PageSpeed calls at once (avoids 502s and API contention while viewing Dev Corner).
 */
export function DevCornerLighthousePrefetcher() {
  const queryClient = useQueryClient()

  useEffect(() => {
    const home = LIGHTHOUSE_PAGES.find(p => p.id === 'home')
    if (home) {
      void queryClient.prefetchQuery(prefetchOptions(home.id, home.url))
    }

    const others = LIGHTHOUSE_PAGES.filter(
      p =>
        p.id !== 'home' &&
        !(LIGHTHOUSE_SKIP_IDLE_PREFETCH_IDS as readonly string[]).includes(p.id)
    )
    const prefetchRest = () => {
      for (const page of others) {
        void queryClient.prefetchQuery(prefetchOptions(page.id, page.url))
      }
    }

    if (typeof requestIdleCallback !== 'undefined') {
      const id = requestIdleCallback(prefetchRest, { timeout: 4000 })
      return () => cancelIdleCallback(id)
    }
    const t = setTimeout(prefetchRest, 300)
    return () => clearTimeout(t)
  }, [queryClient])

  return null
}
