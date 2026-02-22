import React from 'react'
import Image from 'next/image'
import { LogoLink } from './Logo.styles'

const Logo = () => {
  return (
    <LogoLink href="/">
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
