import Resume from '@/components/Resume'
import {
  resumeHeader,
  experience,
  education,
} from '@/data/resume-content'

export default function ResumePage() {
  return (
    <Resume
      header={resumeHeader}
      experience={experience}
      education={education}
    />
  )
}
