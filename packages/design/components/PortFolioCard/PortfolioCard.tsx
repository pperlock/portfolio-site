import React, { useState } from 'react'
import Image from 'next/image'
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
import { breakpoint } from '../../tokens'
import { WorkItem as WorkItemType } from '@/types'

interface PortfolioCardProps {
  item: WorkItemType
  wrapperRef: (el: HTMLElement | null) => void
}

const PortfolioCard = ({ item, wrapperRef }: PortfolioCardProps) => {
  const { image, title, description, caseStudyUrl, category, placeholder } = item
  const hasImage = Boolean(image)
  const [imgError, setImgError] = useState(false)
  return (
    <WorkItem>
      <div ref={wrapperRef}>
        <WorkItemLink href={caseStudyUrl}>
          <WorkImageWrapper>
            <WorkImage>
              {hasImage && !imgError && (
                <WorkScreenshot>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes={`(min-width: ${breakpoint.tablet}px) 400px, 100vw`}
                    style={{ objectFit: 'cover' }}
                    onError={() => setImgError(true)}
                  />
                </WorkScreenshot>
              )}
              <WorkPlaceholder $visible={!hasImage || imgError}>{placeholder}</WorkPlaceholder>
            </WorkImage>
            <WorkCategory>{category}</WorkCategory>
          </WorkImageWrapper>
          <WorkContent>
            <WorkTitle>{title}</WorkTitle>
            {description && <WorkDescription>{description}</WorkDescription>}
          </WorkContent>
        </WorkItemLink>
      </div>
    </WorkItem>
  )
}

export default PortfolioCard
