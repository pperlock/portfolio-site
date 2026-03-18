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
import { ResumePage } from '@/types'
import { CONTACT_INFO } from '@/constants'
import { contentfulImageUrl } from '@portfolio/cms'

interface ResumeProps {
  content: ResumePage
}

const Resume = ({ content }: ResumeProps) => {
  const { title, summary, downloadButton, experience, education } = content ?? {}
  const { email, phone } = CONTACT_INFO

  const resumeUrl = contentfulImageUrl(downloadButton?.downloadFile?.file?.url ?? '')

  return (
    <ResumeSection>
      <ResumeContainer>
        <ResumeHeader>
          <ResumeHeaderLeft>
            <h1>{NAME}</h1>
            <HeaderTitle>{title}</HeaderTitle>
            <HeaderSummary>{summary}</HeaderSummary>
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
              <TippedButton href={resumeUrl} download target="_blank" variant="filled" tip="right">
                {downloadButton?.label}
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
