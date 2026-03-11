import React from 'react'
import {
  StoryTitle,
  StorySubtitle,
  StoryTextWrapper,
  StoryText,
  StoryTextImage,
  StoryRow,
  StoryImageWrap,
  StoryImage,
  Timeline,
} from './Story.styles'
import { RichText } from '@/design'
import { MyStorySection } from '@/types'

interface StoryProps {
  myStory: MyStorySection
}

const Story = ({ myStory }: StoryProps) => {
  const { title, tagLine, image } = myStory
  return (
    <>
      <StoryTitle>{title}</StoryTitle>
      <StorySubtitle>
        <StoryTextWrapper>
          <StoryText>{tagLine}</StoryText>
          <StoryTextImage src={image[0].file.url} alt={image[0].description} aria-hidden="true" />
        </StoryTextWrapper>
      </StorySubtitle>

      <StoryRow>
        <StoryImageWrap>
          <StoryImage src={myStory.image[1].file.url} alt={myStory.image[1].description} />
        </StoryImageWrap>
        <Timeline>
          <RichText document={myStory.description} />
        </Timeline>
      </StoryRow>
    </>
  )
}

export default Story
