import styled from 'styled-components'
import { fromDesktop, fromTablet, colors, VINTAGE_THEME } from '@portfolio/design'

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
  width: 100%;
  height: 100%;
`

// 1. The outer casing of the phone (narrow screens: smaller so metrics stay visible without huge scroll)
export const PhoneFrame = styled.div`
  width: 100%;
  max-width: 286px;
  margin-inline: auto;
  height: 560px;
  background-color: ${pagePreview.chassis};
  border-radius: 34px;
  padding: 10px;
  position: relative;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 0 2px 2px ${pagePreview.bezelInset};
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 3px solid ${colors.textMuted};
  ${fromTablet`
    border-radius: 40px;
    padding: 12px;
    border: 4px solid ${colors.textMuted};
  `}
  ${fromDesktop`
    max-width: 375px;
    height: 700px;
  `}

  /* The Notch/Speaker */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 128px;
    height: 22px;
    background: ${pagePreview.chassis};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    z-index: 10;
    ${fromTablet`
      width: 150px;
      height: 25px;
      border-bottom-left-radius: 20px;
      border-bottom-right-radius: 20px;
    `}
  }
`

// 2. The inner screen area
export const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  min-height: 0;
  background: ${white};
  border-radius: 24px;
  overflow: hidden; /* This keeps the iframe edges rounded */
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${fromTablet`
    border-radius: 28px;
  `}
`

/** Clips scaled iframe on narrow viewports (matches PhoneFrame width). */
export const IframeScaleWrapper = styled.div`
  width: 267px;
  height: 656px;
  overflow: hidden;
  flex-shrink: 0;

  ${fromDesktop`
    width: 358px;
    height: 800px;
  `}
`

// 3. The actual Iframe (inner doc scrollbars are not styleable from here; scrolling="no" disables embed scroll)
export const StyledIframe = styled.iframe.attrs({
  scrolling: 'no',
})`
  width: 337px;
  height: 800px;
  border: none;
  transform: scale(0.818);
  transform-origin: top left;
  overflow: hidden;

  ${fromDesktop`
    width: 368px;
    transform: none;
  `}
`
