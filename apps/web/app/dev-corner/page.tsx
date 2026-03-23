import React from 'react'

import DevCorner from '@/components/DevCorner'
import { devCornerContent } from '@/data/dev-corner-content'

/** GitHub issues load on the client so this route is not blocked on the API. */
export default function DevCornerPage() {
  return <DevCorner content={devCornerContent} />
}
