import styled, { keyframes } from 'styled-components'
import { colors, breakpoint, fromTablet, spacing, typography } from '@portfolio/design'

/** Marching dashes along horizontal connectors (left → right). Period matches background-size. */
const connectorFlowLtr = keyframes`
  to {
    background-position: 10px 0;
  }
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
    justify-content: center;
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
  border: 1px dashed ${colors.border};
  border-radius: 14px;

  ${fromTablet`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: 0 1 auto;
    margin: 0 ${spacing.xs};
    padding: ${spacing.md} ${spacing.md};
    gap: 0;
  `}
`

export const ServerZoneLabel = styled.span`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -52%);
  background: ${colors.bg};
  padding: 0 10px;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  color: ${colors.textMuted};
  white-space: nowrap;
  max-width: 90vw;
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
    flex: 1 1 0;
    max-width: 200px;
  `}
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

export const Connector = styled.div`
  display: none;

  /* Use @media here (not fromTablet) so keyframes interpolate with correct styled-components typings. */
  @media (min-width: ${breakpoint.tablet}px) {
    display: block;
    flex: 0 0 28px;
    width: 28px;
    height: 2px;
    position: relative;
    align-self: center;
    background-color: transparent;
    background-image: repeating-linear-gradient(
      90deg,
      ${colors.border} 0,
      ${colors.border} 5px,
      transparent 5px,
      transparent 10px
    );
    background-size: 10px 2px;
    background-repeat: repeat-x;
    background-position: 0 0;
    animation: ${connectorFlowLtr} 1.1s linear infinite;

    @media (prefers-reduced-motion: reduce) {
      animation: none;
      background-image: none;
      background-color: ${colors.border};
    }

    &::after {
      content: '';
      position: absolute;
      right: -2px;
      top: -4px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 7px solid ${colors.border};
    }
  }
`

export const ConnectorShort = styled(Connector)`
  ${fromTablet`
    flex: 0 0 20px;
    width: 20px;
  `}
`
