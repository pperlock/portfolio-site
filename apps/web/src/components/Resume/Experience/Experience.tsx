import React from 'react'
import {
  ExperienceSection,
  JobDate,
  JobLocation,
  JobDescription,
  ProjectName,
  SectionTitle,
  Job,
  JobHeader,
  Company,
  JobTitle,
} from './Experience.styles'
import { ExperienceJob } from '@/types'
import { RichText } from '@portfolio/design'

interface ExperienceProps {
  experience?: ExperienceJob[]
}

export default function Experience({ experience = [] }: ExperienceProps) {
  return (
    <ExperienceSection>
      <SectionTitle>Experience</SectionTitle>
      {experience.map(job => (
        <Job key={`${job.company}-${job.title}`}>
          <JobHeader>
            <div>
              <JobTitle>{job.title}</JobTitle>
              <Company>{job.company}</Company>
            </div>
            <JobDate>{job.date}</JobDate>
          </JobHeader>
          <JobLocation>{job.location}</JobLocation>
          <JobDescription>
            {job.projects?.map((block, i) => (
              <>
                <ProjectName key={i} $first={i === 0}>
                  {block.title}
                </ProjectName>
                <RichText document={block.description} />
              </>
            ))}
          </JobDescription>
        </Job>
      ))}
    </ExperienceSection>
  )
}
