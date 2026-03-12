import CaseStudy from '@/components/CaseStudy/CaseStudy'
import { koodoEcommerce, CaseStudyContent } from '@/data/case-study-content'

export default function KoodoEcommercePage() {
  return <CaseStudy project={koodoEcommerce} content={CaseStudyContent} />
}
