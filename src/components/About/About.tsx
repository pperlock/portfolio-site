'use client'

import { AboutSection, Container, SectionTitle, AboutContent, AboutParagraph } from './About.styles'

export default function About() {
  return (
    <AboutSection>
      <Container>
        <SectionTitle>About</SectionTitle>
        <AboutContent>
          <AboutParagraph>
            I&apos;m a designer and developer passionate about creating beautiful, functional digital
            experiences. I specialize in UI design, design systems, and front-end development.
          </AboutParagraph>
          <AboutParagraph>
            With a focus on clean code and elegant design, I help bring ideas to life through
            thoughtful interfaces and efficient implementations.
          </AboutParagraph>
        </AboutContent>
      </Container>
    </AboutSection>
  )
}
