import React from 'react'

import DevCorner from '@/components/DevCorner'
import { devCornerContent } from '@/data/dev-corner-content'

export default async function DevCornerPage() {
  return <DevCorner content={devCornerContent} />
}
