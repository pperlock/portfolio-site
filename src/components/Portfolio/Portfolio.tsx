import React from 'react'
import { SimpleHero, PageSection, PortfolioCards } from '@/design'
import { PortfolioContent } from '@/types'
import { PortfolioContainer } from './Portfolio.styles'

interface PortfolioProps {
  content: PortfolioContent
}

const Portfolio = ({ content }: PortfolioProps) => {
  if (!content?.workItems) return null
  const { title, subtitle, workItems } = content
  return (
    <>
      <SimpleHero title={title} subtitle={subtitle} />
      <PageSection id="latest-work" variant="inset" title="Latest Work">
        <PortfolioContainer>
          <PortfolioCards workItems={workItems} />
        </PortfolioContainer>
      </PageSection>
    </>
  )
}

export default Portfolio
