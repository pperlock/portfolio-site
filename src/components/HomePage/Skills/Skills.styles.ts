import styled from 'styled-components'
import { colors, spacing, motion, layout, fromTablet, fromDesktop, typography } from '@/design'

const levelBorder: Record<string, string> = {
  core: '#ffd700',
  advanced: '#ff69b4',
  supporting: '#87ceeb',
}

const levelHoverStyles = level => {
  const styles = {
    core: `
      background: linear-gradient(135deg, #ffd700 0%, #fff9e6 100%);
      border-color: ${colors.BrushStrokeOne};
      box-shadow: 0 8px 24px rgba(255, 215, 0, 0.4), 0 4px 8px rgba(255, 215, 0, 0.2);
    `,
    advanced: `
      background: linear-gradient(135deg, #ff69b4 0%, #ffe6f2 100%);
      border-color: ${colors.BrushStrokeTwo};
      box-shadow: 0 8px 24px rgba(255, 105, 180, 0.4), 0 4px 8px rgba(255, 105, 180, 0.2);
    `,
    supporting: `
      background: linear-gradient(135deg, #87ceeb 0%, #e6f5fc 100%);
      border-color: ${colors.BrushStrokeThree};
      box-shadow: 0 8px 24px rgba(135, 206, 235, 0.4), 0 4px 8px rgba(135, 206, 235, 0.2);
    `,
  }
  return styles[level] || ''
}

const defaultHoverShadow = `
  0 8px 24px rgba(0, 0, 0, 0.15),
  0 4px 8px rgba(0, 0, 0, 0.1);
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  overflow: visible;
`

export const Level = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: visible;
  gap: ${spacing.sm};
  margin-bottom: ${spacing.lg};
`

export const Grid = styled.div<{ $level?: string }>`
  display: grid;
  grid-auto-flow: row;
  grid-template-rows: auto;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.25rem ${spacing.sm};
  row-gap: ${spacing.sm};
  justify-content: flex-start;
  width: 100%;
  padding-left: 0;
  min-width: 0;
  overflow: visible;

  ${fromTablet`
    grid-template-columns: repeat(5, minmax(0, 1fr));
  `}

  ${fromDesktop`
    grid-template-columns: repeat(12, minmax(80px, 1fr));
  `}
`

export const SkillIcon = styled.div<{ $level?: string }>`
  width: 60px;
  height: 60px;
  border-radius: ${layout.radiusMd};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75rem;
  transition: ${motion.transition};
  background-color: ${colors.bgMuted};
  border: 2px solid
    ${({ $level }) => ($level ? levelBorder[$level] : colors.border) || colors.border};

  ${fromTablet`
    width: 80px;
    height: 80px;
  `}
`

export const SkillIconImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 0.5rem;
`

export const SkillIconText = styled.span`
  font-size: ${typography.fontSizeXl};
  font-weight: 700;
  color: ${colors.textLight};
  text-transform: uppercase;

  ${fromTablet`
    font-size: ${typography.fontSize2xl};
  `}
`

export const SkillName = styled.div`
  font-size: ${typography.fontSizeSm};
  font-weight: 500;
  color: ${colors.textHeader};
  line-height: 1.4;
  letter-spacing: 0.01em;
`

export const Card = styled.div<{ $visible?: boolean; $delay?: number; $level?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};
  transform: translateY(${({ $visible }) => ($visible ? 0 : 20)}px);
  transition:
    opacity 0.5s ease-out,
    transform 0.5s ease-out;
  transition-delay: ${({ $delay }) => `${$delay ?? 0}s`};
  min-width: 0;
  max-width: 100%;

  &:nth-child(odd):hover ${SkillIcon} {
    transform: translateY(-8px) scale(1.08) rotate(-5deg);
    box-shadow: ${defaultHoverShadow};
    ${({ $level }) => $level && levelHoverStyles($level)}
  }

  &:nth-child(even):hover ${SkillIcon} {
    transform: translateY(-8px) scale(1.08) rotate(5deg);
    box-shadow: ${defaultHoverShadow};
    ${({ $level }) => $level && levelHoverStyles($level)}
  }

  &:hover ${SkillName} {
    color: ${colors.hover};
  }
`
