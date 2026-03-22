import styled, { keyframes } from 'styled-components'
import { colors, fromTablet, spacing, typography, VINTAGE_THEME } from '@portfolio/design'

const { underDevelopment, daphne } = VINTAGE_THEME

const breathe = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.6; }
`

export const UnderDevWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${underDevelopment.sectionBg};
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;

  ${fromTablet`
    flex-direction: row;
  `}
`

export const UnderDevTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ImageContainer = styled.div`
  max-width: 350px;
  width: 100%;
  margin-bottom: ${spacing.md};

  ${fromTablet`
    max-width: 600px;
  `}

  img {
    width: 100%;
    height: auto;
  }
`

export const StatusBadge = styled.span`
  background: ${daphne.main};
  color: ${colors.bg};
  padding: ${spacing.xs} ${spacing.sm};
  border-radius: 20px;
  font-size: ${typography.fontSizeSm};
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  margin-bottom: ${spacing.sm};
  animation: ${breathe} 3s infinite ease-in-out;
`

export const Headline = styled.h2`
  font-size: ${typography.fontSize3xl};
  color: ${colors.textHeader};
  text-transform: uppercase;
  letter-spacing: -1px;
`

export const Subtext = styled.p`
  font-size: ${typography.fontSizeLg};
  color: ${colors.textMuted};
  text-align: center;
  line-height: 1.6;
  margin-top: ${spacing.sm};
`

export const LoadingBar = styled.div`
  width: 200px;
  height: 4px;
  background: ${underDevelopment.loadingTrack};
  margin-top: ${spacing.md};
  position: relative;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    width: 40%;
    height: 100%;
    background: ${daphne.main};
    animation: slide 2s infinite linear;
  }

  @keyframes slide {
    from {
      left: -40%;
    }
    to {
      left: 100%;
    }
  }
`
