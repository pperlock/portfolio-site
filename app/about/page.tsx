import About from '@/components/About/About'
import aboutContent from '@/data/about-content'
import { getAboutContent } from '@/lib/contentful'

export default async function AboutPage() {
  const content = (await getAboutContent()) ?? aboutContent
  return <About content={content} />
}
