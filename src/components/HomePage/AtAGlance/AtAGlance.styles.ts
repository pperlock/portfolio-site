import styled from 'styled-components'
import { fromTablet, typography, colors } from '@/design'

export const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  ${fromTablet`
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  `}
`

export const StyledItem = styled.li`
  font-size: ${typography.fontSizeBase};
  color: ${colors.textHeader};
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;

  &::before {
    content: '•';
    position: absolute;
    left: 0;
    color: #666;
    font-weight: bold;
    font-size: ${typography.fontSizeXl};
    line-height: 1;
  }
`
