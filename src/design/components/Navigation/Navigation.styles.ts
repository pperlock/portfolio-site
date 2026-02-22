import Link from 'next/link'
import styled from 'styled-components'
import { motion, colors, fromTablet } from '@/design'

const linkColor = ({ $variant, $isActive, $activeBrushColor }) =>
  $variant === 'header' && $isActive && $activeBrushColor
    ? colors[$activeBrushColor]
    : $variant === 'footer'
      ? colors.text
      : colors.bg

const navTabletStyles = props => `
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-wrap: wrap;
  list-style: none;
  max-height: none;
  overflow: visible;
  opacity: 1;
  gap: 2.5rem;
  margin: 0;
  padding: 0;
  color: ${linkColor(props)};
  & > * {
    opacity: 1;
    transform: none;
    transition-delay: 0;
  }
`

export const Nav = styled.nav<{ $variant?: string; $isMobileMenuOpen?: boolean }>`
  ${({ $variant, $isMobileMenuOpen }) =>
    $variant === 'header' &&
    `
      @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex-basis: 100%;
        width: 100%;
        order: 3;
        gap: 1rem;
        padding-top: ${$isMobileMenuOpen ? '0.5rem' : '0'};
        overflow: hidden;
        max-height: ${$isMobileMenuOpen ? '50vh' : '0'};
        opacity: ${$isMobileMenuOpen ? '1' : '0'};
        transition: max-height 0.65s cubic-bezier(0.4, 0, 0.2, 1),
                    opacity 0.5s ease,
                    padding-top 0.5s ease;

        & > * {
          opacity: ${$isMobileMenuOpen ? '1' : '0'};
          transition: opacity 0.4s ease;
        }
        & > *:nth-child(1) { transition-delay: ${$isMobileMenuOpen ? '0.08s' : '0'}; }
        & > *:nth-child(2) { transition-delay: ${$isMobileMenuOpen ? '0.16s' : '0'}; }
        & > *:nth-child(3) { transition-delay: ${$isMobileMenuOpen ? '0.24s' : '0'}; }
        & > *:nth-child(4) { transition-delay: ${$isMobileMenuOpen ? '0.32s' : '0'}; }
        & > *:nth-child(5) { transition-delay: ${$isMobileMenuOpen ? '0.4s' : '0'}; }
        & > *:nth-child(6) { transition-delay: ${$isMobileMenuOpen ? '0.48s' : '0'}; }
      }
    `}

  ${props => fromTablet`${navTabletStyles(props)}`}

  ${({ $variant, ...props }) =>
    $variant === 'footer' && `${navTabletStyles({ $variant, ...props })}`}
`

const navLinkStyles = props => `
  color: ${linkColor(props)};
  text-decoration: none;
  text-transform: lowercase;
  transition: ${motion.transition};
  font-weight: ${props.$variant === 'header' && props.$isActive ? '600' : '400'};

  &:hover {
    opacity: 0.7;
  }
`

type NavLinkProps = { $variant?: string; $isActive?: boolean; $activeBrushColor?: string }

export const NavLink = styled.a<NavLinkProps>`
  ${props => navLinkStyles(props)}
`

export const NavNextLink = styled(Link)<NavLinkProps>`
  ${props => navLinkStyles(props)}
`
