import { ProductionUrl } from './general'

export interface SummaryItem {
  title: string
  description: string | string[]
}

export interface ContributionItem {
  title: string
  description: string | string[]
}

export type Contributions = ContributionItem[]

export interface Project {
  id: string
  title: string
  image: string
  link: string
  productionUrl: ProductionUrl[]
  summary: SummaryItem[]
  contributions: Contributions
}

export interface CaseStudyNavigation {
  previous: string
  next: string
  portfolio: string
}

export interface CaseStudyContent {
  navigation: CaseStudyNavigation
  contributionsTitle: string
  summaryTitle: string
  badge: string
}

export interface WorkItem {
  id: string | number
  title: string
  description: string | string[]
  image: string
  caseStudyUrl: string
  category?: string
  placeholder?: string
}
