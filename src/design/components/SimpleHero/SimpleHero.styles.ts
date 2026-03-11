import styled from 'styled-components'
import {
  colors,
  shadow,
  layout,
  motion,
  fromTablet,
  fromDesktop,
  typography,
  spacing,
} from '@/design'

const paddingSizes = {
  sm: spacing.md,
  md: spacing.lg,
  lg: spacing.xl,
}

export const HeroSection = styled.section<{ $paddingSize?: keyof typeof paddingSizes }>`
  position: relative;
  box-shadow: ${shadow.md};
  padding: ${({ $paddingSize }) => paddingSizes[$paddingSize ?? 'lg'] || paddingSizes.lg}
    ${spacing.sm};

  ${fromTablet`
    margin-top: 6rem;
    padding: ${({ $paddingSize }) => paddingSizes[$paddingSize ?? 'lg'] || paddingSizes.lg} ${spacing.md};
  `}

  ${fromDesktop`
    padding: ${({ $paddingSize }) => paddingSizes[$paddingSize ?? 'lg'] || paddingSizes.lg} 0;
  `}
`

export const HeroInner = styled.div<{ $hasImage?: boolean }>`
  max-width: ${layout.containerMax};
  margin: 0 auto;
  margin-top: 4rem;

  ${({ $hasImage }) =>
    $hasImage &&
    fromTablet`
    display: flex;
    align-items: center;
    gap: 2rem;
    justify-content: space-between;
  `}

  ${fromTablet`
    margin-top: 0;
  `}
`

export const HeroContent = styled.div<{ $hasImage?: boolean }>`
  ${({ $hasImage }) => $hasImage && fromTablet`flex: 1; min-width: 0;`}
`

export const HeroImageWrap = styled.div`
  flex-shrink: 0;
  width: 100%;
  max-width: 280px;
  margin-top: 1.5rem;
  background: transparent;
  aspect-ratio: 3 / 4;

  ${fromTablet`
    margin-top: 0;
    max-width: 320px;
  `}
`

export const HeroImage = styled.div`
  position: relative;
  width: 80%;
  height: 100%;
  transform: rotate(10deg);
  transition: ${motion.transition};
  border-radius: ${layout.radiusMd};
  overflow: hidden;

  ${fromTablet`
    width: 100%;
  `}
`

export const HeroImageLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  cursor: pointer;

  &:hover ${HeroImage} {
    transform: rotate(10deg) scale(1.1);
  }
`
export const HeroSubtitle = styled.p<{ $hasImage?: boolean }>`
  line-height: 1.7;
  color: ${colors.textLight};
  margin-top: 1rem;
  ${({ $hasImage }) => $hasImage && fromTablet`padding: 0 3rem 0 4rem;`}

  ${fromTablet`
    flex: 0.85;
    margin-left: auto;
  `}

  ${fromDesktop`
    font-size: ${typography.fontSizeXl};
  `}
`

export const HeroTitleRow = styled.div`
  ${fromTablet`
    margin-top: 1rem;

    display: flex;
    align-items: flex-start;
    gap: 1rem;
  `}
`
