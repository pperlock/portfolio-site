export const devCornerContent = {
  hero: {
    title: 'Under the hood',
    subtitle:
      'Explore the engineering behind this portfolio — its architecture, design system, performance metrics, and the roadmap for what’s coming next.',
    image: '/tech-talk-wide.png',
    brushStrokes: false as const,
    tiltImage: false as const,
  },
  architecture: {
    title: 'Architecture',
    body: 'This portfolio is built with a modern React architecture using Next.js, TypeScript, and Turborepo. The project structure emphasizes separation of concerns, reusable component patterns, and maintainable project organization, reflecting how I typically structure React applications.',
    techStack: {
      title: 'Tech Stack',
      items: [
        { category: 'UI Layer', items: ['Next.js', 'React', 'Styled Components'] },
        { category: 'Content Layer', items: ['Contentful CMS'] },
        { category: 'Developer Tooling', items: ['Turborepo', 'Vite', 'Storybook'] },
        { category: 'Testing', items: ['React Testing Library'] },
      ],
      image: '/tech-stack.png',
    },
    architectureDiagram: {
      mainApp: {
        title: 'Portfolio App',
        tech: 'Next.js + React + TypeScript',
        description: 'Main Next.js application responsible for rendering pages and UI.',
      },
      designSystem: {
        title: 'Design System',
        tech: 'Storybook + Vite + Styled Components',
        description: 'Reusable UI components shared across the application.',
      },
      cms: {
        title: 'CMS Package',
        tech: 'Contentful',
        description: 'Contentful client, queries, and data mapping.',
      },
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
    devLinks: [
      {
        label: 'GitHub',
        subtitle: 'Portfolio Repository',
        href: 'https://github.com/pperlock/portfolio-site',
        description:
          'Source code for this site, including the Turborepo, design system, and CMS packages.',
      },
      {
        label: 'GitHub Projects',
        subtitle: 'Portfolio Roadmap',
        href: 'https://github.com/users/pperlock/projects/1/views/3',
        description:
          'High-level backlog of improvements, refactors, and experiments for this portfolio.',
      },
    ],
  },
}

export type DevCornerContent = typeof devCornerContent
