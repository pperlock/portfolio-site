import React from 'react'
import {
  ProjectSummaryMedia,
  ProjectSummaryImageBlock,
  ProjectSummaryScreenshot,
} from './ProjectSummary.styles'

interface ProjectSummaryImageProps {
  image: string
  title: string
}

const ProjectSummaryImage = ({ image, title }: ProjectSummaryImageProps) => {
  return (
    <ProjectSummaryMedia>
      <ProjectSummaryImageBlock>
        <ProjectSummaryScreenshot src={image} alt={title + ' screenshot'} />
      </ProjectSummaryImageBlock>
    </ProjectSummaryMedia>
  )
}

export default ProjectSummaryImage
