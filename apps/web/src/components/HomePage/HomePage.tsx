import React from 'react'
import Hero from './Hero/Hero'
import AtAGlance from './AtAGlance/AtAGlance'
import LatestWork from './LatestWork/LatestWork'
import ExperienceSummary from './ExperienceSummary/ExperienceSummary'
import Skills from './Skills/Skills'
import { HomePageContent } from '@/types'

interface HomePageProps {
  content: HomePageContent
}

const HomePage = ({ content }: HomePageProps) => {
  if (!content?.sections) return null
  const { sections } = content
  const { hero, atAGlance, latestWork, experienceSummary, skills } = sections
  return (
    <>
      <Hero content={hero} />
      <AtAGlance content={atAGlance} />
      <LatestWork content={latestWork} />
      <ExperienceSummary content={experienceSummary} />
      <Skills content={skills} />
    </>
  )
}

export default HomePage
