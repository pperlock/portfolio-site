import styled from 'styled-components'
import { motion, fromTablet } from '@/design'

export const BackToTopButton = styled.button`
  position: absolute;
  top: -76px;
  left: 50%;
  transform: translateX(-50%);
  border: none;
  background: none;
  color: #fff;
  cursor: pointer;
  z-index: 10;
  width: 50px;
  height: 86px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  transition: ${motion.transition};

  &:hover {
    transform: translateX(-50%) translateY(-2px);
    filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.25));
  }

  svg {
    width: 100%;
    height: 100%;
  }
  ${fromTablet`
    top: -121px;
    width: 65px;
  `}
`
