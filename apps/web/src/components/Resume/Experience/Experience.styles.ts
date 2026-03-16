import styled from 'styled-components'
import { colors, spacing, fromTablet, typography } from '@portfolio/design'

export const ExperienceSection = styled.div`
  margin-bottom: ${spacing.lg};
`

export const SectionTitle = styled.h2`
  font-size: ${typography.fontSizeXl};
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: ${spacing.md};
  padding-bottom: ${spacing.xs};
  border-bottom: 2px solid ${colors.border};
`

export const Job = styled.div`
  margin-bottom: ${spacing.md};
  padding-bottom: ${spacing.md};
  border-bottom: 1px solid ${colors.bgMuted};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`

export const JobHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${spacing.xs};
  flex-wrap: wrap;
  gap: ${spacing.xs};

  ${fromTablet`
    flex-direction: row;
  `}
`

export const JobTitle = styled.h3`
  font-size: ${typography.fontSizeXl};
  font-weight: 600;
  color: ${colors.text};
  margin: 0;
`

export const Company = styled.p`
  font-size: ${typography.fontSizeLg};
  font-weight: 500;
  color: ${colors.textLight};
  margin: 0;
`

export const JobDate = styled.span`
  font-size: ${typography.fontSizeSm};
  color: ${colors.textMuted};
  font-style: italic;

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

export const JobDescription = styled.div`
  color: ${colors.textLight};
  line-height: 1.7;
  margin-top: ${spacing.sm};
`

export const ProjectName = styled.p<{ $first?: boolean }>`
  font-weight: 600;
  margin-bottom: ${spacing.sm};
  margin-top: ${p => (p.$first ? 0 : '1.5rem')};
  color: ${colors.text};
`
