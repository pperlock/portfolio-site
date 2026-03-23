import styled, { keyframes } from 'styled-components'
import { colors, fromDesktop, fromTablet, spacing } from '@portfolio/design'

/* GitHub Projects–style dark kanban theme */
const KANBAN_BG = '#0d1117'
const KANBAN_BORDER = '#30363d'
const KANBAN_CARD_BG = '#21262d'

const kanbanSkeletonShimmer = keyframes`
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
`

const skeletonGradient = `
  linear-gradient(
    90deg,
    #1a1f26 0%,
    #2d333b 42%,
    #1a1f26 100%
  )
`

export const KanbanBoardWrapper = styled.div`
  background: ${KANBAN_BG};
  border: 1px solid ${KANBAN_BORDER};
  border-radius: 12px;
  overflow: hidden;
  margin: ${spacing.xs} 0 ${spacing.lg};
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
  align-items: flex-start;
`

export const DevLinkWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`

export const DevLinkCaption = styled.span`
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${colors.textMedium};
  line-height: 1.2;
  user-select: none;
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
  display: none;

  ${fromDesktop`
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
  `}
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

export const KanbanStateMessage = styled.div`
  padding: 2rem 1.25rem;
  text-align: center;
  color: ${colors.textMuted};
  font-size: 0.9rem;
`

export const KanbanRetryButton = styled.button`
  margin-top: 0.75rem;
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  font-weight: 600;
  color: #e6edf3;
  background: #21262d;
  border: 1px solid #30363d;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #30363d;
  }
`

/** Placeholder “ticket” rows while GitHub issues load */
export const SkeletonTicketCard = styled.div`
  border-radius: 8px;
  border: 1px solid ${KANBAN_BORDER};
  background: ${KANBAN_CARD_BG};
  padding: 0.6rem 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`

export const SkeletonLine = styled.div<{ $width?: string }>`
  height: 0.65rem;
  border-radius: 4px;
  width: ${({ $width }) => $width ?? '100%'};
  background: ${skeletonGradient};
  background-size: 200% 100%;
  animation: ${kanbanSkeletonShimmer} 1.35s ease-in-out infinite;
`

export const SkeletonCountBadge = styled.div`
  width: 1.85rem;
  height: 1.15rem;
  border-radius: 20px;
  margin-left: auto;
  flex-shrink: 0;
  background: ${skeletonGradient};
  background-size: 200% 100%;
  animation: ${kanbanSkeletonShimmer} 1.35s ease-in-out infinite;
`
