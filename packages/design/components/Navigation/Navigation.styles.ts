import Link from "next/link";
import styled from "styled-components";
import { motion, colors, fromTablet, spacing } from "../../tokens";

const linkColor = ({ $variant, $isActive, $activeBrushColor }) =>
  $variant === "header" && $isActive && $activeBrushColor
    ? colors[$activeBrushColor]
    : $variant === "footer"
      ? colors.text
      : colors.bg;

const navTabletStyles = (props) => `
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
`;

export const Nav = styled.nav<{
  $variant?: string;
  $isMobileMenuOpen?: boolean;
}>`
  ${({ $variant, $isMobileMenuOpen }) =>
    $variant === "header" &&
    `
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex-basis: 100%;
      width: 100%;
      order: 3;
       padding-top: ${$isMobileMenuOpen ? "0.5rem" : "0"};
      overflow: hidden;
      max-height: ${$isMobileMenuOpen ? "50vh" : "0"};
      opacity: ${$isMobileMenuOpen ? "1" : "0"};
      transition: max-height 0.65s cubic-bezier(0.4, 0, 0.2, 1),
                  opacity 0.5s ease,
                  padding-top 0.5s ease;

      & > * {
        opacity: ${$isMobileMenuOpen ? "1" : "0"};
        transition: opacity 0.4s ease;
      }
      & > *:nth-child(1) { transition-delay: ${$isMobileMenuOpen ? "0.08s" : "0"}; }
      & > *:nth-child(2) { transition-delay: ${$isMobileMenuOpen ? "0.16s" : "0"}; }
      & > *:nth-child(3) { transition-delay: ${$isMobileMenuOpen ? "0.24s" : "0"}; }
      & > *:nth-child(4) { transition-delay: ${$isMobileMenuOpen ? "0.32s" : "0"}; }
      & > *:nth-child(5) { transition-delay: ${$isMobileMenuOpen ? "0.4s" : "0"}; }
      & > *:nth-child(6) { transition-delay: ${$isMobileMenuOpen ? "0.48s" : "0"}; }
    `}
  gap: 1.5rem;

  /* Footer: row layout on all breakpoints; gap stays 1.5rem until tablet+ (below). */
  ${({ $variant }) =>
    $variant === "footer" &&
    `
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${colors.text};
    & > * {
      opacity: 1;
      transform: none;
      transition-delay: 0;
    }
  `}

  ${(props) => fromTablet`${navTabletStyles(props)}`}
`;

export const SocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${spacing.xs};
  width: 100%;

  ${fromTablet`
    flex-direction: row;
    align-items: center;
    width: auto;
    gap: 0.75rem;
  `}
`;

export const SocialsLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1.5rem 0 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  font-weight: 700;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.4);
  }

  ${fromTablet`
    display: none;
  `}
`;

const navLinkStyles = (props) => `
  color: ${linkColor(props)};
  text-decoration: none;
  text-transform: lowercase;
  transition: ${motion.transition};
  font-weight: ${props.$variant === "header" ? "600" : "400"};
  margin-left: -2px;

  &:hover {
    opacity: 0.7;
  }
`;

type NavLinkProps = {
  $variant?: string;
  $isActive?: boolean;
  $activeBrushColor?: string;
};

export const NavLink = styled.a<NavLinkProps>`
  ${(props) => navLinkStyles(props)}
`;

export const NavNextLink = styled(Link)<NavLinkProps>`
  ${(props) => navLinkStyles(props)}
`;
