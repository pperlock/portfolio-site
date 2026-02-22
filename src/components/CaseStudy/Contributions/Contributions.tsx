import React from 'react'
import { PageSection } from '@/design'
import {
  ContributionsGrid,
  ContributionItem,
  ContributionTitle,
  ContributionNumber,
  ContributionList,
  ContributionListItem,
} from './Contributions.styles'
import { toParagraphs } from '@/utils'
import type { Contributions as ContributionsType } from '@/types'

type ContributionsProps = {
  contributions?: ContributionsType
  contributionsTitle?: string
}

const Contributions = ({ contributions, contributionsTitle }: ContributionsProps) => {
  const list = Array.isArray(contributions) ? contributions : []
  return (
    <PageSection
      variant="outset"
      title={contributionsTitle != null ? String(contributionsTitle) : undefined}
    >
      <ContributionsGrid>
        {list.map((contribution, index) => (
          <ContributionItem key={contribution.title}>
            <ContributionTitle>
              <ContributionNumber>{index + 1}</ContributionNumber>
              {contribution.title}
            </ContributionTitle>
            {toParagraphs(contribution.description).length ? (
              <ContributionList>
                {toParagraphs(contribution.description).map((p, i) => (
                  <ContributionListItem key={i}>{p}</ContributionListItem>
                ))}
              </ContributionList>
            ) : (
              contribution.description != null && (
                <ContributionList>
                  <ContributionListItem>{String(contribution.description)}</ContributionListItem>
                </ContributionList>
              )
            )}
          </ContributionItem>
        ))}
      </ContributionsGrid>
    </PageSection>
  )
}

export default Contributions
