import React from 'react'
import { StyledButton, StyledButtonLink } from './Button.styles'

type TippedButtonProps = {
  variant?: 'filled' | 'outlined'
  tip?: 'left' | 'right'
  href?: string
  target?: string
  type?: 'button' | 'submit' | 'reset'
  children?: React.ReactNode
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  text?: string
}

/**
 * Shared button with optional tip (left/right) and variant (filled/outlined).
 * Use as="a" or href to render as a link (StyledButtonLink); otherwise renders as button.
 * Links open in a new tab by default; pass target="_self" to open in the same tab.
 */
const TippedButton = ({
  variant = 'filled',
  tip = 'right',
  href,
  target = '_self',
  children,
  ...rest
}: TippedButtonProps) => {
  if (href != null) {
    return (
      <StyledButtonLink
        href={href || '#'}
        $variant={variant}
        $tip={tip}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </StyledButtonLink>
    )
  }
  return (
    <StyledButton $variant={variant} $tip={tip} {...rest}>
      {children}
    </StyledButton>
  )
}

export default TippedButton
export { StyledButton, StyledButtonLink } from './Button.styles'
