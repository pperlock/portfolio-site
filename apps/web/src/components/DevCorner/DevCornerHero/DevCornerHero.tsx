import React from 'react'
import Image from 'next/image'
import { LowerCaseTitle, Paragraph, PageAlignmentWrapper } from '@portfolio/design'
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
    <PageAlignmentWrapper>
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
            <Image src={image} alt="" width={343} height={340} priority />
          </ImageWrap>
        </Body>
      </InnerContainer>
    </PageAlignmentWrapper>
  </Section>
)

export default DevCornerHero
