'use client'

import React from 'react'
import { PageSection } from '@portfolio/design'
import { StyledList, StyledItem } from './AtAGlance.styles'
import { AtAGlanceContent } from '@/types'

interface AtAGlanceProps {
  content: AtAGlanceContent
}

const AtAGlance = ({ content }: AtAGlanceProps) => {
  const { title, points } = content
  return (
    <PageSection title={title} id="at-a-glance" variant="inset">
      <StyledList>
        {points.map((point, index) => (
          <StyledItem key={index}>{point}</StyledItem>
        ))}
      </StyledList>
    </PageSection>
  )
}

export default AtAGlance
