import {
  PagePreviewWrapper,
  PhoneFrame,
  PhoneScreen,
  StyledIframe,
  MobilePreviewScrollBlocker,
} from './PagePreview.styles'

const PagePreview = ({ page }) => {
  return (
    <PagePreviewWrapper>
      <PhoneFrame>
        <PhoneScreen>
          <StyledIframe src={page} title="Page Preview" />
          <MobilePreviewScrollBlocker aria-hidden />
        </PhoneScreen>
      </PhoneFrame>
    </PagePreviewWrapper>
  )
}

export default PagePreview
