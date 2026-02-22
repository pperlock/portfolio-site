import styled from 'styled-components'
import { colors, spacing, layout, fromTablet, fromDesktop, typography } from '@/design'

export const ResumeSection = styled.section`
  background-color: ${colors.bg};
  min-height: calc(100vh - 90px);
  padding: 8rem 1rem;

  ${fromTablet`
    padding: 8rem 2rem;
  `}
`

export const ResumeContainer = styled.div`
  max-width: ${layout.containerMax};
  margin: 0 auto;
`

export const ResumeHeader = styled.div`
  margin-bottom: ${spacing.lg};
  display: grid;
  align-items: start;
  grid-template-columns: 1fr;
  gap: ${spacing.md};

  ${fromTablet`
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  `}
`

export const ResumeHeaderLeft = styled.div`
  h1 {
    font-size: ${typography.fontSize2xl};
    margin-bottom: ${spacing.sm};
    margin-bottom: 0.75rem;
    font-family: ${typography.fontFamily};
    text-transform: uppercase;

    ${fromTablet`
      font-size: 2.5rem;
    `}
  }
`

export const HeaderTitle = styled.p`
  font-size: ${typography.fontSizeXl};
  margin-bottom: 0.75rem;
  font-weight: 700;
  font-family: ${typography.fontFamily};
`

export const HeaderSummary = styled.p`
  color: ${colors.textLight};
  margin-bottom: ${spacing.sm};
  line-height: 1.6;
`

export const ResumeHeaderRight = styled.div`
  text-align: center;

  ${fromTablet`
    text-align: right;
  `}
`

export const ContactBlock = styled.div`
  color: ${colors.textLight};
  line-height: 1.8;
  margin-bottom: ${spacing.sm};

  p {
    margin-bottom: 0.5rem;
  }

  }
`

export const ContactEmail = styled.a`
  color: ${colors.textLight};
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: ${colors.text};
  }
`

export const ContactLinkedIn = styled.a`
  color: blue;

  &:hover {
    color: ${colors.text};
  }
  svg {
    width: 30px;
    height: 30px;
  }
`

export const DownloadWrap = styled.div`
  margin-top: ${spacing.sm};
`

export const ResumeContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: ${spacing.md};
  align-items: start;

  ${fromDesktop`
    grid-template-columns: 2fr 1fr;
    gap: 3rem;
  `}
`

export const ResumeMain = styled.div``

export const ResumeSidebar = styled.div`
  position: static;
  top: 100px;

  ${fromDesktop`
    position: sticky;
  `}
`

export const ResumeSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;

  ${fromTablet`
    justify-content: flex-end;
  `}
`
