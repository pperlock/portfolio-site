import React from 'react'
import { ProjectSummaryDescription } from './ProjectSummary.styles'
import { toParagraphs } from '@/utils'
import { LowerCaseTitle } from '@/design'
import { SummaryItem } from '@/types'

interface ProjectSummaryTextProps {
  summary: SummaryItem
}

const ProjectSummaryText = ({ summary }: ProjectSummaryTextProps) => {
  const { title, description } = summary

  return (
    <div>
      <LowerCaseTitle tag="h3">{title.toLowerCase()}</LowerCaseTitle>
      {toParagraphs(description).length
        ? toParagraphs(description).map((p, i) => (
            <ProjectSummaryDescription key={i}>{p}</ProjectSummaryDescription>
          ))
        : description != null && (
            <ProjectSummaryDescription>{String(description)}</ProjectSummaryDescription>
          )}
    </div>
  )
}

export default ProjectSummaryText
