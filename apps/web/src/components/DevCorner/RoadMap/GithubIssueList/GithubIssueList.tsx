import React from 'react'
import {
  GitHubIssueList,
  GitHubIssue,
  IssueCardMeta,
  IssueTitle,
  IssueStatusPill,
  getStatusStyle,
  StatusSeparator,
} from './GithubIssueList.styles'
import { GitHubIssueItem } from '../..'
import {
  RoadmapColumn,
  KanbanColumnHeader,
  KanbanColumnHeaderRow,
  KanbanColumnTitle,
  KanbanColumnCount,
  KanbanStatusDot,
  KanbanColumnContent,
  KanbanEmptyState,
} from '../RoadMap.styles'

interface GithubIssueListProps {
  issues: GitHubIssueItem[]
  title: string
  subtitle?: string
  columnIndex?: number
}

const GithubIssueList = ({ issues, title, columnIndex = 0 }: GithubIssueListProps) => {
  const normalizeStatus = (status?: string) => (status ?? '').toLowerCase()

  const statusGroups = [
    { key: 'in progress', label: 'In Progress' },
    { key: 'to do', label: 'To Do' },
    { key: 'backlog', label: 'Backlog' },
    { key: 'done', label: 'Done' },
  ]

  const grouped = statusGroups
    .map(group => ({
      ...group,
      items: issues.filter(issue => normalizeStatus(issue.project_status) === group.key),
    }))
    .filter(group => group.items.length > 0)

  return (
    <RoadmapColumn $index={columnIndex}>
      <KanbanColumnHeader $index={columnIndex}>
        <KanbanColumnHeaderRow>
          <KanbanStatusDot $index={columnIndex} aria-hidden />
          <KanbanColumnTitle>{title}</KanbanColumnTitle>
          <KanbanColumnCount>{issues.length}</KanbanColumnCount>
        </KanbanColumnHeaderRow>
      </KanbanColumnHeader>
      <KanbanColumnContent>
        {issues.length > 0 ? (
          <GitHubIssueList>
            {grouped.map(group => (
              <React.Fragment key={group.key}>
                <StatusSeparator>
                  <span>{group.label}</span>
                </StatusSeparator>
                {group.items.map(issue => (
                  <GitHubIssue key={issue.id}>
                    <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
                      <IssueCardMeta>
                        {issue.project_status && (
                          <IssueStatusPill
                            $bg={getStatusStyle(issue.project_status).bg}
                            $color={getStatusStyle(issue.project_status).color}
                          >
                            {issue.project_status}
                          </IssueStatusPill>
                        )}
                      </IssueCardMeta>
                      <IssueTitle>{issue.title}</IssueTitle>
                    </a>
                  </GitHubIssue>
                ))}
              </React.Fragment>
            ))}
          </GitHubIssueList>
        ) : (
          <KanbanEmptyState>No issues</KanbanEmptyState>
        )}
      </KanbanColumnContent>
    </RoadmapColumn>
  )
}

export default GithubIssueList
