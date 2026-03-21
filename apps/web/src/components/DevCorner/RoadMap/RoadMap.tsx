'use client'

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
  KanbanStateMessage,
  KanbanRetryButton,
} from './RoadMap.styles'
import { Paragraph, LowerCaseTitle } from '@portfolio/design'
import GithubIssueList from './GithubIssueList'
import RoadmapKanbanSkeleton from './RoadmapKanbanSkeleton'
import { getAllIssues } from '@/utils'
import type { DevCornerContent } from '@/data/dev-corner-content'
import { useDevCornerIssues } from '@/hooks/useDevCornerIssues'

type EngineeringRoadmapContent = DevCornerContent['engineeringRoadmap']

interface RoadMapProps {
  content: EngineeringRoadmapContent
}

const SECTION_NAMES = ['mainApp', 'designSystem', 'cms', 'accessibility'] as const

const RoadMap = ({ content }: RoadMapProps) => {
  const { title, body, sections, devLinks } = content
  const { data: issues = [], isPending, isError, refetch } = useDevCornerIssues()

  const allIssues = getAllIssues(issues, [...SECTION_NAMES], sections)
  const skeletonColumnTitles = SECTION_NAMES.map(key => sections[key].title)

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
        {isPending ? (
          <RoadmapKanbanSkeleton columnTitles={skeletonColumnTitles} />
        ) : isError ? (
          <KanbanStateMessage role="alert">
            Couldn&apos;t load GitHub issues.
            <div>
              <KanbanRetryButton type="button" onClick={() => refetch()}>
                Try again
              </KanbanRetryButton>
            </div>
          </KanbanStateMessage>
        ) : (
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
        )}
      </KanbanBoardWrapper>
    </>
  )
}

export default RoadMap
