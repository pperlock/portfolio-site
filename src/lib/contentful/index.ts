export { getContentfulClient, getContentfulPreviewClient } from './client'
export { stripContentfulKeys, contentfulImageUrl } from './mapContentful'
export { getAboutContent } from './fetchPageContent'
export {
  RichText,
  documentToReactComponents,
  BLOCKS,
  MARKS,
  INLINES,
} from '../../design/components/RichText'
export type {
  RichTextDocument,
  RichTextProps,
  EmbeddedAssetProps,
} from '../../design/components/RichText'
export type { Options as RichTextOptions } from '@contentful/rich-text-react-renderer'
