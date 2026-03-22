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
        {
          category: 'UI Layer',
          items: ['Next.js', 'React', 'Styled Components', 'TanStack Query (React Query)'],
        },
        { category: 'Content Layer', items: ['Contentful CMS'] },
        {
          category: 'Integration & APIs',
          items: ['REST', 'GraphQL'],
        },
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
    serverDataFetching: {
      title: 'Secure By Design',
      body: 'Upstream Github and Lighthouse APIs are proxied through a **Next.js BFF** (Backend-for-Frontend) architecture. This server-side bridge keeps sensitive API tokens strictly in the environment—delivering clean, pre-processed data to the UI without exposing credentials to the browser’s Network tab.',
      diagram: {
        serverZoneLabel: 'Next.js server · Node.js runtime',
        callout: 'Auth headers injected here—**0%** exposure to client',
        steps: [
          {
            title: 'Client',
            description:
              'Client triggers a {{code}}GET{{/code}} request to server {{code}}/api/<route>{{/code}}',
          },
          { title: 'API routes', description: 'Route handler receives call on the secure server' },
          {
            title: 'Environment',
            description:
              'Private keys are injected via {{code}}process.env{{/code}} into the server environment',
          },
          {
            title: 'Upstream',
            description: 'Secure HTTPS outbound request to upstream Github and Lighthouse APIs',
          },
        ],
      },
    },
  },
  designSystem: {
    title: 'Design System',
    body: 'To ensure visual consistency and streamline the development workflow, I am currently architecting a centralized design system hosted as a shared package. Each component will be fully documented within an isolated Storybook environment, with a live link provided here as soon as the first iteration is live.',
  },
  performanceLab: {
    title: 'Performance Lab',
    body: "Automated performance profiling and accessibility auditing. This interface leverages the Lighthouse engine to generate deep-dive insights into the application's speed, crawlability, and inclusive design patterns.",
    selectLabel: 'Choose a page to generate a live performance report:',
    reportLinkText: 'View full Lighthouse report',
    selectPlaceHolder: '-- Select a page --',
  },
  engineeringRoadmap: {
    title: 'Engineering roadmap',
    body: "A real-time synchronization of active development across the application layer, design system, and CMS integration. This board pulls directly from GitHub Issues serving as a functional 'command center' for the continuous integration and deployment of new features.",
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
