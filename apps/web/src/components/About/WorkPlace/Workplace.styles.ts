import styled from 'styled-components'
import { spacing, typography, colors, fromTablet } from '@portfolio/design'

export const MiniQuote = styled.span`
  display: block;
  font-weight: 600;
  font-size: ${typography.fontSizeLg};
  margin-bottom: ${spacing.sm};
  margin-left: ${spacing.sm};
  color: ${colors.textHeader};
  text-align: center;
`

export const PullQuote = styled.blockquote`
  font-size: ${typography.fontSizeXl};
  font-weight: 300;
  text-align: center;
  margin: ${spacing.md} auto;
  padding: 0 ${spacing.sm};
  max-width: 50ch;
  color: ${colors.textMuted};

  ${fromTablet`
    font-size: ${typography.fontSize2xl};
    margin: ${spacing.lg} auto;
  `}
`

export const WorkplaceLayout = styled.div`
  position: relative;
  margin: ${spacing.md} 0;
  overflow: hidden;
  ${fromTablet`
    margin: ${spacing.md} 0;
    overflow: visible;
  `}
`

export const WorkplaceTitle = styled.h2`
  margin-left: ${spacing.sm};
`

export const WorkplaceImageOneWrapper = styled.div`
  display: block;
  position: relative;
  width: 600px;
  top: -87px;
  left: -135px;

  ${fromTablet`
    position: absolute;
    top: -75px;
    left: -264px;
    width: 900px;
  `}
`

export const WorkplaceImage = styled.img`
  width: 100%;
`

export const WorkplaceImageTwoWrapper = styled.div`
  display: block;
  position: absolute;
  left: 117px;
  top: -36px;
  width: 300px;

  ${fromTablet`
    width: 400px;
    height: 400px;
    top: -120px;
    left: 129px;
  `}
`

export const WorkplaceTextGroup = styled.div<{ $isFirst?: boolean }>`
  ${fromTablet`
    margin-left: 300px;
    margin-top: ${(p: { $isFirst?: boolean }) => (p.$isFirst ? '100px' : '0')};
  `}
`
