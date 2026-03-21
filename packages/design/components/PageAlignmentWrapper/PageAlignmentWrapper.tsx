import React from "react";
import { AlignmentWrapper } from "./PageAlignmentWrapper.styles";

type PageAlignmentWrapperProps = {
  children: React.ReactNode;
};

const PageAlignmentWrapper: React.FC<PageAlignmentWrapperProps> = ({
  children,
}) => <AlignmentWrapper>{children}</AlignmentWrapper>;

export default PageAlignmentWrapper;
