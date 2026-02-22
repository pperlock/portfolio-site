import styled from 'styled-components'
import { colors, motion, fromTablet, fromDesktop, layout } from '@/design'

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: ${colors.primary};
  z-index: 1000;
  padding: 1.5rem 0;
  min-height: 70px;
  color: ${colors.bg};
`

export const NavWrapper = styled.div`
  max-width: ${layout.containerMax};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  /* Mobile: Logo and toggle on first row, nav (when open) on second row */
  & > *:nth-child(2) {
    order: 3;
  }
  & > *:nth-child(3) {
    order: 2;
  }
  ${fromTablet`
    padding: 0 2rem;
    flex-wrap: nowrap;
    & > *:nth-child(2),
    & > *:nth-child(3) {
      order: unset;
    }
    ${fromDesktop`
      padding: 0;
    `}
  `}
`

export const MobileMenuToggle = styled.button`
  display: flex;
  flex-direction: column;
  gap: 4px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  margin-left: auto;

  ${fromTablet`
    display: none;
    margin-left: 0;
  `}
`

export const MobileMenuToggleBar = styled.span`
  width: 24px;
  height: 2px;
  background-color: ${colors.bg};
  transition: ${motion.transition};
`
