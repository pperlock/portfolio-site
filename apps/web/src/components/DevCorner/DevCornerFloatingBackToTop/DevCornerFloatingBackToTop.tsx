'use client'

import React, { useCallback, useEffect, useRef, useState } from 'react'

import { FloatingButton } from './DevCornerFloatingBackToTop.styles'

/** Enough scroll that “back to top” is meaningful; keeps the FAB off the hero. */
const SCROLL_SHOW_PX = 280

export function DevCornerFloatingBackToTop() {
  const [visible, setVisible] = useState(false)
  const footerIntersectingRef = useRef(false)
  const scrollYRef = useRef(0)

  const recompute = useCallback(() => {
    const next =
      scrollYRef.current >= SCROLL_SHOW_PX && !footerIntersectingRef.current
    setVisible(v => (v !== next ? next : v))
  }, [])

  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer) return

    scrollYRef.current = window.scrollY

    const observer = new IntersectionObserver(
      ([entry]) => {
        footerIntersectingRef.current = entry.isIntersecting
        recompute()
      },
      { threshold: 0, rootMargin: '0px' }
    )
    observer.observe(footer)

    const onScroll = () => {
      scrollYRef.current = window.scrollY
      recompute()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    recompute()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [recompute])

  const scrollToTop = () => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' })
  }

  if (!visible) return null

  return (
    <FloatingButton type="button" onClick={scrollToTop} aria-label="Back to top">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <path
          d="M2 11 L8 5 L14 11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </FloatingButton>
  )
}
