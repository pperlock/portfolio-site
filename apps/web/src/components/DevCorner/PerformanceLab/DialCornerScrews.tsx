import React from 'react'

import { DialScrew } from './PerformanceLab.styles'

const CORNERS = [
  { x: 'left' as const, y: 'top' as const },
  { x: 'right' as const, y: 'top' as const },
  { x: 'left' as const, y: 'bottom' as const },
  { x: 'right' as const, y: 'bottom' as const },
]

/** Decorative corner screws for vintage-style dial bezels (e.g. Lighthouse tuner face, scores block). */
export function DialCornerScrews() {
  return (
    <>
      {CORNERS.map(({ x, y }) => (
        <DialScrew key={`${x}-${y}`} $x={x} $y={y} aria-hidden />
      ))}
    </>
  )
}
