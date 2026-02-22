import React from 'react'
import {
  WorkItem,
  WorkItemLink,
  WorkImageWrapper,
  WorkImage,
  WorkScreenshot,
  WorkPlaceholder,
  WorkCategory,
  WorkContent,
  WorkTitle,
  WorkDescription,
} from './PortfolioCard.styles'
import { WorkItem as WorkItemType } from '@/types'

interface PortfolioCardProps {
  item: WorkItemType
  wrapperRef: (el: HTMLElement | null) => void
}

const PortfolioCard = ({ item, wrapperRef }: PortfolioCardProps) => {
  return (
    <WorkItem>
      <div ref={wrapperRef}>
        <WorkItemLink href={item.caseStudyUrl}>
          <WorkImageWrapper>
            <WorkImage>
              {item.image ? (
                <WorkScreenshot
                  src={item.image}
                  alt={item.title}
                  onError={e => {
                    const img = e.target as HTMLImageElement
                    img.style.display = 'none'
                    const placeholder = img.nextElementSibling as HTMLElement | null
                    if (placeholder) placeholder.style.display = 'flex'
                  }}
                />
              ) : null}
              <WorkPlaceholder style={{ display: item.image ? 'none' : 'flex' }}>
                {item.placeholder}
              </WorkPlaceholder>
            </WorkImage>
            <WorkCategory>{item.category}</WorkCategory>
          </WorkImageWrapper>
          <WorkContent>
            <WorkTitle>{item.title}</WorkTitle>
            {item.description && <WorkDescription>{item.description}</WorkDescription>}
          </WorkContent>
        </WorkItemLink>
      </div>
    </WorkItem>
  )
}

export default PortfolioCard
