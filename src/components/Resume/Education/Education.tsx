import React from 'react'
import {
  EducationSectionBlock,
  EducationSectionTitle,
  EducationItem,
  EducationItemHeader,
  EducationItemTitle,
  EducationItemInstitution,
} from './Education.styles'

type EducationItemType = { institution: string; title: string }

type EducationProps = {
  education?: EducationItemType[]
}

export default function Education({ education = [] }: EducationProps) {
  return (
    <EducationSectionBlock>
      <EducationSectionTitle>Education</EducationSectionTitle>
      {education.map(item => (
        <EducationItem key={`${item.institution}-${item.title}`}>
          <EducationItemHeader>
            <div>
              <EducationItemTitle>{item.title}</EducationItemTitle>
              <EducationItemInstitution>{item.institution}</EducationItemInstitution>
            </div>
          </EducationItemHeader>
        </EducationItem>
      ))}
    </EducationSectionBlock>
  )
}
