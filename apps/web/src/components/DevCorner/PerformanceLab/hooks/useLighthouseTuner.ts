import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type {
  MouseEvent as ReactMouseEvent,
  PointerEvent as ReactPointerEvent,
  RefObject,
} from 'react'

import {
  buildTunerPoints,
  START_ANGLE,
  MIN_FREQUENCY,
  type TunerPoint,
} from '@/constants/lighthouse'
import {
  clampAngleToSweep,
  angleToFrequency,
  angleToParam,
  findNearestStation,
  pointerAngleFromClientXY,
  advanceDialPhysicsFrame,
} from '@/lib/lighthouse/tunerDialGeometry'

/** Arguments for {@link useLighthouseTuner}. */
interface UseLighthouseTunerArgs {
  /** When set, the dial snaps to this page (controlled from parent). */
  selectedPageId?: string
  /** Called when inertia settles on a station after a drag. */
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
  startDragging: (e?: ReactPointerEvent<HTMLDivElement> | ReactMouseEvent<HTMLDivElement>) => void
}

/**
 * React hook for the Performance Lab “radio tuner” dial: pointer drag, inertia, snap to stations,
 * and preview page id while the needle moves.
 *
 * @param args - {@link UseLighthouseTunerArgs}
 * @returns Dial state, refs, and pointer handler — see {@link UseLighthouseTunerResult}
 */
const useLighthouseTuner = ({
  selectedPageId,
  onChange,
}: UseLighthouseTunerArgs): UseLighthouseTunerResult => {
  const tunerPoints = useMemo(() => buildTunerPoints(), [])

  const [rotation, setRotation] = useState(tunerPoints[0]?.angle ?? START_ANGLE)
  const [needlePos, setNeedlePos] = useState(tunerPoints[0]?.frequency ?? MIN_FREQUENCY)
  const [previewPageId, setPreviewPageId] = useState<string | undefined>()
  const [isDialDragging, setIsDialDragging] = useState(false)
  const [isPhysicsRunning, setIsPhysicsRunning] = useState(false)

  const rotationRef = useRef(rotation)
  const knobRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const capturedPointerIdRef = useRef<number | null>(null)
  /** Element that called `setPointerCapture` (may differ from {@link knobRef}). */
  const pointerCaptureElRef = useRef<HTMLElement | null>(null)
  /** `pointerAngle - rotation` at pointer down so the dial does not snap to finger angle. */
  const pointerGrabOffsetDegRef = useRef(0)

  const velocityParamRef = useRef(0)
  const lastParamRef = useRef(0)
  const rafRef = useRef<number | null>(null)
  /** Set on pointer up so snap physics does not retarget mid-settle (reduces spin). */
  const snapTargetPageIdRef = useRef<string | null>(null)

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
    snapTargetPageIdRef.current = null
    setIsPhysicsRunning(false)
  }, [])

  const runPhysicsFrame = useCallback(() => {
    if (rafRef.current != null) return
    setIsPhysicsRunning(true)

    const step = () => {
      const out = advanceDialPhysicsFrame({
        rotationDeg: rotationRef.current,
        velocityParam: velocityParamRef.current,
        points: tunerPointsRef.current,
        snapTargetPageId: snapTargetPageIdRef.current,
      })

      velocityParamRef.current = out.velocityParam
      rotationRef.current = out.rotationDeg
      setRotation(out.rotationDeg)
      setNeedlePos(out.needleFrequency)
      setPreviewPageId(out.previewPageId)

      if (out.settled) {
        rafRef.current = null
        snapTargetPageIdRef.current = null
        setIsPhysicsRunning(false)
        if (out.settlePageId != null) onChangeRef.current?.(out.settlePageId)
        return
      }

      rafRef.current = requestAnimationFrame(step)
    }

    rafRef.current = requestAnimationFrame(step)
  }, [])

  // Parent-controlled selection: jump dial and stop any spin.
  // Only `selectedPageId` — do not list `cancelPhysicsLoop` here; if its identity ever differs
  // between renders, the effect would re-run constantly and reset `rotation`, cancelling drag.
  useEffect(() => {
    if (isDragging.current) return
    cancelPhysicsLoop()
    const points = tunerPointsRef.current
    const match = selectedPageId ? points.find(p => p.pageId === selectedPageId) : undefined
    const next = match ?? points[0]
    if (!next) return
    setRotation(next.angle)
    rotationRef.current = next.angle
    lastParamRef.current = angleToParam(clampAngleToSweep(next.angle))
    setNeedlePos(next.frequency)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- sync only when the selected page changes from outside
  }, [selectedPageId])

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
      const pointerAngle = pointerAngleFromClientXY(knobRef.current, clientX, clientY)
      const rawAngle = pointerAngle - pointerGrabOffsetDegRef.current
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
      const captureEl = pointerCaptureElRef.current ?? knobRef.current
      if (captureEl != null && pid != null) {
        try {
          captureEl.releasePointerCapture(pid)
        } catch {
          /* already released */
        }
        capturedPointerIdRef.current = null
        pointerCaptureElRef.current = null
      }

      pointerGrabOffsetDegRef.current = 0

      snapTargetPageIdRef.current = findNearestStation(
        clampAngleToSweep(rotationRef.current),
        tunerPointsRef.current
      ).pageId

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
    startDragging: (e?: ReactPointerEvent<HTMLDivElement> | ReactMouseEvent<HTMLDivElement>) => {
      cancelPhysicsLoop()
      isDragging.current = true
      setIsDialDragging(true)
      lastParamRef.current = angleToParam(clampAngleToSweep(rotationRef.current))
      velocityParamRef.current = 0

      if (e && Number.isFinite(e.clientX) && Number.isFinite(e.clientY)) {
        const pointer0 = pointerAngleFromClientXY(knobRef.current, e.clientX, e.clientY)
        pointerGrabOffsetDegRef.current = pointer0 - rotationRef.current
      } else {
        pointerGrabOffsetDegRef.current = 0
      }

      if (e && 'pointerId' in e && typeof e.pointerId === 'number') {
        const el = e.currentTarget
        if (el instanceof HTMLElement) {
          try {
            el.setPointerCapture(e.pointerId)
            capturedPointerIdRef.current = e.pointerId
            pointerCaptureElRef.current = el
          } catch {
            /* unsupported or already captured */
          }
        }
      }
    },
  }
}

export default useLighthouseTuner
