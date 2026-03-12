'use client'

import React from 'react'
import { PageSection, TippedButton, LowerCaseTitle } from '@portfolio/design'

import {
  Content,
  ItemWrapper,
  Item,
  Header,
  HeaderLeft,
  Company,
  CompanyLink,
  Meta,
  Period,
  Separator,
  Location,
  LogoWrap,
  LogoLink,
  Description,
  SummaryList,
  ResumeLinkWrapper,
} from './ExperienceSummary.styles'
import { ExperienceSummaryContent, ExperienceItem } from '@/types'

interface ExperienceSummaryProps {
  content: ExperienceSummaryContent
}

const ExperienceSummary = ({ content }: ExperienceSummaryProps) => {
  const { title, button, experiences } = content

  return (
    <PageSection title={title} id="experience-summary" variant="inset">
      <Content>
        {experiences.map((exp: ExperienceItem, index: number) => (
          <ItemWrapper key={index}>
            <LowerCaseTitle tag="h3">{exp.role}</LowerCaseTitle>
            <Item>
              <Header>
                <HeaderLeft>
                  {exp.companyUrl ? (
                    <CompanyLink href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                      {exp.company}
                    </CompanyLink>
                  ) : (
                    <Company>{exp.company}</Company>
                  )}
                  <Meta>
                    <Period>{exp.period}</Period>
                    {exp.location && (
                      <>
                        <Separator>·</Separator>
                        <Location>{exp.location}</Location>
                      </>
                    )}
                  </Meta>
                </HeaderLeft>
                {exp.logo && (
                  <LogoWrap $isFirst={index === 0}>
                    {exp.companyUrl ? (
                      <LogoLink href={exp.companyUrl} target="_blank" rel="noopener noreferrer">
                        <img src={exp.logo} alt={`${exp.company}`} />
                      </LogoLink>
                    ) : (
                      <img src={exp.logo} alt={`${exp.company}`} />
                    )}
                  </LogoWrap>
                )}
              </Header>

              {exp.description && <Description>{exp.description}</Description>}
              {exp.summary && (
                <SummaryList>
                  {exp.summary.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </SummaryList>
              )}
            </Item>
          </ItemWrapper>
        ))}
      </Content>
      <ResumeLinkWrapper>
        <TippedButton href={button.href}>{button.label}</TippedButton>
      </ResumeLinkWrapper>
    </PageSection>
  )
}

export default ExperienceSummary
