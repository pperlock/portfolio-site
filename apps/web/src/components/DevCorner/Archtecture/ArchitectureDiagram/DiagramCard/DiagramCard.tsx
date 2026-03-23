import React from 'react'
import { Card, CardInner, CardFront, CardBack, IconWrapper } from './DiagramCard.styles'
import { Paragraph } from '@portfolio/design'

export interface DiagramCardProps {
  title: string
  tech: string
  description: string
  Icon: React.ComponentType<{ color?: string }>
  iconColor: string
}

const DiagramCard = React.forwardRef<HTMLDivElement, DiagramCardProps>(function DiagramCard(
  { title, tech, description, Icon, iconColor },
  ref
) {
  return (
    <Card ref={ref}>
      <CardInner>
        <CardFront>
          <IconWrapper>
            <Icon color={iconColor} />
          </IconWrapper>
          {title}
          <Paragraph size="sm" align="center">
            {tech}
          </Paragraph>
        </CardFront>
        <CardBack>{description}</CardBack>
      </CardInner>
    </Card>
  )
})

export default DiagramCard
