import React from 'react'
import { FaGlobe, FaServer, FaKey, FaExternalLinkAlt, FaUserShield } from 'react-icons/fa'

import { renderRichCopy } from '@/lib/richCopy'
import { BffDiagramPipelineStep } from './BffDiagramPipelineStep'
import {
  DiagramFigure,
  PipelineContainer,
  ServerZone,
  ServerZoneOutlineSvg,
  ServerZoneOutlineRect,
  ServerZoneLabel,
  Connector,
  ConnectorShort,
  ServerZoneContent,
  ServerZoneCallout,
  ServerZoneCalloutIcon,
  ServerZoneCalloutText,
} from './BffServerCallFlowDiagram.styles'

const SERVER_ICON_COLOR = '#171717'

export interface BffDiagramStepCopy {
  title: string
  description: string
}

export interface BffServerCallFlowDiagramContent {
  serverZoneLabel: string
  callout: string
  steps: BffDiagramStepCopy[]
}

export interface BffServerCallFlowDiagramProps {
  content: BffServerCallFlowDiagramContent
  className?: string
}

const STEP_META = [
  { Icon: FaGlobe, color: '#2563eb' },
  { Icon: FaServer, color: SERVER_ICON_COLOR },
  { Icon: FaKey, color: '#0d9488' },
  { Icon: FaExternalLinkAlt, color: '#4f46e5' },
] as const

/** Stable React keys for `renderRichCopy` fragments; index-aligned with `STEP_META` and `content.steps`. */
const RICH_COPY_PREFIXES = ['bff-client', 'bff-api', 'bff-env', 'bff-upstream'] as const

/** Step indices rendered inside the server zone (API routes → environment). */
const SERVER_ZONE_STEP_INDICES = [1, 2] as const

/** Schematic BFF path: client → Next.js (handlers + env) → upstream. */
const BffServerCallFlowDiagram = ({ content, className }: BffServerCallFlowDiagramProps) => {
  const { steps } = content

  const renderPipelineStep = (stepIndex: number, variant: 'endpoint' | 'zone') => {
    const copy = steps[stepIndex]
    const { Icon, color } = STEP_META[stepIndex]
    return (
      <BffDiagramPipelineStep
        variant={variant}
        icon={Icon}
        iconColor={color}
        title={copy.title}
        description={copy.description}
        richCopyKeyPrefix={RICH_COPY_PREFIXES[stepIndex]}
      />
    )
  }

  return (
    <DiagramFigure
      className={className}
      aria-label="Schematic: client, Next.js server, upstream APIs"
    >
      <PipelineContainer>
        {renderPipelineStep(0, 'endpoint')}

        <Connector aria-hidden />

        <ServerZone role="group" aria-label="Next.js server">
          <ServerZoneOutlineSvg>
            <ServerZoneOutlineRect />
          </ServerZoneOutlineSvg>
          <ServerZoneLabel>{content.serverZoneLabel}</ServerZoneLabel>

          <ServerZoneContent>
            {SERVER_ZONE_STEP_INDICES.map((stepIndex, i) => (
              <React.Fragment key={RICH_COPY_PREFIXES[stepIndex]}>
                {i > 0 ? <ConnectorShort aria-hidden /> : null}
                {renderPipelineStep(stepIndex, 'zone')}
              </React.Fragment>
            ))}
          </ServerZoneContent>
          <ServerZoneCallout role="note">
            <ServerZoneCalloutIcon aria-hidden>
              <FaUserShield />
            </ServerZoneCalloutIcon>
            <ServerZoneCalloutText>
              {renderRichCopy(content.callout, 'bff-callout')}
            </ServerZoneCalloutText>
          </ServerZoneCallout>
        </ServerZone>

        <Connector aria-hidden />

        {renderPipelineStep(3, 'endpoint')}
      </PipelineContainer>
    </DiagramFigure>
  )
}

export default BffServerCallFlowDiagram
