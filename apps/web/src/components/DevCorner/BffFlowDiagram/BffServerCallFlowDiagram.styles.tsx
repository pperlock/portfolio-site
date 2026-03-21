import styled, { keyframes } from 'styled-components'
import {
  colors,
  breakpoint,
  fromTablet,
  fromDesktop,
  spacing,
  typography,
  shadow,
} from '@portfolio/design'

/** Marching dashes along horizontal connectors (left → right). Period matches background-size. */
const connectorFlowLtr = keyframes`
  to {
    background-position: 12px 0;
  }
`

/** Marching dashes along vertical connectors (top → bottom). Period matches background-size. */
const connectorFlowTtb = keyframes`
  to {
    background-position: 0 12px;
  }
`

/** Server zone outline: period matches stroke-dasharray (11 + 8). */
const serverZoneOutlineMarch = keyframes`
  to {
    stroke-dashoffset: -19;
  }
`

const CONNECTOR_COLOR = colors.textMedium

const reducedMotionHorizontal = `
  animation: none;
  background-image: none;
  background-color: ${CONNECTOR_COLOR};
`

const reducedMotionVertical = `
  animation: none;
  background-image: none;
  background-color: ${CONNECTOR_COLOR};
`

export const DiagramFigure = styled.figure`
  margin: ${spacing.lg} 0 ${spacing.xl};
  padding: 0;
`

export const DiagramLead = styled.figcaption`
  margin: 0 0 ${spacing.md};
  font-size: ${typography.fontSizeSm};
  color: ${colors.textMedium};
  line-height: 1.55;
  max-width: 52ch;
`

export const PipelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${spacing.sm};

  ${fromTablet`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0;
  `}
`

/**
 * Only route handlers + env live here. Upstream APIs are outside this box.
 */
export const ServerZone = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: ${spacing.sm};
  padding: ${spacing.md} ${spacing.sm};
  margin: ${spacing.xs} 0;
  background: ${colors.bgSubtle};
  border-radius: 14px;
  /* Raised panel: soft lift + top highlight + slight inner floor shadow */
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.92),
    inset 0 -1px 0 rgba(15, 23, 42, 0.04),
    ${shadow.md};

  ${fromTablet`
    flex: 1;
    margin: 0 ${spacing.xs};
    padding: ${spacing.md} ${spacing.md};
    gap: 0;
  `}
`

/** Animated dashed perimeter (light grey stroke; marches like connectors). */
export const ServerZoneOutlineSvg = styled.svg.attrs({
  'aria-hidden': true,
})`
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: visible;
  color: ${colors.border};
`

export const ServerZoneOutlineRect = styled.rect.attrs({
  fill: 'none',
  vectorEffect: 'nonScalingStroke',
  x: 1,
  y: 1,
  width: 'calc(100% - 2px)',
  height: 'calc(100% - 2px)',
  rx: 13,
  ry: 13,
})`
  stroke: currentColor;
  stroke-width: 1.5;
  stroke-dasharray: 11 8;
  stroke-linecap: round;
  stroke-linejoin: round;
  animation: ${serverZoneOutlineMarch} 1.05s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`

/** Inset note: icon + emphasized copy on the gray server zone */
export const ServerZoneCallout = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: ${spacing.sm} 0 0;
  padding: ${spacing.sm};
  background: ${colors.bg};
  border-radius: 8px;
  box-shadow: inset 0 0 0 1px ${colors.border};
`

export const ServerZoneCalloutIcon = styled.span`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0f766e;
  font-size: 1.35rem;
  line-height: 1;
  filter: drop-shadow(0 1px 1px rgba(15, 118, 110, 0.2));
`

export const ServerZoneCalloutText = styled.span`
  font-size: ${typography.fontSizeSm};
  line-height: 1.45;
  font-weight: 600;
  color: ${colors.textHeader};
  text-align: center;

  strong {
    font-weight: 700;
    color: #0f766e;
    letter-spacing: 0.02em;
  }

  code {
    font-size: 0.7rem;
    padding: 0.1em 0.3em;
    border-radius: 4px;
    background: ${colors.bgMuted};
    font-weight: 600;
  }
`

export const ServerZoneLabel = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  background: ${colors.bg};
  padding: 5px 14px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${colors.textHeader};
  white-space: nowrap;
  max-width: min(90vw, 22rem);
  overflow: hidden;
  text-overflow: ellipsis;
`

export const Step = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 1;
  min-width: 0;
  padding: ${spacing.sm};
  ${fromTablet`
    max-width: 170px;
  `}

  ${fromDesktop`
    flex: 1 1 0;
    max-width: 300px;
  `}
