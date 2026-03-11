import styled from 'styled-components'
import { spacing, typography, colors } from '@/design'
import type { ParagraphColor, ParagraphAlign } from '@/design'

const paragraphColorVariants = {
  light: colors.textLight,
  medium: colors.textMedium,
  normal: colors.text,
}

export const StyledParagraph = styled.p<{ color?: ParagraphColor; align?: ParagraphAlign }>`
  margin-bottom: ${spacing.sm};
  font-size: ${typography.fontSizeLg};
  color: ${({ color }) => paragraphColorVariants[color || 'normal']};
  line-height: 1.8;
  text-align: ${({ align }) => align || 'left'};
`
