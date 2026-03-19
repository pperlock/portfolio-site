'use client'

import { useEffect } from 'react'
import { useQueryClient } from '@tanstack/react-query'
import { fetchLighthouse, getLighthouseQueryKey } from '@/lib/lighthouse/fetchLighthouse'
import { LIGHTHOUSE_PAGES, LIGHTHOUSE_STALE_MS } from '@/constants'

/**
 * Prefetches all Lighthouse results as soon as the app loads (any page).
 * Renders nothing. Mounted inside QueryProvider in the root layout so it runs
 * once per visit; client-side navigation does not remount the layout, so
 * prefetch runs only on first load. Dev-corner then reads from cache.
 */
export function LighthousePrefetcher() {
  const queryClient = useQueryClient()

  useEffect(() => {
    for (const page of LIGHTHOUSE_PAGES) {
      queryClient.prefetchQuery({
        queryKey: getLighthouseQueryKey(page.id, page.url),
        queryFn: () => fetchLighthouse(page.url),
        staleTime: LIGHTHOUSE_STALE_MS,
      })
    }
  }, [queryClient])

  return null
}

export default LighthousePrefetcher
