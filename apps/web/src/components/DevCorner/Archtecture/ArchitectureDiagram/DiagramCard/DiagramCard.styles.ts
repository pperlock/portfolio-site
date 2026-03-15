import styled from 'styled-components'
import { fromTablet, fromDesktop } from '@portfolio/design'

type CardProps = {
  bg?: string
}

// Mobile and tablet: same size (180×138)
const cardFaceMobile = `
  border-radius: 12px;
  padding: 0.55rem 0.75rem;
`
const cardFaceTablet = `
  border-radius: 12px;
  padding: 0.55rem 0.75rem;
`
const cardFaceDesktop = `
  border-radius: 17px;
  padding: 1.2rem 1.8rem;
`

export const Card = styled.div`
  width: 165px;
  height: 138px;
  perspective: 1000px;
  flex-shrink: 0;

  ${fromTablet`
    width: 158px;
    height: 138px;
  `}

  ${fromDesktop`
    width: 264px;
    height: 192px;
    perspective: 1200px;
  `}
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
  backface-visibility: hidden;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow:
    0 10px 24px rgba(15, 23, 42, 0.16),
    0 0 0 1px rgba(255, 255, 255, 0.7);
  ${cardFaceMobile}

  ${fromTablet`
    ${cardFaceTablet}
  `}

  ${fromDesktop`
    ${cardFaceDesktop}
  `}
`

export const CardFront = styled(CardFace)`
  background-color: ${({ bg = '#ffffff' }) => bg};
  color: #111827;
  text-align: center;
  font-weight: 500;
  font-size: 0.95rem;

  small {
    font-size: 0.82rem;
  }

  ${fromTablet`
    font-size: 0.95rem;
    small {
      font-size: 0.82rem;
    }
  `}

  ${fromDesktop`
    font-size: inherit;
    small {
      font-size: inherit;
    }
  `}
`

export const CardBack = styled(CardFace)`
  background-color: #0f172a;
  color: #e5e7eb;
  transform: rotateY(180deg);
  font-size: 0.88rem;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${fromTablet`
    font-size: 0.88rem;
  `}

  ${fromDesktop`
    font-size: 1.02rem;
  `}
`

export const IconWrapper = styled.div`
  font-size: 1.65rem;
  margin-bottom: 0.25rem;

  ${fromTablet`
    font-size: 1.65rem;
    margin-bottom: 0.25rem;
  `}

  ${fromDesktop`
    font-size: 2.4rem;
    margin-bottom: 0.6rem;
  `}
`
