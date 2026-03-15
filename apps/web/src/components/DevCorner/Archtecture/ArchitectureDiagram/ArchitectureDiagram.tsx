import React from 'react'
import { ArcherContainer, ArcherElement } from 'react-archer'

import {
  DiagramWrapper,
  Layer,
  Card,
  CardInner,
  CardFront,
  CardBack,
  IconWrapper,
  ReactIcon,
  DatabaseIcon,
  CubesIcon,
} from './ArchitectureDiagram.styles'

export default function ArchitectureDiagram() {
  return (
    <DiagramWrapper>
      <ArcherContainer
        strokeColor="#94a3b8"
        strokeWidth={2}
        offset={40}
        svgContainerStyle={{
          animation: 'drawArrows 1.1s ease forwards',
        }}
      >
        {/* Top Layer */}
        <Layer>
          <ArcherElement
            id="app"
            relations={[
              {
                targetId: 'design-system',
                sourceAnchor: 'top',
                targetAnchor: 'bottom',
                style: {
                  strokeDasharray: '8,4',
                },
              },
              {
                targetId: 'cms-package',
                sourceAnchor: 'top',
                targetAnchor: 'bottom',
                style: {
                  strokeDasharray: '8,4',
                },
              },
            ]}
          >
            <Card>
              <CardInner>
                <CardFront>
                  <IconWrapper>
                    <ReactIcon color="#2563eb" />
                  </IconWrapper>
                  Portfolio App
                  <br />
                  <small>Next.js + React + TypeScript</small>
                </CardFront>
                <CardBack>
                  Main Next.js application responsible for rendering pages and UI.
                </CardBack>
              </CardInner>
            </Card>
          </ArcherElement>
        </Layer>

        {/* Middle Layer */}
        <Layer>
          <ArcherElement id="design-system">
            <Card>
              <CardInner>
                <CardFront>
                  <IconWrapper>
                    <CubesIcon color="#475569" />
                  </IconWrapper>
                  Design System
                  <br />
                  <small>Storybook + Vite + Styled Components</small>
                </CardFront>
                <CardBack>Reusable UI components shared across the application.</CardBack>
              </CardInner>
            </Card>
          </ArcherElement>

          <ArcherElement id="cms-package">
            <Card>
              <CardInner>
                <CardFront>
                  <IconWrapper>
                    <DatabaseIcon color="#334155" />
                  </IconWrapper>
                  CMS Package
                  <br />
                  <small>Contentful</small>
                </CardFront>
                <CardBack>Contentful client, queries, and data mapping.</CardBack>
              </CardInner>
            </Card>
          </ArcherElement>
        </Layer>
      </ArcherContainer>
    </DiagramWrapper>
  )
}
