import { statusGroups } from '@/constants'
import { GitHubIssueItem } from '@/types'

const validStatusKeys = ['in progress', 'to do', 'backlog', 'done']

export const getEffectiveStatusKey = (issue: GitHubIssueItem) => {
  const statusKey = issue.project_status?.toLowerCase() ?? ''
  if (validStatusKeys.includes(statusKey)) {
    return statusKey
  }
  return 'backlog'
}

export const getGroupedIssues = (issues: GitHubIssueItem[]) =>
  statusGroups
    .map(group => ({
      ...group,
      items: issues.filter(issue => getEffectiveStatusKey(issue) === group.key),
    }))
    .filter(group => group.items.length > 0)

const getStatusRank = (issue: GitHubIssueItem) => {
  const status = issue.project_status ?? ''
  return statusGroups.find(group => group.key === status.toLowerCase())?.priority ?? 99
}

const hasLabel = (issue: GitHubIssueItem, labelName: string) =>
  issue.labels?.some(
    (label: { name: string }) => label.name.toLowerCase() === labelName.toLowerCase()
  ) ?? false

export const getAllIssues = (issues: GitHubIssueItem[], sectionNames: string[], sections: any) =>
  sectionNames.map(sectionName => ({
    title: sections[sectionName].title,
    tag: sections[sectionName].tag,
    issues: issues
      .filter((issue: GitHubIssueItem) => hasLabel(issue, sections[sectionName].tag))
      .slice()
      .sort((a: GitHubIssueItem, b: GitHubIssueItem) => getStatusRank(a) - getStatusRank(b)),
  }))
