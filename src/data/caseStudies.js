export const caseStudies = [
  {
    slug: 'workforce-planning',
    title: 'Workforce Planning Portal',
    subtitle: 'A case study on process improvement at an enterprise scale.',
    year: '2024',
    role: 'Senior Consultant',
    tools: ['PowerAutomate', 'SQL', 'SharePoint', 'Power BI'],
    sections: [
      {
        heading: 'Context',
        body: 'Placeholder — describe the business problem and environment.',
      },
      {
        heading: 'Process',
        body: 'Placeholder — describe your approach, what you designed, and how you built it.',
      },
      {
        heading: 'Outcome',
        body: 'Placeholder — describe the impact, metrics, and what changed.',
      },
    ],
  },
  {
    slug: 'momentum',
    title: 'Momentum',
    subtitle: 'A first attempt at vibe-coding — building a habit tracker from scratch.',
    year: '2025',
    role: 'Designer & Developer',
    tools: ['React', 'Vite', 'Claude'],
    sections: [
      {
        heading: 'Context',
        body: 'Placeholder — what prompted building this, what you wanted to learn.',
      },
      {
        heading: 'Process',
        body: 'Placeholder — the experience of vibe-coding, what worked and what didn\'t.',
      },
      {
        heading: 'Outcome',
        body: 'Placeholder — what you built, what you learned, what\'s next.',
      },
    ],
  },
  {
    slug: 'outreach-workflow',
    title: 'Outreach Workflow',
    subtitle: 'Balancing design and sales — building a system for consistent outreach.',
    year: '2025',
    role: 'Founder, Akashi Labs',
    tools: ['n8n', 'Apify', 'Instantly.ai', 'Make.com'],
    sections: [
      {
        heading: 'Context',
        body: 'Placeholder — the outreach problem and why consistency mattered.',
      },
      {
        heading: 'Process',
        body: 'Placeholder — how design thinking and sales strategy shaped the workflow.',
      },
      {
        heading: 'Outcome',
        body: 'Placeholder — the system that resulted and how it balanced UX and utility.',
      },
    ],
  },
]

export function getCaseStudy(slug) {
  return caseStudies.find((cs) => cs.slug === slug)
}

export function getNextCaseStudy(currentSlug) {
  const index = caseStudies.findIndex((cs) => cs.slug === currentSlug)
  return caseStudies[(index + 1) % caseStudies.length]
}
