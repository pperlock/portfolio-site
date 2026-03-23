/**
 * Vintage lab / Dev Corner palette: Performance Lab, Under Development, radio tuner chrome, scores bezel.
 * Prefer these over ad-hoc hexes in Dev Corner features so the “instrument panel” look stays consistent.
 *
 * **Base colors** (`tube`, `amber`, `slateText`, …) are the single source for a given hue; feature groups
 * (`scores`, `glow`, …) only add keys that are unique to that surface—reuse base keys in styles instead of
 * duplicating the same hex under `scores.*`, `status.*`, etc.
 */

import { hexToRgba } from "./hexToRgba";

/** Coral pipe / needle */
const PIPE_MAIN_HEX = "#ff573d" as const;

/** Tuner readout / amber face */
const AMBER_HEX = "#ffca73" as const;

/** Daphne blue */
const DAPHNE_MAIN_HEX = "#9dc1d8" as const;

/** Ink / paper brown */
const INK_PRIMARY_HEX = "#2f241a" as const;

/** “Live” tag tint (warmer than `AMBER_HEX`). */
const LIVE_TAG_HEX = "#ffce78" as const;

/** Translucent overlays keyed to the same hex anchors as `VINTAGE_THEME` surfaces. */
const rgba = {
  /** Pipe / needle glow. */
  pipe: (alpha: number) => hexToRgba(PIPE_MAIN_HEX, alpha),
  /** Amber face / scale line glow (pairs with tuner readout). */
  amberFace: (alpha: number) => hexToRgba(AMBER_HEX, alpha),
  /** Daphne — focus rings, tuner halo, tab washes. */
  daphne: (alpha: number) => hexToRgba(DAPHNE_MAIN_HEX, alpha),
  ink: (alpha: number) => hexToRgba(INK_PRIMARY_HEX, alpha),
  liveTag: (alpha: number) => hexToRgba(LIVE_TAG_HEX, alpha),
} as const;

export const VINTAGE_THEME = {
  rgba,
  tube: "#ffae00",
  amber: AMBER_HEX,
  slateText: "#111827",
  neutralRail: "#e5e7eb",
  white: "#ffffff",

  daphne: {
    main: DAPHNE_MAIN_HEX,
    deep: "#7ba2bd",
    glow: rgba.daphne(0.35),
    glowSoft: rgba.daphne(0.24),
  },
  ink: {
    primary: INK_PRIMARY_HEX,
    deep: "#2a1f1a",
  },
  shell: {
    paper: "#f4f1ea",
    creamEnd: "#e1d4c2",
    frame: "#dcd0bc",
    shadow: "rgba(0,0,0,0.1)",
  },
  paper: {
    selectWarmStart: "#f8f3e8",
    selectWarmEnd: "#e8ddcc",
    disabled: "#f5f5f5",
  },
  console: {
    bronze: "#8d7d65",
    amberBright: "#ffe8a3",
  },
  /** Solid pipe / needle paint — use `VINTAGE_THEME.rgba.pipe` / `.amberFace` for shadows and translucency. */
  glow: {
    pipeMain: PIPE_MAIN_HEX,
    pipeHot: "#ff6e54",
  },
  ui: {
    progressTrack: "#161b22",
    borderDivider: "#30363d",
    liveTagBg: rgba.liveTag(0.12),
    liveTagBorder: rgba.liveTag(0.35),
    panelInset: rgba.ink(0.18),
    dottedLine: "rgba(80, 63, 52, 0.9)",
    chromeBorder: "rgba(79, 95, 120, 0.9)",
    warmBorder: rgba.ink(0.9),
    messageGray: "#374151",
    mutedGray: "#6b7280",
    slateMid: "#4b5563",
    menuShadow: "rgba(0, 0, 0, 0.2)",
  },
  underDevelopment: {
    sectionBg: "#f8f9fa",
    loadingTrack: "#e0e0e0",
  },
  scores: {
    gaugeHigh: "#ffcc5c",
    gaugeLow: "#f08a24",
    bezelLabel: "#4f4132",
    bezelFill: "#3b2a1c",
    bezelGradientTop: "rgba(255, 255, 255, 0.2)",
    bezelGradMid: "rgba(210, 160, 60, 0.45)",
    bezelGradDeep: "rgba(165, 95, 30, 0.55)",
    bezelGradOuter: "rgba(70, 30, 15, 1)",
    bezelRim: "rgba(120, 53, 15, 0.7)",
    bezelStroke: "rgba(0, 0, 0, 0.18)",
    bezelGlow: "rgba(255, 190, 90, 0.35)",
  },
  bezel: {
    scoresTop: "#c9c1b4",
    scoresBottom: "#b8afa0",
  },
  pagePreview: {
    chassis: "#1a1a1a",
    bezelInset: "#444",
  },
  tuner: {
    caseWoodStart: "#4a3625",
    caseWoodEnd: "#20160f",
  },
} as const;
