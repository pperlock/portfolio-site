'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import Socials from '../Socials/Socials'
import { Nav, NavNextLink } from './Navigation.styles'
import { NAV_LINKS } from '@/constants'

type NavigationProps = {
  variant?: 'header' | 'footer'
  isMobileMenuOpen?: boolean
  onNavigate?: () => void
}

const Navigation = ({
  variant = 'footer',
  isMobileMenuOpen = false,
  onNavigate,
}: NavigationProps) => {
  const pathname = usePathname()
  const navLinks = Object.values(NAV_LINKS)

  return (
    <Nav $variant={variant} $isMobileMenuOpen={isMobileMenuOpen}>
      {navLinks.map(link => (
        <NavNextLink
          key={link.href}
          href={link.href}
          $variant={variant}
          $isActive={pathname === link.href}
          $activeBrushColor={link.activeColor}
          onClick={onNavigate}
        >
          {link.label}
        </NavNextLink>
      ))}
      {variant !== 'footer' && <Socials variant={variant} />}
    </Nav>
  )
}

export default Navigation
