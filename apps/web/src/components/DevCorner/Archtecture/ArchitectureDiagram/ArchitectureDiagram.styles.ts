import styled from 'styled-components'
import { FaReact, FaDatabase, FaCubes } from 'react-icons/fa'

// Wrapper for the whole diagram
export const DiagramWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

// Layer for boxes
export const Layer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  min-height: 140px; /* ensures top layer is above middle */
  margin: 2rem 0;
`

// Flip card
type CardProps = {
  bg?: string
}

export const Card = styled.div`
  width: 220px;
  height: 160px;
  perspective: 1200px;
`

export const CardInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
  cursor: default;

  ${Card}:hover & {
    transform: rotateY(180deg);
  }
`

const CardFace = styled.div<CardProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  backface-visibility: hidden;
  padding: 1rem 1.5rem;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    0 10px 24px rgba(15, 23, 42, 0.16),
    0 0 0 1px rgba(255, 255, 255, 0.7);
`

export const CardFront = styled(CardFace)`
  background-color: ${({ bg = '#ffffff' }) => bg};
  color: #111827;
  text-align: center;
  font-weight: 500;
`

export const CardBack = styled(CardFace)`
  background-color: #0f172a;
  color: #e5e7eb;
  transform: rotateY(180deg);
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const IconWrapper = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`

// (Previous tooltip styles removed in favor of card flip interaction)

// Icons
export const ReactIcon = FaReact
export const DatabaseIcon = FaDatabase
export const CubesIcon = FaCubes
