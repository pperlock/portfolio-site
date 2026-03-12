import styled from 'styled-components'
import { colors, motion, fromTablet, socialIcons } from '../../tokens'

type IconColorProps = { $variant?: string; $iconName?: string }
const iconColor = ({ $variant, $iconName }: IconColorProps) =>
  socialIcons[$variant as keyof typeof socialIcons]?.[
    $iconName as keyof (typeof socialIcons)[keyof typeof socialIcons]
  ] ?? colors.text

type NavSocialLinkProps = {
  $variant?: string
  $iconName?: string
  $iconSize?: number
  $growIconOnHover?: boolean
}
export const NavSocialLink = styled.a<NavSocialLinkProps>`
  display: flex;
  align-items: center;
  color: ${iconColor};
  text-decoration: none;
  transition: ${motion.transition};

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: ${({ $iconSize }) => ($iconSize != null ? `${$iconSize}px` : '22px')};
    height: ${({ $iconSize }) => ($iconSize != null ? `${$iconSize}px` : '22px')};
    transition: ${motion.transition};
    ${({ $growIconOnHover }) => $growIconOnHover && 'transform: scale(1);'}
  }

  ${({ $growIconOnHover }) =>
    $growIconOnHover &&
    `
      &:hover svg {
        transform: scale(1.1);
      }
    `}
`

type NavSocialProps = {
  $variant?: string
  $showLeftBorder?: boolean
  $iconSize?: number
}

export const NavSocial = styled.span<NavSocialProps>`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  justify-content: center;
  ${({ $variant }) => ($variant === 'footer' ? 'rgba(0, 0, 0, 0.15)' : 'rgba(255, 255, 255, 0.6)')};

  ${({ $variant, $iconSize }) =>
    $variant === 'footer' &&
    `
      ${NavSocialLink} svg {
        width: ${$iconSize != null ? `${$iconSize}px` : '32px'};
        height: ${$iconSize != null ? `${$iconSize}px` : '32px'};
      }
      ${fromTablet`
        ${NavSocialLink} svg {
          width: ${$iconSize != null ? `${$iconSize}px` : '22px'};
          height: ${$iconSize != null ? `${$iconSize}px` : '22px'};
        }
      `}
    `}

  ${({ $showLeftBorder }) => fromTablet`
    display: flex;
    gap: 0.875rem;
    ${
      $showLeftBorder
        ? `
      gap: 1.25rem;
      border-left: 1px solid;
      margin-left: 0.5rem;
      padding-left: 1.25rem;
    `
        : ''
    }
  `}
`
