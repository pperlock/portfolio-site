'use client'

import { useRef, useEffect, useState, useMemo } from 'react'
import { SKILLS } from '@/constants'

export function useSkillsSection() {
  const sectionRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const skillsByLevel = useMemo(
    () =>
      SKILLS.reduce((acc, skill) => {
        if (!acc[skill.level]) {
          acc[skill.level] = []
        }
        acc[skill.level].push(skill)
        return acc
      }, {}),
    []
  )

  return { sectionRef, isVisible, skillsByLevel }
}
