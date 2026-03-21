import styled from 'styled-components'
import Image from 'next/image'
import {
  colors,
  shadow,
  layout,
  fromTablet,
  fromDesktop,
  typography,
  fromWide,
  spacing,
} from '@portfolio/design'

export const HeroSection = styled.section`
  padding-top: 150px;
  position: relative;
  box-shadow: ${shadow.md};

  ${fromTablet`
    padding-top: 90px;
  `}
`

/** Same max-width and horizontal padding as Header NavWrapper so hero lines up with nav */
export const HeroContent = styled.div`
  max-width: ${layout.containerMax};
  margin: 0 auto;
  position: relative;
  width: 100%;
`

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  max-width: ${layout.containerMax};
  width: 100%;
  margin-top: 2rem;
`

export const HeroTaglineLeft = styled.div`
  position: absolute;
  top: -5rem;
  left: 0;
  z-index: 10;
  max-width: 500px;
  margin-bottom: 0;
  max-width: 100%;
  text-align: left;
  padding: 0 ${spacing.sm};
  ${fromTablet`
    padding: 0 ${spacing.md};
  `}
  ${fromWide`
    padding: 0;
  `}
`

export const TaglineLabelLarge = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${colors.text};
  margin-bottom: 1rem;
  text-transform: lowercase;
  letter-spacing: -0.02em;
  line-height: 1.1;

  ${fromTablet`
    font-size: ${typography.fontSize4xl};
  `}

  ${fromDesktop`
    font-size: ${typography.fontSize5xl};
  `}
`

export const TaglineText = styled.p`
  color: ${colors.textLight};
  line-height: 1.7;
  font-weight: 400;
  margin-bottom: 2rem;
  margin-left: 1.5rem;

  ${fromTablet`
    font-size: 1.25rem;
    margin-left: 0;
  `}
`

export const HeroImageLeft = styled.div`
  position: relative;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  justify-content: center;

  ${fromTablet`
    margin-top: 6rem;
  `}
`

export const PortraitLeft = styled.div`
  position: relative;
  width: 100%;
  height: 650px;
  overflow: hidden;
  margin-right: -1px;

  ${fromTablet`
    height: auto;
    min-height: 753px;
    max-height: 753px;
  `}

  ${fromDesktop`
    min-height: 800px;
    max-height: 800px;
  `}
`

export const PortraitImage = styled(Image)`
  object-fit: cover;
  object-position: center 60%;
`

export const CoderOverlay = styled.div`
  position: absolute;
  top: 4rem;
  z-index: 10;
  right: 1rem;
  text-align: right;
  max-width: 400px;

  ${fromTablet`
    top: 8rem;
    right: 2rem;
  `}

  ${fromWide`
    right:0;
    max-width: 500px;
  `}
`

export const HeroButtons = styled.div`
  position: absolute;
  top: 25rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 10;
  max-width: 500px;
  align-items: flex-end;

  ${fromTablet`
    right: 2rem;
    top: 63%;
    gap: 0.75rem;
  `}

  ${fromDesktop`
    top: 70%;
  `}

  & > * {
    font-size: ${typography.fontSizeSm};
    padding: 0.5rem 1rem;
    ${fromTablet`
      font-size: ${typography.fontSizeBase};
      padding: 0.75rem 1.5rem;
    `}
  }
`
