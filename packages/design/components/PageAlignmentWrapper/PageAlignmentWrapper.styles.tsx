import styled from "styled-components";

import { fromTablet, fromWide, spacing } from "../../tokens";

export const AlignmentWrapper = styled.div`
  padding: 0 ${spacing.sm};

  ${fromTablet`
    padding: 0 ${spacing.md};
  `}

  ${fromWide`
    padding: 0;
  `}
`;
