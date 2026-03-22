import styled from 'styled-components'
import { VINTAGE_THEME } from '@portfolio/design'

const { rgba, tuner, shell, glow, amber, console: vintageConsole, daphne } = VINTAGE_THEME

export const PerformanceSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
`

export const TunerDisplay = styled.div`
  width: 100%;
  position: relative;
  overflow: hidden;
  background: linear-gradient(
    180deg,
    ${tuner.caseWoodStart} 0%,
    ${tuner.caseWoodEnd} 100%
  );
  border: 6px solid ${shell.creamEnd};
  border-radius: 16px;
  padding: 18px 22px 30px;
  isolation: isolate;
  box-shadow:
    inset 0 0 70px rgba(0, 0, 0, 0.65),
    0 18px 35px rgba(0, 0, 0, 0.25),
    inset 0 1px 0 rgba(255, 255, 255, 0.25),
    inset 0 -1px 0 rgba(0, 0, 0, 0.25);

  /* Inner ridge / embossed look */
  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.35);
    box-shadow:
      inset 0 0 0 1px rgba(0, 0, 0, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.22),
      inset 0 -1px 0 rgba(0, 0, 0, 0.25);
    z-index: 0;
    pointer-events: none;
  }
`

export const GlassOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 0%, rgba(255, 255, 255, 0.18), transparent 55%);
  mix-blend-mode: screen;
  pointer-events: none;
  z-index: 1;
`

export const FenderLogo = styled.div`
  color: ${glow.pipeMain};
  font-size: 34px;
  text-align: center;
  font-weight: 900;
  letter-spacing: 6px;
  text-shadow: 0 0 15px ${rgba.pipe(0.6)};
  margin-bottom: 10px;
  z-index: 2;
  position: relative;
`

export const FrequencyScale = styled.div`
  position: relative;
  height: 74px;
  border-top: 1px solid ${rgba.amberFace(0.28)};
  border-bottom: 1px solid ${rgba.amberFace(0.28)};
  margin-top: 6px;
  z-index: 2;
`

export const KcSide = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: -6px;
  ${({ $side }) => ($side === 'left' ? 'left: 0;' : 'right: 0;')}
  color: ${amber};
  font-family: 'JetBrains Mono', monospace;
  font-size: 11px;
  letter-spacing: 0.25em;
  opacity: 0.9;
  z-index: 2;
`

export const FrequencyMark = styled.div<{ $active?: boolean }>`
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ $active }) =>
    $active ? vintageConsole.amberBright : amber};
  font-family: 'JetBrains Mono', monospace;
  z-index: 2;

  .tick {
    width: 2px;
    height: 12px;
    background: ${({ $active }) =>
      $active ? vintageConsole.amberBright : amber};
    border-radius: 2px;
  }

  .label {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-shadow: 0 0 10px ${rgba.amberFace(0.15)};

    /* Make the active station pop as the needle crosses. */
    opacity: ${({ $active }) => ($active ? 1 : 0.75)};
    filter: ${({ $active }) =>
      $active ? `drop-shadow(0 0 10px ${rgba.amberFace(0.25)})` : 'none'};
  }
`

export const Needle = styled.div<{
  $position: number
  $instant?: boolean
  $isAligned?: boolean
}>`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 2px;
  background: linear-gradient(
    180deg,
    ${glow.pipeHot} 0%,
    ${glow.pipeMain} 100%
  );
  box-shadow: 0 0 16px ${rgba.pipe(0.7)};
  left: ${({ $position }) => `${$position}%`};
  transition: ${({ $instant }) =>
    $instant ? 'none' : 'left 0.2s cubic-bezier(0.22, 1, 0.36, 1), filter 0.3s ease'};
  z-index: 5;
  filter: ${({ $isAligned }) =>
    $isAligned
      ? `drop-shadow(0 0 8px ${rgba.pipe(1)})`
      : `drop-shadow(0 0 2px ${rgba.pipe(0.4)})`};

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: ${rgba.pipe(0.9)};
  }
`

export const TunerReadout = styled.div`
  /* Small “caption” pill between the logo and the KC scale */
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  color: ${amber};
  font-weight: 700;
  letter-spacing: 0.18em;
  line-height: 1;
  padding: 8px 14px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -6px;
  opacity: 0.98;
  z-index: 2;
  position: relative;

  background: rgba(0, 0, 0, 0.3);
  border: 1px solid ${rgba.amberFace(0.18)};
  border-radius: 999px;
  box-shadow:
    inset 0 0 10px rgba(0, 0, 0, 0.35),
    0 0 16px ${rgba.amberFace(0.06)};
`

export const TunerControls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -58px;
  position: relative;
  z-index: 5;
`

