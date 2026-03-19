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
  RoadmapColumn,
} from './RoadMap.styles'
import { Paragraph, LowerCaseTitle } from '@portfolio/design'
import GithubIssueList from './GithubIssueList'
import { getAllIssues } from '@/utils'

const RoadMap = ({ content, issues }) => {
  const { title, body, sections, devLinks } = content

  const sectionNames = ['mainApp', 'designSystem', 'cms', 'accessibility']
  const allIssues = getAllIssues(issues, sectionNames, sections)

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
            <RoadmapColumn key={issue.title} $index={index}>
              <GithubIssueList
                key={issue.title}
                issues={issue.issues}
                title={issue.title}
                subtitle={issue.tag}
                columnIndex={index}
              />
            </RoadmapColumn>
          ))}
        </RoadmapGrid>
      </KanbanBoardWrapper>
    </>
  )
}

export default RoadMap
