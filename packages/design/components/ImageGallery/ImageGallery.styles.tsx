import styled from 'styled-components'
import { spacing, shadow, colors, layout } from '../../tokens'

export const GalleryRow = styled.div`
  display: flex;
  gap: ${spacing.sm};
  margin-top: ${spacing.xl};
  overflow-x: auto;
  padding-bottom: ${spacing.xs};
`

export const GalleryItem = styled.div`
  flex: 0 0 140px;
  border-radius: ${layout.radiusSm};
  overflow: hidden;
  box-shadow: ${shadow.sm};
  background: ${colors.bgSubtle};
`

export const GalleryImage = styled.img`
  display: block;
  width: 100%;
  height: 96px;
  object-fit: cover;
`
