import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { NavSocial, NavSocialLink } from './Socials.styles'
import { CONTACT_INFO } from '@/constants'

const ICONS = {
  linkedin: FaLinkedin,
  github: FaGithub,
}

const LINK_CONFIG = {
  linkedin: { href: CONTACT_INFO.linkedin, label: 'LinkedIn' },
  github: { href: CONTACT_INFO.github, label: 'GitHub' },
}

const DEFAULT_LINK_IDS = ['linkedin', 'github']

interface SocialsProps {
  variant?: 'header' | 'footer'
  linkIds?: string[]
  showLeftBorder?: boolean
  iconSize?: number
  growIconOnHover?: boolean
}

const Socials = ({
  variant = 'footer',
  linkIds,
  showLeftBorder = true,
  iconSize,
  growIconOnHover = false,
}: SocialsProps) => {
  const ids = linkIds != null && linkIds.length > 0 ? linkIds : DEFAULT_LINK_IDS

  return (
    <NavSocial $variant={variant} $showLeftBorder={showLeftBorder} $iconSize={iconSize}>
      {ids.map(id => {
        const config = LINK_CONFIG[id]
        const Icon = ICONS[id]
        if (!config || !Icon) return null
        return (
          <NavSocialLink
            key={id}
            href={config.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={config.label}
            $variant={variant}
            $iconName={id}
            $iconSize={iconSize}
            $growIconOnHover={growIconOnHover}
          >
            <Icon />
          </NavSocialLink>
        )
      })}
    </NavSocial>
  )
}

export default Socials
