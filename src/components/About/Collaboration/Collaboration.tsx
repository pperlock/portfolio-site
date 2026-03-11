import React from 'react'
import Image from 'next/image'
import { CollaborationRow, CollaborationTagline, CollaborationImage } from './Collaboration.styles'
import { RichText } from '@/design'
import { contentfulImageUrl } from '@/lib/contentful'
import { CollaborationSection } from '@/types'

interface CollaborationProps {
  collaboration: CollaborationSection
}

const Collaboration = ({ collaboration }: CollaborationProps) => {
  return (
    <>
      <CollaborationRow>
        <CollaborationTagline>{collaboration.tagLine}</CollaborationTagline>
        <CollaborationImage>
          <Image
            src={contentfulImageUrl(collaboration.image[0].file.url)}
            alt={collaboration.image[0].description ?? ''}
            width={350}
            height={350}
          />
        </CollaborationImage>
      </CollaborationRow>
      <RichText
        document={collaboration.description}
        paragraphProps={{ color: 'medium', align: 'center' }}
      />
    </>
  )
}

export default Collaboration
