import styled from 'styled-components'
import { colors, shadow } from '@portfolio/design'
import { CaseStudyHeroLinks } from '../CaseStudyNavigation/CaseStudyNavigation.styles'

/** Fixed to the bottom of the header (70px); only visible when hero has scrolled to that position */
export const Bar = styled.div<{ $visible?: boolean }>`
  position: sticky;
  top: 103px;
  left: 0;
  right: 0;
  z-index: 99;
  width: 100%;
  height: ${({ $visible }) => ($visible ? '50px' : '0')};
  background-color: ${colors.bg};
  border-bottom: 1px solid ${colors.border};
  box-shadow: ${shadow.md};
  transition: height 0.2s ease;
  overflow: hidden;
`

export const BarNavigationWrapper = styled.div`
  ${CaseStudyHeroLinks} {
    justify-content: center;
    height: 50px;
    margin: 0;
  }
`
