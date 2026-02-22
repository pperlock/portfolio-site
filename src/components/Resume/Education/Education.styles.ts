import styled from 'styled-components'
import { colors, spacing, fromTablet, typography } from '@/design'

export const EducationSectionBlock = styled.div`
  margin-bottom: 3rem;
`

export const EducationSectionTitle = styled.h2`
  font-size: ${typography.fontSizeXl};
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${colors.border};
`

export const EducationItem = styled.div`
  margin-bottom: ${spacing.sm};
  padding-bottom: ${spacing.sm};
  border-bottom: 1px solid ${colors.bgMuted};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
    margin-bottom: 0;
  }
`

export const EducationItemHeader = styled.div`
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

export const EducationItemTitle = styled.h3`
  font-size: ${typography.fontSizeLg};
  font-weight: 600;
  color: ${colors.text};
  margin: 0;
`

export const EducationItemInstitution = styled.p`
  font-size: ${typography.fontSizeLg};
  font-weight: 500;
  color: ${colors.textLight};
  margin: 0;
`
