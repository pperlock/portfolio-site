import React from 'react'
import Image from 'next/image'
import { LowerCaseTitle } from '@/design'
import {
  Hero,
  Container,
  HeroRow,
  HeroSubtitle,
  HeroImageWrapper,
  HeroImageWrapperMobile,
  HeroImageInner,
  HeroParagraph,
} from './AboutHero.styles'

export interface AboutHeroProps {
  title: string
  subtitle: string
  heroBody: string[]
}

const AboutHero = ({ title, subtitle, heroBody }: AboutHeroProps) => {
  return (
    <Hero>
      <Container>
        <HeroRow>
          <div>
            <LowerCaseTitle>{title}</LowerCaseTitle>
            <HeroSubtitle>{subtitle}</HeroSubtitle>
            <HeroImageWrapperMobile>
              <HeroImageInner>
                <Image
                  src="/portrait-right.png"
                  alt="Portrait of Patti Perlock"
                  width={250}
                  height={250}
                  priority
                  style={{ objectFit: 'contain' }}
                />
              </HeroImageInner>
            </HeroImageWrapperMobile>
            {heroBody.map((paragraph, index) => (
              <HeroParagraph key={index}>{paragraph}</HeroParagraph>
            ))}
          </div>

          <HeroImageWrapper>
            <HeroImageInner>
              <Image
                src="/portrait-right.png"
                alt="Portrait of Patti Perlock"
                width={400}
                height={400}
                priority
                style={{ objectFit: 'contain' }}
              />
            </HeroImageInner>
          </HeroImageWrapper>
        </HeroRow>
      </Container>
    </Hero>
  )
}

export default AboutHero
