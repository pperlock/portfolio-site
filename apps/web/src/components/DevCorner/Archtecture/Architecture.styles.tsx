import styled from 'styled-components'
import { spacing, fromTablet, colors } from '@portfolio/design'

export const ArchitectureLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: ${spacing.lg};
  ${fromTablet`
    flex-direction: row;
    align-items: space-between;
    }
  `};
`

export const ArchitectureDiagramWrapper = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  position: relative;

  ${fromTablet`
    margin-top: 0;
  `}
`

export const TechStackLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  ${fromTablet`
    flex-direction: row;
    align-items: flex-start;
    margin-top: 3rem;
  `}
`

export const TechStackTitle = styled.div`
  position: absolute;
  top: 5px;
  left: 225px;
  color: ${colors.textMedium};
  background: ${colors.bgMuted};
  padding: 0.5rem;
  border-radius: ${spacing.sm};
  border: 1px solid ${colors.BrushStrokeThree};
  box-shadow: 0 0 10px 0 ${colors.BrushStrokeThree};
  transform: rotate(-7deg);
`

export const TechStackList = styled.ul`
  list-style: none;
  padding-left: ${spacing.md};
`

export const TechStackItem = styled.li`
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;

  &::before {
    content: '•';
    color: #4caf50;
    display: inline-block;
    width: 1em;
    margin-right: 0.5em;
  }
`
