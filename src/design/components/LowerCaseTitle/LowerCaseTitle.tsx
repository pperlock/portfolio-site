import React from 'react'
import { Title } from './LowerCaseTitle.styles'

interface LowerCaseTitleProps {
  children: React.ReactNode
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const LowerCaseTitle = ({ children, tag = 'h1' }: LowerCaseTitleProps) => {
  return <Title as={tag}>{children}</Title>
}

export default LowerCaseTitle
