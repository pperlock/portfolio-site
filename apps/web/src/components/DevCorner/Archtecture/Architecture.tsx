import React from 'react'
import Image from 'next/image'
import { LowerCaseTitle, Paragraph } from '@portfolio/design'
import {
  ArchitectureLayout,
  ArchitectureDiagramWrapper,
  TechStackLayout,
  TechStackTitle,
  TechStackList,
  TechStackItem,
  TechStackGroupTitle,
} from './Architecture.styles'

import ArchitectureDiagram from './ArchitectureDiagram/ArchitectureDiagram'

interface ArchitectureProps {
  content: {
    title: string
    body: string[]
    techStack: {
      image: string
      title: string
      items: string[]
    }
    architectureDiagram: {
      mainApp: { title: string; tech: string; description: string }
      designSystem: { title: string; tech: string; description: string }
      cms: { title: string; tech: string; description: string }
    }
  }
}

const Architecture = ({ content }: ArchitectureProps) => {
  const { title, body, techStack, architectureDiagram } = content

  const techGroups = [
    {
      title: 'UI Layer',
      items: ['Next.js', 'React', 'Styled Components'],
    },
    {
      title: 'Content Layer',
      items: ['Contentful CMS'],
    },
    {
      title: 'Developer Tooling',
      items: ['Turborepo', 'Vite', 'Storybook'],
    },
    {
      title: 'Testing',
      items: ['React Testing Library'],
    },
  ]

  return (
    <>
      <LowerCaseTitle tag="h2">{title}</LowerCaseTitle>
      <Paragraph color="medium">{body[0]}</Paragraph>
      <ArchitectureLayout>
        <TechStackLayout>
          <TechStackTitle>
            <Paragraph align="center" bold bottomMargin={false} size="sm" color="light">
              {techStack.title}
            </Paragraph>
          </TechStackTitle>
          <Image src={techStack.image} alt={techStack.title} width={300} height={300} />
          <TechStackList>
            {techGroups.map(group => (
              <React.Fragment key={group.title}>
                <TechStackGroupTitle>{group.title}</TechStackGroupTitle>
                {group.items.map((item, index) => (
                  <TechStackItem
                    key={item}
                    $isLast={index === group.items.length - 1}
                  >
                    {item}
                  </TechStackItem>
                ))}
              </React.Fragment>
            ))}
          </TechStackList>
        </TechStackLayout>
        <ArchitectureDiagramWrapper>
          <ArchitectureDiagram content={architectureDiagram} />
        </ArchitectureDiagramWrapper>
      </ArchitectureLayout>
    </>
  )
}

export default Architecture
