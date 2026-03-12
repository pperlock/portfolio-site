import styled from 'styled-components'
import { colors, layout, spacing, typography, fromTablet, motion } from '@portfolio/design'

export const ContactLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg};

  ${fromTablet`
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
    max-width: ${layout.contentMax};
    margin: 0 auto;
  `}
`

export const ContactInfoCard = styled.div`
  background-color: ${colors.bgSubtle};
  border: 1px solid ${colors.border};
  border-radius: ${layout.radiusMd};
  padding: ${spacing.md};
  flex-shrink: 0;
  text-align: center;

  ${fromTablet`
    width: 280px;
    position: sticky;
    top: 6rem;
    text-align: left;
  `}
`

export const ContactInfoTitle = styled.h3`
  font-size: ${typography.fontSizeSm};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${colors.textLight};
  margin: 0 0 ${spacing.sm};
`

export const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.md};
`

export const ContactInfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;

  ${fromTablet`
    align-items: flex-start;
      svg {
         margin: auto;
      }
  `}
`

export const ContactInfoItemSocials = styled(ContactInfoItem)`
  ${fromTablet`
    align-items: flex-end;
  `}
`

export const ContactInfoLabel = styled.span`
  font-size: ${typography.fontSizeSm};
  color: ${colors.textLight};
`

export const ContactInfoValue = styled.a`
  font-size: ${typography.fontSizeLg};
  color: ${colors.text};
  text-decoration: none;
  transition: ${motion.transition};

  &:hover {
    color: ${colors.primary};
    text-decoration: underline;
  }
`

export const ContactInfoText = styled.span`
  font-size: ${typography.fontSizeLg};
  color: ${colors.text};
`

export const ContactSocialsWrap = styled.div`
  margin-top: ${spacing.sm};
  padding-top: ${spacing.sm};
  border-top: 1px solid ${colors.border};

  ${ContactInfoLabel} {
    margin-bottom: 0.5rem;
  }
`

export const FormColumn = styled.div`
  flex: 1;
  min-width: 0;
`
