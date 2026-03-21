import React from 'react'

/**
 * Markers for inline copy (e.g. dev-corner content strings):
 * - `{{code}}snippet{{/code}}` → rendered as <code>snippet</code>
 * - `**text**` → rendered as <strong>text</strong>
 *
 * Code segments are parsed first; bold runs only in plain text between code blocks.
 */
export function renderRichCopy(text: string, keyPrefix = 'rc'): React.ReactNode {
  const nodes: React.ReactNode[] = []
  let k = 0
  const codeSegments = text.split(/(\{\{code\}\}[\s\S]*?\{\{\/code\}\})/g)

  for (const segment of codeSegments) {
    const codeMatch = segment.match(/^\{\{code\}\}([\s\S]*?)\{\{\/code\}\}$/)
    if (codeMatch) {
      nodes.push(<code key={`${keyPrefix}-c-${k++}`}>{codeMatch[1]}</code>)
      continue
    }

    const boldParts = segment.split(/(\*\*[^*]+\*\*)/g)
    for (const part of boldParts) {
      const boldMatch = part.match(/^\*\*([^*]+)\*\*$/)
      if (boldMatch) {
        nodes.push(<strong key={`${keyPrefix}-b-${k++}`}>{boldMatch[1]}</strong>)
      } else if (part) {
        nodes.push(part)
      }
    }
  }

  return nodes
}
