'use client'

import React from 'react'
import { PageSection, PortfolioCards, TippedButton } from '@/design'
import { SeeMoreWrapper } from './LatestWork.styles'
import { LatestWorkContent } from '@/types'

interface LatestWorkProps {
  content: LatestWorkContent
}

const LatestWork = ({ content }: LatestWorkProps) => {
  const { title, button, workItems } = content
  return (
    <PageSection title={title} id="portfolio" variant="outset">
      <PortfolioCards workItems={workItems} numCards={3} />
      <SeeMoreWrapper>
        <TippedButton href={button.href}>{button.label}</TippedButton>
      </SeeMoreWrapper>
    </PageSection>
  )
}

export default LatestWork
