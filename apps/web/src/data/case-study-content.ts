export const CaseStudyContent = {
  navigation: {
    previous: 'Previous',
    next: 'Next',
    portfolio: 'Back to portfolio',
  },
  contributionsTitle: 'My Contribution',
  summaryTitle: 'Project Summary',
  badge: 'ecommerce',
}

export const koodoRebrand = {
  id: 'homepage',
  title: 'Koodo Mobile Homepage Rebrand',
  image: '/koodo-homepage.png',
  link: '/koodorebrand',
  productionUrl: [{ title: 'View in production', url: 'https://www.koodomobile.com' }],
  summary: [
    {
      title: 'Overview',

      description:
        'Contributed to a high-priority rebrand of the Koodo Mobile homepage, a key marketing entry point with significant traffic and visibility across Canada.',
    },
    {
      title: 'Impact',
      description: [
        'MVP and post-MVP scope delivered 1 week ahead of deadline, enabling the marketing launch to proceed on schedule.',
        'By clarifying scope, improving refinements, and aligning development with business priorities, the team reduced rework and late-stage surprises while increasing delivery confidence and velocity.',
        'The homepage reliably delivered accurate localized and personalized content, and team members across QA, development, and scrum publicly recognized the improvements in collaboration, process efficiency, and overall delivery quality.',
      ],
    },
    {
      title: 'Challenge',
      description:
        'The project had an aggressive deadline tied to a marketing launch, but the team lacked consistent technical direction due to limited resources, developers new to React, and an often-unavailable lead. Requirements around localization, personalization, and CMS-driven content needed to be implemented reliably, yet scope was unclear, refinement sessions were unfocused, and missing functionality and redundant code created risk of late-stage delays.',
    },
  ],
  contributions: [
    {
      title: 'Stabilized Planning & Scope',
      description: [
        'Restructured refinement sessions to focus on deliverable outcomes',
        'Identified reusable components and previously completed functionality',
        'Surfaced missing requirements early to avoid late scope changes',
        'Prioritized MVP vs post-MVP work based on business value',
      ],
    },
    {
      title: 'Led Technical Direction',
      description: [
        'Guided implementation of localized and personalized rendering logic',
        'Aligned homepage product listings with CMS marketing content',
        'Removed redundant code and uncovered functionality gaps',
        'Ensured decisions followed broader platform standards',
      ],
    },
    {
      title: 'Mentored & Supported the Team',
      description: [
        'Mentored developers newer to React and project architecture',
        'Helped the team adopt better Agile practices',
        'Partnered closely with QA on localized content validation',
        'Became a go-to collaborator across dev, QA, and scrum',
      ],
    },
    {
      title: 'Improved Cross-Team Collaboration',
      description: [
        'Built strong relationships with stakeholders',
        'Helped translate business goals into technical execution',
        'Supported testing workflows for dynamic CMS content',
      ],
    },
  ],
}

