import styled from 'styled-components'
import { colors } from '@portfolio/design'

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
  background: linear-gradient(180deg, #4a3625 0%, #20160f 100%);
  border: 6px solid #e1d4c2;
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
  color: #ff573d;
  font-size: 34px;
  text-align: center;
  font-weight: 900;
  letter-spacing: 6px;
  text-shadow: 0 0 15px rgba(255, 87, 61, 0.6);
  margin-bottom: 10px;
  z-index: 2;
  position: relative;
`

export const FrequencyScale = styled.div`
  position: relative;
  height: 74px;
  border-top: 1px solid rgba(255, 202, 115, 0.28);
  border-bottom: 1px solid rgba(255, 202, 115, 0.28);
  margin-top: 6px;
  z-index: 2;
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

export const KcSide = styled.div<{ $side: 'left' | 'right' }>`
  position: absolute;
  top: -6px;
  ${({ $side }) => ($side === 'left' ? 'left: 0;' : 'right: 0;')}
  color: #ffca73;
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
  color: ${({ $active }) => ($active ? '#ffe8a3' : '#ffca73')};
  font-family: 'JetBrains Mono', monospace;
  z-index: 2;

  .tick {
    width: 2px;
    height: 12px;
    background: ${({ $active }) => ($active ? '#ffe8a3' : '#ffca73')};
    border-radius: 2px;
  }

  .label {
    margin-top: 4px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-shadow: 0 0 10px rgba(255, 202, 115, 0.15);

    /* Make the active station pop as the needle crosses. */
    opacity: ${({ $active }) => ($active ? 1 : 0.75)};
    filter: ${({ $active }) =>
      $active ? 'drop-shadow(0 0 10px rgba(255, 202, 115, 0.25))' : 'none'};
  }
`

export const Needle = styled.div<{ $position: number }>`
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 2px;
  background: linear-gradient(180deg, #ff6e54 0%, #ff573d 100%);
  box-shadow: 0 0 16px rgba(255, 87, 61, 0.7);
  left: ${({ $position }) => `${$position}%`};
  transition: left 0.15s ease-out;
  z-index: 5;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    background: rgba(255, 87, 61, 0.9);
  }
`

export const TunerReadout = styled.div`
  /* Small “caption” pill between the logo and the KC scale */
  display: flex;
  width: fit-content;
  align-items: center;
  justify-content: center;
  font-family: 'JetBrains Mono', monospace;
  color: #ffca73;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.18em;
  line-height: 1;
  padding: 4px 14px;
  margin-left: auto;
  margin-right: auto;
  margin-top: -6px;
  opacity: 0.98;
  z-index: 2;
  position: relative;

  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 202, 115, 0.18);
  border-radius: 999px;
  box-shadow:
    inset 0 0 10px rgba(0, 0, 0, 0.35),
    0 0 16px rgba(255, 202, 115, 0.06);

  @media (max-width: 520px) {
    font-size: 10px;
    letter-spacing: 0.14em;
    padding: 3px 12px;
    margin-top: -5px;
  }
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
    0 0 0 9px rgba(157, 193, 216, 0.35),
    0 14px 22px rgba(0, 0, 0, 0.45);
  cursor: grab;
  user-select: none;
  z-index: 10;
  touch-action: none;

  &:active {
    cursor: grabbing;
  }
`

export const RotatingPart = styled.div<{ $rotation: number }>`
  position: absolute;
  inset: 0;
  border-radius: 50%;
  transform: rotate(${props => props.$rotation}deg);
  transition: transform 0.15s ease-out;
`

export const NumberedSkirt = styled.div`
  position: absolute;
  inset: -8px;
  border-radius: 50%;
  background: #111;
  box-shadow: inset 0 0 14px rgba(255, 255, 255, 0.04);
`

export const SkirtNumber = styled.span<{ $deg: number }>`
  position: absolute;
  left: 50%;
  top: 50%;
  /* angle in degrees; rotate then push outward so tick touches knob edge */
  transform: translate(-50%, -50%) rotate(${props => props.$deg}deg) translateY(-50px);
  width: 2px;
  height: 10px;
  border-radius: 2px;
  background: white;
`

export const SilverCap = styled.div`
  position: absolute;
  top: 15%;
  left: 15%;
  right: 15%;
  bottom: 15%;
  border-radius: 50%;
  background: conic-gradient(from 180deg, #999, #eee, #888, #999);
  box-shadow:
    inset 0 0 5px rgba(0, 0, 0, 0.5),
    0 2px 5px rgba(0, 0, 0, 0.4);
`
