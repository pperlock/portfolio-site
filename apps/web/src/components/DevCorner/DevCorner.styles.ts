import { fromTablet, spacing, colors } from '@portfolio/design'
import styled from 'styled-components'

export const PageWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  font-family: 'Inter', sans-serif;
`

export const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
`

export const PageSubtitle = styled.p`
  font-size: 1.2rem;
  color: #555;
  margin-bottom: 2rem;
`

export const Section = styled.section`
  margin-bottom: 3rem;
`

export const SectionTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.25rem;
`

export const HeroNav = styled.nav`
  margin-top: ${spacing.md};
`

export const HeroNavList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: ${spacing.sm};
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  ${fromTablet`
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
  transition: background 0.15s ease, color 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: ${colors.textMedium};
    color: ${colors.bg};
    border-color: ${colors.textMedium};
  }
`
