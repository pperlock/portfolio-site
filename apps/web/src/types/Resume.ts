type ExperienceBlock = { type: 'subtitle'; text: string } | { type: 'list'; items: string[] }

export interface ExperienceJob {
  company: string
  title: string
  date: string
  location?: string
  description: ExperienceBlock[]
}

export interface ResumeHeaderContent {
  title: string
  summary: string
  downloadPdf: {
    href: string
    label: string
  }
}

export interface EducationItem {
  title: string
  institution: string
}
