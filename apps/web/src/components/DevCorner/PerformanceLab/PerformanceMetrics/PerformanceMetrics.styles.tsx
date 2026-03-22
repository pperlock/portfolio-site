import styled, { keyframes } from 'styled-components'
import { VINTAGE_THEME } from '@portfolio/design'

const { shell, ink, console: vintageConsole, ui, glow, rgba, neutralRail } = VINTAGE_THEME

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
  display: flex;
  justify-content: center;
  align-items: center;
`
export const ConsoleContainer = styled.div`
  /* Main panel surface – match the lighter \"Latest Audit\" background tone */
  background: linear-gradient(
    180deg,
    ${shell.paper},
    ${shell.creamEnd}
  );
  border-radius: 16px;
  padding: 24px 28px;
  color: ${ink.primary};
  font-family: 'JetBrains Mono', 'Fira Code', monospace;
  box-shadow:
    0 22px 40px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    inset 0 -1px 0 rgba(0, 0, 0, 0.4);
  position: relative;
  overflow: hidden;
  border: 3px solid ${shell.frame};
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
  color: ${vintageConsole.bronze};
`

export const RunProgress = styled.div`
  height: 5px;
  border-radius: 999px;
  background: ${ui.panelInset};
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
      ${glow.pipeMain},
      ${glow.pipeHot}
    );
    box-shadow: 0 0 8px ${rgba.pipe(0.6)};
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
  border-bottom: 1px dotted ${ui.dottedLine};
`

export const ProgressBar = styled.div<{ score: number }>`
  height: 4px;
  background: ${ui.progressTrack};
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
      ${glow.pipeMain},
      ${glow.pipeHot}
    );
    box-shadow: 0 0 10px ${rgba.pipe(0.6)};
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
    background: ${neutralRail};
    box-shadow: 0 0 6px ${rgba.pipe(0.6)};
    transform: translateX(-50%);
    left: ${({ score }) => score}%;
    transition: left 1s ease-in-out;
  }
`

export const LiveTag = styled.span`
  background: ${ui.liveTagBg};
  padding: 2px 10px;
  border-radius: 999px;
  font-size: 0.7rem;
  border: 1px solid ${ui.liveTagBorder};
  color: ${ink.primary};
  animation: ${pulse} 2s infinite;
`

export const HeaderLabel = styled.span<{ isLoading: boolean }>`
  animation: ${props => (props.isLoading ? pulse : 'none')};
`
