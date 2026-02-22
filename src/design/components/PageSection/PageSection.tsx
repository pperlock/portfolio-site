import React, { forwardRef } from 'react'
import {
  InsetSection,
  OutsetSection,
  SectionContainer,
  SectionContainerContent,
  SectionHeader,
} from './PageSection.styles'

type PageSectionProps = {
  children?: React.ReactNode
  title?: string
  id?: string
  variant?: 'inset' | 'outset'
  contentWidth?: 'container' | 'content'
}

const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  ({ children, title, id = '', variant = 'inset', contentWidth = 'container' }, ref) => {
    const Section = variant === 'outset' ? OutsetSection : InsetSection
    const Container = contentWidth === 'content' ? SectionContainerContent : SectionContainer

    return (
      <Section ref={ref} id={id}>
        <Container>
          {title ? <SectionHeader>{title}</SectionHeader> : null}
          {children}
        </Container>
      </Section>
    )
  }
)

PageSection.displayName = 'PageSection'

export default PageSection
