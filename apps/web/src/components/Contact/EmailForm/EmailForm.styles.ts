import styled from 'styled-components'
import { colors, spacing, layout, motion, typography, fromTablet } from '@portfolio/design'

export const FormWrapper = styled.div`
  max-width: ${layout.contentMax};
  // margin: ${spacing.lg} auto 0;
  text-align: left;
`

export const FormTitle = styled.p`
  color: ${colors.textLight};
  margin-bottom: 1rem;
  font-size: ${typography.fontSizeXl};
  ${fromTablet`

  font-size: ${typography.fontSize2xl};
  `}
`

export const FormHelpText = styled.p`
  color: ${colors.textLight};
  margin-bottom: ${spacing.md};
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${spacing.sm};
`

export const TopRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: ${spacing.sm};
  flex-wrap: wrap;
  ${fromTablet`
    gap: ${spacing.lg};
  `}
`

export const LeftColumn = styled.div`
  flex: 1 1 0;
  min-width: 260px;
  width: 100%;
`

export const RightColumn = styled.div`
  flex: 1 1 0;
  min-width: 260px;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
`

export const Input = styled.input`
  padding: 1rem 1.1rem;
  border-radius: ${layout.radiusSm};
  border: 1px solid ${colors.border};
  font-size: ${typography.fontSizeLg};
  color: ${colors.text};
  background-color: ${colors.bg};
  transition: ${motion.transition};
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: ${colors.text};
    box-shadow: 0 0 0 1px ${colors.text};
  }
`

export const TextArea = styled.textarea`
  padding: 1rem 1.1rem;
  border-radius: ${layout.radiusSm};
  border: 1px solid ${colors.border};
  font-size: ${typography.fontSizeLg};
  color: ${colors.text};
  background-color: ${colors.bg};
  min-height: 180px;
  resize: vertical;
  transition: ${motion.transition};

  &:focus {
    outline: none;
    border-color: ${colors.text};
    box-shadow: 0 0 0 1px ${colors.text};
  }
`

export const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${spacing.sm};
`
