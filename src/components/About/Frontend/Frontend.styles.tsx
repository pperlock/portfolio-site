import styled from 'styled-components'
import { spacing, fromTablet } from '@/design'

export const FrontendTitle = styled.h2`
  padding-left: ${spacing.sm};
  text-align: center;
  ${fromTablet`
    padding-left: 0;
  `}
`

export const FrontEndImageContainer = styled.div`
  width: 100%;
  max-width: 480px;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin: 0 auto ${spacing.md};
  border-radius: 8px;

  ${fromTablet`
    height: 245px;
  `}
`

export const FrontEndImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`
