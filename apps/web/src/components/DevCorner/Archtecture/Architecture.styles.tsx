import styled from 'styled-components'
import { spacing, fromTablet, colors, typography } from '@portfolio/design'

/** Same stack as UnderDevelopment `Headline` (“Stay Tuned”). */
const underDevHeadlineFont = `'Helvetica Neue', Helvetica, Arial, sans-serif`

const fromMidTablet = (strings: TemplateStringsArray, ...interpolations: unknown[]) =>
  `@media (min-width: 937px) { ${strings.reduce((acc, str, i) => acc + str + (interpolations[i] ?? ''), '')} }`

export const ArchitectureLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
  margin-bottom: ${spacing.lg};

  ${fromMidTablet`
    flex-direction: row;
    align-items: space-between;
  `}
`

/** Nested block under Architecture (e.g. server / BFF data flow). */
export const ArchitectureSubsection = styled.section`
  margin-top: ${spacing.xl};
  padding-top: ${spacing.lg};
  border-top: 1px solid ${colors.border};
`

export const ServerDataFetchingTitle = styled.h3`
  font-family: ${underDevHeadlineFont};
  font-size: ${typography.fontSizeLg};
  font-weight: 700;
  color: ${colors.textHeader};
  text-transform: uppercase;
  letter-spacing: -1px;
  line-height: 1.2;
  margin: 0 0 ${spacing.sm};

  ${fromTablet`
    font-size: ${typography.fontSize2xl};
  `}
`

export const ArchitectureDiagramWrapper = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: ${spacing.md};
  position: relative;
  overflow-x: auto;
  overflow-y: visible;
  -webkit-overflow-scrolling: touch;

  ${fromMidTablet`
    margin-top: 0;
    overflow: visible;
  `}
`

export const TechStackLayout = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  ${fromTablet`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: ${spacing.md};
  `}
`

export const TechStackTitle = styled.div`
  position: absolute;
  top: 5px;
  left: 57%;
  color: ${colors.textMedium};
  background: ${colors.bgMuted};
  padding: ${spacing.xs};
  border-radius: ${spacing.sm};
  border: 1px solid ${colors.BrushStrokeThree};
  box-shadow: 0 0 10px 0 ${colors.BrushStrokeThree};
  transform: rotate(-7deg);
  ${fromTablet`
    left: 40%;
    top: 40px;
  `}
  ${fromMidTablet`
    left: 38%;
  `}
`

export const TechStackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`

export const TechStackGroupTitle = styled.p`
  margin: ${spacing.md} 0 ${spacing.xs};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.8rem;
  color: ${colors.textMedium};

  &:first-of-type {
    margin-top: 0;
  }
`

export const TechStackItem = styled.li<{ $isLast?: boolean }>`
  position: relative;
  padding-left: 1.75rem;

  &::before {
    content: ${({ $isLast }) => ($isLast ? "'└─'" : "'├─'")};
    position: absolute;
    left: 0;
    top: 0;
    color: ${colors.textMedium};
    font-size: 0.85rem;
  }
`
