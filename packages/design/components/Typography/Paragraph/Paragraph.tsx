import React from "react";
import { StyledParagraph } from "./Paragraph.styles";
import type { ParagraphColor, ParagraphAlign } from "../../../types";
import { typography } from "../../../tokens";

interface ParagraphProps {
  children: React.ReactNode | string;
  color?: ParagraphColor;
  align?: ParagraphAlign;
  bold?: boolean;
  bottomMargin?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
}

const Paragraph = ({
  children,
  color,
  align,
  bold,
  bottomMargin = true,
  size = "md",
}: ParagraphProps) => {
  const sizes = {
    xs: typography.fontSizeXs,
    sm: typography.fontSizeSm,
    md: typography.fontSizeLg,
    lg: typography.fontSizeXl,
  };
  return (
    <StyledParagraph
      color={color}
      align={align}
      bold={bold}
      bottomMargin={bottomMargin}
      size={sizes[size] || "md"}
    >
      {children}
    </StyledParagraph>
  );
};

export default Paragraph;
