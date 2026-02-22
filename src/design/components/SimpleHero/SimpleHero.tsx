'use client'

import React from 'react'
import {
  HeroSection,
  HeroInner,
  HeroContent,
  HeroSubtitle,
  HeroTitleRow,
  HeroImageWrap,
  HeroImageLink,
  HeroImage,
} from './SimpleHero.styles'
import { LowerCaseTitle, BrushStrokes } from '@/design'

interface SimpleHeroProps {
  title?: string
  subtitle?: string
  image?: string
  imageLink?: string
  paddingSize?: 'sm' | 'md' | 'lg'
}

const SimpleHero = ({
  title = '',
  subtitle = '',
  image,
  imageLink,
  paddingSize = 'lg',
}: SimpleHeroProps) => {
  const hasImage = Boolean(image)
  return (
    <HeroSection $paddingSize={paddingSize}>
      <HeroInner $hasImage={hasImage}>
        <HeroContent $hasImage={hasImage}>
          <LowerCaseTitle>{title}</LowerCaseTitle>
          <HeroTitleRow>
            <BrushStrokes />
            <HeroSubtitle $hasImage={hasImage}>{subtitle}</HeroSubtitle>
          </HeroTitleRow>
        </HeroContent>
        {hasImage && (
          <HeroImageWrap>
            {imageLink ? (
              <HeroImageLink
                href={imageLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn profile"
              >
                <HeroImage src={image} alt="" />
              </HeroImageLink>
            ) : (
              <HeroImage src={image} alt="" />
            )}
          </HeroImageWrap>
        )}
      </HeroInner>
    </HeroSection>
  )
}

export default SimpleHero
