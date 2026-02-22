import styled from 'styled-components'
import { colors, spacing, fromTablet, typography } from '@/design'

export const ExperienceSectionBlock = styled.div`
  margin-bottom: 3rem;
`

export const ExperienceSectionTitle = styled.h2`
  font-size: ${typography.fontSizeXl};
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${colors.border};
`

export const ExperienceItem = styled.div`
  margin-bottom: ${spacing.md};
  padding-bottom: ${spacing.md};
  border-bottom: 1px solid ${colors.bgMuted};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`

export const ExperienceItemHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
  gap: 0.5rem;

  ${fromTablet`
    flex-direction: row;
  `}
`

export const ExperienceItemTitle = styled.h3`
  font-size: ${typography.fontSizeXl};
  font-weight: 600;
  color: ${colors.text};
  margin: 0;
`

export const ExperienceItemCompany = styled.p`
  font-size: ${typography.fontSizeLg};
  font-weight: 500;
  color: ${colors.textLight};
  margin: 0;
`

export const ExperienceItemDate = styled.span`
  font-size: ${typography.fontSizeSm};
  color: ${colors.textMuted};
  font-style: italic;
  margin-top: 0.25rem;

  ${fromTablet`
    margin-top: 0;
  `}
`

export const JobLocation = styled.p`
  font-size: ${typography.fontSizeSm};
  color: ${colors.textMuted};
  margin-bottom: ${spacing.sm};
  font-style: italic;
`

export const ExperienceItemDescription = styled.div`
  color: ${colors.textLight};
  line-height: 1.7;
  margin-top: 0.75rem;

  ul {
    margin: 0.75rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`

export const DescriptionSubtitle = styled.p<{ $first?: boolean }>`
  font-weight: 600;
  margin-bottom: 0.75rem;
  margin-top: ${p => (p.$first ? 0 : '1.5rem')};
`
