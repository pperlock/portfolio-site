import styled from 'styled-components'
import { layout, spacing, fromTablet } from '@portfolio/design'

export const DevCornerHeroSection = styled.section`
  padding: ${spacing.lg} ${spacing.sm};
`

export const DevCornerHeroInner = styled.div`
  max-width: ${layout.containerMax};
  margin: 0 auto;
`

export const DevCornerHeroTitle = styled.div`
  text-align: left;
  margin-bottom: ${spacing.md};
`

export const DevCornerHeroBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};

  ${fromTablet`
    flex-direction: row;
    align-items: flex-start;
  `}
`

export const DevCornerHeroContent = styled.div`
  flex: 1;
  text-align: left;
`

export const DevCornerHeroImageWrap = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  aspect-ratio: 4 / 3;
  position: relative;
`

