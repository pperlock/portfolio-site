import axios from 'axios'
import type { ApiResponse, PageLighthouseState } from '@/types'

export const fetchLighthouse = async (url: string): Promise<PageLighthouseState> => {
  const { data } = await axios.get<ApiResponse>('/api/lighthouse', {
    params: { url, strategy: 'desktop' },
  })
  return {
    loading: false,
    scores: data.scores ?? {},
    metrics: data.metrics,
    pageSpeedUrl:
      data.pageSpeedUrl ?? `https://pagespeed.web.dev/analysis?url=${encodeURIComponent(url)}`,
    error: undefined,
  }
}

export const getLighthouseQueryKey = (pageId: string, url: string) => {
  return ['lighthouse', pageId, url] as const
}
