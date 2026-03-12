import styled from 'styled-components'
import { colors, motion, layout, typography } from '@portfolio/design'

export const TechIconsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  width: 100%;
  margin-top: 1.25rem;
`

export const TechIcon = styled.div`
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

export const TechTooltip = styled.span`
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

  ${TechIcon}:hover & {
    opacity: 1;
    visibility: visible;
  }
`

export const TechIconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.35rem;
`

export const TechIconText = styled.span`
  font-size: ${typography.fontSizeLg};
  font-weight: 700;
  color: ${colors.textLight};
  text-transform: uppercase;
`
