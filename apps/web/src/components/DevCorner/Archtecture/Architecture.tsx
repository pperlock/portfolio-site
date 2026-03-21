import React from 'react'
import Image from 'next/image'
import { LowerCaseTitle, Paragraph } from '@portfolio/design'
import {
  ArchitectureLayout,
  ArchitectureDiagramWrapper,
  ArchitectureSubsection,
  ServerDataFetchingTitle,
  TechStackLayout,
  TechStackTitle,
  TechStackList,
  TechStackItem,
  TechStackGroupTitle,
} from './Architecture.styles'

import ArchitectureDiagram from './ArchitectureDiagram/ArchitectureDiagram'
import {
  BffServerCallFlowDiagram,
  type BffServerCallFlowDiagramContent,
} from '../BffFlowDiagram'
import { renderRichCopy } from '@/lib/richCopy'

interface ArchitectureProps {
  content: {
    title: string
    body: string
    techStack: {
      image: string
      title: string
      items: {
        category: string
        items: string[]
      }[]
    }
    architectureDiagram: {
      mainApp: { title: string; tech: string; description: string }
      designSystem: { title: string; tech: string; description: string }
      cms: { title: string; tech: string; description: string }
    }
    serverDataFetching: {
      title: string
      body: string
      diagram: BffServerCallFlowDiagramContent
    }
  }
}

const Architecture = ({ content }: ArchitectureProps) => {
  const { title, body, techStack, architectureDiagram, serverDataFetching } = content
  const techGroups = techStack.items

  return (
    <>
      <LowerCaseTitle tag="h2">{title}</LowerCaseTitle>
      <Paragraph color="medium">{body}</Paragraph>
      <ArchitectureLayout>
        <TechStackLayout>
          <TechStackTitle>
            <Paragraph align="center" bold bottomMargin={false} size="sm" color="light">
              {techStack.title}
            </Paragraph>
          </TechStackTitle>
          <Image src={techStack.image} alt={techStack.title} width={300} height={300} />
          <TechStackList>
            {techGroups.map(({ category, items }) => (
              <React.Fragment key={category}>
                <TechStackGroupTitle>{category}</TechStackGroupTitle>
                {items.map((item, index) => (
                  <TechStackItem key={item} $isLast={index === items.length - 1}>
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

      <ArchitectureSubsection>
        <ServerDataFetchingTitle>{serverDataFetching.title}</ServerDataFetchingTitle>
        <Paragraph color="medium">{renderRichCopy(serverDataFetching.body, 'arch-sdf')}</Paragraph>
        <BffServerCallFlowDiagram content={serverDataFetching.diagram} />
      </ArchitectureSubsection>
    </>
  )
}

export default Architecture
