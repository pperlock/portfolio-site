import HomePage from '@/components/HomePage/HomePage'
import { homepageContent } from '@/data/homepage-content'
import { caseStudies } from '@/data/portfolio-content'

export default function Home() {
  const content = {
    ...homepageContent,
    sections: {
      ...homepageContent.sections,
      latestWork: {
        ...homepageContent.sections.latestWork,
        workItems: caseStudies,
      },
    },
  }
  return <HomePage content={content} />
}
