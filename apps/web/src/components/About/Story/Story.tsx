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
import { RichText } from '@portfolio/design'
import { MyStorySection } from '@/types'

interface StoryProps {
  myStory: MyStorySection
}

const Story = ({ myStory }: StoryProps) => {
  const { title, tagLine, image, description } = myStory
  return (
    <>
      <StoryTitle>{title}</StoryTitle>
      <StorySubtitle>
        <StoryTextWrapper>
          <StoryText>{tagLine}</StoryText>
          {image[0] && (
            <StoryTextImage src={image[0].file.url} alt={image[0].description} aria-hidden="true" />
          )}
        </StoryTextWrapper>
      </StorySubtitle>

      <StoryRow>
        <StoryImageWrap>
          {image[1] && <StoryImage src={image[1].file.url} alt={image[1].description} />}
        </StoryImageWrap>
        <Timeline>
          <RichText document={description} />
        </Timeline>
      </StoryRow>
    </>
  )
}

export default Story
