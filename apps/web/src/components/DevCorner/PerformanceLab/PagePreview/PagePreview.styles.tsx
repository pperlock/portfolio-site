import styled from 'styled-components'

// 1. The outer casing of the phone
export const PhoneFrame = styled.div`
  width: 375px;
  height: 700px;
  background-color: #1a1a1a;
  border-radius: 40px;
  padding: 12px;
  position: relative;
  box-shadow:
    0 20px 40px rgba(0, 0, 0, 0.3),
    inset 0 0 2px 2px #444;
  display: flex;
  flex-direction: column;
  border: 4px solid #333;

  /* The Notch/Speaker */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 25px;
    background: #1a1a1a;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    z-index: 10;
  }
`

// 2. The inner screen area
export const PhoneScreen = styled.div`
  width: 100%;
  height: 100%;
  background: #fff;
  border-radius: 28px;
  overflow: hidden; /* This keeps the iframe edges rounded */
  position: relative;
`

// 3. The actual Iframe
export const StyledIframe = styled.iframe`
  /* Render the real page a bit wider, then scale it down so
     desktop min-width layouts fit without horizontal scroll */
  width: 430px;
  height: 800px;
  border: none;
  transform: scale(0.85);
  transform-origin: top left;
`