`

/** API routes + Environment: column through tablet (down connector); row from desktop */
export const ServerZoneContent = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.xs};

  ${Step} {
    flex: 0 0 auto;
    width: 100%;
    max-width: 280px;
  }

  ${fromDesktop`
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    gap: ${spacing.sm};

    ${Step} {
      flex: 1 1 0;
      max-width: 300px;
      width: auto;
    }
  `}
`

/** Client + upstream endpoints (outside the server zone) */
export const EndpointStep = styled(Step)`
  background: rgba(135, 206, 235, 0.16);
  border: 1px solid rgba(135, 206, 235, 0.42);
  border-radius: 14px;
`

export const IconCircle = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${colors.bg};
  border: 2px solid ${props => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: ${spacing.sm};
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.08);
  color: ${props => props.$color};

  svg {
    width: 22px;
    height: 22px;
  }
`

export const StepContent = styled.div`
  max-width: 200px;
`

export const StepTitle = styled.h4`
  margin: 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${colors.textHeader};
`

export const StepDescription = styled.p`
  margin: 4px 0 0;
  font-size: 0.75rem;
  color: ${colors.textMedium};
  line-height: 1.45;

  code {
    font-size: 0.7rem;
    padding: 0.1em 0.3em;
    border-radius: 4px;
    background: ${colors.bgMuted};
  }
`

/**
 * Between Client ↔ server zone ↔ Upstream: vertical flow on mobile (arrow down),
 * horizontal LTR on tablet+ (arrow right).
 */
export const Connector = styled.div`
  display: block;
  position: relative;
  flex: 0 0 28px;
  width: 3px;
  height: 28px;
  align-self: center;
  background-color: transparent;
  background-image: repeating-linear-gradient(
    180deg,
    ${CONNECTOR_COLOR} 0,
    ${CONNECTOR_COLOR} 6px,
    transparent 6px,
    transparent 12px
  );
  background-size: 3px 12px;
  background-repeat: repeat-y;
  background-position: 0 0;
  animation: ${connectorFlowTtb} 1.1s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    ${reducedMotionVertical}
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid ${CONNECTOR_COLOR};
  }

  @media (min-width: ${breakpoint.tablet}px) {
    flex: 0 0 30px;
    width: 30px;
    height: 3px;
    background-image: repeating-linear-gradient(
      90deg,
      ${CONNECTOR_COLOR} 0,
      ${CONNECTOR_COLOR} 6px,
      transparent 6px,
      transparent 12px
    );
    background-size: 12px 3px;
    background-repeat: repeat-x;
    background-position: 0 0;
    animation: ${connectorFlowLtr} 1.1s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      ${reducedMotionHorizontal}
    }

    &::after {
      bottom: auto;
      left: auto;
      top: -6px;
      right: -3px;
      transform: none;
      border-left: 10px solid ${CONNECTOR_COLOR};
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 0;
    }
  }
`

/**
 * Between API routes ↔ Environment: vertical + down arrow through tablet (matches column layout),
 * horizontal LTR from desktop up.
 */
export const ConnectorShort = styled.div`
  display: block;
  position: relative;
  flex: 0 0 24px;
  width: 3px;
  height: 24px;
  align-self: center;
  background-color: transparent;
  background-image: repeating-linear-gradient(
    180deg,
    ${CONNECTOR_COLOR} 0,
    ${CONNECTOR_COLOR} 6px,
    transparent 6px,
    transparent 12px
  );
  background-size: 3px 12px;
  background-repeat: repeat-y;
  background-position: 0 0;
  animation: ${connectorFlowTtb} 1.1s linear infinite;

  @media (prefers-reduced-motion: reduce) {
    ${reducedMotionVertical}
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    border-top: 10px solid ${CONNECTOR_COLOR};
  }

  /* Match ServerZoneContent: column until desktop; use @media (not fromDesktop) for keyframe typings. */
  @media (min-width: ${breakpoint.desktop}px) {
    flex: 0 0 20px;
    width: 20px;
    min-width: 20px;
    height: 3px;
    background-image: repeating-linear-gradient(
      90deg,
      ${CONNECTOR_COLOR} 0,
      ${CONNECTOR_COLOR} 6px,
      transparent 6px,
      transparent 12px
    );
    background-size: 12px 3px;
    background-repeat: repeat-x;
    background-position: 0 0;
    animation: ${connectorFlowLtr} 1.1s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      ${reducedMotionHorizontal}
    }

    &::after {
      bottom: auto;
      left: auto;
      top: -6px;
      right: -3px;
      transform: none;
      border-left: 10px solid ${CONNECTOR_COLOR};
      border-top: 7px solid transparent;
      border-bottom: 7px solid transparent;
      border-right: 0;
    }
  }
`
