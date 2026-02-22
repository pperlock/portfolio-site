import styled from 'styled-components'
import { colors, spacing, typography } from '@/design'

export const SkillsSectionBlock = styled.div`
  margin-bottom: 3rem;
`

export const SkillsSectionTitle = styled.h2`
  font-size: ${typography.fontSizeXl};
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid ${colors.border};
`

export const SkillsGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: ${spacing.sm};
`

export const SkillCategory = styled.div`
  margin-bottom: 1.5rem;
`

export const SkillCategoryTitle = styled.h3`
  font-size: ${typography.fontSizeLg};
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: 0.75rem;
`

export const SkillTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const SkillTag = styled.span`
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: ${colors.bgMuted};
  color: ${colors.textHeader};
  border-radius: 4px;
  font-size: ${typography.fontSizeSm};
`
