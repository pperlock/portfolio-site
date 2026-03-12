import styled from 'styled-components'
import { colors, spacing, typography, fromTablet } from '@portfolio/design'

export const Section = styled.section`
  padding: 0 ${spacing.sm};
  font-size: ${typography.fontSizeLg};

  ${fromTablet`
    margin: ${spacing.xl};
    padding: 0 ${spacing.md};
  `}

  p {
    font-size: ${typography.fontSizeLg};
  }
`

export const SectionAlt = styled.section`
  font-size: ${typography.fontSizeLg};
  padding: ${spacing.md} ${spacing.sm};
  background: ${colors.bgSubtle};

  ${fromTablet`
    padding: ${spacing.lg} ${spacing.md};
  `}
`

export const Content = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.75;

  ${fromTablet`
    padding: 0 ${spacing.md};
  `}

  h2 {
    margin-bottom: ${spacing.md};
    font-size: ${typography.fontSizeXl};

    ${fromTablet`
      font-size: ${typography.fontSize2xl};
    `}
  }
  > p {
    font-family: ${typography.fontFamily};
    margin-bottom: ${spacing.md};
  }
`
