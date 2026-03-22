import React from 'react'
import {
  PerformanceSection,
  TunerDisplay,
  DialScrew,
  GlassOverlay,
  FenderLogo,
  TunerReadout,
  FrequencyScale,
  KcSide,
  FrequencyMark,
  Needle,
  KnobBase,
  RotatingPart,
  NumberedSkirt,
  SkirtNumber,
  SilverCap,
  TunerControls,
  KnobIndicator,
  KnobReflection,
} from './LighthouseTuner.styles'

import useLighthouseTuner from './useLighthouseTuner'

interface LighthouseTunerProps {
  selectedPageId?: string
  onChange?: (pageId: string) => void
}

const LighthouseTuner = ({ selectedPageId, onChange }: LighthouseTunerProps) => {
  const {
    tunerPoints,
    rotation,
    needlePos,
    previewPageId,
    isDialDragging,
    isPhysicsRunning,
    knobRef,
    startDragging,
  } = useLighthouseTuner({ selectedPageId, onChange })

  const dialMotionInstant = isDialDragging || isPhysicsRunning
  const isNeedleAligned = tunerPoints.some(p => Math.abs(p.frequency - needlePos) < 0.65)

  const currentReadout = selectedPageId
    ? tunerPoints.find(p => p.pageId === selectedPageId)?.readoutLabel
    : undefined

  const previewReadout = previewPageId
    ? tunerPoints.find(p => p.pageId === previewPageId)?.readoutLabel
    : undefined
  const activeReadout = previewReadout ?? currentReadout ?? 'TUNE IN TO A PAGE'

  return (
    <PerformanceSection>
      <TunerDisplay>
        <DialScrew $x="left" $y="top" aria-hidden />
        <DialScrew $x="right" $y="top" aria-hidden />
        <DialScrew $x="left" $y="bottom" aria-hidden />
        <DialScrew $x="right" $y="bottom" aria-hidden />
        <GlassOverlay />
        <FenderLogo>LIGHTHOUSE</FenderLogo>
        <TunerReadout>{activeReadout}</TunerReadout>
        <FrequencyScale>
          <KcSide $side="left">KC</KcSide>
          <KcSide $side="right">KC</KcSide>

          {tunerPoints.map(p => (
            <FrequencyMark
              key={p.pageId}
              $active={(previewPageId ?? selectedPageId) === p.pageId}
              style={{ left: `${p.frequency}%` }}
            >
              <div className="tick" />
              <span className="label">{p.kcLabel}</span>
            </FrequencyMark>
          ))}

          <Needle $position={needlePos} $instant={dialMotionInstant} $isAligned={isNeedleAligned} />
        </FrequencyScale>
      </TunerDisplay>

      <TunerControls>
        <KnobBase>
          <RotatingPart $rotation={rotation} $instant={dialMotionInstant}>
            <NumberedSkirt />
            {tunerPoints.map((p, i) => {
              const endDeg = 300
              const step = tunerPoints.length > 1 ? endDeg / (tunerPoints.length - 1) : 0
              const deg = i * step
              return <SkirtNumber key={p.pageId} $deg={deg} aria-hidden />
            })}
            <SilverCap
              ref={knobRef as React.RefObject<HTMLDivElement>}
              onPointerDown={e => {
                e.preventDefault()
                startDragging(e)
              }}
              onMouseDown={e => {
                e.preventDefault()
                startDragging()
              }}
              aria-label="Tune Lighthouse page"
            />
            <KnobIndicator />
          </RotatingPart>
          <KnobReflection />
        </KnobBase>
      </TunerControls>
    </PerformanceSection>
  )
}

export default LighthouseTuner
