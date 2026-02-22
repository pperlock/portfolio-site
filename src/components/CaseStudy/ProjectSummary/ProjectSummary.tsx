import React from 'react'
import { PageSection } from '@/design'
import { ProjectSummaryGrid, ProjectSummaryBlocks } from './ProjectSummary.styles'
import ProjectSummaryText from './ProjectSummaryText'
import ProjectSummaryImage from './ProjectSummaryImage'
import { Project, SummaryItem } from '@/types'

interface ProjectSummaryProps {
  project: Project
  summaryTitle?: string
}

const ProjectSummary = ({ project, summaryTitle }: ProjectSummaryProps) => {
  const { summary, image, title } = project ?? {}

  return (
    <>
      <PageSection variant="inset" title={summaryTitle}>
        <ProjectSummaryGrid>
          <ProjectSummaryBlocks>
            {summary.map((summary: SummaryItem) => (
              <ProjectSummaryText key={summary.title} summary={summary} />
            ))}
          </ProjectSummaryBlocks>
          <ProjectSummaryImage image={image} title={title} />
        </ProjectSummaryGrid>
      </PageSection>
    </>
  )
}

export default ProjectSummary
