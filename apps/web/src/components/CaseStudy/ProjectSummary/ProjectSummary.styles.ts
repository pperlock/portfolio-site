import styled from 'styled-components'
import { layout, spacing, fromTablet, typography, colors } from '@portfolio/design'

export const ProjectSummaryDescription = styled.p`
  font-size: ${typography.fontSizeLg};
  color: ${colors.textHeader};
  line-height: 1.8;
  margin-bottom: 1.5rem;
  margin-left: 0;

  &:last-child {
    margin-bottom: 0;
  }

  ${fromTablet`
    margin-left: 2rem;
  `}
`

/** Two-column grid: summary text (left) + project screenshot (right) */
export const ProjectSummaryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  align-items: start;

  ${fromTablet`
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  `}
`
/** Blocks inside the summary text column (Overview, Challenge, Impact, etc.) */
export const ProjectSummaryBlocks = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};

  ${fromTablet`
    gap: 2.5rem;
  `}
`

/** Sticky so image starts sticking just before hero bottom, keeping image fully in view */
export const ProjectSummaryMedia = styled.div`
  position: static;
  top: calc(70px + 260px);
  order: -1;

  ${fromTablet`
    position: sticky;
    top: calc(70px + 300px);
    order: 1;
  `}
`

export const ProjectSummaryImageBlock = styled.div`
  width: 100%;
  border-radius: ${layout.radiusSm};
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
  background-color: ${colors.bg};
`

export const ProjectSummaryScreenshot = styled.img`
  width: 100%;
  height: auto;
  display: block;
`
