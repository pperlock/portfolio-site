import React from 'react'
import {
  WorkplaceImage,
  WorkplaceImageOneWrapper,
  WorkplaceImageTwoWrapper,
  WorkplaceTextGroup,
  MiniQuote,
  PullQuote,
  WorkplaceLayout,
  WorkplaceTitle,
} from './Workplace.styles'
import { contentfulImageUrl } from '@/lib/contentful'
import { RichText } from '@/design'
import { WorkplaceSection } from '@/types'

interface WorkplaceProps {
  workplace: WorkplaceSection
}

const Workplace = ({ workplace }: WorkplaceProps) => {
  const { title, images, description } = workplace

  return (
    <WorkplaceLayout>
      <WorkplaceTitle>{title}</WorkplaceTitle>
      <WorkplaceImageOneWrapper>
        {images[0] && (
          <WorkplaceImage
            src={contentfulImageUrl(images[0].file.url)}
            alt={images[0].description}
          />
        )}
      </WorkplaceImageOneWrapper>
      {images.length > 0 && (
        <WorkplaceImageTwoWrapper>
          {images[1] && (
            <WorkplaceImage
              src={contentfulImageUrl(images[1].file.url)}
              alt={images[1].description}
            />
          )}
        </WorkplaceImageTwoWrapper>
      )}

      {description.map(({ miniQuote, pullQuote, text }, index: number) => (
        <WorkplaceTextGroup key={index} $isFirst={index === 0}>
          {miniQuote && <MiniQuote>{miniQuote}</MiniQuote>}
          {pullQuote && <PullQuote>{pullQuote}</PullQuote>}
          {text && (
            <RichText document={text} paragraphProps={{ color: 'medium', align: 'center' }} />
          )}
        </WorkplaceTextGroup>
      ))}
    </WorkplaceLayout>
  )
}

export default Workplace
