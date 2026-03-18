import type { EducationItem } from '@/types'
import {
  EducationSection,
  Entry,
  EntryHeader,
  Degree,
  Institution,
  SectionTitle,
} from './Education.styles'

interface EducationProps {
  education?: EducationItem[]
}

export default function Education({ education = [] }: EducationProps) {
  return (
    <EducationSection>
      <SectionTitle>Education</SectionTitle>
      {education.map(({ degree, institution }) => (
        <Entry key={`${institution}-${degree}`}>
          <EntryHeader>
            <div>
              <Degree>{degree}</Degree>
              <Institution>{institution}</Institution>
            </div>
          </EntryHeader>
        </Entry>
      ))}
    </EducationSection>
  )
}
