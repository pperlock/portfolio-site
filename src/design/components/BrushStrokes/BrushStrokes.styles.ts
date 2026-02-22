import styled from 'styled-components'
import { colors, fromDesktop } from '@/design'

export const Brushstrokes = styled.div`
  height: 60px;
  position: relative;
  margin-top: 0.5rem;

  ${fromDesktop`
    height: 100px;
    margin-top: 1rem;
  `}
`

export const Brushstroke = styled.div`
  position: absolute;
  height: 4px;
  border-radius: 2px;
  opacity: 0.6;
`

export const Brushstroke1 = styled(Brushstroke)`
  width: 80px;
  background: ${colors.BrushStrokeTwo};
  top: 6px;
  left: 0;
  transform: rotate(-5deg);

  ${fromDesktop`
    width: 120px;
    top: 10px;
  `}
`

export const Brushstroke2 = styled(Brushstroke)`
  width: 70px;
  background: ${colors.BrushStrokeOne};
  top: 20px;
  left: 12px;
  transform: rotate(3deg);

  ${fromDesktop`
    width: 100px;
    top: 30px;
    left: 20px;
  `}
`

export const Brushstroke3 = styled(Brushstroke)`
  width: 90px;
  background: ${colors.BrushStrokeThree};
  top: 34px;
  left: 6px;
  transform: rotate(-2deg);

  ${fromDesktop`
    width: 140px;
    top: 50px;
    left: 10px;
  `}
`
