import React from 'react'
import { Bar, BarNavigationWrapper } from './HeroBottomBar.styles'
import CaseStudyNavigation from '../CaseStudyNavigation/CaseStudyNavigation'
import type { Project } from '@/types'

interface HeroBottomBarProps {
  visible: boolean
  project: Project
}

const HeroBottomBar = ({ visible, project }: HeroBottomBarProps) => {
  const caseStudyNavigation = {
    previous: 'Previous',
    next: 'Next',
    portfolio: 'Back to portfolio',
  }
  return (
    <Bar $visible={visible} aria-hidden="true">
      <BarNavigationWrapper>
        <CaseStudyNavigation project={project} navigation={caseStudyNavigation} />
      </BarNavigationWrapper>
    </Bar>
  )
}

export default HeroBottomBar
