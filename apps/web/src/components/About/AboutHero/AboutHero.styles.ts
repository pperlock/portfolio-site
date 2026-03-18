import styled from 'styled-components'
import {
  spacing,
  typography,
  colors,
  fromTablet,
  shadow,
  layout,
  fromDesktop,
} from '@portfolio/design'

export const Hero = styled.section`
  padding: 8rem ${spacing.sm} ${spacing.xl};
  background-color: ${colors.bg};
  box-shadow: ${shadow.md};
  margin-bottom: ${spacing.xl};
  font-family: ${typography.fontFamily};
  ${fromTablet`
    padding: 9rem ${spacing.md} ${spacing.lg};
  `}
`

export const Container = styled.div`
  max-width: ${layout.containerMax};
  margin: 0 auto;
`

export const HeroRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};
  align-items: center;

  ${fromTablet`
    flex-direction: row;
    align-items: stretch;
    gap: ${spacing.xs};
  `}
  ${fromDesktop`
    gap: ${spacing.xl};
  `}
`

export const HeroSubtitle = styled.p`
  font-size: ${typography.fontSizeLg};
  color: ${colors.textLight};
  margin-bottom: ${spacing.md};
  text-align: center;
  ${fromTablet`
    text-align: left;
  `}
`

export const HeroImageWrapper = styled.div`
  display: none;

  ${fromTablet`
    display: block;
    max-width: 350px;
    align-self: center;
  `}
`

export const HeroImageWrapperMobile = styled.div`
  max-width: 250px;
  margin: ${spacing.md} 0;
  margin: 0 auto ${spacing.md};

  ${fromTablet`
    display: none;
  `}
`

export const HeroImageInner = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  aspect-ratio: 4 / 5;
  clip-path: ellipse(100% 70% at 50% 10%);
  ${fromTablet`
    clip-path: ellipse(100% 75% at 50% 10%);
  `}
`

export const HeroBody = styled.div`
  ${fromTablet`
    p {
      text-align: left;
    }
  `}
`
