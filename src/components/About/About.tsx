'use client'

import React from 'react'
import Image from 'next/image'
import {
  StoryTitle,
  StorySubtitle,
  Section,
  SectionAlt,
  Content,
  Timeline,
  StoryRow,
  StoryImageWrap,
  StoryImage,
  PullQuote,
  WorkTagline,
  WorkText,
  MiniQuote,
  StoryTextWrapper,
  StoryText,
  StoryTextImage,
  WorkImage,
  HowIWorkRow,
  FrontEndImage,
  FrontEndImageContainer,
  HelloFriendLayout,
  HelloFriendImageOneWrapper,
  HelloFriendImage,
  HelloFriendImageTwoWrapper,
  HelloFriendTextGroup,
  WorkTitle,
  HelloFriendTitle,
} from './About.styles'
import { AboutProps } from '@/types'
import AboutHero from './AboutHero/AboutHero'

export default function About({ content }: AboutProps) {
  const { title, subtitle, heroBody, sections } = content
  const { story, whyFrontend, howIWork, helloFriend } = sections

  return (
    <>
      <AboutHero title={title} subtitle={subtitle} heroBody={heroBody} />

      <Section>
        <Content>
          <>
            <StoryTitle>{story.title}</StoryTitle>
            <StorySubtitle>
              <StoryTextWrapper>
                <StoryText>{story.tagline}</StoryText>
                <StoryTextImage src="/code-brackets.png" alt="" aria-hidden="true" />
              </StoryTextWrapper>
            </StorySubtitle>
          </>
          <StoryRow>
            <StoryImageWrap>
              <StoryImage src={story.image} alt={story.title} />
            </StoryImageWrap>
            <Timeline>
              {story.description.map((text: string, index: number) => (
                <p key={index}>{text}</p>
              ))}
            </Timeline>
          </StoryRow>
        </Content>
      </Section>

      <SectionAlt>
        <Content>
          <WorkTitle>{whyFrontend.title}</WorkTitle>
          {whyFrontend.description.map((text: string, index: number) => (
            <React.Fragment key={index}>
              {index === 2 && (
                <FrontEndImageContainer>
                  <FrontEndImage src={whyFrontend.image} alt={whyFrontend.title} />
                </FrontEndImageContainer>
              )}
              <WorkText>{text}</WorkText>
            </React.Fragment>
          ))}
        </Content>
      </SectionAlt>

      <Section>
        <Content>
          <HowIWorkRow>
            <WorkTagline>{howIWork.tagline}</WorkTagline>
            <WorkImage>
              <Image src={howIWork.image} alt={howIWork.title} width={350} height={350} />
            </WorkImage>
          </HowIWorkRow>
          {howIWork.description.map((text: string, index: number) => (
            <WorkText key={index}>{text}</WorkText>
          ))}
        </Content>
      </Section>

      <SectionAlt>
        <Content>
          <HelloFriendLayout>
            <HelloFriendTitle>{helloFriend.title}</HelloFriendTitle>
            <HelloFriendImageOneWrapper>
              <HelloFriendImage src={helloFriend.imageOne} alt={helloFriend.title} />
            </HelloFriendImageOneWrapper>
            <HelloFriendImageTwoWrapper>
              <HelloFriendImage src={helloFriend.imageTwo} alt={helloFriend.title} />
            </HelloFriendImageTwoWrapper>

            {helloFriend.description.map(({ miniQuote, pullQuote, text }, index: number) => (
              <HelloFriendTextGroup key={index} $isFirst={index === 0}>
                {miniQuote && <MiniQuote>{miniQuote}</MiniQuote>}
                {pullQuote && <PullQuote>{pullQuote}</PullQuote>}
                {text && <WorkText>{text}</WorkText>}
              </HelloFriendTextGroup>
            ))}
          </HelloFriendLayout>
        </Content>
      </SectionAlt>
    </>
  )
}
