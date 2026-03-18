import React from 'react'
import axios from 'axios'
import DevCorner, { type GitHubIssueItem } from '@/components/DevCorner'
import { devCornerContent } from '@/data/dev-corner-content'

const GITHUB_REPO = 'pperlock/portfolio-site'
const GITHUB_USER = 'pperlock'
const GITHUB_PROJECT_NUMBER = 1

const fetchGitHubIssues = async (): Promise<GitHubIssueItem[]> => {
  try {
    const { data } = await axios.get<GitHubIssueItem[]>(
      `https://api.github.com/repos/${GITHUB_REPO}/issues`,
      { params: { state: 'all', per_page: 100 } }
    )
    return Array.isArray(data) ? data : []
  } catch {
    return []
  }
}

/**
 * Fetch status for each issue from GitHub Project V2 (GraphQL).
 * Requires GITHUB_TOKEN with `project` scope. Returns a map of issue number -> status name.
 */
async function fetchProjectStatusByIssueNumber(): Promise<Map<number, string>> {
  const token = process.env.GITHUB_TOKEN
  if (!token) return new Map()

  const query = `
    query($user: String!, $projectNumber: Int!) {
      user(login: $user) {
        projectV2(number: $projectNumber) {
          items(first: 100) {
            nodes {
              content {
                ... on Issue {
                  number
                }
              }
              fieldValueByName(name: "Status") {
                ... on ProjectV2ItemFieldSingleSelectValue {
                  name
                }
              }
            }
          }
        }
      }
    }
  `

  try {
    const { data } = await axios.post<{
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
    }>(
      'https://api.github.com/graphql',
      { query, variables: { user: GITHUB_USER, projectNumber: GITHUB_PROJECT_NUMBER } },
      { headers: { Authorization: `Bearer ${token}` } }
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

export default async function DevCornerPage() {
  const [issues, statusByNumber] = await Promise.all([
    fetchGitHubIssues(),
    fetchProjectStatusByIssueNumber(),
  ])

  const issuesWithStatus: GitHubIssueItem[] = issues.map(issue => {
    const projectStatus = statusByNumber.get(issue.number ?? issue.id)
    return projectStatus ? { ...issue, project_status: projectStatus } : issue
  })

  return <DevCorner issues={issuesWithStatus} content={devCornerContent} />
}
