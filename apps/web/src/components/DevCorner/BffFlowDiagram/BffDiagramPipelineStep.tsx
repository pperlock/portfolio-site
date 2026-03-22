import React from 'react'

import { renderRichCopy } from '@/lib/richCopy'
import {
  Step,
  EndpointStep,
  IconCircle,
  StepContent,
  StepTitle,
  StepDescription,
} from './BffServerCallFlowDiagram.styles'

export type BffDiagramPipelineStepVariant = 'endpoint' | 'zone'

export interface BffDiagramPipelineStepProps {
  variant: BffDiagramPipelineStepVariant
  icon: React.ComponentType<{ color?: string }>
  iconColor: string
  title: string
  description: string
  richCopyKeyPrefix: string
}

export function BffDiagramPipelineStep({
  variant,
  icon: Icon,
  iconColor,
  title,
  description,
  richCopyKeyPrefix,
}: BffDiagramPipelineStepProps) {
  const Shell = variant === 'endpoint' ? EndpointStep : Step
  return (
    <Shell>
      <IconCircle $color={iconColor} aria-hidden>
        <Icon />
      </IconCircle>
      <StepContent>
        <StepTitle>{title}</StepTitle>
        <StepDescription>{renderRichCopy(description, richCopyKeyPrefix)}</StepDescription>
      </StepContent>
    </Shell>
  )
}
