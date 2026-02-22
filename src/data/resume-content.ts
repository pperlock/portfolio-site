export const resumeHeader = {
  title: 'Frontend Software Engineer',
  summary:
    'Frontend Software Engineer with 5 years of experience designing and delivering large-scale React and Next.js applications in production environments. I focus on building reliable, performant user interfaces for critical user flows, and I enjoy solving complex frontend problems that balance architecture, usability, and long-term maintainability.',
  downloadPdf: {
    href: '/patti-perlock-resume.pdf',
    label: 'Download PDF',
  },
}

import type { ExperienceJob } from '@/types'

export const experience: ExperienceJob[] = [
  {
    title: 'Software Engineer',
    company: 'Acro Commerce',
    date: 'July 2021 - Present',
    location: 'Kelowna, BC (Remote)',
    description: [
      {
        type: 'subtitle',
        text: 'Key Project: Telus/Koodo Headless Commerce Migration',
      },
      {
        type: 'list',
        items: [
          "Migrated Koodo's headless commerce platform from Drupal to React, integrating Node.js backend and Contentful CMS, improving frontend maintainability and team velocity.",
          'Redesigned authentication using Next.js middleware, creating a unified session management system that simplified local setup and ensured secure, consistent access.',
          'Consolidated multiple API calls into a single React Query source, eliminating race conditions, restoring analytics accuracy, and improving reliability across Commerce and Self-Serve platforms.',
          'Built lightweight feature flag tooling for local and staging environments, enabling safer testing of long-running features and reducing rollout bugs.',
          'Automated local "production-like" workflows with real secrets and endpoints, cutting debugging and onboarding time from ~1 hour to seconds.',
          'Selected for high-priority homepage rebrand: led refinements, identified reusable components, and mentored developers, delivering the project one week ahead of schedule.',
        ],
      },
      {
        type: 'subtitle',
        text: 'Additional Production Projects',
      },
      {
        type: 'list',
        items: [
          "Maintained and improved Telus's e-Verification System (eVS), enhancing customer account upgrade flows using multiple React frontends and Drupal / Contentful backend integration.",
          'Evaluated AI models for automated document verification, delivering actionable recommendations that supported production rollout and future optimizations.',
          'Delivered a production Shopify storefront with custom product architecture, ensuring inventory consistency and single source of truth.',
        ],
      },
    ],
  },
  {
    title: 'Teaching Assistant',
    company: 'BrainStation',
    date: 'Feb 2021 - May 2021',
    location: 'Contract Full-time',
    description: [
      {
        type: 'list',
        items: [
          'Demonstrated communication and collaboration skills by partnering with teams across multiple sites to ensure functionality requirements were met while simultaneously providing them with training and support.',
        ],
      },
    ],
  },
  {
    title: 'Senior Database Administrator',
    company: 'Kirkland Lake Gold (KL)',
    date: '2017 - 2020',
    location: 'Permanent Full-time',
    description: [
      {
        type: 'list',
        items: [
          'Spearheaded the development and execution of a SQL server database remotely on a 3 month deadline, allowing a major exploration drilling program to commence.',
          'Eliminated inefficiencies by developing and delivering streamlined reporting and automated tracking tools to senior level management.',
          'Designed and regulated a detailed QAQC monitoring program that reports the precision and accuracy of assay data, complying with NI43-101 quality standards as required by the securities commission.',
        ],
      },
    ],
  },
]

export const education = [
  { title: 'Web Development Diploma', institution: 'BrainStation' },
  { title: 'Master of Science, Geophysics', institution: 'University of Western Ontario' },
  { title: 'Bachelor of Science, Geophysics', institution: 'University of Western Ontario' },
]
