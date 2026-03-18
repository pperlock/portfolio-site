import styled from 'styled-components'
import { fromTablet, colors } from '@portfolio/design'

/* GitHub Projects–style dark kanban theme */
const KANBAN_BG = '#0d1117'
const KANBAN_BORDER = '#30363d'
const KANBAN_CARD_BG = '#21262d'
const KANBAN_TEXT = '#e6edf3'
const KANBAN_TEXT_MUTED = '#8b949e'
const KANBAN_HEADER_BG = '#161b22'

const KANBAN_STATUS_COLORS = [
  '#3fb950' /* green - To Do */,
  '#d29922' /* orange - In progress */,
  '#58a6ff' /* blue - Tech Review */,
  '#a371f7' /* purple - Ready */,
]

export const KanbanBoardWrapper = styled.div`
  background: ${KANBAN_BG};
  border: 1px solid ${KANBAN_BORDER};
  border-radius: 12px;
  overflow: hidden;
  margin-top: 0.5rem;
`

export const RoadmapGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 160px;

  ${fromTablet`
    grid-template-columns: repeat(4, minmax(0, 1fr));
  `}
`

export const RoadmapColumn = styled.div<{ $index?: number }>`
  display: flex;
  flex-direction: column;
  min-height: 120px;
  border-right: 1px solid ${KANBAN_BORDER};
  background: transparent;

  &:last-child {
    border-right: none;
  }

  ${fromTablet`
    min-height: 220px;
  `}
`

export const KanbanColumnHeader = styled.div<{ $index?: number }>`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding: 0.75rem 1rem;
  background: ${KANBAN_HEADER_BG};
  border-bottom: 1px solid ${KANBAN_BORDER};
  flex-shrink: 0;
`

export const KanbanColumnHeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const KanbanStatusDot = styled.span<{ $index?: number }>`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid
    ${({ $index = 0 }) => KANBAN_STATUS_COLORS[$index % KANBAN_STATUS_COLORS.length]};
  flex-shrink: 0;
`

export const KanbanColumnTitle = styled.span`
  color: ${KANBAN_TEXT};
  font-size: 0.875rem;
  font-weight: 600;
`

export const KanbanColumnCount = styled.span`
  color: ${KANBAN_TEXT_MUTED};
  font-size: 0.8125rem;
  font-weight: 500;
  background: rgba(110, 118, 129, 0.4);
  padding: 0.125rem 0.5rem;
  border-radius: 20px;
  margin-left: auto;
`

export const KanbanColumnSubtitle = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: ${KANBAN_TEXT_MUTED};
  font-weight: 400;
  padding-left: 1.25rem;
`

export const KanbanColumnContent = styled.div`
  flex: 1;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-height: 0;
`

export const KanbanEmptyState = styled.p`
  margin: 0;
  font-size: 0.8125rem;
  color: ${KANBAN_TEXT_MUTED};
  font-style: italic;
  padding: 0.5rem 0;
`

export const TitleAndLinksRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.75rem;
  margin-bottom: 1rem;

  ${fromTablet`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
  `}
`

export const DevLinksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.85rem;
  align-items: center;
`

export const BodyWrap = styled.div`
  margin-bottom: 2rem;
`

const CARD_SIZE_MOBILE = '3rem'
const CARD_SIZE_TABLET = '3.75rem'

export const DevLinkInner = styled.span`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.5s ease;
`

const CardFace = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const DevLinkFront = styled(CardFace)`
  background: #0f172a;
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: #e5e7eb;
`

export const DevLinkBack = styled(CardFace)`
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: inherit;
  transform: rotateY(180deg);
`

export const DevLinkIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.25rem;

  ${fromTablet`
    font-size: 2.75rem;
  `}

  svg {
    width: 1em;
    height: 1em;
  }
`

export const DevTooltip = styled.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%) translateY(6px) scale(0.94);
  margin-bottom: 0.5rem;
  padding: 0.65rem 0.9rem;
  min-width: 200px;
  max-width: 280px;
  background: #0f172a;
  color: #e5e7eb;
  font-size: 0.8rem;
  line-height: 1.4;
  border-radius: 10px;
  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.25);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  text-align: left;
  transition:
    opacity 0.22s ease,
    visibility 0.22s ease,
    transform 0.28s cubic-bezier(0.34, 1.2, 0.64, 1);

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -6px;
    border: 6px solid transparent;
    border-top-color: #0f172a;
  }
`

export const DevLink = styled.a`
  position: relative;
  display: block;
  width: ${CARD_SIZE_MOBILE};
  height: ${CARD_SIZE_MOBILE};
  color: inherit;
  text-decoration: none;
  border-radius: 10px;
  perspective: 400px;

  ${fromTablet`
    width: ${CARD_SIZE_TABLET};
    height: ${CARD_SIZE_TABLET};
  `}

  &:hover ${DevLinkInner},
  &:focus-visible ${DevLinkInner} {
    transform: rotateY(180deg);
  }

  &:hover ${DevTooltip}, &:focus-visible ${DevTooltip} {
    opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0) scale(1);
  }

  &:focus-visible {
    outline: 2px solid #0f172a;
    outline-offset: 2px;
  }
`

export const DevTooltipTitle = styled.strong`
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  justify-content: center;
  text-align: center;
  text-transform: uppercase;
`

export const DevTooltipSubtitle = styled.span`
  display: block;
  font-size: 0.78rem;
  opacity: 0.95;
  line-height: 1.45;
  text-align: center;
  font-weight: bold;
  color: white;
  margin: 0.25rem 0;
`

export const DevTooltipDescription = styled.span`
  display: block;
  font-size: 0.78rem;
  opacity: 0.95;
  line-height: 1.45;
  text-align: center;
`
