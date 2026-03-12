'use client'

import React from 'react'
import { WorkGrid } from './PortfolioCards.styles'
import { useRevealOnIntersection } from '@/hooks'
import PortfolioCard from '../PortFolioCard/PortfolioCard'
import type { WorkItem } from '@/types'

const revealStyle = {
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 0.6s ease, transform 0.6s ease',
}

type PortfolioCardsProps = {
  workItems?: WorkItem[]
  numCards?: number
}

const PortfolioCards = ({ workItems = [], numCards }: PortfolioCardsProps) => {
  const { workItemsRef } = useRevealOnIntersection()
  const items = numCards ? workItems.slice(0, numCards) : workItems

  return (
    <WorkGrid>
      {items.map((item, index) => (
        <PortfolioCard
          key={item.id}
          item={item}
          wrapperRef={el => {
            workItemsRef.current[index] = el
            if (el) {
              el.style.opacity = String(revealStyle.opacity)
              el.style.transform = revealStyle.transform
              el.style.transition = revealStyle.transition
            }
          }}
        />
      ))}
    </WorkGrid>
  )
}

export default PortfolioCards
