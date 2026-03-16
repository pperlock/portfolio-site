import styled from 'styled-components'
import { colors, spacing, fromTablet, typography } from '@portfolio/design'

export const EducationSection = styled.div`
  margin-bottom: ${spacing.md};
`

export const SectionTitle = styled.h2`
  font-size: ${typography.fontSizeXl};
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
  padding-bottom: ${spacing.xs};
  border-bottom: 2px solid ${colors.border};
`

export const Entry = styled.div`
  margin-bottom: ${spacing.sm};
  padding-bottom: ${spacing.sm};
  border-bottom: 1px solid ${colors.bgMuted};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`

export const EntryHeader = styled.div`
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

export const Degree = styled.h3`
  font-size: ${typography.fontSizeLg};
  font-weight: 600;
  color: ${colors.text};
  margin: 0;
`

export const Institution = styled.p`
  font-size: ${typography.fontSizeLg};
  font-weight: 500;
  color: ${colors.textLight};
  margin: 0;
`
