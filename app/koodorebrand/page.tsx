import CaseStudy from '@/components/CaseStudy/CaseStudy'
import { koodoRebrand, CaseStudyContent } from '@/data/case-study-content'

export default function KoodoRebrandPage() {
  return <CaseStudy project={koodoRebrand} content={CaseStudyContent} />
}
