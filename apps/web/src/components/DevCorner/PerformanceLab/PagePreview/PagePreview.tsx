import { PagePreviewWrapper, PhoneFrame, PhoneScreen, StyledIframe } from './PagePreview.styles'

const PagePreview = ({ page }) => {
  return (
    <PagePreviewWrapper>
      <PhoneFrame>
        <PhoneScreen>
          <StyledIframe src={page} title="Page Preview" />
        </PhoneScreen>
      </PhoneFrame>
    </PagePreviewWrapper>
  )
}

export default PagePreview
