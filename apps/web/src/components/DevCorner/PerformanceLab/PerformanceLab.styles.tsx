import {
  spacing,
  fromTablet,
  colors,
  typography,
  fromDesktop,
  VINTAGE_THEME,
} from '@portfolio/design'
import styled from 'styled-components'

const { ui, slateText, paper, ink, daphne, white, neutralRail } = VINTAGE_THEME

export const AccessibilityLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  margin-top: ${spacing.lg};

  ${fromTablet`
    flex-direction: row;
    align-items: flex-start;
  `}
`

export const AccessibilityLeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  flex: 0 0 auto;
`

export const AccessibilityMetricsColumn = styled.div`
  flex: 1;
  margin-top: ${spacing.lg};

  ${fromTablet`
    margin-top: 0;
  `}
`
export const LighthouseMessage = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.9rem;
  color: ${ui.messageGray};
  text-align: center;
`

export const LighthouseControls = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
`

export const LighthouseScoreGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 1rem;
`

export const LighthouseScoreValue = styled.div`
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
  color: ${slateText};
`

export const LighthouseLink = styled.a`
  color: ${colors.text};
  text-decoration: none;
`

export const PageSelectWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  margin: ${spacing.md} 0 0;
`

export const PageSelect = styled.select`
  width: 100%;
  padding: 12px 40px 12px 14px;
  font-size: 14px;
  border-radius: 999px;
  border: 1px solid ${ui.chromeBorder};
  background: linear-gradient(145deg, ${paper.selectWarmStart}, ${paper.selectWarmEnd});
  color: ${ink.primary};
  appearance: none;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    border-color: ${daphne.main};
  }

  &:focus {
    outline: none;
    border-color: ${daphne.main};
    box-shadow: 0 0 0 3px ${daphne.glow};
  }

  &:disabled {
    background: ${paper.disabled};
    cursor: not-allowed;
  }
`

export const PageSelectArrow = styled.div`
  position: absolute;
  right: 14px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;

  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 6px solid ${ui.warmBorder};
`

export const ThemedSelectRoot = styled.div`
  position: relative;
  width: 100%;
  margin: ${spacing.md} 0 0;
`

export const ThemedSelectTrigger = styled.button`
  width: 100%;
  padding: 12px 40px 12px 14px;
  font-size: 14px;
  border-radius: 999px;
  border: 1px solid ${ui.chromeBorder};
  background: linear-gradient(145deg, ${daphne.main}, ${daphne.deep});
  color: ${colors.BrushStrokeThree};
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${daphne.main};
  }

  &:focus-visible {
    outline: none;
    border-color: ${daphne.main};
    box-shadow: 0 0 0 3px ${daphne.glow};
  }
`

export const ThemedSelectMenu = styled.ul`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  z-index: 20;
  overflow-y: auto;
  list-style: none;
  margin: 0;
  padding: 8px;
  border-radius: 14px;
  border: 1px solid ${ui.chromeBorder};
  background: ${white};
  box-shadow: 0 12px 24px ${ui.menuShadow};
`

export const ThemedSelectOption = styled.button<{ $active?: boolean }>`
  width: 100%;
  border: 0;
  border-radius: 10px;
  padding: 10px 12px;
  text-align: left;
  cursor: pointer;
  font-size: 0.95rem;
  color: ${colors.BrushStrokeThree};
  background: ${({ $active }) => ($active ? daphne.glow : 'transparent')};
  font-weight: 600;

  &:hover {
    background: ${daphne.glowSoft};
  }
`

export const DialScrew = styled.span<{ $x: 'left' | 'right'; $y: 'top' | 'bottom' }>`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ffffff, ${daphne.main});
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.35),
    0 1px 2px rgba(0, 0, 0, 0.4);
  ${({ $x }) => ($x === 'left' ? 'left: 14px;' : 'right: 14px;')}
  ${({ $y }) => ($y === 'top' ? 'top: 14px;' : 'bottom: 14px;')}

  &::after {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.45);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
  }
`

export const LighthouseBarChart = styled.div`
  margin-top: ${spacing.md};
  display: flex;
  justify-content: center;
`

export const LighthouseChartNote = styled.p`
  margin-top: ${spacing.lg};
  font-size: 0.8rem;
  color: ${ui.mutedGray};
`

export const MetricsPanel = styled.section`
  border-radius: 14px;
  border: 1px solid ${neutralRail};
  background: ${white};
  padding: ${spacing.md};
  max-width: 360px;
`

export const MetricsTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: ${slateText};
`

export const MetricsList = styled.dl`
  margin: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  row-gap: 0.4rem;
  font-size: 0.85rem;
  color: ${slateText};
`

export const MetricsLabel = styled.dt`
  font-weight: 500;
`

export const MetricsValue = styled.dd`
  margin: 0;
  text-align: right;
  color: ${ui.slateMid};
`

export const MetricsNote = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.78rem;
  color: ${ui.mutedGray};
`
/** Mobile: tuner → preview → scores/metrics. Desktop: preview left, tuner + results right. */
export const PerformanceSection = styled.div`
  display: grid;
  margin: ${spacing.lg} auto 0;
  gap: ${spacing.lg};
  flex: 0 0 auto;
  max-width: 800px;
  grid-template-columns: 1fr;
  grid-template-areas:
    'tuner'
    'preview'
    'results';

  ${fromDesktop`
    max-width: 100%;
    grid-template-columns: minmax(260px, 400px) minmax(0, 1fr);
    grid-template-rows: auto auto;
    grid-template-areas:
      'preview tuner'
      'preview results';
    align-items: start;
  `}
`

export const TunerArea = styled.div`
  grid-area: tuner;
  min-width: 0;
`

export const PreviewArea = styled.div`
  grid-area: preview;
  min-width: 0;
  display: flex;
  justify-content: center;
`

export const ResultsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};

  ${fromTablet`
    flex-direction: row;
    align-items: flex-start;
  `}
`

export const LighthouseMetricsColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  flex: 1;
  min-width: 0;
`

export const ResultsArea = styled(LighthouseMetricsColumn)``

/** Reserves one line + icon so the report link does not shift layout when it appears. */
export const ReportLinkSlot = styled.div`
  margin-top: 20px;
  min-height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;

  ${fromTablet`
    justify-content: flex-start;
  `}
`

export const ReportLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: ${colors.textMuted};
  font-size: ${typography.fontSizeSm};
  font-family: 'JetBrains Mono', monospace;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: translateX(3px);
  }

  svg {
    font-size: 0.85rem;
    /* This ensures the icon aligns perfectly with the text baseline */
    margin-bottom: 1px;
  }
`

export const IconGlow = styled.div``
