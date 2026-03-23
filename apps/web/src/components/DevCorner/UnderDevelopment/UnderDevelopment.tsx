import React from 'react'
import Image from 'next/image'
import {
  UnderDevWrapper,
  StatusBadge,
  ImageContainer,
  Headline,
  Subtext,
  LoadingBar,
  UnderDevTextWrapper,
} from './UnderDevelopment.styles'

const UnderDevelopment = () => {
  return (
    <UnderDevWrapper>
      <ImageContainer>
        <Image src="/radio.png" alt="Vintage Fender Radio - Stay Tuned" width={600} height={600} />
      </ImageContainer>

      <UnderDevTextWrapper>
        <StatusBadge>Signal Incoming</StatusBadge>
        <Headline>Stay Tuned</Headline>
        <Subtext>
          We&apos;re currently fine-tuning the frequencies. This section is under development and
          will be broadcasting soon.
        </Subtext>

        <LoadingBar />
      </UnderDevTextWrapper>
    </UnderDevWrapper>
  )
}

export default UnderDevelopment
