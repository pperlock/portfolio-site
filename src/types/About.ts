interface StorySection {
  title: string
  tagline: string
  description: string[]
}

interface HelloFriendDescription {
  miniQuote?: string
  pullQuote?: string
  text: string
}

interface HelloFriendSection extends Omit<StorySection, 'description'> {
  description: HelloFriendDescription[]
}

interface AboutSections {
  story: StorySection
  whyFrontend: StorySection
  howIWork: StorySection
  helloFriend: HelloFriendSection
}

export interface AboutContent {
  title: string
  subtitle: string
  heroBody: string[]
  sections: AboutSections
}

export interface AboutProps {
  content: AboutContent
}
