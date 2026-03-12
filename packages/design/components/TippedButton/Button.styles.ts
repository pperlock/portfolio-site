import styled from 'styled-components'
import Link from 'next/link'
import { colors, layout, button } from '../../tokens' // eslint-disable-line no-unused-vars

const tipHoverLeft = 'translateY(-2px) rotate(-2deg) skew(-1deg)'
const tipHoverRight = 'translateY(-2px) rotate(3deg) skew(1deg)'

type ButtonVariantProps = { $variant?: string; $tip?: string }
const getTipHover = ({ $tip }: ButtonVariantProps) => {
  if ($tip === 'left') return tipHoverLeft
  if ($tip === 'right') return tipHoverRight
  return 'translateY(-2px)'
}

const size = button.sm

const getBaseStyles = () => `
  display: inline-block;
  padding: ${size.padding};
  font-size: ${size.fontSize};
  font-weight: ${size.fontWeight};
  text-decoration: none;
  text-align: center;
  border-radius: ${layout.radiusSm};
  border: 2px solid transparent;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: rotate(0deg) skew(0deg);
  cursor: pointer;
  font-family: inherit;
`

export const StyledButton = styled.button<ButtonVariantProps>`
  ${getBaseStyles}
  background-color: ${({ $variant }) => ($variant === 'outlined' ? 'transparent' : colors.primary)};
  color: ${({ $variant }) => ($variant === 'outlined' ? colors.primary : colors.bg)};
  border-color: ${({ $variant }) => ($variant === 'outlined' ? colors.primary : 'transparent')};

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === 'outlined' ? colors.primary : colors.textHeader};
    color: ${colors.bg};
    border-color: ${({ $variant }) => ($variant === 'outlined' ? colors.primary : 'transparent')};
    transform: ${getTipHover};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`

export const StyledButtonLink = styled(Link)<ButtonVariantProps>`
  ${getBaseStyles}
  background-color: ${({ $variant }) => ($variant === 'outlined' ? 'transparent' : colors.primary)};
  color: ${({ $variant }) => ($variant === 'outlined' ? colors.primary : colors.bg)};
  border-color: ${({ $variant }) => ($variant === 'outlined' ? colors.primary : 'transparent')};

  &:hover {
    background-color: ${({ $variant }) =>
      $variant === 'outlined' ? colors.primary : colors.textHeader};
    color: ${colors.bg};
    border-color: ${({ $variant }) => ($variant === 'outlined' ? colors.primary : 'transparent')};
    transform: ${getTipHover};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`
