'use client'

import React from 'react'
import { Socials, TippedButton } from '@portfolio/design'
import { NAME } from '@/constants'
import Experience from './Experience/Experience'
import Education from './Education/Education'
import Skills from './Skills/Skills'
import {
  ResumeSection,
  ResumeContainer,
  ResumeHeader,
  ResumeHeaderLeft,
  HeaderTitle,
  HeaderSummary,
  ResumeHeaderRight,
  ContactBlock,
  DownloadWrap,
  ResumeContent,
  ResumeMain,
  ResumeSidebar,
  ContactEmail,
  ResumeSocials,
} from './Resume.styles'
import { ExperienceJob, ResumeHeaderContent, EducationItem } from '@/types'
import { CONTACT_INFO } from '@/constants'

interface ResumeProps {
  header: ResumeHeaderContent
  experience: ExperienceJob[]
  education?: EducationItem[]
}

const Resume = ({ header, experience, education }: ResumeProps) => {
  if (!header) return null

  const { email, phone } = CONTACT_INFO
  return (
    <ResumeSection>
      <ResumeContainer>
        <ResumeHeader>
          <ResumeHeaderLeft>
            <h1>{NAME}</h1>
            <HeaderTitle>{header.title}</HeaderTitle>
            <HeaderSummary>{header.summary}</HeaderSummary>
          </ResumeHeaderLeft>
          <ResumeHeaderRight>
            <ContactBlock>
              <ContactEmail href={`mailto:${email}`}>{email}</ContactEmail>

              <p>{phone}</p>
              <ResumeSocials>
                <Socials showLeftBorder={false} />
              </ResumeSocials>
            </ContactBlock>
            <DownloadWrap>
              <TippedButton
                href={header.downloadPdf.href}
                target="_blank"
                variant="filled"
                tip="right"
              >
                {header.downloadPdf.label}
              </TippedButton>
            </DownloadWrap>
          </ResumeHeaderRight>
        </ResumeHeader>

        <ResumeContent>
          <ResumeMain>
            <Experience experience={experience} />
            <Education education={education} />
          </ResumeMain>

          <ResumeSidebar>
            <Skills />
          </ResumeSidebar>
        </ResumeContent>
      </ResumeContainer>
    </ResumeSection>
  )
}

export default Resume
