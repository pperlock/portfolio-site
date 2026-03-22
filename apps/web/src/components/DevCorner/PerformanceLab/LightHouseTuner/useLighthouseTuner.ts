import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { PointerEvent as ReactPointerEvent, RefObject } from 'react'

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

/** Inertia / snap tuning (param space 0–1 along the arc). */
const FRICTION = 0.935
const SNAP_STRENGTH = 0.062
/** Extra velocity damping when already near a station (reduces springy overshoot). */
const NEAR_TARGET_PARAM = 0.12
const NEAR_TARGET_V_DAMP = 0.76
const STOP_V_PARAM = 0.0016
const SNAP_DONE_PARAM = 0.005

const clamp01 = (n: number) => Math.max(0, Math.min(1, n))

const angleDistance = (a: number, b: number) => {
  const diff = Math.abs(a - b) % 360
  return Math.min(diff, 360 - diff)
}

const clampAngleToSweep = (angle: number) => {
  const normalized = ((angle % 360) + 360) % 360
  const endAngle = (START_ANGLE + SWEEP_ANGLE) % 360

  const deltaCW = (normalized - START_ANGLE + 360) % 360
  if (deltaCW <= SWEEP_ANGLE) return normalized

  const distToStart = angleDistance(normalized, START_ANGLE)
  const distToEnd = angleDistance(normalized, endAngle)

  if (distToStart <= distToEnd) return START_ANGLE
  return endAngle
}

const angleToFrequency = (angle: number) => {
  const delta = (angle - START_ANGLE + 360) % 360
  const t = clamp01(delta / SWEEP_ANGLE)
  return MIN_FREQUENCY + t * (MAX_FREQUENCY - MIN_FREQUENCY)
}

/** Map a sweep-clamped angle to linear position along the dial (0 = start, 1 = end). */
function angleToParam(angle: number): number {
  const a = clampAngleToSweep(angle)
  const deltaCW = (a - START_ANGLE + 360) % 360
  if (deltaCW <= SWEEP_ANGLE) return deltaCW / SWEEP_ANGLE
  const endA = (START_ANGLE + SWEEP_ANGLE) % 360
  return angleDistance(a, START_ANGLE) <= angleDistance(a, endA) ? 0 : 1
}

/** Param on the arc → normalized angle in [0, 360) for rotation / needle. */
function paramToAngle(param: number): number {
  const u = clamp01(param)
  const raw = START_ANGLE + u * SWEEP_ANGLE
  return ((raw % 360) + 360) % 360
}

function findNearestStation(angle: number, points: TunerPoint[]): TunerPoint {
  return points.reduce((prev, curr) =>
    angleDistance(curr.angle, angle) < angleDistance(prev.angle, angle) ? curr : prev
  )
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
  /** True while the user is dragging — disables CSS transitions on the knob. */
  isDialDragging: boolean
  /** True while inertia / snap animation is running (RAF). */
  isPhysicsRunning: boolean
  knobRef: RefObject<HTMLDivElement>
  startDragging: (e?: ReactPointerEvent<HTMLDivElement>) => void
}

