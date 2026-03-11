import styled from 'styled-components'
import { typography, spacing, fromTablet } from '@/design'

export const StoryTitle = styled.h2`
  font-family: ${typography.fontFamilyHeading};
  font-size: 1.75rem;
  text-align: center;

  ${fromTablet`
    font-size: 2.5rem;
  `}
`

export const StorySubtitle = styled.div`
  font-weight: 300;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin: ${spacing.sm} 0;

  text-align: center;

  ${fromTablet`
    padding: 0 ${spacing.md};
  `}
`
export const StoryTextWrapper = styled.div`
  position: relative;
  display: inline-block;
  ${fromTablet`
    margin-bottom: ${spacing.md};
  `}
`

export const StoryText = styled.span`
  ${fromTablet`
    font-size: ${typography.fontSizeLg};
  `}
`

export const StoryTextImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  height: 100px;
  object-fit: contain;
  opacity: 0.08;
`

export const StoryRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.md};

  ${fromTablet`
    flex-direction: row;
    align-items: flex-start;
  `}
`

export const StoryImageWrap = styled.div`
  width: 100%;
  max-width: 320px;

  ${fromTablet`
    max-width: 450px;
  `}
`

export const StoryImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  border-radius: 12px;
  object-fit: cover;
`

export const Timeline = styled.div`
  text-align: center;
  ${fromTablet`
    text-align: left;
    border-left: 2px solid rgba(0, 0, 0, 0.08);
    padding-left: ${spacing.md};
  `}

  > p {
    margin-bottom: ${spacing.sm};
  }
`
