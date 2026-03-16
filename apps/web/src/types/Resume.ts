import type { RichTextDocument } from '@portfolio/design'

export interface ContentfulAssetFile {
  url?: string
  fileName?: string
  contentType?: string
}

export interface ResumeDownloadButton {
  href: string
  label: string
  downloadFile: {
    file?: ContentfulAssetFile
  }
}

export interface ResumePage {
  title?: string
  summary?: string
  downloadButton?: ResumeDownloadButton
  experience?: ExperienceJob[]
  education?: EducationItem[]
}

export interface ContentfulExperienceJob {
  title?: string
  company?: string
  date?: string
  location?: string
  projects?: ExperienceProject[]
}

export interface ExperienceJob {
  title: string
  company: string
  date: string
  location?: string
  projects?: ExperienceProject[]
}

export interface ExperienceProject {
  title: string
  description: RichTextDocument | null | undefined
}

export interface EducationItem {
  degree: string
  institution: string
}
