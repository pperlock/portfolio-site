import CaseStudy from '@/components/CaseStudy/CaseStudy'
import { storeLocator, CaseStudyContent } from '@/data/case-study-content'

export default function KoodoStoreLocatorPage() {
  return <CaseStudy project={storeLocator} content={CaseStudyContent} />
}
