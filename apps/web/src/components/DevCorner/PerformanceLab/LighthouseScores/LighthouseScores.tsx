import React from 'react'
import type { PageLighthouseState } from '@/types'
import { LIGHTHOUSE_SCORE_CATEGORIES } from '@/constants'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { VINTAGE_THEME } from '@portfolio/design'
import { DialCornerScrews } from '../DialCornerScrews'
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
      <DialCornerScrews />
      <ScoresGrid aria-label="Lighthouse scores for selected page">
        {LIGHTHOUSE_SCORE_CATEGORIES.map(({ id, label }) => {
          const isLoading = Boolean(loading)
          const rawScore = scores?.[id]

          const numericScore = !isLoading && typeof rawScore === 'number' ? Math.round(rawScore) : 0
          const text = !isLoading && typeof rawScore === 'number' ? `${numericScore}` : '—'
          const pathColor =
            numericScore >= 90
              ? VINTAGE_THEME.scores.gaugeHigh
              : numericScore >= 50
                ? VINTAGE_THEME.tube
                : VINTAGE_THEME.scores.gaugeLow

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
                    textColor: VINTAGE_THEME.slateText,
                    trailColor: VINTAGE_THEME.neutralRail,
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
