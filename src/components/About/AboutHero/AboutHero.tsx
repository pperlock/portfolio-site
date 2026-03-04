import React from 'react'
import { LowerCaseTitle } from '@/design'
import {
  Hero,
  Container,
  HeroRow,
  HeroSubtitle,
  HeroImageWrapper,
  HeroImageWrapperMobile,
  HeroImageInner,
  HeroImage,
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
                <HeroImage src="/portrait-right.png" alt="Portrait of Patti Perlock" />
              </HeroImageInner>
            </HeroImageWrapperMobile>
            {heroBody.map((paragraph, index) => (
              <HeroParagraph key={index}>{paragraph}</HeroParagraph>
            ))}
          </div>

          <HeroImageWrapper>
            <HeroImageInner>
              <HeroImage src="/portrait-right.png" alt="Portrait of Patti Perlock" />
            </HeroImageInner>
          </HeroImageWrapper>
        </HeroRow>
      </Container>
    </Hero>
  )
}

export default AboutHero
