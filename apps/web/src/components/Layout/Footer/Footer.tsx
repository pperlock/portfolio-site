'use client'

import React from 'react'
import { BackToTop, Navigation, Socials } from '@portfolio/design'
import { StyledFooter, FooterWrapper, FooterContent, FooterNavGroup, Copyright } from './Footer.styles'
import { NAME } from '@/constants'

const Footer = () => {
  return (
    <StyledFooter>
      <FooterWrapper>
        <BackToTop />
        <FooterContent>
          <Copyright>
            © {new Date().getFullYear()} {NAME}
          </Copyright>
          <FooterNavGroup>
            <Navigation variant="footer" />
            <Socials variant="footer" />
          </FooterNavGroup>
        </FooterContent>
      </FooterWrapper>
    </StyledFooter>
  )
}

export default Footer
