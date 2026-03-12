import type { RichTextDocument } from '@/lib/contentful'

/** Contentful asset with file url and optional description (may be locale-keyed in API) */
export interface ContentfulImageAsset {
  file: { url: string; description?: string }
  description?: string
}

/** Hero block: title, subtitle, rich text body, optional image */
export interface HeroSection {
  title: string
  subtitle: string
  body: RichTextDocument | null | undefined
  image?: {
    file?: { url: string; description?: string }
  }
}

/** Section with title, tagline, images, and rich text description */
export interface MyStorySection {
  title: string
  tagLine: string
  image: ContentfulImageAsset[]
  description: RichTextDocument | null | undefined
}

/** Section with title and rich text (e.g. Why Frontend) */
export interface FrontendSection {
  title: string
  description: RichTextDocument | null | undefined
}

/** Section with tagline, image, and rich text (e.g. How I Work / Collaboration) */
export interface CollaborationSection {
  tagLine: string
  image: ContentfulImageAsset[]
  description: RichTextDocument | null | undefined
}

/** Item in workplace description list */
export interface WorkplaceDescriptionItem {
  miniQuote?: string
  pullQuote?: string
  text?: RichTextDocument | null
}

/** Workplace section: title, images array, description list */
export interface WorkplaceSection {
  title: string
  images: ContentfulImageAsset[]
  description: WorkplaceDescriptionItem[]
}

export interface AboutContent {
  hero: HeroSection
  myStory: MyStorySection
  frontend: FrontendSection
  collaboration: CollaborationSection
  workplace: WorkplaceSection
}

export interface AboutProps {
  content: AboutContent
}
