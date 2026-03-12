import React from 'react'
import Image from 'next/image'
import { LowerCaseTitle, RichText } from '@/design'
import {
  Hero,
  Container,
  HeroRow,
  HeroSubtitle,
  HeroImageWrapper,
  HeroImageWrapperMobile,
  HeroImageInner,
} from './AboutHero.styles'
import { contentfulImageUrl } from '@/lib/contentful'
import type { HeroSection } from '@/types'

export interface AboutHeroProps {
  content: HeroSection
}

const AboutHero = ({ content }: AboutHeroProps) => {
  const { title, subtitle, body, image } = content
  const url = image?.file?.url
  const description = image?.file?.description
  const imageSrc = url ? contentfulImageUrl(url) : '/portrait-right.png'
  const imageAlt = description ?? 'Portrait of Patti Perlock'

  return (
    <Hero>
      <Container>
        <HeroRow>
          <div>
            <LowerCaseTitle>{title}</LowerCaseTitle>
            <HeroSubtitle>{subtitle}</HeroSubtitle>
            {image && (
              <HeroImageWrapperMobile>
                <HeroImageInner>
                  <Image
                    src={imageSrc}
                    alt={imageAlt}
                    width={250}
                    height={250}
                    priority
                    style={{ objectFit: 'contain' }}
                  />
                </HeroImageInner>
              </HeroImageWrapperMobile>
            )}
            <RichText document={body} />
          </div>
          {image && (
            <HeroImageWrapper>
              <HeroImageInner>
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={400}
                  height={400}
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </HeroImageInner>
            </HeroImageWrapper>
          )}
        </HeroRow>
      </Container>
    </Hero>
  )
}

export default AboutHero
