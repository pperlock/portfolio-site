import styled, { keyframes } from 'styled-components'

export const VINTAGE_LAB_THEME = {
  // The outer Daphne Blue console casing
  shell: {
    main: '#9dc1d8', // Daphne Blue teal
    paper: '#f4f1ea', // Aged paper background
    shadow: 'rgba(0,0,0,0.1)',
  },

  // The recessed internal diagnostic panel
  console: {
    bakelite: '#2a1f1a', // Deep warm brown interior
    frame: '#dcd0bc', // Thick cream/brass border
    bronze: '#8d7d65', // Muted labels/log text
    amber: '#ffca73', // Golden-amber primary text
  },

  // The glowing "Light-Pipe" and vacuum tube elements
  glow: {
    tube: '#ffae00', // Classic vacuum tube amber
    pipeMain: '#ff573d', // Deep red-orange light-pipe base
    pipeHot: '#ff6e54', // Bright orange heat-haze top
    stopper: '#e5e7eb', // Brushed silver mechanical cap
    shadow: 'rgba(255, 87, 61, 0.6)', // Atmospheric red-orange glow
  },

  // Functional UI state colors
  status: {
    success: '#ffae00', // In this theme, Amber = Ready
    loading: '#ffca73',
    error: '#ef4444',
  },
} as const

// --- Animations ---
export const pulse = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
`

export const scan = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(400%); }
`

const runSweep = keyframes`
  0% {
    left: -34%;
  }
  100% {
    left: 100%;
  }
`

export const Shell = styled.div`
  /* Wrapper kept only for layout spacing; no visible chrome */
  border-radius: 22px;
`
export const ConsoleContainer = styled.div`
  /* Main panel surface – match the lighter \"Latest Audit\" background tone */
  background: linear-gradient(180deg, ${VINTAGE_LAB_THEME.shell.paper}, #e1d4c2);
  border-radius: 16px;
  padding: 24px 28px;
  color: #2f241a;
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  box-shadow:
    0 22px 40px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    inset 0 -1px 0 rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  border: 3px solid ${VINTAGE_LAB_THEME.console.frame};
  width: 100%;
  max-width: 800px;

  &::before {
    /* Thin inner chrome edge */
    content: '';
    position: absolute;
    inset: 10px;
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.7);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.04);
    pointer-events: none;
  }
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.6);
  padding-bottom: 12px;
  margin-bottom: 20px;
  font-size: 0.75rem;
  color: ${VINTAGE_LAB_THEME.console.bronze};
`

export const RunProgress = styled.div`
  height: 5px;
  border-radius: 999px;
  background: rgba(47, 36, 26, 0.18);
  overflow: hidden;
  margin: -8px 0 16px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -34%;
    width: 34%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(
      90deg,
      ${VINTAGE_LAB_THEME.glow.pipeMain},
      ${VINTAGE_LAB_THEME.glow.pipeHot}
    );
    box-shadow: 0 0 8px ${VINTAGE_LAB_THEME.glow.shadow};
    animation: ${runSweep} 1.25s linear infinite;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-bottom: 1px dotted rgba(80, 63, 52, 0.9);
`

export const Screw = styled.span<{ $x: 'left' | 'right'; $y: 'top' | 'bottom' }>`
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 30%, #ffffff, ${VINTAGE_LAB_THEME.shell.main});
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.35),
    0 1px 2px rgba(0, 0, 0, 0.4);
  ${({ $x }) => ($x === 'left' ? 'left: 18px;' : 'right: 18px;')}
  ${({ $y }) => ($y === 'top' ? 'top: 18px;' : 'bottom: 18px;')}

  &::after {
    content: '';
    position: absolute;
    inset: 2px;
    border-radius: 50%;
    border: 1px solid rgba(0, 0, 0, 0.45);
    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.35);
  }
`

export const ProgressBar = styled.div<{ score: number }>`
  height: 4px;
  background: #161b22;
  flex-grow: 1;
  margin: 0 15px;
  position: relative;

  /* Long dark track */
  border-radius: 999px;

  &::before {
    /* Glowing tube segment */
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${({ score }) => score}%;
    background: linear-gradient(
      90deg,
      ${VINTAGE_LAB_THEME.glow.pipeMain},
      ${VINTAGE_LAB_THEME.glow.pipeHot}
    );
    box-shadow: 0 0 10px ${VINTAGE_LAB_THEME.glow.shadow};
    border-radius: inherit;
    transition: width 1s ease-in-out;
  }

  &::after {
    content: '';
    position: absolute;
    /* Thumb/stopper at end of the glowing pipe */
    top: -2px;
    height: 8px;
    width: 10px;
    border-radius: 999px;
    background: ${VINTAGE_LAB_THEME.glow.stopper};
    box-shadow: 0 0 6px ${VINTAGE_LAB_THEME.glow.shadow};
    transform: translateX(-50%);
    left: ${({ score }) => score}%;
    transition: left 1s ease-in-out;
  }
`

export const LiveTag = styled.span`
  background: rgba(255, 206, 120, 0.12);
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  border: 1px solid rgba(255, 206, 120, 0.35);
  color: #2f241a;
  animation: ${pulse} 2s infinite;
`

export const HeaderLabel = styled.span<{ isLoading: boolean }>`
  animation: ${props => (props.isLoading ? pulse : 'none')};
`
