'use client'

import { useRef, useEffect } from 'react'

export function useRevealOnIntersection() {
  const workItemsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            entry.target.style.opacity = '1'
            entry.target.style.transform = 'translateY(0)'
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    workItemsRef.current.forEach(item => {
      if (item) {
        observer.observe(item)
      }
    })

    return () => {
      workItemsRef.current.forEach(item => {
        if (item) {
          observer.unobserve(item)
        }
      })
    }
  }, [])

  return { workItemsRef }
}
