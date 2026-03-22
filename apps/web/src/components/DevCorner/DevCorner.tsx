'use client'

import React from 'react'

import { LowerCaseTitle, PageSection, Paragraph } from '@portfolio/design'
import type { DevCornerContent } from '@/data/dev-corner-content'
import Architecture from './Archtecture'
import DevCornerHero from './DevCornerHero'
import RoadMap from './RoadMap'
import UnderDevelopment from './UnderDevelopment'
import PerformanceLab from './PerformanceLab'
import { DevCornerLighthousePrefetcher } from './DevCornerLighthousePrefetcher'

interface DevCornerProps {
  content: DevCornerContent
}
const DevCorner = ({
  content: { hero, architecture, designSystem, performanceLab, engineeringRoadmap },
}: DevCornerProps) => {
  return (
    <>
      <DevCornerLighthousePrefetcher />
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

      <PageSection id="performance-lab">
        <LowerCaseTitle tag="h2">{performanceLab.title}</LowerCaseTitle>
        <Paragraph color="medium">{performanceLab.body}</Paragraph>
        <PerformanceLab content={performanceLab} />
      </PageSection>

      <PageSection variant="outset" id="engineering-roadmap">
        <RoadMap content={engineeringRoadmap} />
      </PageSection>
    </>
  )
}

export default DevCorner
