import {
  PagePreviewWrapper,
  PhoneFrame,
  PhoneScreen,
  IframeScaleWrapper,
  StyledIframe,
  MobilePreviewScrollBlocker,
} from './PagePreview.styles'

const PagePreview = ({ page }) => {
  return (
    <PagePreviewWrapper>
      <PhoneFrame>
        <PhoneScreen>
          <IframeScaleWrapper>
            <StyledIframe src={page} title="Page Preview" />
          </IframeScaleWrapper>
          <MobilePreviewScrollBlocker aria-hidden />
        </PhoneScreen>
      </PhoneFrame>
    </PagePreviewWrapper>
  )
}

export default PagePreview
