import axios from 'axios'

import type { GitHubIssueItem } from '@/types'

export const devCornerGithubIssuesQueryKey = ['dev-corner', 'github-issues'] as const

export const DEV_CORNER_GITHUB_ISSUES_STALE_MS = 5 * 60 * 1000

export async function fetchDevCornerIssues(): Promise<GitHubIssueItem[]> {
  const { data } = await axios.get<{ issues?: GitHubIssueItem[] }>('/api/github/issues')
  return Array.isArray(data.issues) ? data.issues : []
}