const useLighthouseTuner = ({
  selectedPageId,
  onChange,
}: UseLighthouseTunerArgs): UseLighthouseTunerResult => {
  const tunerPoints: TunerPoint[] = useMemo(() => {
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
  const [isDialDragging, setIsDialDragging] = useState(false)
  const [isPhysicsRunning, setIsPhysicsRunning] = useState(false)

  const rotationRef = useRef(rotation)
  const knobRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const capturedPointerIdRef = useRef<number | null>(null)

  const velocityParamRef = useRef(0)
  const lastParamRef = useRef(0)
  const rafRef = useRef<number | null>(null)

  const tunerPointsRef = useRef(tunerPoints)
  const onChangeRef = useRef(onChange)

  useEffect(() => {
    tunerPointsRef.current = tunerPoints
  }, [tunerPoints])

  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  const cancelPhysicsLoop = useCallback(() => {
    if (rafRef.current != null) {
      cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    velocityParamRef.current = 0
    setIsPhysicsRunning(false)
  }, [])

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

  const runPhysicsFrame = useCallback(() => {
    if (rafRef.current != null) return
    setIsPhysicsRunning(true)

    const step = () => {
      const points = tunerPointsRef.current
      const clamped = clampAngleToSweep(rotationRef.current)
      const p = angleToParam(clamped)
      const closest = findNearestStation(clamped, points)
      const targetP = angleToParam(closest.angle)

      let v = velocityParamRef.current
      v *= FRICTION
      if (Math.abs(v) < 0.05) {
        v += (targetP - p) * SNAP_STRENGTH
      }
      if (Math.abs(targetP - p) < NEAR_TARGET_PARAM) {
        v *= NEAR_TARGET_V_DAMP
      }

      let pNext = p + v
      if (pNext < 0) {
        pNext = 0
        v = 0
      } else if (pNext > 1) {
        pNext = 1
        v = 0
      }
      velocityParamRef.current = v

      const nextAngle = paramToAngle(pNext)
      rotationRef.current = nextAngle
      setRotation(nextAngle)
      setNeedlePos(angleToFrequency(nextAngle))

      const nextClosest = findNearestStation(clampAngleToSweep(nextAngle), points)
      setPreviewPageId(nextClosest.pageId)
      const snapP = angleToParam(nextClosest.angle)

      const settled =
        Math.abs(velocityParamRef.current) < STOP_V_PARAM && Math.abs(pNext - snapP) < SNAP_DONE_PARAM

      if (settled) {
        rotationRef.current = nextClosest.angle
        setRotation(nextClosest.angle)
        setNeedlePos(nextClosest.frequency)
        setPreviewPageId(nextClosest.pageId)
        velocityParamRef.current = 0
        rafRef.current = null
        setIsPhysicsRunning(false)
        onChangeRef.current?.(nextClosest.pageId)
        return
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
  }, [])

  // Parent-controlled selection: jump dial and stop any spin.
  useEffect(() => {
    cancelPhysicsLoop()
    const match = selectedPageId ? tunerPoints.find(p => p.pageId === selectedPageId) : undefined
    const next = match ?? tunerPoints[0]
    if (!next) return
    setRotation(next.angle)
    rotationRef.current = next.angle
    lastParamRef.current = angleToParam(clampAngleToSweep(next.angle))
    setNeedlePos(next.frequency)
  }, [selectedPageId, tunerPoints, cancelPhysicsLoop])

  useEffect(() => {
    if (!selectedPageId) return
    if (!isDragging.current && previewPageId && previewPageId === selectedPageId)
      setPreviewPageId(undefined)
  }, [selectedPageId, previewPageId])

  useEffect(() => {
    return () => cancelPhysicsLoop()
  }, [cancelPhysicsLoop])

  useEffect(() => {
    const handleMove = (clientX: number, clientY: number) => {
      if (!isDragging.current) return
      const rawAngle = calculateAngle(clientX, clientY)
      const clampedAngle = clampAngleToSweep(rawAngle)
      const p = angleToParam(clampedAngle)

      velocityParamRef.current = p - lastParamRef.current
      lastParamRef.current = p

      rotationRef.current = clampedAngle
      setRotation(clampedAngle)
      setNeedlePos(angleToFrequency(clampedAngle))

      const closest = findNearestStation(clampedAngle, tunerPointsRef.current)
      setPreviewPageId(closest.pageId)
    }

    const handleUp = () => {
      if (!isDragging.current) return
      isDragging.current = false
      setIsDialDragging(false)

      const pid = capturedPointerIdRef.current
      if (knobRef.current != null && pid != null) {
        try {
          knobRef.current.releasePointerCapture(pid)
        } catch {
          /* already released */
        }
        capturedPointerIdRef.current = null
      }

      runPhysicsFrame()
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
  }, [runPhysicsFrame])

  return {
    tunerPoints,
    rotation,
    needlePos,
    previewPageId,
    isDialDragging,
    isPhysicsRunning,
    knobRef,
    startDragging: (e?: ReactPointerEvent<HTMLDivElement>) => {
      cancelPhysicsLoop()
      isDragging.current = true
      setIsDialDragging(true)
      lastParamRef.current = angleToParam(clampAngleToSweep(rotationRef.current))
      velocityParamRef.current = 0

      if (e && typeof e.pointerId === 'number') {
        const el = e.currentTarget
        if (el instanceof HTMLElement) {
          try {
            el.setPointerCapture(e.pointerId)
            capturedPointerIdRef.current = e.pointerId
          } catch {
            /* unsupported or already captured */
          }
        }
      }
    },
  }
}

export default useLighthouseTuner
