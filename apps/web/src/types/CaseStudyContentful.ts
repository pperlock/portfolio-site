import type { RichTextDocument } from '@portfolio/design'

/** Hero image from Contentful (asset or list); matches patterns used on About. */
export type CaseStudyContentfulImage = {
  file?: { url?: string; description?: string }
}

export interface ProductionUrl {
  text: string
  url: string
}

/**
 * Raw fields for Contentful content type `caseStudyPage` (after stripContentfulKeys).
 * Field API ids should match these names in Contentful, or map aliases in getCaseStudyProject.
 */
export interface CaseStudyPageContentfulFields {
  title: string
  /** Site path e.g. `/koodorebrand` */
  link: string
  /** Prefer `heroImage`; `image` supported as alias */
  heroImage?: CaseStudyContentfulImage | CaseStudyContentfulImage[]
  image?: CaseStudyContentfulImage | CaseStudyContentfulImage[]
  productionUrl?: ProductionUrl[]
  summary?: CaseStudySummaryBlockContentful[]
  contributions?: CaseStudyContributionBlockContentful[]
  /** Logical case study key queried via `fields.id` (override constant in getCaseStudyProject if your API id differs). */
  id?: string
}

export interface CaseStudySummaryBlockContentful {
  title: string
  description?: string | string[] | RichTextDocument | null
}

export interface CaseStudyContributionBlockContentful {
  title: string
  description?: string | string[] | RichTextDocument | null
}
