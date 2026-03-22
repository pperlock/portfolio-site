import React from 'react'
import type { PageLighthouseState } from '@/types'
import { LIGHTHOUSE_SCORE_CATEGORIES } from '@/constants'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { DialScrew } from '../PerformanceLab.styles'
import {
  ScoresBlock,
  LighthouseScoreCard,
  LighthouseScoreLabel,
  ScoresGrid,
} from './LightHouseScores.styles'

interface LighthouseScoresProps {
  scores?: PageLighthouseState['scores']
  loading?: boolean
}

const LighthouseScores: React.FC<LighthouseScoresProps> = ({ scores, loading }) => {
  return (
    <ScoresBlock>
      <DialScrew $x="left" $y="top" aria-hidden />
      <DialScrew $x="right" $y="top" aria-hidden />
      <DialScrew $x="left" $y="bottom" aria-hidden />
      <DialScrew $x="right" $y="bottom" aria-hidden />
      <ScoresGrid aria-label="Lighthouse scores for selected page">
        {LIGHTHOUSE_SCORE_CATEGORIES.map(({ id, label }) => {
          const isLoading = Boolean(loading)
          const rawScore = scores?.[id]

          const numericScore = !isLoading && typeof rawScore === 'number' ? Math.round(rawScore) : 0
          const text = !isLoading && typeof rawScore === 'number' ? `${numericScore}` : '—'
          const pathColor =
            numericScore >= 90 ? '#ffcc5c' : numericScore >= 50 ? '#ffae00' : '#f08a24'

          return (
            <LighthouseScoreCard
              key={id}
              $score={!isLoading && typeof rawScore === 'number' ? numericScore : undefined}
              $loading={isLoading}
            >
              <LighthouseScoreLabel>{label}</LighthouseScoreLabel>
              <div style={{ width: 80, margin: '6px auto 0' }}>
                <CircularProgressbar
                  value={numericScore}
                  maxValue={100}
                  text={text}
                  styles={buildStyles({
                    pathColor,
                    textColor: '#111827',
                    trailColor: '#e5e7eb',
                    textSize: '26px',
                    pathTransitionDuration: 0.6,
                  })}
                />
              </div>
            </LighthouseScoreCard>
          )
        })}
      </ScoresGrid>
    </ScoresBlock>
  )
}

export default LighthouseScores
