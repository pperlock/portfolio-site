import styled from "styled-components";
import { spacing, typography, colors } from "../../../tokens";
import type { ParagraphColor, ParagraphAlign } from "../../../types";

const paragraphColorVariants = {
  light: colors.textLight,
  medium: colors.textMedium,
  normal: colors.text,
};

export const StyledParagraph = styled.p<{
  color?: ParagraphColor;
  align?: ParagraphAlign;
  bold?: boolean;
  bottomMargin?: boolean;
  size?: string;
}>`
  margin-bottom: ${({ bottomMargin }) => (bottomMargin ? spacing.sm : 0)};
  font-size: ${({ size }) => size || typography.fontSizeLg};
  color: ${({ color }) => paragraphColorVariants[color || "normal"]};
  line-height: 1.8;
  text-align: ${({ align }) => align || "left"};
  font-weight: ${({ bold }) => (bold ? "bold" : "normal")};
`;
