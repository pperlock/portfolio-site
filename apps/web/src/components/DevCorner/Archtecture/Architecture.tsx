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
  }
}

const Architecture = ({ content }: ArchitectureProps) => {
  const { title, body, techStack } = content

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
            {techStack.items.map(item => (
              <TechStackItem key={item}>{item}</TechStackItem>
            ))}
          </TechStackList>
        </TechStackLayout>
        <ArchitectureDiagramWrapper>
          <ArchitectureDiagram />
        </ArchitectureDiagramWrapper>
      </ArchitectureLayout>
    </>
  )
}

export default Architecture
