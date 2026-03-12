import styled from 'styled-components'
import Link from 'next/link'
import { colors, spacing, motion, fromTablet } from '@portfolio/design'

/** Groups Back + View production, Next – kept on one line */
export const CaseStudyHeroLinks = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 100%;
  max-width: 100%;
  margin-top: ${spacing.md};
  margin-bottom: 0;
  flex-wrap: nowrap;
  white-space: nowrap;
  ${fromTablet`
    justify-content: flex-end;
    margin-top: 0.5rem;
  `}
`

export const CaseStudyBackLink = styled(Link)`
  display: inline-block;
  color: ${colors.textLight};
  text-decoration: none;
  margin: 0;
  transition: ${motion.transition};

  &:hover {
    color: ${colors.BrushStrokeOne};
    transform: translateX(-4px);
  }
`

export const CaseStudyNextLink = styled(Link)`
  display: inline-block;
  color: ${colors.textLight};
  text-decoration: none;
  margin: 0;
  transition: ${motion.transition};

  &:hover {
    color: ${colors.BrushStrokeTwo};
    transform: translateX(4px);
  }
`
