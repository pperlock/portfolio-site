import React from 'react'
import { FaGlobe, FaServer, FaKey, FaExternalLinkAlt } from 'react-icons/fa'

import {
  DiagramFigure,
  DiagramLead,
  PipelineContainer,
  ServerZone,
  ServerZoneLabel,
  Step,
  IconCircle,
  StepContent,
  StepTitle,
  StepDescription,
  Connector,
  ConnectorShort,
} from './BffServerCallFlowDiagram.styles'

const SERVER_ICON_COLOR = '#171717'

export interface BffServerCallFlowDiagramProps {
  /** Optional figure title (schematic line). Pass empty string to omit. */
  caption?: string
  className?: string
}

/** Schematic BFF path: client → Next.js (handlers + env) → upstream. */
const BffServerCallFlowDiagram = ({ className }: BffServerCallFlowDiagramProps) => (
  <DiagramFigure
    className={className}
    aria-label="Schematic: client, Next.js server, upstream APIs"
  >
    <PipelineContainer>
      <Step>
        <IconCircle $color="#2563eb" aria-hidden>
          <FaGlobe />
        </IconCircle>
        <StepContent>
          <StepTitle>Client</StepTitle>
          <StepDescription>
            User triggers a <code>GET</code> request to <code>{'/api/<route>'}</code> on the client
            side.
          </StepDescription>
        </StepContent>
      </Step>

      <Connector aria-hidden />

      <ServerZone role="group" aria-label="Next.js server">
        <ServerZoneLabel>Next.js server</ServerZoneLabel>

        <Step>
          <IconCircle $color={SERVER_ICON_COLOR} aria-hidden>
            <FaServer />
          </IconCircle>
          <StepContent>
            <StepTitle>API routes</StepTitle>
            <StepDescription>Route handler receives call on the secure server.</StepDescription>
          </StepContent>
        </Step>

        <ConnectorShort aria-hidden />

        <Step>
          <IconCircle $color="#0d9488" aria-hidden>
            <FaKey />
          </IconCircle>
          <StepContent>
            <StepTitle>Environment</StepTitle>
            <StepDescription>
              Private keys are injected via<code>process.env</code>into the server environment.
            </StepDescription>
          </StepContent>
        </Step>
      </ServerZone>

      <Connector aria-hidden />

      <Step>
        <IconCircle $color="#4f46e5" aria-hidden>
          <FaExternalLinkAlt />
        </IconCircle>
        <StepContent>
          <StepTitle>Upstream</StepTitle>
          <StepDescription>
            Secure HTTPS outbound request is sent to the upstream API.
          </StepDescription>
        </StepContent>
      </Step>
    </PipelineContainer>
  </DiagramFigure>
)

export default BffServerCallFlowDiagram