export const koodoEcommerce = {
  id: 'koodoEcommerce',
  title: 'Koodo Ecommerce',
  image: '/koodo-commerce.png',
  link: '/koodoecommerce',
  productionUrl: [
    { title: 'Rate Plans', url: 'https://www.koodomobile.com/en/rate-plans?plans=device' },
    {
      title: 'Phones',
      url: 'https://www.koodomobile.com/en/phones?INTCMP=KMNew_NavMenu_Shop_Phones',
    },
  ],
  summary: [
    {
      title: 'Overview',
      description:
        'Migrate the e-commerce platform from a legacy Drupal implementation to a modern React architecture powered by Contentful CMS. This included fucnctionality for device selection, rate plan customization, and checkout workflows. The project also integrated a unified design system to ensure consistent UI components and improve maintainability across the platform.',
    },
    {
      title: 'Challenge',
      description:
        'The migration needed to support the existing Drupal platform, ensuring backward compatibility for ongoing operations while gradually transitioning to React. The project involved navigating legacy libraries shared with other teams and managing shifting project requirements, including updates to the design system and a concurrent rebrand initiative, all while keeping scope under control.',
    },
    {
      title: 'Impact',
      description:
        'The migration modernized Koodo Mobile’s e-commerce platform, enabling faster development and easier maintenance through a scalable React architecture. Users benefited from a more intuitive, consistent experience across device selection, plan customization, and checkout. Standardizing UI components with the design system reduced development duplication and improved collaboration across teams, while maintaining backward compatibility ensured a smooth transition from Drupal.',
    },
  ],
  contributions: [
    {
      title: 'Code Quality & Maintainability',
      description: [
        'Evaluated state complexity during development and PR reviews to improve readability and reduce bugs.',
        'Reduced unnecessary state and component coupling, simplifying the architecture and enhancing performance.',
        'Promoted predictable rendering and consistent patterns across the codebase for easier maintenance and onboarding.',
        'Enforced coding standards and best practices to ensure long-term maintainability and team alignment.',
        'Introduced unit and integration testing strategies to prevent regressions and increase confidence in releases.',
        'Reviewed and refactored legacy code to modern React patterns, improving readability and reducing technical debt.',
        'Documented key architectural decisions and component usage to support maintainability and onboarding.',
      ],
    },
    {
      title: 'Collaboration and Teamwork',
      description: [
        'Worked closely with QA to test features and ensure high-quality releases.',
        'Collaborated with designers to bring the product vision to life and enhance user experience.',
        'Partnered with product owners and managers to implement business rules that meet customer needs.',
        'Coordinated with the Scrum Master to keep the project on track and aligned with timelines.',
        'Pair programmed, communicated, documented, and interacted with other developers to solve complex problems.',
        'Contributed to multiple cross-team initiatives, selected for projects based on expertise and reliability.',
        'Participated in Agile ceremonies and actively shared knowledge to improve team processes.',
      ],
    },

    {
      title: 'Session & State Architecture Improvements',
      description: [
        'Consolidated fragmented API calls using React Query, reducing unnecessary network requests and improving performance.',
        'Eliminated race conditions through proper state management, creating a single source of truth for session state via an API-based approach shared across multiple libraries.',
        'Maintained backward compatibility for cross-team consumers while modernizing session handling.',
        'Redesigned authentication using Next.js middleware, implementing a unified session management system that simplified local setup and ensured secure, consistent access.',
      ],
    },
    {
      title: 'Improved Developer Experience',
      description: [
        'Developed lightweight feature flag tooling for local and staging environments, enabling safer testing of long-running features and reducing rollout bugs.',
        "Automated local 'production-like' workflows with real secrets and endpoints, cutting debugging and onboarding time from hours to seconds.",
        'Mentored and onboarded new developers to the project, ensuring smoother team ramp-up and knowledge sharing.',
      ],
    },
  ],
}

export const storeLocator = {
  id: 'storeLocator',
  title: 'Koodo Mobile Store Locator',
  image: '/store-locator.png',
  link: '/koodostorelocator',
  productionUrl: [
    { title: 'View in production', url: 'https://www.koodomobile.com/en/find-nearest-store' },
  ],
  summary: [
    {
      title: 'Overview',
      description:
        'Built an interactive store locator that helps customers find the nearest Koodo Mobile retail locations with location search, map integration, and store details.',
    },
    {
      title: 'Challenge',
      description:
        'Created an intuitive location finder that integrates geolocation services, search functionality, and interactive maps while maintaining fast performance and a seamless user experience.',
    },
    {
      title: 'Impact',
      description:
        'Improved customer access to retail locations with an easy-to-use store finder that reduces friction in the customer journey.',
    },
  ],
  contributions: [
    {
      title: 'Location Search',
      description:
        'Implemented robust search functionality that allows users to find stores by address, postal code, or using their current location with geolocation API integration.',
    },
    {
      title: 'Interactive Map Integration',
      description:
        'Integrated interactive maps with store markers, providing visual representation of nearby locations with detailed store information and directions.',
    },
    {
      title: 'Store Information Display',
      description:
        'Built a comprehensive store details view showing hours, contact information, services offered, and special features for each location.',
    },
  ],
}
