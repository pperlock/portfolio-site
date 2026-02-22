import React from 'react'
import {
  ExperienceSectionBlock,
  ExperienceSectionTitle,
  ExperienceItem,
  ExperienceItemHeader,
  ExperienceItemTitle,
  ExperienceItemCompany,
  ExperienceItemDate,
  JobLocation,
  ExperienceItemDescription,
  DescriptionSubtitle,
} from './Experience.styles'
import { ExperienceJob } from '@/types'

type ExperienceProps = { experience?: ExperienceJob[] }

export default function Experience({ experience = [] }: ExperienceProps) {
  return (
    <ExperienceSectionBlock>
      <ExperienceSectionTitle>Experience</ExperienceSectionTitle>
      {experience.map(job => (
        <ExperienceItem key={`${job.company}-${job.title}`}>
          <ExperienceItemHeader>
            <div>
              <ExperienceItemTitle>{job.title}</ExperienceItemTitle>
              <ExperienceItemCompany>{job.company}</ExperienceItemCompany>
            </div>
            <ExperienceItemDate>{job.date}</ExperienceItemDate>
          </ExperienceItemHeader>
          <JobLocation>{job.location}</JobLocation>
          <ExperienceItemDescription>
            {job.description.map((block, i) => {
              if (block.type === 'subtitle') {
                return (
                  <DescriptionSubtitle key={i} $first={i === 0}>
                    {block.text}
                  </DescriptionSubtitle>
                )
              }
              if (block.type === 'list') {
                return (
                  <ul key={i}>
                    {block.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                )
              }
              return null
            })}
          </ExperienceItemDescription>
        </ExperienceItem>
      ))}
    </ExperienceSectionBlock>
  )
}
