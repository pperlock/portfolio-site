import styled from 'styled-components'
import { spacing, fromTablet, typography, colors, fromDesktop } from '@/design'

export const CollaborationTagline = styled.blockquote`
  font-size: ${typography.fontSize2xl};
  font-style: italic;
  max-width: 100%;
  font-weight: 300;
  text-align: center;
  margin-top: 3rem;
  line-height: 1.4;
  color: ${colors.textHeader};

  ${fromTablet`
    max-width: 400px;
  `}
  ${fromDesktop`
    font-size: 2.5rem;
  `}
`
export const CollaborationImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${fromTablet`
    max-width: 350px;
    width: 350px;
    height: 350px;
  `}
`

export const CollaborationRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing.md};

  ${fromDesktop`
    flex-direction: row;
    align-items: center;
  `}
`
