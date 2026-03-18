import React from 'react'
import {
  GitHubIssueList,
  GitHubIssue,
  IssueCardMeta,
  IssueTitle,
  IssueStatusPill,
  getStatusStyle,
  StatusSeparator,
  KanbanColumnHeader,
  KanbanColumnHeaderRow,
  KanbanColumnTitle,
  KanbanColumnCount,
  KanbanStatusDot,
  KanbanColumnContent,
  KanbanEmptyState,
} from './GithubIssueList.styles'

import { GitHubIssueItem } from '@/types'
import { getGroupedIssues } from '@/utils'

interface GithubIssueListProps {
  issues: GitHubIssueItem[]
  title: string
  subtitle?: string
  columnIndex?: number
}

const GithubIssueList = ({ issues, title, columnIndex = 0 }: GithubIssueListProps) => {
  const grouped = getGroupedIssues(issues)
  return (
    <>
      <KanbanColumnHeader $index={columnIndex}>
        <KanbanColumnHeaderRow>
          <KanbanStatusDot $index={columnIndex} aria-hidden />
          <KanbanColumnTitle $index={columnIndex}>{title}</KanbanColumnTitle>
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
    </>
  )
}

export default GithubIssueList
