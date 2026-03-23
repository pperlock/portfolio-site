import styled from 'styled-components'
import { colors, shadow, motion, spacing, fromTablet } from '@portfolio/design'

export const FloatingButton = styled.button`
  position: fixed;
  z-index: 900;
  bottom: ${spacing.md};
  right: ${spacing.md};
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${colors.border};
  border-radius: 50%;
  background: ${colors.bg};
  color: ${colors.textHeader};
  cursor: pointer;
  box-shadow: ${shadow.md};
  transition:
    opacity ${motion.transition},
    transform ${motion.transition};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shadow.lg};
  }

  &:focus-visible {
    outline: 2px solid ${colors.textHeader};
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
  }

  ${fromTablet`
    bottom: ${spacing.lg};
    right: ${spacing.lg};
    width: 52px;
    height: 52px;

    svg {
      width: 22px;
      height: 22px;
    }
  `}
`
