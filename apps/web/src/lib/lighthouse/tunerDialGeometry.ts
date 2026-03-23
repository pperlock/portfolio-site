/**
 * Pure math for the Performance Lab vintage-radio dial: arc sweep, angle ↔ param ↔ frequency,
 * nearest station, and physics tuning constants consumed by `useLighthouseTuner`.
 *
 * Arc limits and {@link TunerPoint} are defined in `@/constants/lighthouse`.
 */

import {
  START_ANGLE,
  SWEEP_ANGLE,
  MIN_FREQUENCY,
  MAX_FREQUENCY,
  type TunerPoint,
} from '@/constants/lighthouse'

/** Inertia / snap tuning (param space 0–1 along the arc). */
export const FRICTION = 0.935
export const SNAP_STRENGTH = 0.062
/** Extra velocity damping when already near a station (reduces springy overshoot). */
export const NEAR_TARGET_PARAM = 0.12
export const NEAR_TARGET_V_DAMP = 0.76
export const STOP_V_PARAM = 0.0016
export const SNAP_DONE_PARAM = 0.005

/**
 * Clamps a number to the closed interval [0, 1].
 * @param n - Value to clamp
 * @returns `n` limited to [0, 1]
 */
const clamp01 = (n: number): number => Math.max(0, Math.min(1, n))

/**
 * Shortest angular distance between two angles in degrees (0–180).
 * @param a - First angle in degrees
 * @param b - Second angle in degrees
 * @returns Shortest distance in degrees
 */
const angleDistance = (a: number, b: number): number => {
  const diff = Math.abs(a - b) % 360
  return Math.min(diff, 360 - diff)
}

/**
 * Clamps an angle to the dial’s active sweep segment (nearest edge if outside).
 * @param angle - Angle in degrees
 * @returns Angle constrained to the sweep between {@link START_ANGLE} and `START_ANGLE + SWEEP_ANGLE`
 */
export const clampAngleToSweep = (angle: number): number => {
  const normalized = ((angle % 360) + 360) % 360
  const endAngle = (START_ANGLE + SWEEP_ANGLE) % 360

  const deltaCW = (normalized - START_ANGLE + 360) % 360
  if (deltaCW <= SWEEP_ANGLE) return normalized

  const distToStart = angleDistance(normalized, START_ANGLE)
  const distToEnd = angleDistance(normalized, endAngle)

  if (distToStart <= distToEnd) return START_ANGLE
  return endAngle
}

/**
 * Maps a sweep angle to the UI frequency readout.
 * @param angle - Angle in degrees (ideally within the sweep)
 * @returns Frequency value between {@link MIN_FREQUENCY} and {@link MAX_FREQUENCY}
 */
export const angleToFrequency = (angle: number): number => {
  const delta = (angle - START_ANGLE + 360) % 360
  const t = clamp01(delta / SWEEP_ANGLE)
  return MIN_FREQUENCY + t * (MAX_FREQUENCY - MIN_FREQUENCY)
}

/**
 * Maps a sweep-clamped angle to linear position along the dial (0 = start, 1 = end).
 * @param angle - Angle in degrees
 * @returns Position along the arc in [0, 1]
 */
export const angleToParam = (angle: number): number => {
  const a = clampAngleToSweep(angle)
  const deltaCW = (a - START_ANGLE + 360) % 360
  if (deltaCW <= SWEEP_ANGLE) return deltaCW / SWEEP_ANGLE
  const endA = (START_ANGLE + SWEEP_ANGLE) % 360
  return angleDistance(a, START_ANGLE) <= angleDistance(a, endA) ? 0 : 1
}

/**
 * Maps normalized arc position to a rotation angle for the knob / needle.
 * @param param - Position along arc in [0, 1]
 * @returns Angle in [0, 360) degrees
 */
export const paramToAngle = (param: number): number => {
  const u = clamp01(param)
  const raw = START_ANGLE + u * SWEEP_ANGLE
  return ((raw % 360) + 360) % 360
}

