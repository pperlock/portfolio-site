import styled from 'styled-components'
import { spacing, typography, colors, fromTablet, shadow, layout } from '@/design'

export const Hero = styled.section`
  padding: 8rem ${spacing.sm} ${spacing.xl};
  background-color: ${colors.bg};
  box-shadow: ${shadow.md};
  margin-bottom: ${spacing.xl};
  font-family: ${typography.fontFamily};
  ${fromTablet`
    padding: 8rem ${spacing.md} ${spacing.xl};
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
    gap: ${spacing.xl};
  `}
`

export const HeroTitle = styled.h1`
  font-family: ${typography.fontFamilyHeading};
  font-size: ${typography.fontSize4xl};
  text-transform: lowercase;
  letter-spacing: ${typography.letterSpacingTight};
  color: ${colors.text};
  margin-bottom: ${spacing.sm};
`

export const HeroSubtitle = styled.p`
  font-size: ${typography.fontSizeLg};
  color: ${colors.textLight};
  margin-bottom: ${spacing.md};
`

export const HeroParagraph = styled.p`
  margin-bottom: ${spacing.sm};
  font-size: ${typography.fontSizeLg};
  color: ${colors.text};
  line-height: 1.8;
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
  width: 200px;
  margin: ${spacing.md} 0;
  margin: 0 auto ${spacing.md};

  ${fromTablet`
    display: none;
  `}
`

export const HeroImageInner = styled.div`
  width: 100%;
  overflow: hidden;
`

export const HeroImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  vertical-align: middle;
  clip-path: ellipse(100% 90% at 50% 10%);
`
