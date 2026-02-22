'use client'

import React from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet } from 'styled-components'
import { useState, useRef } from 'react'
import GlobalStyles from '@/design/GlobalStyles'

// One style element per request so useServerInsertedHTML only emits once even if called multiple times
const styleCache = new Map()

const MAX_CACHE_SIZE = 50

function pruneCache() {
  if (styleCache.size > MAX_CACHE_SIZE) {
    const firstKey = styleCache.keys().next().value
    if (firstKey != null) styleCache.delete(firstKey)
  }
}

type StyledComponentsRegistryProps = {
  children: React.ReactNode
  requestId?: string
}

export default function StyledComponentsRegistry({ children, requestId }: StyledComponentsRegistryProps) {
  const [sheet] = useState(() => new ServerStyleSheet())
  const styleElementRef = useRef<React.ReactElement | null>(null)

  useServerInsertedHTML(() => {
    if (typeof window !== 'undefined') return null
    const cached = requestId != null ? styleCache.get(requestId) : null
    if (cached != null) return null
    if (styleElementRef.current != null) {
      if (requestId != null) styleCache.set(requestId, styleElementRef.current)
      return styleElementRef.current
    }
    const styles = sheet.getStyleElement()
    sheet.seal()
    const element = <>{styles}</>
    styleElementRef.current = element
    if (requestId != null) {
      styleCache.set(requestId, element)
      pruneCache()
    }
    return element
  })

  const content = (
    <>
      <GlobalStyles />
      {children}
    </>
  )

  if (typeof window !== 'undefined') return content
  return sheet.collectStyles(content)
}
