/**
 * Design tokens: single source of truth for colors, spacing, typography, motion, layout, breakpoints.
 * Used by styled-components (e.g. GlobalStyles, InsetSection) and optionally by theme provider.
 */

export const colors = {
  primary: "#000",
  text: "#000",
  textLight: "#666",
  textMedium: "#555",
  textMuted: "#757575",
  textHeader: "#333",
  bg: "#fff",
  bgSubtle: "#fafafa",
  bgMuted: "#f5f5f5",
  border: "#e0e0e0",
  hover: "#000",
  BrushStrokeOne: "#ff69b4",
  BrushStrokeTwo: "#ffd700",
  BrushStrokeThree: "#87ceeb",
};

export const socialIcons = {
  header: {
    linkedin: colors.bg,
    github: colors.bg,
  },
  footer: {
    linkedin: colors.text,
    github: colors.text,
  },
  resume: {
    linkedin: "blue",
    github: "black",
  },
  contact: {
    linkedin: colors.text,
    github: colors.text,
  },
};

export const spacing = {
  xs: "0.5rem",
  sm: "1rem",
  md: "2rem",
  lg: "4rem",
  xl: "6rem",
  xxl: "8rem",
};

export const typography = {
  fontFamily:
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  fontFamilyHeading:
    '"proxima nova semibold", "Helvetica Neue", Helvetica, Arial, sans-serif',
  fontSizeBase: "1rem",
  fontSizeXs: "0.5rem",
  fontSizeSm: "0.875rem",
  fontSizeLg: "1.125rem",
  fontSizeXl: "1.5rem",
  fontSize2xl: "2rem",
  fontSize3xl: "3rem",
  fontSize4xl: "4rem",
  fontSize5xl: "5rem",
  lineHeight: 1.6,
  letterSpacingTight: "-0.01em",
  letterSpacingWide: "0.2rem",
};

export const headerFontSize = {
  h1: {
    mobile: typography.fontSize4xl,
    tablet: typography.fontSize4xl,
    desktop: "6rem",
  },
  h2: {
    mobile: typography.fontSize3xl,
    tablet: typography.fontSize3xl,
    desktop: typography.fontSize4xl,
  },
  h3: {
    mobile: typography.fontSize2xl,
    tablet: typography.fontSize2xl,
    desktop: "2.5rem",
  },
};

export const motion = {
  transition: "all 0.3s ease",
};

export const layout = {
  radiusSm: "8px",
  radiusMd: "12px",
  radiusPill: "20px",
  containerMax: "1200px",
  contentMax: "1440px",
};

/** Button size tokens: padding (y x), font-size, font-weight. Use in Button.styles and hero/CTA buttons. */
export const button = {
  sm: {
    padding: "0.5rem 1rem",
    fontSize: "0.875rem",
    fontWeight: 600,
  },
  md: {
    padding: "0.875rem 2rem",
    fontSize: "16px",
    fontWeight: 600,
  },
  lg: {
    padding: "1rem 2.5rem",
    fontSize: "1.125rem",
    fontWeight: 600,
  },
};

const shadowLayer = (y: number, blur: number, opacity: number) =>
  `0 ${y}px ${blur}px rgba(0, 0, 0, ${opacity})`;
const md1 = shadowLayer(2, 8, 0.12);
const md2 = shadowLayer(4, 16, 0.1);

export const shadow = {
  sm: shadowLayer(2, 8, 0.08),
  md: `${md1}, ${md2}`,
  lg: `${shadowLayer(8, 24, 0.12)}, ${md2}`,
  insetTop: `inset ${md1}, inset ${md2}`,
  insetBottom: `inset ${shadowLayer(-2, 8, 0.12)}, inset ${shadowLayer(-4, 16, 0.1)}`,
};

/** Breakpoint values (px) and media query helpers. Use as template literal tags: ${fromTablet` padding: 2rem; `} */
export const breakpoint = {
  mobile: 375,
  tablet: 768,
  desktop: 1200,
  wide: 1440,
};

/**
 * Media query helpers for styled-components. Use as template literal tags:
 * ${fromTablet` padding: 2rem; `}
 * Supports function interpolations: ${fromTablet` padding: ${({ $x }) => $x}; `}
 * Returns a function so styled-components can call it with props and resolve those interpolations.
 */
const media =
  (minOrMax: "min" | "max", px: number) =>
  (
    strings: TemplateStringsArray,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- styled-components passes execution context; consumers destructure props (e.g. $paddingSize)
    ...interpolations: (string | number | ((props: any) => string | number))[]
  ) =>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- must accept styled-components ExecutionContext for interpolation callbacks
  (props: any) => {
    const content = strings.reduce(
      (acc, str, i) =>
        acc +
        str +
        (interpolations[i] !== undefined
          ? typeof interpolations[i] === "function"
            ? String(interpolations[i](props))
            : String(interpolations[i])
          : ""),
      "",
    );
    return `@media (${minOrMax}-width: ${px}px) { ${content} }`;
  };

export const fromMobile = media("min", breakpoint.mobile);
export const fromTablet = media("min", breakpoint.tablet);
export const fromDesktop = media("min", breakpoint.desktop);
export const fromWide = media("min", breakpoint.wide);

/** Styled-components theme object (use with ThemeProvider) */
export const theme = {
  colors,
  spacing,
  typography,
  motion,
  layout,
  button,
  shadow,
  breakpoint,
  headerFontSize,
  socialIcons,
};
