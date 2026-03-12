import styled from 'styled-components'
import { spacing, fromTablet, colors, typography } from '@portfolio/design'

/** Grid wrapper so each contribution appears in its own column */
export const ContributionsGrid = styled.div`
  display: grid;
  gap: 2.5rem;
  width: 100%;
  margin-bottom: ${spacing.xl};
  grid-template-columns: 1fr;

  ${fromTablet`
      gap: 3rem 3.5rem;
      grid-template-columns: repeat(2, 1fr);
  `}
`

export const ContributionItem = styled.div`
  padding-top: 0.25rem;
`

export const ContributionNumber = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  font-size: ${typography.fontSizeSm};
  font-weight: 700;
  color: ${colors.bg};
  background: ${colors.primary};
  border-radius: 50%;
  margin-right: 0.75rem;
  flex-shrink: 0;
  font-family: ${typography.fontFamily};
`

export const ContributionTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: ${typography.fontSizeXl};
  font-weight: 700;
  color: ${colors.textHeader};
  margin: 0 0 1rem;
  line-height: 1.3;
  letter-spacing: -0.01em;
  font-family: ${typography.fontFamilyHeading};
`

export const ContributionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 0 2.5rem;
  color: ${colors.textLight};
  line-height: 1.7;
`

export const ContributionListItem = styled.li`
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;

  &::before {
    content: '·';
    position: absolute;
    left: 0;
    font-weight: 700;
    color: ${colors.textHeader};
  }

  &:last-child {
    margin-bottom: 0;
  }
`
