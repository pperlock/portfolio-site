import styled from 'styled-components'
import { colors, spacing, typography, fromTablet, fromDesktop } from '@/design'

export const Section = styled.section`
  padding: 0 ${spacing.sm};
  font-size: ${typography.fontSizeLg};

  ${fromTablet`
    margin: ${spacing.xl};
    padding: 0 ${spacing.md};
  `}

  p {
    font-size: ${typography.fontSizeLg};
  }
`

export const SectionAlt = styled.section`
  font-size: ${typography.fontSizeLg};
  padding: ${spacing.md} 0;
  background: ${colors.bgSubtle};

  ${fromTablet`
    padding: ${spacing.lg} 0;
  `}
`

export const Content = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
  line-height: 1.75;

  ${fromTablet`
    padding: 0 ${spacing.md};
  `}

  h2 {
    margin-bottom: ${spacing.md};
    font-size: ${typography.fontSizeXl};

    ${fromTablet`
      font-size: ${typography.fontSize2xl};
    `}
  }
  > p {
    font-family: ${typography.fontFamily};
    margin-bottom: ${spacing.md};
  }
`

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

export const WorkTitle = styled.h2`
  padding-left: ${spacing.sm};
  text-align: center;
  ${fromTablet`
    padding-left: 0;
  `}
`

export const FrontEndImageContainer = styled.div`
  width: 100%;
  max-width: 480px;
  height: 200px;
  overflow: hidden;
  position: relative;
  margin: 0 auto ${spacing.md};
  border-radius: 8px;

  ${fromTablet`
    height: 245px;
  `}
`

export const FrontEndImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const PullQuote = styled.blockquote`
  font-size: ${typography.fontSizeXl};
  font-weight: 300;
  text-align: center;
  margin: ${spacing.md} auto;
  padding: 0 ${spacing.sm};
  max-width: 50ch;
  color: ${colors.textMuted};

  ${fromTablet`
    font-size: ${typography.fontSize2xl};
    margin: ${spacing.lg} auto;
  `}
`

export const WorkTagline = styled.blockquote`
  font-size: ${typography.fontSize2xl};
  font-style: italic;
  max-width: 100%;
  font-weight: 300;
  text-align: center;
  margin-top: 3rem;
  line-height: 1.4;
  color: ${colors.textHeader};

  ${fromTablet`
    max-width: 400px;
  `}
  ${fromDesktop`
    font-size: 2.5rem;
  `}
`

export const WorkText = styled.p`
  text-align: center;
  max-width: 100%;
  margin: 0 auto 1.5rem auto;
  padding: 0 ${spacing.sm};
  color: ${colors.textMedium};

  ${fromTablet`
    max-width: 700px;
    padding: 0;
  `}
`

export const WorkImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${fromTablet`
    max-width: 350px;
    width: 350px;
    height: 350px;
  `}
`

export const MiniQuote = styled.span`
  display: block;
  font-weight: 600;
  font-size: ${typography.fontSizeLg};
  margin-bottom: ${spacing.sm};
  margin-left: ${spacing.sm};
  color: ${colors.textHeader};
  text-align: center;
`

export const HowIWorkRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${spacing.md};
  margin-bottom: ${spacing.md};

  ${fromDesktop`
    flex-direction: row;
    align-items: center;
  `}
`

export const HelloFriendLayout = styled.div`
  position: relative;
  margin: ${spacing.md} 0;
  overflow: hidden;
  ${fromTablet`
    margin: ${spacing.md} 0;
    overflow: visible;
  `}
`

export const HelloFriendTitle = styled.h2`
  margin-left: ${spacing.sm};
`

export const HelloFriendImageOneWrapper = styled.div`
  display: block;
  position: relative;
  width: 600px;
  top: -87px;
  left: -135px;

  ${fromTablet`
    position: absolute;
    top: -75px;
    left: -264px;
    width: 900px;
  `}
`

export const HelloFriendImage = styled.img`
  width: 100%;
`

export const HelloFriendImageTwoWrapper = styled.div`
  display: block;
  position: absolute;
  left: 117px;
  top: -36px;
  width: 300px;

  ${fromTablet`
    width: 400px;
    height: 400px;
    top: -120px;
    left: 129px;
  `}
`

export const HelloFriendTextGroup = styled.div<{ $isFirst?: boolean }>`
  ${fromTablet`
    margin-left: 300px;
    margin-top: ${(p: { $isFirst?: boolean }) => (p.$isFirst ? '100px' : '0')};
  `}
`
