import axios from 'axios'

import { query } from './queries/githubProjectV2StatusQuery'
import { GitHubIssueItem } from '@/types'

const GITHUB_REPO = 'pperlock/portfolio-site'
const GITHUB_USER = 'pperlock'
const GITHUB_PROJECT_NUMBER = 1
const GITHUB_TOKEN = process.env.GITHUB_TOKEN
const GITHUB_V2_URL = 'https://api.github.com/graphql'

interface ProjectV2Response {
  data?: {
    user?: {
      projectV2?: {
        items?: {
          nodes?: Array<{
            content?: { number?: number }
            fieldValueByName?: { name?: string } | null
          }>
        }
      }
    }
  }
}

export const fetchGitHubIssues = async (): Promise<GitHubIssueItem[]> => {
  try {
    const headers = GITHUB_TOKEN ? { Authorization: `Bearer ${GITHUB_TOKEN}` } : undefined
    const { data } = await axios.get<GitHubIssueItem[]>(
      `https://api.github.com/repos/${GITHUB_REPO}/issues`,
      { params: { state: 'all', per_page: 100 }, headers }
    )
    return Array.isArray(data) ? data : []
  } catch (err) {
    console.error('GitHub issues fetch error:', err)
    return []
  }
}

/**
 * Fetch status for each issue from GitHub Project V2 (GraphQL).
 * Requires GITHUB_TOKEN with `project` scope. Returns a map of issue number -> status name.
 * Pulls status from the "Status" field in the GitHub Project V2 (In Progress, Review, Done, etc.).
 */
export const fetchProjectStatusByIssueNumber = async (): Promise<Map<number, string>> => {
  if (!GITHUB_TOKEN) return new Map()

  try {
    const { data } = await axios.post<ProjectV2Response>(
      GITHUB_V2_URL,
      { query, variables: { user: GITHUB_USER, projectNumber: GITHUB_PROJECT_NUMBER } },
      { headers: { Authorization: `Bearer ${GITHUB_TOKEN}` } }
    )

    const nodes = data?.data?.user?.projectV2?.items?.nodes ?? []
    const map = new Map<number, string>()
    for (const node of nodes) {
      const issueNumber = node.content?.number
      const status =
        node.fieldValueByName && 'name' in node.fieldValueByName ? node.fieldValueByName.name : null

      if (issueNumber != null && status) map.set(issueNumber, status)
    }
    return map
  } catch (err) {
    console.error('GitHub projectV2 error:', err)
    return new Map()
  }
}
