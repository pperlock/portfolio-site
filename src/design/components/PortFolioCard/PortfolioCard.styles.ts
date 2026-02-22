import styled from 'styled-components'
import { colors, layout, motion, shadow, typography, fromTablet } from '@/design'
import Link from 'next/link'

export const WorkItem = styled.article`
  background-color: ${colors.bg};
  border: 1px solid ${colors.border};
  border-radius: ${layout.radiusMd};
  overflow: hidden;
  transition: ${motion.transition};
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${shadow.lg};
  }
`

const linkStyles = `
  display: block;
  text-decoration: none;
  color: inherit;
  width: 100%;
  height: 100%;
`

export const WorkItemLink = styled(Link)`
  ${linkStyles}
`

export const WorkImageWrapper = styled.div`
  position: relative;
`

export const WorkImage = styled.div`
  width: 100%;
  height: 250px;
  background: ${colors.bgMuted};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`

export const WorkScreenshot = styled.img`
  width: 100%;
  display: block;
`

export const WorkPlaceholder = styled.div`
  color: ${colors.bg};
  font-size: ${typography.fontSizeXl};
  font-weight: 500;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const WorkContent = styled.div`
  padding: 1rem;
  ${fromTablet`
    padding: 2.5rem;
  `}
`

export const WorkTitle = styled.h3`
  font-size: 1.375rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.5rem;
  text-transform: none;
  line-height: 1.2;
  letter-spacing: -0.01em;
`

export const WorkDescription = styled.p`
  color: ${colors.textLight};
  margin-bottom: 0.75rem;
`

export const WorkCategory = styled.span`
  display: inline-block;
  font-size: ${typography.fontSizeSm};
  color: ${colors.textLight};
  text-transform: none;
  background-color: ${colors.bgMuted};
  padding: 0.5rem 1rem;
  border-radius: ${layout.radiusPill};
  margin-top: 1rem;
  margin-left: 1rem;
  font-weight: 500;
  ${fromTablet`
    margin-left: 2rem;
  `}
`
