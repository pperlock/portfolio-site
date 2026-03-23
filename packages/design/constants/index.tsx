export type NavLinkConfig = {
  label: string;
  href: string;
  activeColor: string;
  /** When true, footer nav can render this link with de-emphasized styling */
  isSubtle?: boolean;
};

export const NAV_LINKS: Record<string, NavLinkConfig> = {
  about: { label: "about", href: "/about", activeColor: "BrushStrokeOne" },
  portfolio: {
    label: "portfolio",
    href: "/portfolio",
    activeColor: "BrushStrokeTwo",
  },
  resume: { label: "resume", href: "/resume", activeColor: "BrushStrokeThree" },
  contact: {
    label: "contact",
    href: "/contact",
    activeColor: "BrushStrokeOne",
  },
  devCorner: {
    label: "dev corner",
    href: "/dev-corner",
    activeColor: "BrushStrokeThree",
  },
};
