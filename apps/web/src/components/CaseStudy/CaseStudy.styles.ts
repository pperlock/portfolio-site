import styled from 'styled-components'

import { colors, spacing, motion, layout, shadow, typography, fromTablet } from '@portfolio/design'

export const CaseStudyHeroWrapper = styled.div`
  top: 70px;
  z-index: 100;
  margin-top: 6rem;
  min-height: 280px;
  padding: ${spacing.lg} 0;
  background-color: ${colors.bg};
  border-bottom: 1px solid ${colors.border};
  box-shadow: ${shadow.md};
  transform: translateZ(0);
  backface-visibility: hidden;

  ${fromTablet`
    min-height: 320px;
  `}
`

/** Hero content container (title row, badges, meta) */
export const CaseStudyHeroContainer = styled.div`
  max-width: ${layout.containerMax};
  margin: 0 auto;
  padding: 0 1rem;
  ${fromTablet`
    padding: 0;
  `}
`

export const CaseStudyBadge = styled.span`
  display: inline-block;
  font-size: ${typography.fontSizeSm};
  color: ${colors.textLight};
  background-color: ${colors.bgMuted};
  padding: 0.5rem 1rem;
  border-radius: ${layout.radiusPill};
  margin-bottom: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  width: fit-content;
`

export const BadgeGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`

/** Badge on top, then title – column layout */
export const TitleRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 1rem;
`

export const ProjectTitle = styled.h1`
  font-family: ${typography.fontFamilyHeading};
  font-weight: 700;
  font-size: ${typography.fontSize2xl};
  margin: 0;
  letter-spacing: -0.02em;
  line-height: 1.1;

  ${fromTablet`
    font-size: ${typography.fontSize4xl};
  `}
`

export const TitleBadge = styled.span`
  display: inline-block;
  font-size: ${typography.fontSizeSm};
  color: ${colors.textLight};
  background-color: ${colors.bgMuted};
  padding: 0.25rem 0.5rem;
  border-radius: ${layout.radiusSm};
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
  flex-shrink: 0;
`

export const CaseStudySection = styled.div`
  margin-bottom: 5rem;

  &:last-child {
    margin-bottom: 0;
  }
`

/** Hero row of skill icons (same pattern as homepage Skills) */
export const CaseStudyTechIconsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1.25rem;
`

/** Row under title: tech icons (3/4) + hero links (1/4) */
export const CaseStudyHeroMetaRow = styled.div`
  ${fromTablet`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    & > *:first-child {
      flex: 2;
      min-width: 0;
    }
    & > *:last-child {
      flex: 1;
      flex-shrink: 0;
      min-width: min-content;
    }
  `}
`

export const CaseStudyTechIcon = styled.div`
  position: relative;
  width: 44px;
  height: 44px;
  border-radius: ${layout.radiusSm};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ${motion.transition};
  background-color: ${colors.bgMuted};
  border: 1px solid ${colors.border};
  flex-shrink: 0;

  &:hover {
    background-color: ${colors.bgMuted};
    border-color: ${colors.textLight};
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
`

export const CaseStudyTechTooltip = styled.span`
  position: absolute;
  bottom: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%);
  padding: 0.35rem 0.6rem;
  font-size: ${typography.fontSizeSm};
  font-weight: 500;
  background-color: ${colors.textHeader};
  color: ${colors.bg};
  border-radius: ${layout.radiusSm};
  white-space: nowrap;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.15s ease,
    visibility 0.15s ease;
  pointer-events: none;
  z-index: 1;

  ${CaseStudyTechIcon}:hover & {
    opacity: 1;
    visibility: visible;
  }
`

export const CaseStudyTechIconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.35rem;
`
