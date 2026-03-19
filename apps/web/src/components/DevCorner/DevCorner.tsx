'use client'

import React from 'react'
import Image from 'next/image'

import { LowerCaseTitle, PageSection, Paragraph } from '@portfolio/design'
import type { DevCornerContent } from '@/data/dev-corner-content'
import Architecture from './Archtecture'
import DevCornerHero from './DevCornerHero'
import RoadMap from './RoadMap'
import { PullQuote } from './DevCorner.styles'
import { GitHubIssueItem } from '@/types'
import UnderDevelopment from './UnderDevelopment'

interface DevCornerProps {
  issues: GitHubIssueItem[]
  content: DevCornerContent
}
const DevCorner = ({
  issues,
  content: { hero, architecture, designSystem, performanceLab, engineeringRoadmap },
}: DevCornerProps) => {
  return (
    <>
      <DevCornerHero
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        navLinks={[
          { href: '#architecture', label: architecture.title },
          { href: '#design-system', label: designSystem.title },
          { href: '#performance-lab', label: performanceLab.title },
          { href: '#engineering-roadmap', label: engineeringRoadmap.title },
        ]}
      />

      <PageSection id="architecture">
        <Architecture content={architecture} />
      </PageSection>

      <PageSection variant="outset" id="design-system">
        <LowerCaseTitle tag="h2">{designSystem.title}</LowerCaseTitle>
        <Paragraph color="medium">{designSystem.body}</Paragraph>
        <UnderDevelopment />
      </PageSection>

      <PageSection id="engineering-roadmap">
        <RoadMap content={engineeringRoadmap} issues={issues} />
      </PageSection>

      {/* <PageSection id="performance-lab">
        <LowerCaseTitle tag="h2">{performanceLab.title}</LowerCaseTitle>
        <Paragraph color="medium">{performanceLab.body}</Paragraph>
      </PageSection> */}
    </>
  )
}

export default DevCorner
