import React from 'react'
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
        <img src="radio.png" alt="Vintage Fender Radio - Stay Tuned" />
      </ImageContainer>

      <UnderDevTextWrapper>
        <StatusBadge>Signal Incoming</StatusBadge>
        <Headline>Stay Tuned</Headline>
        <Subtext>
          We&apos;re currently fine-tuning the frequencies. This section is under development and will be
          broadcasting soon.
        </Subtext>

        <LoadingBar />
      </UnderDevTextWrapper>
    </UnderDevWrapper>
  )
}

export default UnderDevelopment
