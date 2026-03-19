import { PhoneFrame, PhoneScreen, StyledIframe } from './PagePreview.styles'

const PagePreview = ({ page }) => {
  return (
    <PhoneFrame>
      <PhoneScreen>
        <StyledIframe src={page} title="Page Preview" />
      </PhoneScreen>
    </PhoneFrame>
  )
}

export default PagePreview
