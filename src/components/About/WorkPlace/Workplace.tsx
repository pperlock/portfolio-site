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
  return (
    <WorkplaceLayout>
      <WorkplaceTitle>{workplace.title}</WorkplaceTitle>
      <WorkplaceImageOneWrapper>
        <WorkplaceImage
          src={contentfulImageUrl(workplace.images[0].file.url)}
          alt={workplace.images[0].description}
        />
      </WorkplaceImageOneWrapper>
      {workplace.images.length > 1 && (
        <WorkplaceImageTwoWrapper>
          <WorkplaceImage
            src={contentfulImageUrl(workplace.images[1].file.url)}
            alt={workplace.images[1].description}
          />
        </WorkplaceImageTwoWrapper>
      )}

      {workplace.description.map(({ miniQuote, pullQuote, text }, index: number) => (
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
