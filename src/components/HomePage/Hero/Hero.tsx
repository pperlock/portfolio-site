'use client'

import React from 'react'
import { NAME } from '@/constants'
import { TippedButton, BrushStrokes } from '@/design'

import {
  HeroSection,
  HeroContent,
  HeroLeft,
  HeroTaglineLeft,
  TaglineLabelLarge,
  TaglineText,
  HeroImageLeft,
  PortraitLeft,
  PortraitImage,
  CoderOverlay,
  HeroButtons,
} from './Hero.styles'
import { HeroContentType, TippedButton as TippedButtonType } from '@/types'

interface HeroProps {
  content: HeroContentType
}

const Hero = ({ content }: HeroProps) => {
  const { tagline, subtitle, buttons, image } = content

  return (
    <HeroSection id="home">
      <HeroContent>
        <HeroLeft>
          <HeroImageLeft>
            <PortraitLeft>
              <PortraitImage src={image} alt="portrait" />
            </PortraitLeft>
            <HeroTaglineLeft>
              <TaglineLabelLarge>{NAME}</TaglineLabelLarge>
              <BrushStrokes />
            </HeroTaglineLeft>
          </HeroImageLeft>
        </HeroLeft>

        <CoderOverlay>
          <TaglineLabelLarge>&lt;{tagline}&gt;</TaglineLabelLarge>
          <TaglineText>{subtitle}</TaglineText>
        </CoderOverlay>

        <HeroButtons>
          {buttons.map((button: TippedButtonType) => {
            const { href, label, tip, variant } = button
            return (
              <TippedButton key={`button-${label}`} href={href} variant={variant} tip={tip}>
                {label}
              </TippedButton>
            )
          })}
        </HeroButtons>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
