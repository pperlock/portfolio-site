import React from 'react'
import { getNextCaseStudy, getPreviousCaseStudy } from '@/utils'
import {
  CaseStudyHeroLinks,
  CaseStudyBackLink,
  CaseStudyNextLink,
} from './CaseStudyNavigation.styles'
import type { CaseStudyNavigation as CaseStudyNavContent, Project } from '@/types'

type CaseStudyNavigationProps = {
  project: Project
  navigation?: CaseStudyNavContent
}

const CaseStudyNavigation = ({ project, navigation }: CaseStudyNavigationProps) => {
  const projectId = String(project?.id ?? '')
  const nextCaseStudy = getNextCaseStudy(projectId)
  const previousCaseStudy = getPreviousCaseStudy(projectId)
  const { previous, next, portfolio } = navigation ?? {}

  return (
    <CaseStudyHeroLinks>
      {previousCaseStudy ? (
        <CaseStudyBackLink href={previousCaseStudy.link}>← {previous}</CaseStudyBackLink>
      ) : (
        <CaseStudyBackLink href="/#portfolio">← {portfolio}</CaseStudyBackLink>
      )}
      {nextCaseStudy ? (
        <CaseStudyNextLink href={nextCaseStudy.link}>{next} →</CaseStudyNextLink>
      ) : (
        <CaseStudyNextLink href="/#portfolio">{portfolio} →</CaseStudyNextLink>
      )}
    </CaseStudyHeroLinks>
  )
}

export default CaseStudyNavigation
