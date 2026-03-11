import React from 'react'
import Image from 'next/image'
import { LogoLink } from './Logo.styles'

interface LogoProps {
  onClick?: () => void
}

const Logo = ({ onClick }: LogoProps) => {
  return (
    <LogoLink href="/" onClick={onClick}>
      <Image
        src="/header-logo.png"
        alt="Home"
        width={75}
        height={75}
        className="nav-logo-img"
        priority
      />
    </LogoLink>
  )
}

export default Logo
