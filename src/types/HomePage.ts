import { TippedButton } from './general'
import { SkillItem } from './Skills'
import { WorkItem } from './CaseStudy'

export interface AtAGlanceContent {
  title: string
  points: string[]
}

export interface ExperienceItem {
  role: string
  company: string
  companyUrl: string
  period: string
  location: string
  description: string | string[]
  summary: string[]
  logo: string
}

export interface SkillsContent {
  title: string
  levelOrder: string[]
  levelLabels: { [key: string]: string }
  skills?: SkillItem[]
}

export interface ExperienceSummaryContent {
  title: string
  button: TippedButton
  experiences: ExperienceItem[]
}

export interface ExperienceItem {
  role: string
  company: string
  companyUrl: string
  period: string
  location: string
}

export interface HeroContentType {
  tagline: string
  subtitle: string
  buttons: TippedButton[]
  image: string
}

export interface LatestWorkContent {
  title: string
  button: TippedButton
  workItems: WorkItem[]
}

export interface HomePageContent {
  sections: {
    hero: HeroContentType
    atAGlance: AtAGlanceContent
    latestWork: LatestWorkContent
    experienceSummary: ExperienceSummaryContent
    skills: SkillsContent
  }
}

export interface PortfolioContent {
  title: string
  subtitle: string
  workItems: WorkItem[]
}
