import styled from 'styled-components'
import { colors, spacing, typography } from '@/design'

export const AboutSection = styled.section`
  padding: 10rem 2rem 8rem;
  background-color: ${colors.bg};
  min-height: calc(100vh - 140px);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${colors.text};
  margin-bottom: ${spacing.lg};
  text-align: center;
`

export const AboutContent = styled.div`
  max-width: 100%;
  text-align: center;
`

export const AboutParagraph = styled.p`
  font-size: ${typography.fontSizeLg};
  color: ${colors.text};
  margin-bottom: 2.5rem;
  line-height: 1.8;

  &:last-child {
    margin-bottom: 0;
  }
`
