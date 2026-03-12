'use client'

import React from 'react'
import { PageSection, LowerCaseTitle } from '@portfolio/design'
import {
  Level,
  Grid,
  Card,
  SkillIcon,
  SkillIconImg,
  SkillIconText,
  SkillName,
} from './Skills.styles'
import { useSkillsSection } from './useSkillsSection'
import { SkillsContent, SkillItem } from '@/types'

interface SkillsProps {
  content: SkillsContent
}

const Skills = ({ content }: SkillsProps) => {
  const { title, levelOrder, levelLabels } = content
  const { sectionRef, isVisible, skillsByLevel } = useSkillsSection()

  return (
    <PageSection title={title} id="skills" variant="outset" ref={sectionRef}>
      {levelOrder.map(level => {
        const levelSkills = skillsByLevel[level] || []
        if (levelSkills.length === 0) return null

        return (
          <Level key={level} data-level={level}>
            <LowerCaseTitle tag="h3">{levelLabels[level].toLowerCase()}</LowerCaseTitle>
            <Grid $level={level}>
              {levelSkills.map((skillItem: SkillItem, index: number) => (
                <Card key={index} $level={level} $visible={isVisible} $delay={index * 0.05}>
                  <SkillIcon $level={level}>
                    {skillItem.logo ? (
                      <SkillIconImg src={skillItem.logo} alt={skillItem.skill} />
                    ) : (
                      <SkillIconText>{skillItem.skill.charAt(0)}</SkillIconText>
                    )}
                  </SkillIcon>
                  <SkillName>{skillItem.skill}</SkillName>
                </Card>
              ))}
            </Grid>
          </Level>
        )
      })}
    </PageSection>
  )
}

export default Skills
