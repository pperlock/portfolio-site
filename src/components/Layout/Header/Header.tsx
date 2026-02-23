'use client'

import React, { useState } from 'react'
import { StyledHeader, NavWrapper, MobileMenuToggle, MobileMenuToggleBar } from './Header.styles'
import { Navigation, Logo } from '@/design'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <StyledHeader>
        <NavWrapper>
          <Logo />
          <Navigation
            variant="header"
            isMobileMenuOpen={isMenuOpen}
            onNavigate={() => setIsMenuOpen(false)}
          />
          <MobileMenuToggle
            $isOpen={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <MobileMenuToggleBar />
            <MobileMenuToggleBar />
            <MobileMenuToggleBar />
          </MobileMenuToggle>
        </NavWrapper>
      </StyledHeader>
    </>
  )
}

export default Header
