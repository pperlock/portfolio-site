import Resume from '@/components/Resume'
import { getResumePageContent } from '@/lib/contentful'

export default async function ResumePage() {
  const content = await getResumePageContent()
  return <Resume content={content ?? {}} />
}
