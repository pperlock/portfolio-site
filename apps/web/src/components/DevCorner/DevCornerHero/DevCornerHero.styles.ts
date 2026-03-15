import styled from 'styled-components'
import {
  layout,
  spacing,
  fromTablet,
  fromDesktop,
  typography,
  colors,
  shadow,
} from '@portfolio/design'

export const DevCornerHeroSection = styled.section`
  padding: ${spacing.lg} ${spacing.sm};

  ${fromTablet`
    margin: 8rem 0 2rem 0;
  `}
`

export const DevCornerHeroInner = styled.div`
  max-width: ${layout.containerMax};
  margin: 4rem auto 0;

  ${fromTablet`
    margin-top: 0;
  `}
`

export const DevCornerHeroTitle = styled.div`
  text-align: left;
  margin-bottom: ${spacing.md};
  h1 {
    font-size: ${typography.fontSize4xl};
    ${fromDesktop`
      font-size: ${typography.fontSize5xl};
    `}
  }
`

export const DevCornerHeroBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};

  ${fromDesktop`
    flex-direction: row;
    align-items: flex-start;
  `}
`

export const DevCornerHeroContent = styled.div`
  flex: 1;
  text-align: left;
`

export const DevCornerHeroImageWrap = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  aspect-ratio: 4 / 3;
  position: relative;
`

export const HeroNav = styled.nav`
  margin-top: ${spacing.md};

  ${fromDesktop`
    margin-top: auto;
  `}
`

export const HeroNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  ${fromDesktop`
    margin-top: ${spacing.lg};
    justify-content: flex-start;
  `}
`

export const HeroNavItem = styled.li``

export const HeroNavLink = styled.a`
  font-size: 0.9rem;
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  border: 1px solid ${colors.textMedium};
  color: ${colors.textMedium};
  text-decoration: none;
  background: ${colors.bg};
  transition:
    background 0.15s ease,
    color 0.15s ease,
    border-color 0.15s ease;

  &:hover {
    background: ${colors.textMedium};
    color: ${colors.text};
    border-color: ${colors.textMedium};
    box-shadow: ${shadow.sm};
  }

  &:nth-child(1) {
    background: rgba(135, 206, 235, 0.08);
    border-color: rgba(135, 206, 235, 0.5);
  }

  &:nth-child(2) {
    background: rgba(255, 215, 0, 0.08);
    border-color: rgba(255, 215, 0, 0.4);
  }

  &:nth-child(3),
  &:nth-child(4) {
    background: rgba(255, 105, 180, 0.06);
    border-color: rgba(255, 105, 180, 0.35);
  }
`
