import { useEffect, useMemo, useRef, useState } from 'react'
import type { RefObject } from 'react'

interface TunerPoint {
  readoutLabel: string
  kcLabel: string
  pageId: string
  angle: number
  frequency: number
}

const START_ANGLE = 270
const SWEEP_ANGLE = 180 // 270deg -> 90deg
const MIN_FREQUENCY = 10
const MAX_FREQUENCY = 90

const clamp01 = (n: number) => Math.max(0, Math.min(1, n))

const angleDistance = (a: number, b: number) => {
  const diff = Math.abs(a - b) % 360
  return Math.min(diff, 360 - diff)
}

const clampAngleToSweep = (angle: number) => {
  // Keep the dial constrained to a sweep arc, but when the pointer goes
  // outside the arc we should "stick" to the nearest end (not always the
  // clockwise end). This fixes the "too far left bounces to far right" bug.
  const normalized = ((angle % 360) + 360) % 360
  const endAngle = (START_ANGLE + SWEEP_ANGLE) % 360

  // If the angle is already inside the sweep arc, return it as-is.
  const deltaCW = (normalized - START_ANGLE + 360) % 360 // [0..360)
  if (deltaCW <= SWEEP_ANGLE) return normalized

  // Otherwise clamp to the nearest boundary.
  const distToStart = angleDistance(normalized, START_ANGLE)
  const distToEnd = angleDistance(normalized, endAngle)

  // Tie-breaker: bias to the left end so "too far left" sticks left.
  if (distToStart <= distToEnd) return START_ANGLE
  return endAngle
}

const angleToFrequency = (angle: number) => {
  const delta = (angle - START_ANGLE + 360) % 360
  const t = clamp01(delta / SWEEP_ANGLE)
  return MIN_FREQUENCY + t * (MAX_FREQUENCY - MIN_FREQUENCY)
}

interface UseLighthouseTunerArgs {
  selectedPageId?: string
  onChange?: (pageId: string) => void
}

interface UseLighthouseTunerResult {
  tunerPoints: TunerPoint[]
  rotation: number
  needlePos: number
  previewPageId?: string
  knobRef: RefObject<HTMLDivElement>
  startDragging: () => void
}

const useLighthouseTuner = ({
  selectedPageId,
  onChange,
}: UseLighthouseTunerArgs): UseLighthouseTunerResult => {
  const tunerPoints: TunerPoint[] = useMemo(() => {
    // Order matters: left-to-right on the tuner.
    // Keep ONE case-study station that maps to the consolidated Koodo rebrand page.
    const dialPages = [
      { pageId: 'home', readoutLabel: 'HOME' },
      { pageId: 'about', readoutLabel: 'ABOUT' },
      { pageId: 'portfolio', readoutLabel: 'PORTFOLIO' },
      { pageId: 'contact', readoutLabel: 'CONTACT' },
      { pageId: 'dev-corner', readoutLabel: 'DEV CORNER' },
      { pageId: 'resume', readoutLabel: 'RESUME' },
      { pageId: 'koodo-rebrand', readoutLabel: 'CASE STUDY' },
    ] as const

    const denom = dialPages.length > 1 ? dialPages.length - 1 : 1

    return dialPages.map((p, i) => {
      const t = i / denom
      const kc = Math.round(550 + t * (1400 - 550))
      return {
        readoutLabel: p.readoutLabel,
        kcLabel: String(kc),
        pageId: p.pageId,
        angle: START_ANGLE + t * SWEEP_ANGLE,
        frequency: MIN_FREQUENCY + t * (MAX_FREQUENCY - MIN_FREQUENCY),
      }
    })
  }, [])

  const [rotation, setRotation] = useState(tunerPoints[0]?.angle ?? START_ANGLE)
  const [needlePos, setNeedlePos] = useState(tunerPoints[0]?.frequency ?? MIN_FREQUENCY)
  const [previewPageId, setPreviewPageId] = useState<string | undefined>()
  const rotationRef = useRef(rotation)
  const knobRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const getClosestPoint = (angle: number) =>
    tunerPoints.reduce((prev, curr) =>
      angleDistance(curr.angle, angle) < angleDistance(prev.angle, angle) ? curr : prev
    )

  const calculateAngle = (clientX: number, clientY: number) => {
    if (!knobRef.current) return START_ANGLE
    const rect = knobRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const radians = Math.atan2(clientY - centerY, clientX - centerX)
    let degree = radians * (180 / Math.PI) + 90
    if (degree < 0) degree += 360
    return degree
  }

  // Sync dial position when selected page changes from outside the knob.
  useEffect(() => {
    const match = selectedPageId ? tunerPoints.find(p => p.pageId === selectedPageId) : undefined
    const next = match ?? tunerPoints[0]
    if (!next) return
    setRotation(next.angle)
    rotationRef.current = next.angle
    setNeedlePos(next.frequency)
  }, [selectedPageId, tunerPoints])

  useEffect(() => {
    // Once the parent selection catches up (after mouse up), clear the preview.
    if (!selectedPageId) return
    // Only clear the preview after we actually have a selected page and the
    // user has released the dial (so we don't flicker back to the default).
    if (!isDragging.current && previewPageId && previewPageId === selectedPageId)
      setPreviewPageId(undefined)
  }, [selectedPageId, previewPageId])

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!isDragging.current) return
      const rawAngle = calculateAngle(clientX, clientY)
      const clampedAngle = clampAngleToSweep(rawAngle)
      rotationRef.current = clampedAngle
      setRotation(clampedAngle)
      setNeedlePos(angleToFrequency(clampedAngle))

      const closest = getClosestPoint(clampedAngle)
      setPreviewPageId(closest.pageId)
    }

    const handleUp = () => {
      if (!isDragging.current) return
      isDragging.current = false

      const closest = getClosestPoint(rotationRef.current)
      setRotation(closest.angle)
      rotationRef.current = closest.angle
      setNeedlePos(closest.frequency)
      setPreviewPageId(closest.pageId)
      onChange?.(closest.pageId)
    }

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX, e.clientY)
    const handlePointerMove = (e: PointerEvent) => handleMove(e.clientX, e.clientY)
    const handleMouseUp = () => handleUp()
    const handlePointerUp = () => handleUp()

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [onChange, tunerPoints])

  return {
    tunerPoints,
    rotation,
    needlePos,
    previewPageId,
    knobRef,
    startDragging: () => {
      isDragging.current = true
    },
  }
}

export default useLighthouseTuner