/** Degrees in [0, 360) — use for CSS `rotate()` so values never jump 18° → 378° (extra full turn). */
export const normalizeAngleDeg = (deg: number): number => ((deg % 360) + 360) % 360

/**
 * Picks the station nearest along the dial sweep (distance in param space [0, 1]), not the
 * shortest chord on the full 360° circle. The latter can pick a station “the wrong way” around
 * the circle (especially on the right half of the arc), which makes the snap physics spin
 * unnecessarily before settling.
 *
 * @param angle - Needle angle in degrees
 * @param points - Non-empty list of dial stations
 * @returns The nearest {@link TunerPoint}
 */
export const findNearestStation = (angle: number, points: TunerPoint[]): TunerPoint => {
  const p = angleToParam(clampAngleToSweep(angle))
  return points.reduce((best, curr) => {
    const pc = angleToParam(curr.angle)
    const pb = angleToParam(best.angle)
    const dc = Math.abs(pc - p)
    const db = Math.abs(pb - p)
    return dc < db ? curr : best
  })
}

/**
 * Pointer position → angle from element center (0° = up, clockwise), for the radio knob.
 * @returns Degrees in [0, 360), or {@link START_ANGLE} if `element` is null
 */
export const pointerAngleFromClientXY = (
  element: HTMLElement | null,
  clientX: number,
  clientY: number
): number => {
  if (!element) return START_ANGLE
  const rect = element.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2
  const radians = Math.atan2(clientY - centerY, clientX - centerX)
  let degree = radians * (180 / Math.PI) + 90
  if (degree < 0) degree += 360
  return degree
}

/** Input for one inertia / snap frame (param-space velocity). */
export interface DialPhysicsFrameInput {
  rotationDeg: number
  velocityParam: number
  points: TunerPoint[]
  /**
   * When set (after pointer up), physics only snaps toward this station until settled — avoids
   * retargeting when the pointer-release position sits between two stations.
   */
  snapTargetPageId?: string | null
}

/** Result of {@link advanceDialPhysicsFrame}. */
export interface DialPhysicsFrameOutput {
  rotationDeg: number
  velocityParam: number
  needleFrequency: number
  previewPageId: string
  settled: boolean
  /** When `settled`, pass to `onChange`. */
  settlePageId?: string
}

/**
 * Single RAF step: friction, snap toward nearest station, clamp to arc, detect settle.
 * Pure — no React; use inside the hook’s animation loop.
 */
export const advanceDialPhysicsFrame = ({
  rotationDeg,
  velocityParam,
  points,
  snapTargetPageId,
}: DialPhysicsFrameInput): DialPhysicsFrameOutput => {
  const clamped = clampAngleToSweep(rotationDeg)
  const p = angleToParam(clamped)

  const lockedStation =
    snapTargetPageId != null ? points.find(pt => pt.pageId === snapTargetPageId) : undefined
  const closest = lockedStation ?? findNearestStation(clamped, points)
  const targetP = angleToParam(closest.angle)

  let v = velocityParam
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

  const nextAngle = paramToAngle(pNext)
  const nextClamped = clampAngleToSweep(nextAngle)

  const stationForSettle = lockedStation ?? findNearestStation(nextClamped, points)
  const snapP = angleToParam(stationForSettle.angle)

  const settled = Math.abs(v) < STOP_V_PARAM && Math.abs(pNext - snapP) < SNAP_DONE_PARAM

  if (settled) {
    return {
      rotationDeg: normalizeAngleDeg(stationForSettle.angle),
      velocityParam: 0,
      needleFrequency: stationForSettle.frequency,
      previewPageId: stationForSettle.pageId,
      settled: true,
      settlePageId: stationForSettle.pageId,
    }
  }

  const previewStation = lockedStation ?? findNearestStation(nextClamped, points)
  return {
    rotationDeg: nextAngle,
    velocityParam: v,
    needleFrequency: angleToFrequency(nextAngle),
    previewPageId: previewStation.pageId,
    settled: false,
  }
}
