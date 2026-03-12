import React from 'react'
import Image from 'next/image'
import { CollaborationRow, CollaborationTagline, CollaborationImage } from './Collaboration.styles'
import { RichText } from '@portfolio/design'
import { contentfulImageUrl } from '@/lib/contentful'
import { CollaborationSection } from '@/types'

interface CollaborationProps {
  collaboration: CollaborationSection
}

const Collaboration = ({ collaboration }: CollaborationProps) => {
  const { tagLine, image, description } = collaboration
  return (
    <>
      <CollaborationRow>
        <CollaborationTagline>{tagLine}</CollaborationTagline>
        {image?.length > 0 && (
          <CollaborationImage>
            <Image
              src={contentfulImageUrl(image[0].file.url)}
              alt={image[0].description ?? ''}
              width={350}
              height={350}
            />
          </CollaborationImage>
        )}
      </CollaborationRow>
      <RichText document={description} paragraphProps={{ color: 'medium', align: 'center' }} />
    </>
  )
}

export default Collaboration
