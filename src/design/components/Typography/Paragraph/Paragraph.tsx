import React from 'react'
import { StyledParagraph } from './Paragraph.styles'
import type { ParagraphColor, ParagraphAlign } from '@/design'

interface ParagraphProps {
  children: React.ReactNode | string
  color?: ParagraphColor
  align?: ParagraphAlign
}

const Paragraph = ({ children, color, align }: ParagraphProps) => {
  return (
    <StyledParagraph color={color} align={align}>
      {children}
    </StyledParagraph>
  )
}

export default Paragraph
