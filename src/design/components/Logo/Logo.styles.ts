import styled from 'styled-components'
import Link from 'next/link'
import { motion } from '@/design'

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: ${motion.transition};

  &:hover {
    opacity: 0.9;
  }

  img {
    display: block;
    width: auto;
    height: 55px;
    object-fit: contain;
  }
`
