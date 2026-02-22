import styled from 'styled-components'
import { colors, spacing, motion, fromTablet, typography } from '@/design'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  width: 100%;
`

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  border-bottom: 1px solid ${colors.border};

  &:last-child {
    border-bottom: none;
  }
`

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;
  max-width: 900px;
  margin: 0 auto;

  ${fromTablet`
    gap: ${spacing.md};
  `}
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
  margin-top: 0;
  gap: ${spacing.sm};

  ${fromTablet`
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
      gap: ${spacing.md};
  `}
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.xs};
`

export const Company = styled.p`
  font-weight: 600;
  color: ${colors.textHeader};
  margin: 0;

  ${fromTablet`
    font-size: ${typography.fontSizeLg};
  `}
`

export const CompanyLink = styled.a`
  font-weight: 600;
  text-decoration: none;
  color: ${colors.textHeader};
  transition: ${motion.transition};

  &:hover {
    color: ${colors.hover};
    text-decoration: underline;
  }

  ${fromTablet`
    font-size: ${typography.fontSizeLg};
  `}
`

export const Meta = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${spacing.xs};
`

export const Period = styled.span`
  color: ${colors.textLight};
  font-weight: 500;
  white-space: nowrap;
`

export const Separator = styled.span`
  color: ${colors.textLight};
  font-size: ${typography.fontSizeXl};
  font-weight: 600;
  line-height: 1;
`

export const Location = styled.span`
  color: ${colors.textMuted};
  font-style: normal;
`

export const LogoWrap = styled.div<{ $isFirst?: boolean }>`
  flex-shrink: 0;
  margin: 0 auto;
  padding-top: ${spacing.md};

  img {
    display: block;
    width: ${({ $isFirst }) => ($isFirst ? '150px' : 'auto')};
  }
  ${fromTablet`
    padding-top: 0;
    margin: 0;
  `}
`

export const LogoLink = styled.a`
  display: inline-block;
  text-decoration: none;
  transition: ${motion.transition};

  &:hover {
    opacity: 0.7;
  }
`

export const Description = styled.p`
  color: ${colors.textHeader};
  line-height: 1.8;
  margin: 0 0 1.5rem 0;
`

export const SummaryList = styled.ul`
  color: ${colors.textHeader};
  line-height: 1.8;
  margin: 0;
  flex: 1;
  list-style: none;
  padding-left: 0;

  li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
  }

  li::before {
    content: '•';
    position: absolute;
    left: 0;
    color: ${colors.textLight};
    font-weight: bold;
  }

  li:last-child {
    margin-bottom: 0;
  }
`

export const ResumeLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: ${spacing.lg};
`
