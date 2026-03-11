'use client'

import React from 'react'
import { Section, SectionAlt, Content } from './About.styles'
import { AboutProps } from '@/types'
import AboutHero from './AboutHero/AboutHero'
import Story from './Story'
import Frontend from './Frontend'
import Collaboration from './Collaboration'
import Workplace from './WorkPlace'

export default function About({ content }: AboutProps) {
  const { hero, myStory, frontend, collaboration, workplace } = content

  return (
    <>
      <AboutHero content={hero} />

      <Section>
        <Content>
          <Story myStory={myStory} />
        </Content>
      </Section>

      <SectionAlt>
        <Content>
          <Frontend frontend={frontend} />
        </Content>
      </SectionAlt>

      <Section>
        <Content>
          <Collaboration collaboration={collaboration} />
        </Content>
      </Section>

      <SectionAlt>
        <Content>
          <Workplace workplace={workplace} />
        </Content>
      </SectionAlt>
    </>
  )
}
