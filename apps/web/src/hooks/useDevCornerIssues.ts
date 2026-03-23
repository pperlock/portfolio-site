'use client'

import { useQuery } from '@tanstack/react-query'

import {
  DEV_CORNER_GITHUB_ISSUES_STALE_MS,
  devCornerGithubIssuesQueryKey,
  fetchDevCornerIssues,
} from '@/lib/github/fetchDevCornerIssues'

export function useDevCornerIssues() {
  return useQuery({
    queryKey: devCornerGithubIssuesQueryKey,
    queryFn: fetchDevCornerIssues,
    staleTime: DEV_CORNER_GITHUB_ISSUES_STALE_MS,
  })
}
