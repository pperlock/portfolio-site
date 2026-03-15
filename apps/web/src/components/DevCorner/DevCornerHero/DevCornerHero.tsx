import React from 'react'
import Image from 'next/image'
import { LowerCaseTitle, Paragraph } from '@portfolio/design'
import {
  DevCornerHeroBody,
  DevCornerHeroContent,
  DevCornerHeroImageWrap,
  DevCornerHeroInner,
  DevCornerHeroSection,
  DevCornerHeroTitle,
  HeroNav,
  HeroNavItem,
  HeroNavLink,
  HeroNavList,
} from './DevCornerHero.styles'

interface DevCornerHeroProps {
  title: string
  subtitle: string
  image: string
  navLinks: { href: string; label: string }[]
}

const DevCornerHero = ({ title, subtitle, image, navLinks }: DevCornerHeroProps) => (
  <DevCornerHeroSection>
    <DevCornerHeroInner>
      <DevCornerHeroBody>
        <DevCornerHeroContent>
          <DevCornerHeroTitle>
            <LowerCaseTitle>{title}</LowerCaseTitle>
          </DevCornerHeroTitle>
          <Paragraph color="medium">{subtitle}</Paragraph>
          <HeroNav aria-label="Dev Corner sections">
            <HeroNavList>
              {navLinks.map(link => (
                <HeroNavItem key={link.href}>
                  <HeroNavLink href={link.href}>{link.label}</HeroNavLink>
                </HeroNavItem>
              ))}
            </HeroNavList>
          </HeroNav>
        </DevCornerHeroContent>
        <DevCornerHeroImageWrap>
          <Image src={image} alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
        </DevCornerHeroImageWrap>
      </DevCornerHeroBody>
    </DevCornerHeroInner>
  </DevCornerHeroSection>
)

export default DevCornerHero
