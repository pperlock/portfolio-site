import React, { useMemo } from 'react'
import { SKILLS } from '@/constants'
import {
  SkillsSectionBlock,
  SkillsSectionTitle,
  SkillsGrid,
  SkillCategory,
  SkillCategoryTitle,
  SkillTags,
  SkillTag,
} from './Skills.styles'

const LEVEL_ORDER = ['core', 'advanced', 'supporting']
const LEVEL_LABELS = { core: 'Core', advanced: 'Advanced', supporting: 'Supporting' }

function groupSkillsByLevel() {
  const groups = { core: [], advanced: [], supporting: [] }
  SKILLS.forEach(s => {
    if (groups[s.level]) groups[s.level].push(s)
  })
  return LEVEL_ORDER.map(level => ({
    category: LEVEL_LABELS[level],
    skills: groups[level],
  }))
}

export default function Skills() {
  const skillsByLevel = useMemo(groupSkillsByLevel, [])

  return (
    <SkillsSectionBlock>
      <SkillsSectionTitle>Skills</SkillsSectionTitle>
      <SkillsGrid>
        {skillsByLevel.map(({ category, skills: levelSkills }) => (
          <SkillCategory key={category}>
            <SkillCategoryTitle>{category}</SkillCategoryTitle>
            <SkillTags>
              {levelSkills.map(({ skill }) => (
                <SkillTag key={skill}>{skill}</SkillTag>
              ))}
            </SkillTags>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSectionBlock>
  )
}
