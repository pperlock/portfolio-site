import styled from 'styled-components'
import { spacing, fromTablet, fromDesktop } from '../../tokens'

export const WorkGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${spacing.md};
  width: 100%;

  ${fromTablet`
    grid-template-columns: repeat(2, 1fr);
  `}
  ${fromDesktop`
    grid-template-columns: repeat(3, 1fr);
  `}
`
