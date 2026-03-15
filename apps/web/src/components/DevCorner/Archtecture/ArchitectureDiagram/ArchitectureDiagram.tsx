import React from 'react'
import { ArcherContainer, ArcherElement } from 'react-archer'

import {
  DiagramWrapper,
  Layer,
  ReactIcon,
  DatabaseIcon,
  CubesIcon,
} from './ArchitectureDiagram.styles'
import DiagramCard from './DiagramCard'

const ARCH_RELATION_STYLE = { strokeDasharray: '8,4' }

interface Relation {
  targetId: string
  sourceAnchor: 'top'
  targetAnchor: 'bottom'
  style?: { strokeDasharray: string }
}

interface ArchitectureDiagramProps {
  content: {
    mainApp: { title: string; tech: string; description: string }
    designSystem: { title: string; tech: string; description: string }
    cms: { title: string; tech: string; description: string }
  }
}

export default function ArchitectureDiagram({ content }: ArchitectureDiagramProps) {
  const { mainApp, designSystem, cms } = content

  const cards = [
    {
      id: 'app',
      ...mainApp,
      Icon: ReactIcon,
      iconColor: '#2563eb',
      relations: [
        {
          targetId: 'design-system',
          sourceAnchor: 'top' as const,
          targetAnchor: 'bottom' as const,
        },
        { targetId: 'cms-package', sourceAnchor: 'top' as const, targetAnchor: 'bottom' as const },
      ],
    },
    {
      id: 'design-system',
      ...designSystem,
      Icon: CubesIcon,
      iconColor: '#475569',
      relations: [],
    },
    {
      id: 'cms-package',
      ...cms,
      Icon: DatabaseIcon,
      iconColor: '#334155',
      relations: [],
    },
  ]

  const layers = [['app'], ['design-system', 'cms-package']]

  return (
    <DiagramWrapper>
      <ArcherContainer
        strokeColor="#94a3b8"
        strokeWidth={2}
        offset={40}
        svgContainerStyle={{ animation: 'drawArrows 1.1s ease forwards' }}
      >
        {layers.map((layerIds, layerIndex) => (
          <Layer key={layerIndex}>
            {layerIds.map(id => {
              const node = cards.find(c => c.id === id)!
              const relations = node.relations.map(r => ({ ...r, style: ARCH_RELATION_STYLE }))
              return (
                <ArcherElement key={node.id} id={node.id} relations={relations}>
                  <DiagramCard
                    title={node.title}
                    tech={node.tech}
                    description={node.description}
                    Icon={node.Icon}
                    iconColor={node.iconColor}
                  />
                </ArcherElement>
              )
            })}
          </Layer>
        ))}
      </ArcherContainer>
    </DiagramWrapper>
  )
}
