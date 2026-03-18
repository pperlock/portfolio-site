import React from 'react'
import Image from 'next/image'
import { LowerCaseTitle, Paragraph } from '@portfolio/design'
import {
  Section,
  InnerContainer,
  Title,
  Body,
  Content,
  ImageWrap,
  PageNavList,
  PageNavItem,
  PageNavLink,
  PageNav,
} from './DevCornerHero.styles'

interface DevCornerHeroProps {
  title: string
  subtitle: string
  image: string
  navLinks: { href: string; label: string }[]
}

const DevCornerHero = ({ title, subtitle, image, navLinks }: DevCornerHeroProps) => (
  <Section>
    <InnerContainer>
      <Body>
        <Content>
          <Title>
            <LowerCaseTitle>{title}</LowerCaseTitle>
          </Title>
          <Paragraph color="medium">{subtitle}</Paragraph>
          <PageNav aria-label="Dev Corner sections">
            <PageNavList>
              {navLinks.map(link => (
                <PageNavItem key={link.href}>
                  <PageNavLink href={link.href}>{link.label}</PageNavLink>
                </PageNavItem>
              ))}
            </PageNavList>
          </PageNav>
        </Content>
        <ImageWrap>
          <Image src={image} alt="" fill sizes="100vw" style={{ objectFit: 'cover' }} priority />
        </ImageWrap>
      </Body>
    </InnerContainer>
  </Section>
)

export default DevCornerHero
