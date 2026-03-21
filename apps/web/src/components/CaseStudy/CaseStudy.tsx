'use client'

import React, { useRef, useState, useEffect } from 'react'

import {
  CaseStudyHeroWrapper,
  CaseStudyHeroContainer,
  BadgeGroup,
  ProjectTitle,
  CaseStudyHeroMetaRow,
  TitleRow,
  TitleBadge,
} from './CaseStudy.styles'

import { PageAlignmentWrapper, TippedButton } from '@portfolio/design'
import CaseStudyNavigation from './CaseStudyNavigation/CaseStudyNavigation'
import HeroBottomBar from './HeroBottomBar/HeroBottomBar'
import TechIcons from './TechIcons/TechIcons'
import ProjectSummary from './ProjectSummary/ProjectSummary'
import Contributions from './Contributions/Contributions'
import { CaseStudyContent, Project } from '@/types'

/** Show bar when hero bottom is this many px from top of viewport (e.g. 70 = at header bottom, 120 = earlier) */
const HERO_BAR_THRESHOLD = 100

type CaseStudyProps = {
  project: Project
  content?: CaseStudyContent
}

const CaseStudy = ({ project, content }: CaseStudyProps) => {
  const productionLinks = Array.isArray(project?.productionUrl) ? project.productionUrl : []
  const sentinelRef = useRef<HTMLDivElement | null>(null)
  const [showHeroBottomBar, setShowHeroBottomBar] = useState(false)

  const { contributions } = project ?? {}
  const { navigation, contributionsTitle, summaryTitle, badge } = content ?? {}

  useEffect(() => {
    const sentinel = sentinelRef.current
    if (!sentinel) return

    const update = () => {
      const bottom = sentinel.getBoundingClientRect().bottom
      setShowHeroBottomBar(bottom <= HERO_BAR_THRESHOLD)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  if (!project) return null

  return (
    <>
      <HeroBottomBar visible={showHeroBottomBar} project={project} />
      <CaseStudyHeroWrapper>
        <PageAlignmentWrapper>
          <CaseStudyHeroContainer>
            <TitleRow>
              <TitleBadge>
                {typeof badge === 'string' || typeof badge === 'number' ? badge : ''}
              </TitleBadge>
              <ProjectTitle>{String(project.title ?? '')}</ProjectTitle>
            </TitleRow>
            {productionLinks.length > 0 && (
              <BadgeGroup>
                {productionLinks.map(({ title, url }, i) => (
                  <TippedButton
                    key={title}
                    target="_blank"
                    href={url}
                    tip={i % 2 === 0 ? 'left' : 'right'}
                  >
                    {title}
                  </TippedButton>
                ))}
              </BadgeGroup>
            )}
            <CaseStudyHeroMetaRow>
              <TechIcons project={project} />
              <CaseStudyNavigation project={project} navigation={navigation} />
            </CaseStudyHeroMetaRow>
          </CaseStudyHeroContainer>
          <div ref={sentinelRef} style={{ height: 1, pointerEvents: 'none' }} aria-hidden="true" />
        </PageAlignmentWrapper>
      </CaseStudyHeroWrapper>
      <ProjectSummary project={project} summaryTitle={summaryTitle} />
      <Contributions contributions={contributions} contributionsTitle={contributionsTitle} />
    </>
  )
}

export default CaseStudy
