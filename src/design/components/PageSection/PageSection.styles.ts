import styled from 'styled-components'
import { colors, shadow, layout, fromTablet, fromDesktop, typography } from '@/design'

export const InsetSection = styled.section`
  background-color: ${colors.bg};
  border-top: 1px solid ${colors.border};
  border-bottom: 1px solid ${colors.border};
  box-shadow: ${shadow.insetTop}, ${shadow.insetBottom};
`
export const OutsetSection = styled.section`
  background-color: ${colors.bgSubtle};
`

export const SectionContainer = styled.div`
  padding: 4rem 2rem;
  max-width: ${layout.containerMax};
  margin: 0 auto;

  ${fromDesktop`
    padding: 6rem 0;
  `}
`

export const SectionContainerContent = styled.div`
  max-width: ${layout.contentMax};
  margin: 0 auto;
`
export const SectionHeader = styled.h2`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-text-muted);
  text-transform: uppercase;
  font-size: ${typography.fontSizeLg};
  font-weight: normal;
  letter-spacing: 0.1rem;
  gap: 2rem;
  margin-bottom: 3rem;

  ${fromTablet`
    letter-spacing: 0.2rem;
    margin-bottom: 6rem;

    &::before,
    &::after {
      content: '';
      flex: 1 1 0;
      min-width: 2rem;
      height: 1px;
      background-color: ${colors.border};
      max-width: 400px;
    }
  `}
`
