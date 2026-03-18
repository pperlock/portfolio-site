import styled from 'styled-components'
import { FaReact, FaDatabase, FaCubes } from 'react-icons/fa'
import { fromTablet, fromDesktop } from '@portfolio/design'

// Wrapper for the whole diagram (overflow visible so react-archer SVG arrows aren't clipped)
export const DiagramWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: visible;
  min-width: min-content;
`

export const Layer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  min-height: 145px;
  margin: 1rem 0;

  ${fromTablet`
    gap: 0.75rem;
    min-height: 145px;
    margin: 1rem 0;
  `}

  ${fromDesktop`
    flex-wrap: nowrap;
    gap: 2.4rem;
    min-height: 168px;
  `}
`

export const ReactIcon = FaReact
export const DatabaseIcon = FaDatabase
export const CubesIcon = FaCubes
