import { createGlobalStyle } from 'styled-components'
import { colors, spacing, typography, motion, layout } from '@/design'

/**
 * Single source of truth: tokens.js.
 * Injects :root (so existing .css files can use var(--...)), base document styles, and reset.
 */
const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    /* Colors */
    --color-primary: ${colors.primary};
    --color-text: ${colors.text};
    --color-text-light: ${colors.textLight};
    --color-text-muted: ${colors.textMuted};
    --color-bg: ${colors.bg};
    --color-bg-subtle: ${colors.bgSubtle};
    --color-bg-muted: ${colors.bgMuted};
    --color-border: ${colors.border};
    --color-hover: ${colors.hover};
    --primary-color: ${colors.primary};
    --text-color: ${colors.text};
    --text-light: ${colors.textLight};
    --bg-color: ${colors.bg};
    --border-color: ${colors.border};
    --hover-color: ${colors.hover};

    /* Spacing */
    --spacing-xs: ${spacing.xs};
    --spacing-sm: ${spacing.sm};
    --spacing-md: ${spacing.md};
    --spacing-lg: ${spacing.lg};
    --spacing-xl: ${spacing.xl};

    /* Typography */
    --font-family: ${typography.fontFamily};
    --font-family-heading: ${typography.fontFamilyHeading};
    --font-size-base: ${typography.fontSizeBase};
    --font-size-sm: ${typography.fontSizeSm};
    --font-size-lg: ${typography.fontSizeLg};
    --font-size-xl: ${typography.fontSizeXl};
    --font-size-2xl: ${typography.fontSize2xl};
    --font-size-3xl: ${typography.fontSize3xl};
    --font-size-4xl: ${typography.fontSize4xl};
    --line-height: ${typography.lineHeight};
    --letter-spacing-tight: ${typography.letterSpacingTight};
    --letter-spacing-wide: ${typography.letterSpacingWide};

    /* Motion & layout */
    --transition: ${motion.transition};
    --radius-sm: ${layout.radiusSm};
    --radius-md: ${layout.radiusMd};
    --radius-pill: ${layout.radiusPill};
    --container-max: ${layout.containerMax};
  }

  html {
    scroll-behavior: smooth;
    font-size: ${typography.fontSizeBase};
    font-family: ${typography.fontFamily};
    /* Reserve space for scrollbar so content doesn't shift when navigating between long and short pages */
    scrollbar-gutter: stable;
  }

  body {
    font-family: inherit;
    color: ${colors.text};
    background-color: ${colors.bg};
    line-height: ${typography.lineHeight};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  /* Sticky footer: main content fills space so footer stays at bottom */
  .App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .layout-main {
    flex: 1;
  }

  .container {
    max-width: ${layout.containerMax};
    margin: 0 auto;
    padding: 0 ${spacing.md};
  }

`

export default GlobalStyles
