import React from 'react'
import { FaGithub, FaProjectDiagram } from 'react-icons/fa'
import {
  KanbanBoardWrapper,
  RoadmapGrid,
  TitleAndLinksRow,
  DevLinksWrapper,
  DevLink,
  DevLinkInner,
  DevLinkFront,
  DevLinkBack,
  DevLinkIcon,
  DevTooltip,
  DevTooltipTitle,
  DevTooltipDescription,
  BodyWrap,
  DevTooltipSubtitle,
} from './RoadMap.styles'
import { Paragraph, LowerCaseTitle } from '@portfolio/design'
import { GitHubIssueItem } from '..'
import GithubIssueList from './GithubIssueList'

const RoadMap = ({ content, issues }) => {
  const { title, body, sections, devLinks } = content
  const sectionNames = ['mainApp', 'designSystem', 'cms', 'accessibility']

  // Sort helper: In Progress → To Do → Backlog → everything else
  const statusPriority: Record<string, number> = {
    'In Progress': 0,
    'In progress': 0,
    'To Do': 1,
    'To do': 1,
    Backlog: 2,
  }

  const getStatusRank = (issue: GitHubIssueItem) => {
    const status = issue.project_status ?? ''
    return statusPriority[status] ?? 99
  }

  const hasLabel = (issue: GitHubIssueItem, labelName: string) =>
    issue.labels?.some(
      (label: { name: string }) => label.name.toLowerCase() === labelName.toLowerCase()
    ) ?? false

  const allIssues = sectionNames.map(sectionName => ({
    title: sections[sectionName].title,
    tag: sections[sectionName].tag,
    issues: issues
      .filter((issue: GitHubIssueItem) => hasLabel(issue, sections[sectionName].tag))
      .slice()
      .sort((a: GitHubIssueItem, b: GitHubIssueItem) => getStatusRank(a) - getStatusRank(b)),
  }))

  return (
    <>
      <TitleAndLinksRow>
        <LowerCaseTitle tag="h2">{title}</LowerCaseTitle>
        <DevLinksWrapper>
          {devLinks.map(({ label, subtitle, href, description }) => {
            const Icon = label === 'GitHub' ? FaGithub : FaProjectDiagram
            return (
              <DevLink
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                <DevTooltip role="tooltip">
                  <DevTooltipTitle>{label}</DevTooltipTitle>
                  <DevTooltipSubtitle>{subtitle}</DevTooltipSubtitle>
                  <DevTooltipDescription>{description}</DevTooltipDescription>
                </DevTooltip>
                <DevLinkInner>
                  <DevLinkFront aria-hidden>
                    <DevLinkIcon>
                      <Icon />
                    </DevLinkIcon>
                  </DevLinkFront>
                  <DevLinkBack aria-hidden>
                    <DevLinkIcon>
                      <Icon />
                    </DevLinkIcon>
                  </DevLinkBack>
                </DevLinkInner>
              </DevLink>
            )
          })}
        </DevLinksWrapper>
      </TitleAndLinksRow>

      <BodyWrap>
        <Paragraph color="medium">{body}</Paragraph>
      </BodyWrap>

      <KanbanBoardWrapper>
        <RoadmapGrid>
          {allIssues.map((issue, index) => (
            <GithubIssueList
              key={issue.title}
              issues={issue.issues}
              title={issue.title}
              subtitle={issue.tag}
              columnIndex={index}
            />
          ))}
        </RoadmapGrid>
      </KanbanBoardWrapper>
    </>
  )
}

export default RoadMap