export const KnobBase = styled.div`
  position: relative;
  width: 110px;
  height: 110px;
  border-radius: 50%;
  background: radial-gradient(circle at 30% 25%, #2a2a2a 0%, #0f0f0f 55%, #000 100%);
  box-shadow:
    0 0 0 9px ${daphne.glow},
    0 14px 22px rgba(0, 0, 0, 0.45);
  user-select: none;
  z-index: 10;
  cursor: default;
`

export const RotatingPart = styled.div<{ $rotation: number; $instant?: boolean }>`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  transform: rotate(${props => props.$rotation}deg);
  transition: ${({ $instant }) =>
    $instant ? 'none' : 'transform 0.2s cubic-bezier(0.22, 1, 0.36, 1)'};
`

export const NumberedSkirt = styled.div`
  position: absolute;
  inset: -12px; /* Pull it out slightly further */
  border-radius: 50%;

  /* Conic gradient creates a 'lathe-turned' plastic look with subtle highlights */
  background: conic-gradient(
    from 160deg,
    #111 0%,
    #222 10%,
    #111 20%,
    #050505 45%,
    #2a2a2a 50%,
    #050505 55%,
    #111 100%
  );

  /* This is the magic: multiple shadows to create a 3D rim */
  box-shadow:
    /* External rim highlight (top-left) */
    inset 0 2px 3px rgba(255, 255, 255, 0.15),
    /* External rim shadow (bottom-right) */ inset 0 -2px 3px rgba(0, 0, 0, 0.8),
    /* The main shadow that separates it from the silver cap */ 0 4px 10px rgba(0, 0, 0, 0.5);

  /* Add a subtle "texture" layer */
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle at center, transparent 60%, rgba(0, 0, 0, 0.4) 100%);
  }
`

export const SkirtNumber = styled.span<{ $deg: number }>`
  position: absolute;
  left: 50%;
  top: 50%;

  transform: translate(-50%, -50%) rotate(${props => props.$deg}deg) translateY(-52px)
    rotate(180deg);

  width: 4px; /* Slightly wider */
  height: 10px;

  /* The Taper: wider at the bottom than the top */
  clip-path: polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);

  /* Metallic Etched Look */
  background: linear-gradient(to bottom, #444 0%, #eee 50%, #fff 100%);

  /* Inner shadow to make it look "stamped" into the plastic */
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.8);

  opacity: 0.9;
  filter: drop-shadow(0 1px 0px rgba(255, 255, 255, 0.2));
`

export const SilverCap = styled.div`
  position: absolute;
  inset: 15%; /* Shorthand for top/left/right/bottom */
  border-radius: 50%;
  z-index: 14;
  pointer-events: none;

  /* The "Brushed" Conic Gradient */
  background: conic-gradient(
    from 180deg,
    #777 0%,
    #eee 10%,
    #888 20%,
    #fff 35%,
    #999 50%,
    #eee 65%,
    #777 80%,
    #999 100%
  );

  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.5),
    /* The "gap" between metal and plastic */ 0 4px 8px rgba(0, 0, 0, 0.4),
    /* Soft shadow cast onto the skirt */ inset 0 0 5px rgba(0, 0, 0, 0.2);

  /* This inner pseudo-element creates the "top face" of the knob */
  &::after {
    content: '';
    position: absolute;
    inset: 10%;
    border-radius: 50%;
    background: radial-gradient(circle at 30% 30%, #fff 0%, #bbb 50%, #999 100%);
    box-shadow:
      inset 0 1px 2px rgba(255, 255, 255, 0.8),
      0 2px 4px rgba(0, 0, 0, 0.3);
  }
`
export const KnobIndicator = styled.div`
  position: absolute;
  top: 22%;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${glow.pipeMain};
  box-shadow:
    0 0 5px ${rgba.pipe(0.8)},
    inset 0 1px 1px rgba(0, 0, 0, 0.4);
  z-index: 15;
  pointer-events: none;
`

/** Invisible hit target centered on the pip — dial drag uses grab offset so rotation tracks finger. */
export const KnobIndicatorGrabZone = styled.div`
  position: absolute;
  top: calc(22% + 3px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: transparent;
  cursor: grab;
  touch-action: none;
  z-index: 16;

  &:active {
    cursor: grabbing;
  }
`

export const KnobReflection = styled.div`
  position: absolute;
  top: -10%;
  left: 10%;
  right: 10%;
  height: 40%;
  background: linear-gradient(to bottom, ${rgba.amberFace(0.15)} 0%, transparent 100%);
  filter: blur(8px);
  pointer-events: none;
  z-index: 20;
`
