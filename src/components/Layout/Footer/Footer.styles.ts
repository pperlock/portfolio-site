import styled from 'styled-components'
import { colors, shadow, layout, fromTablet, fromDesktop } from '@/design'

export const StyledFooter = styled.footer`
  padding: 1rem 0;
  border-top: 1px solid ${colors.border};
  box-shadow: ${shadow.md};
  background-color: ${colors.bgMuted};
  position: relative;

  ${fromTablet`
    padding: 3rem 0 2.5rem;
  `}
`

export const FooterWrapper = styled.div`
  max-width: ${layout.containerMax};
  margin: 0 auto;
  padding: 0 1rem;
  position: relative;

  ${fromTablet`
    padding: 0 2rem;
  `}
  ${fromDesktop`
    padding: 0;
  `}

  &::before {
    content: '';
    position: absolute;
    top: -57px;
    left: 50%;
    transform: translateX(-50%);
    width: 86px;
    height: 40px;
    border-radius: 103px 103px 0 0;
    border: 1px solid ${colors.border};
    border-bottom: none;
    background: ${colors.bgMuted};
    pointer-events: none;
  }

  ${fromTablet`
    &::before {
      width: 125px;
      height: 63px;
      top: -112px;
      border-radius: 77px 77px 0 0;
    }
  `}
`

export const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding-top: 0.5rem;

  /* Mobile: nav links, then socials, then copyright at bottom */
  & > *:first-child {
    order: 2;
  }
  & > *:nth-child(2) {
    order: 1;
  }

  ${fromTablet`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
    & > *:first-child {
      order: unset;
    }
    & > *:nth-child(2) {
      order: unset;
    }
  `}
`

export const FooterNavGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  ${fromTablet`
    flex-direction: row;
    align-items: center;
    gap: 2rem;
  `}
`

export const Copyright = styled.p`
  color: ${colors.textLight};
  font-weight: 400;
  margin: 0;
`

export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  ${fromTablet`
    display:none;
  `}
`
