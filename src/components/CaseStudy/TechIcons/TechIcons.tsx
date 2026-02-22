import React from 'react'
import { SKILLS } from '@/constants'
import { TechIconsRow, TechIcon, TechTooltip, TechIconImg, TechIconText } from './TechIcons.styles'
import { Project, SkillItem } from '@/types'

interface TechIconsProps {
  project: Project
}

const TechIcons = ({ project }: TechIconsProps) => {
  return (
    <TechIconsRow>
      {SKILLS.filter(s => s.projects.includes(project.id)).map(
        (skillItem: SkillItem, index: number) => (
          <TechIcon key={index}>
            {skillItem.logo ? (
              <TechIconImg src={skillItem.logo} alt={skillItem.skill} />
            ) : (
              <TechIconText>{skillItem.skill.charAt(0)}</TechIconText>
            )}
            <TechTooltip>{skillItem.skill}</TechTooltip>
          </TechIcon>
        )
      )}
    </TechIconsRow>
  )
}

export default TechIcons
