import styled from 'styled-components'
import { typography, spacing, fromTablet, fromDesktop, headerFontSize, colors } from '@/design'

const getFontSize = (tag, viewport) => {
  return headerFontSize[tag][viewport]
}

export const Title = styled.h3.attrs(({ as }) => ({
  as: as,
}))`
  font-size: ${({ as }) => getFontSize(as, 'mobile')};
  position: static;
  font-weight: 700;
  color: ${colors.textHeader};
  line-height: 1.2;
  letter-spacing: 0;
  text-transform: lowercase;
  font-family: ${typography.fontFamilyHeading};
  margin: 0;
  margin-bottom: ${spacing.sm};

  &::after {
    content: '.';
  }
  ${({ as }) => fromTablet`font-size: ${getFontSize(as, 'tablet')};`}
  ${({ as }) => fromDesktop`font-size: ${getFontSize(as, 'desktop')};`}
`
