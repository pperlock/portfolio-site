export const devCornerContent = {
  hero: {
    title: 'Under the hood',
    subtitle:
      'A peek behind the scenes of this portfolio: how it’s built, what’s currently in progress, and what’s coming next.',
    image: '/tech-talk-front.png',
    brushStrokes: false as const,
    tiltImage: false as const,
  },
  architecture: {
    title: 'Architecture',
    body: [
      'This portfolio is built with a modern React architecture using Next.js, TypeScript, and Turborepo. The project structure emphasizes separation of concerns, reusable component patterns, and maintainable project organization, reflecting how I typically structure production React applications.',
    ],
    techStack: {
      title: 'Tech Stack',
      items: [
        'Next.js + React',
        'Typescript',
        'Turborepo',
        'Contentful CMS',
        'Styled Components',
        'Storybook',
        'Vitest + React Testing Library',
        'GitHub Projects for backlog tracking',
      ],
      image: '/tech-stack.png',
    },
  },

  mainApp: {
    title: 'Application Layer',
    body: 'The design system components live in a shared package and are viewable in Storybook. Each component is documented and accessible for reuse across the portfolio.',
  },
  designSystem: {
    title: 'Design System',
    body: 'The design system components live in a shared package and are viewable in Storybook. Each component is documented and accessible for reuse across the portfolio.',
  },
  performanceLab: {
    title: 'Performance Lab',
    body: 'Lighthouse-powered insights into performance, accessibility, and SEO.',
  },
  engineeringRoadmap: {
    title: 'Engineering roadmap',
    body: 'A living snapshot of the technical work underway across the application layer, design system, CMS, and accessibility.',
    sections: {
      mainApp: { title: 'Application Layer', tag: 'App Development' },
      designSystem: { title: 'Design System', tag: 'Design System' },
      cms: { title: 'Contentful', tag: 'Contentful Integration' },
      accessibility: { title: 'Accessibility', tag: 'Accessibility' },
    },
  },
}

export type DevCornerContent = typeof devCornerContent
