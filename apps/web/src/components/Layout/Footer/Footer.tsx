'use client'

import React from 'react'
import { BackToTop, Navigation, Socials, PageAlignmentWrapper } from '@portfolio/design'
import {
  StyledFooter,
  FooterWrapper,
  FooterContent,
  FooterNavGroup,
  Copyright,
} from './Footer.styles'
import { NAME } from '@/constants'

const Footer = () => {
  return (
    <StyledFooter id="site-footer">
      <PageAlignmentWrapper>
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
      </PageAlignmentWrapper>
    </StyledFooter>
  )
}

export default Footer
