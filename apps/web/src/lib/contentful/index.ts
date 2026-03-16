export { getContentfulClient, getContentfulPreviewClient } from '@portfolio/cms'
export { stripContentfulKeys, contentfulImageUrl, getSingleEntry } from '@portfolio/cms'
export { getAboutContent, getResumePageContent } from './fetchPageContent'
export {
  RichText,
  documentToReactComponents,
  BLOCKS,
  MARKS,
  INLINES,
} from '@portfolio/design'
export type {
  RichTextDocument,
  RichTextProps,
  EmbeddedAssetProps,
} from '@portfolio/design'
export type { Options as RichTextOptions } from '@contentful/rich-text-react-renderer'
