import React from 'react'

import {
  RoadmapGrid,
  RoadmapColumn,
  SkeletonTicketCard,
  SkeletonLine,
  SkeletonCountBadge,
} from './RoadMap.styles'
import {
  KanbanColumnHeader,
  KanbanColumnHeaderRow,
  KanbanStatusDot,
  KanbanColumnTitle,
  KanbanColumnContent,
} from './GithubIssueList/GithubIssueList.styles'

const DEFAULT_TICKETS_PER_COLUMN = 3

const TICKET_LINE_WIDTHS = ['92%', '78%', '88%'] as const

interface RoadmapKanbanSkeletonProps {
  columnTitles: string[]
  ticketsPerColumn?: number
}

/**
 * Kanban-shaped placeholder so the roadmap area does not look empty while issues load.
 */
const RoadmapKanbanSkeleton = ({
  columnTitles,
  ticketsPerColumn = DEFAULT_TICKETS_PER_COLUMN,
}: RoadmapKanbanSkeletonProps) => (
  <RoadmapGrid
    role="status"
    aria-live="polite"
    aria-busy="true"
    aria-label="Loading roadmap columns"
  >
    {columnTitles.map((title, index) => (
      <RoadmapColumn key={title} $index={index}>
        <KanbanColumnHeader $index={index}>
          <KanbanColumnHeaderRow>
            <KanbanStatusDot $index={index} aria-hidden />
            <KanbanColumnTitle $index={index}>{title}</KanbanColumnTitle>
            <SkeletonCountBadge aria-hidden />
          </KanbanColumnHeaderRow>
        </KanbanColumnHeader>
        <KanbanColumnContent>
          {Array.from({ length: ticketsPerColumn }, (_, ticketIndex) => (
            <SkeletonTicketCard key={ticketIndex}>
              <SkeletonLine $width="38%" />
              <SkeletonLine $width={TICKET_LINE_WIDTHS[ticketIndex % TICKET_LINE_WIDTHS.length]} />
            </SkeletonTicketCard>
          ))}
        </KanbanColumnContent>
      </RoadmapColumn>
    ))}
  </RoadmapGrid>
)

export default RoadmapKanbanSkeleton
