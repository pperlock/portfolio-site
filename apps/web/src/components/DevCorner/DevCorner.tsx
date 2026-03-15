'use client'

import React from 'react'

import { PageSection, SimpleHero } from '@portfolio/design'
import type { DevCornerContent } from '@/data/dev-corner-content'
import Architecture from './Archtecture'

interface DevCornerProps {
  content: DevCornerContent
}

const DevCorner = ({ content: { hero, architecture } }: DevCornerProps) => {
  return (
    <>
      <SimpleHero
        title={hero.title}
        subtitle={hero.subtitle}
        image={hero.image}
        brushStrokes={hero.brushStrokes}
        tiltImage={hero.tiltImage}
      />

      <PageSection>
        <Architecture content={architecture} />
      </PageSection>
    </>
  )
}

export default DevCorner
