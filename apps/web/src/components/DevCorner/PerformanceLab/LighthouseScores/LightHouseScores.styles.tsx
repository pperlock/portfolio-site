import styled, { css, keyframes } from 'styled-components'
import { colors, fromTablet, spacing, typography } from '@portfolio/design'

const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

export const ScoresBlock = styled.div`
  padding: ${spacing.sm};
  border-radius: 12px;
  border: 3px solid ${colors.textMuted};
  background: linear-gradient(180deg, #c9c1b4, #b8afa0);
  box-shadow:
    0 16px 26px rgba(0, 0, 0, 0.35),
    inset 0 1px 0 rgba(255, 255, 255, 0.45),
    inset 0 -1px 0 rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;

  &::before {
    /* Inner chrome edge similar to the main metrics panel */
    content: '';
    position: absolute;
    inset: 8px;
    border-radius: 9px;
    border: 1px solid rgba(0, 0, 0, 0.55);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.08);
    pointer-events: none;
  }
`

export const ScoresGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.35rem;

  ${fromTablet`
    grid-template-columns: repeat(4, minmax(0, 1fr));
  `}
`

export const LighthouseScoreCard = styled.div<{ $score?: number; $loading?: boolean }>`
  padding: 0.5rem 0.2rem 0.75rem;
  width: 100%;
  text-align: center;
  transform-origin: center;
  animation: ${({ $loading }) =>
    $loading
      ? css`
          ${pulse} 0.8s ease-in-out infinite
        `
      : 'none'};

  .CircularProgressbar {
    padding: 6px;
    border-radius: 999px;
    background: radial-gradient(
      circle at 30% 20%,
      rgba(255, 255, 255, 0.2),
      rgba(210, 160, 60, 0.45) 32%,
      rgba(165, 95, 30, 0.55) 62%,
      rgba(70, 30, 15, 1) 100%
    );
    box-shadow:
      0 0 0 1px rgba(120, 53, 15, 0.7),
      0 4px 8px rgba(0, 0, 0, 0.45),
      inset 0 0 12px rgba(0, 0, 0, 0.6);
  }

  .CircularProgressbar-trail {
    stroke: rgba(0, 0, 0, 0.18) !important; /* subtle inner edge */
  }

  .CircularProgressbar-path {
    stroke-linecap: round;
    filter: drop-shadow(0 0 6px rgba(255, 190, 90, 0.35));
  }

  .CircularProgressbar-text {
    font-family: ${typography.fontFamilyHeading};
    font-weight: 700;
    fill: #3b2a1c !important;
    letter-spacing: 0.08em;
  }
`
export const LighthouseScoreLabel = styled.div`
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: #4f4132;
  margin-top: 0.15rem;
  font-weight: 600;
`
