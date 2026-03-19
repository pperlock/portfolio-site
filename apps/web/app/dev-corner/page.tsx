import React from 'react'
import DevCorner from '@/components/DevCorner'
import { devCornerContent } from '@/data/dev-corner-content'
import { fetchGitHubIssues, fetchProjectStatusByIssueNumber } from '@/lib/github'
import { GitHubIssueItem } from '@/types'

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
