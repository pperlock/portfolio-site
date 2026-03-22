import styled from 'styled-components'
import { fromTablet, colors, VINTAGE_THEME } from '@portfolio/design'

const { pagePreview, white } = VINTAGE_THEME

/** Captures touches on viewports below tablet so the iframe cannot scroll. */
export const MobilePreviewScrollBlocker = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  touch-action: none;

  ${fromTablet`
    display: none;
  `}
`

export const PagePreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`

// 1. The outer casing of the phone
export const PhoneFrame = styled.div`
  width: 100%;
  max-width: 343px;
  height: 700px;
  background-color: ${pagePreview.chassis};
  border-radius: 40px;
  padding: 12px;
  position: relative;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 0 2px 2px ${pagePreview.bezelInset};
  display: flex;
  flex-direction: column;
  border: 4px solid ${colors.textMuted};
  ${fromTablet`
    max-width: 375px;
  `}

  /* The Notch/Speaker */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 25px;
    background: ${pagePreview.chassis};
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 10;
  }
`

// 2. The inner screen area
export const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: ${white};
  border-radius: 28px;
  overflow: hidden; /* This keeps the iframe edges rounded */
  position: relative;
`

// 3. The actual Iframe (inner doc scrollbars are not styleable from here; scrolling="no" disables embed scroll)
export const StyledIframe = styled.iframe.attrs({
  scrolling: 'no',
})`
  width: 326px;
  height: 800px;
  border: none;
  transform-origin: top left;
  overflow: hidden;

  ${fromTablet`
    width: 358px;
  `}
`
