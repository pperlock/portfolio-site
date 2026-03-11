'use client'

import React from 'react'
import Image from 'next/image'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import type { Document } from '@contentful/rich-text-types'
import type { Options } from '@contentful/rich-text-react-renderer'
import Paragraph from './Typography/Paragraph/Paragraph'
import { BLOCKS } from '@contentful/rich-text-types'
import { contentfulImageUrl } from '@/lib/contentful'
import type { ParagraphColor, ParagraphAlign } from '@/design'

export type RichTextDocument = Document

export interface EmbeddedAssetProps {
  src: string
  alt: string
  target: unknown
}

export interface RichTextProps {
  /** Contentful Rich Text document (from a Rich Text field). Can be locale-unwrapped. */
  document: RichTextDocument | null | undefined
  /** Optional default color and alignment for paragraph blocks. Overridden by block-level data when present. */
  paragraphProps?: {
    color?: ParagraphColor
    align?: ParagraphAlign
  }
  /** Optional custom renderers for nodes and marks (merged with defaults). */
  options?: Options
  /** Optional custom component for embedded assets. Receives src, alt, and raw target. */
  renderEmbeddedAsset?: (props: EmbeddedAssetProps) => React.ReactNode
}

/** Get asset URL from Contentful asset (may be locale-keyed). */
const getAssetUrl = (target: unknown): string | null => {
  if (!target || typeof target !== 'object') return null
  const t = target as Record<string, unknown>
  const file = t.file
  if (!file || typeof file !== 'object') return null
  const f = file as Record<string, unknown>
  if (typeof f.url === 'string') return f.url
  const first = Object.values(f)[0]
  if (first && typeof first === 'object' && first !== null && 'url' in first) {
    return (first as { url: string }).url
  }
  return null
}

/** Get asset title/description for alt text. */
const getAssetAlt = (target: unknown): string => {
  if (!target || typeof target !== 'object') return ''
  const t = target as Record<string, unknown>
  const title = t.title
  if (typeof title === 'string') return title
  if (title && typeof title === 'object') {
    const first = Object.values(title)[0]
    return typeof first === 'string' ? first : ''
  }
  return ''
}

const defaultParagraphRenderer =
  (
    paragraphProps?: RichTextProps['paragraphProps']
  ): NonNullable<Options['renderNode']>[typeof BLOCKS.PARAGRAPH] =>
  // eslint-disable-next-line react/display-name
  (node: { data?: Record<string, unknown> }, children: React.ReactNode | string) => {
    const data = node?.data ?? {}
    const color = (data.color as 'light' | undefined) ?? paragraphProps?.color
    const align = (data.align as 'left' | 'center' | 'right' | undefined) ?? paragraphProps?.align
    return (
      <Paragraph color={color} align={align}>
        {children}
      </Paragraph>
    )
  }

const defaultEmbeddedAssetRenderer = (node: { data: { target?: unknown } }) => {
  const target = node.data?.target
  const url = getAssetUrl(target)
  const alt = getAssetAlt(target)
  if (!url) return null
  const src = contentfulImageUrl(url)
  return (
    <figure style={{ margin: '1.5rem 0' }}>
      <Image
        src={src}
        alt={alt || 'Inline image'}
        width={800}
        height={500}
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </figure>
  )
}

const buildOptions = (
  customOptions: RichTextProps['options'],
  renderEmbeddedAsset?: RichTextProps['renderEmbeddedAsset'],
  paragraphProps?: RichTextProps['paragraphProps']
): Options => {
  const embeddedAssetRenderer =
    renderEmbeddedAsset != null
      ? (node: { data: { target?: unknown } }) => {
          const target = node.data?.target
          const url = getAssetUrl(target)
          const alt = getAssetAlt(target)
          if (!url) return null
          const src = contentfulImageUrl(url)
          return renderEmbeddedAsset({ src, alt, target })
        }
      : defaultEmbeddedAssetRenderer

  return {
    renderNode: {
      [BLOCKS.PARAGRAPH]: defaultParagraphRenderer(paragraphProps),
      [BLOCKS.EMBEDDED_ASSET]: embeddedAssetRenderer,
      ...customOptions?.renderNode,
    },
    ...(customOptions?.renderMark && { renderMark: customOptions.renderMark }),
  }
}

/**
 * Renders a Contentful Rich Text document as React components.
 * Use with a Rich Text field value from Contentful (after stripContentfulKeys if needed).
 *
 * @example
 * import { RichText } from '@/lib/contentful'
 * <RichText document={entry.fields.body} />
 *
 * @example With custom options (e.g. styled paragraphs)
 * import { BLOCKS } from '@contentful/rich-text-types'
 * <RichText
 *   document={entry.fields.body}
 *   options={{
 *     renderNode: {
 *       [BLOCKS.PARAGRAPH]: (node, children) => <HeroParagraph>{children}</HeroParagraph>,
 *     },
 *   }}
 * />
 * @example With custom embedded asset component
 * <RichText
 *   document={entry.fields.body}
 *   renderEmbeddedAsset={({ src, alt }) => (
 *     <MyImageWrapper>
 *       <Image src={src} alt={alt} fill />
 *     </MyImageWrapper>
 *   )}
 * />
 */
export const RichText = ({
  document: doc,
  options: customOptions,
  paragraphProps,
  renderEmbeddedAsset,
}: RichTextProps): React.ReactNode => {
  const options = buildOptions(customOptions, renderEmbeddedAsset, paragraphProps)

  if (doc == null || !doc.content?.length) return null
  return documentToReactComponents(doc, options)
}

RichText.displayName = 'RichText'

export { documentToReactComponents } from '@contentful/rich-text-react-renderer'
export { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
