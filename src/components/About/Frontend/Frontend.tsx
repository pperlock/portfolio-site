import React from 'react'
import { FrontEndImageContainer, FrontendTitle, FrontEndImage } from './Frontend.styles'
import { RichText } from '@/design'
import { FrontendSection } from '@/types'

interface FrontendProps {
  frontend: FrontendSection
}

const Frontend = ({ frontend }: FrontendProps) => {
  const { title, description } = frontend
  return (
    <>
      <FrontendTitle>{title}</FrontendTitle>
      <RichText
        document={description}
        paragraphProps={{ color: 'medium', align: 'center' }}
        renderEmbeddedAsset={({ src, alt }) => (
          <FrontEndImageContainer>
            <FrontEndImage src={src} alt={alt} />
          </FrontEndImageContainer>
        )}
      />
    </>
  )
}

export default Frontend
