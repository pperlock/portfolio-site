import { spacing, fromTablet, colors, typography, fromDesktop } from '@portfolio/design'
import styled from 'styled-components'

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
  color: #374151;
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
  color: #111827;
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
  border: 1px solid rgba(79, 95, 120, 0.9);
  background: linear-gradient(145deg, #f8f3e8, #e8ddcc);
  color: #2f241a;
  appearance: none;
  cursor: pointer;

  transition: all 0.2s ease;

  &:hover {
    border-color: #9dc1d8;
  }

  &:focus {
    outline: none;
    border-color: #9dc1d8;
    box-shadow: 0 0 0 3px rgba(157, 193, 216, 0.35);
  }

  &:disabled {
    background: #f5f5f5;
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
  border-top: 6px solid rgba(47, 36, 26, 0.9);
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
  border: 1px solid rgba(79, 95, 120, 0.9);
  background: linear-gradient(145deg, #9dc1d8, #7ba2bd);
  color: ${colors.BrushStrokeThree};
  font-weight: 600;
  text-align: left;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: #9dc1d8;
  }

  &:focus-visible {
    outline: none;
    border-color: #9dc1d8;
    box-shadow: 0 0 0 3px rgba(157, 193, 216, 0.35);
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
  border: 1px solid rgba(79, 95, 120, 0.9);
  background: #ffffff;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
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
  background: ${({ $active }) => ($active ? 'rgba(157, 193, 216, 0.35)' : 'transparent')};
  font-weight: 600;

  &:hover {
    background: rgba(157, 193, 216, 0.24);
  }
`

export const DialScrew = styled.span<{ $x: 'left' | 'right'; $y: 'top' | 'bottom' }>`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ffffff, ${colors.BrushStrokeThree});
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
  color: #6b7280;
`

export const MetricsPanel = styled.section`
  border-radius: 14px;
  border: 1px solid #e5e7eb;
  background: #ffffff;
  padding: ${spacing.md};
  max-width: 360px;
`

export const MetricsTitle = styled.h3`
  margin: 0 0 0.75rem;
  font-size: 0.95rem;
  font-weight: 600;
  color: #111827;
`

export const MetricsList = styled.dl`
  margin: 0;
  display: grid;
  grid-template-columns: auto 1fr;
  column-gap: 0.75rem;
  row-gap: 0.4rem;
  font-size: 0.85rem;
  color: #111827;
`

export const MetricsLabel = styled.dt`
  font-weight: 500;
`

export const MetricsValue = styled.dd`
  margin: 0;
  text-align: right;
  color: #4b5563;
`

export const MetricsNote = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.78rem;
  color: #6b7280;
`
export const PerformanceSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spacing.lg} auto 0;
  gap: ${spacing.lg};
  flex: 0 0 auto;
  max-width: 800px;
  ${fromDesktop`
    max-width: 100%;
    flex-direction: row;
    align-items: flex-start;
  `}
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

export const ReportLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
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
