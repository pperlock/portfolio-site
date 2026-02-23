export const homepageContent = {
  sections: {
    hero: {
      title: 'Frontend Software Engineer',
      subtitle:
        'Building scalable React applications with a focus on clean architecture and performance.',
      tagline: 'coder',
      image: '/portrait-left.png',
      buttons: [
        // {
        //   label: 'About',
        //   href: '/about',
        //   tip: 'left',
        //   variant: 'filled',
        // },
        {
          label: 'Contact',
          href: '/contact',
          tip: 'left' as const,
          variant: 'filled' as const,
        },
        {
          label: 'View Resume',
          href: '/resume',
          tip: 'right' as const,
          variant: 'outlined' as const,
        },
      ],
    },
    atAGlance: {
      title: 'At a Glance',
      points: [
        '5 years building production-ready React, Next.js applications',
        'Mentors and onboards developers, sharing knowledge and improving team workflows',
        'Designs reusable component architectures and scalable UI systems',
        'Debugs complex state management and async data flows with confidence',
        'Advocates for DRY, maintainable code and consistent patterns',
        'Collaborates closely with designers, backend engineers, QA, and product in Agile environments',
        'Self-driven and highly effective in remote environments',
        'Thrives on teams built on trust, shared ownership, and open communication',
        'Takes ownership of projects from planning through production',
      ],
    },
    experienceSummary: {
      title: 'Experience Summary',
      button: {
        label: 'View Resume',
        href: '/resume',
      },
      experiences: [
        {
          company: 'Acro Commerce',
          companyUrl: 'https://www.acrocommerce.com',
          role: 'Frontend Software Engineer',
          period: 'Jul 2021 - Present',
          duration: '4 yrs 8 mos',
          location: 'Kelowna · Remote',
          type: 'Permanent Full-time',
          logo: '/techIcons/acro-commerce-logo.svg',
          description:
            'Acro Commerce is a Canadian digital commerce agency specializing in ERP-integrated ecommerce solutions for B2B organizations.',
          summary: [
            'As part of the software engineering team, I work across multiple client storefronts and internal platforms. I initially contributed to migrating Koodo’s commerce platform from a legacy Drupal implementation to a modern React-based architecture, transitioning the storefront into a scalable, component-driven frontend. I supported high-visibility homepage rebrands, built and standardized reusable UI components, and improved performance and maintainability. I also proactively enhanced developer experience through tooling, documentation, and workflow improvements, while mentoring and onboarding new developers.',
            'Currently, I maintain and enhance TELUS’s e-Verification System (eVS), improving customer account upgrade flows across multiple React frontends integrated with Drupal and Contentful backends. I evaluated AI document-verification models to provide actionable recommendations, then implemented the selected solution in production, supporting rollout and future optimizations.',
            'I collaborate closely with designers, backend engineers, QA, and product stakeholders in an Agile development environment to deliver reliable production releases.',
          ],
        },
      ],
    },
    skills: {
      title: 'Skills',
      levelOrder: ['core', 'advanced', 'supporting'],
      levelLabels: {
        core: 'Core',
        advanced: 'Advanced',
        supporting: 'Supporting',
      },
    },
    latestWork: {
      title: 'Latest Work',
      button: {
        label: 'See More',
        href: '/portfolio',
      },
    },
  },
}
