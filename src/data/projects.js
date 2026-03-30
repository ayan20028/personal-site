export const STATUS_CONFIG = {
  shipped: { label: 'Shipped', color: '#3D6B3D' },
  poc: { label: 'Proof of concept', color: '#7C6E54' },
  creative: { label: 'Creative', color: '#6B5B7B' },
  shelved: { label: 'Shelved', color: '#8C8A87' },
}

export const projects = [
  {
    slug: 'workforce-management-portal',
    title: 'Workforce Management Portal',
    category: 'Process design',
    status: 'shipped',
    featured: true,
    description:
      'An internal tool built on Microsoft\u2019s Power Platform that centralizes workforce planning and management for the IT&V Planning & Governance team at Wells Fargo. Replaced manual, scattered processes with a single integrated system.',
    tools: ['SharePoint', 'PowerApps', 'Power Automate'],
    subtitle:
      'Centralizing workforce operations for an enterprise team.',
    timeline: '2024',
    role: 'Senior Consultant',
    sections: [
      {
        heading: 'Problem',
        body: 'The team was managing workforce data across scattered spreadsheets and disconnected manual processes. There was no single source of truth \u2014 information lived in different places, was hard to keep current, and created friction for anyone trying to get a clear picture of workforce status.',
      },
      {
        heading: 'Approach',
        body: 'Built a centralized portal using SharePoint for data storage and access, PowerApps for the user-facing interface, and Power Automate for automating workflows like notifications and approvals. Designed it to fit into existing team habits so adoption would be natural rather than forced.',
      },
      {
        heading: 'Result',
        body: 'Broadly adopted across the department \u2014 became the go-to tool for day-to-day workforce operations. Replaced manual, scattered processes with a single integrated system.',
      },
    ],
    reflection: null,
    image: null,
    imageCaption: null,
  },
  {
    slug: 'vba-org-chart-automation',
    title: 'VBA Org Chart Automation',
    category: 'Process design',
    status: 'shipped',
    featured: false,
    description:
      'A VBA script that automatically generates organizational charts, replacing what was previously a tedious manual process. Broadly adopted within the department at Wells Fargo.',
    tools: ['VBA', 'Excel', 'Visio'],
    subtitle:
      'Eliminating a recurring manual task with one button click.',
    timeline: '2023',
    role: 'Senior Consultant',
    sections: [
      {
        heading: 'Problem',
        body: 'Creating and updating org charts by hand was time-consuming and error-prone. Every time team structures changed \u2014 which happened often \u2014 someone had to manually rebuild the chart. A low-value task that ate up real time.',
      },
      {
        heading: 'Approach',
        body: 'Wrote a VBA script that pulls employee and team data and programmatically generates formatted org charts. The script handles layout, hierarchy, and formatting automatically \u2014 what used to take significant manual effort now runs with a button click.',
      },
      {
        heading: 'Result',
        body: 'Broadly adopted within the department at Wells Fargo. Eliminated a recurring manual task and ensured org charts stayed accurate as teams changed.',
      },
    ],
    reflection: null,
    image: null,
    imageCaption: null,
  },
  {
    slug: 'momentum',
    title: 'Momentum',
    category: 'Personal tool',
    status: 'shipped',
    featured: true,
    description:
      'A habit tracker built around friction, not features. Tracks 11 researched daily habits with custom inputs and a correlation engine.',
    tools: ['React 19', 'Supabase', 'Vite', 'PWA'],
    subtitle:
      'A habit tracker built around friction, not features.',
    timeline: '5 days',
    role: 'Solo builder',
    sections: [
      {
        heading: 'Problem',
        body: "Existing habit trackers split into two extremes: gamified apps optimizing for engagement, and minimal checklists that don't analyze the data. Both added friction that made consistent daily tracking unsustainable. I wanted to track specific high-leverage habits and surface patterns I couldn't see on my own.",
      },
      {
        heading: 'Approach',
        body: 'Researched which habits have the highest leverage, then hardcoded 11 matched to my routine. Started with a Claude artifact that was roughly 80% functional, took it to Claude Code, and shipped a working PWA on day one. Designed five custom input types per habit instead of building a generic form builder. Built a correlation engine requiring 14 days of data before generating insights.',
      },
      {
        heading: 'Result',
        body: '22 commits. Four views covering different interaction speeds: a 90-second guided flow, a 30-second quick grid, and weekly and monthly dashboards. Insights engine analyzes 9 correlation dimensions. Installable as PWA on iOS and Android. Entire codebase under 2,000 lines. Friends created their own accounts on the same instance \u2014 row-level security means each user only sees their own data.',
      },
    ],
    reflection:
      'Add a design token system from the start \u2014 a palette overhaul required touching dozens of hardcoded values. Build an offline write queue for true PWA resilience. Add tests for the 407-line insights engine.',
    image: null,
    imageCaption: 'Screenshot of the app \u2014 progress ring + dashboard',
  },
  {
    slug: 'prospect-engine',
    title: 'Prospect Engine',
    category: 'AI automation',
    status: 'poc',
    featured: true,
    description:
      'An automated pipeline that researches and surfaces new business prospects daily, delivering results to Notion and Slack. Designed to run in the background while working a full-time job \u2014 consistent outreach without manual research time.',
    tools: ['SerpAPI', 'Claude API', 'Notion', 'Slack'],
  },
  {
    slug: 'lead-enrichment-system',
    title: 'Lead Enrichment System',
    category: 'AI automation',
    status: 'poc',
    featured: false,
    description:
      'Takes a basic lead \u2014 a company name \u2014 and automatically enriches it with relevant business details: industry, size, contact info, pain points. Turns a raw lead list into sales-ready intelligence in minutes instead of hours.',
    tools: ['Claude API', 'Make.com'],
  },
  {
    slug: 'ai-proposal-generator',
    title: 'AI Proposal Generator',
    category: 'AI automation',
    status: 'poc',
    featured: false,
    description:
      'Automatically generates customized business proposals based on prospect information and service offerings. Takes prospect context \u2014 industry, pain points, company details \u2014 and produces a structured, tailored proposal draft. Reduces proposal drafting from hours to minutes while maintaining a customized feel.',
    tools: ['Claude API', 'Make.com'],
  },
  {
    slug: 'gmail-faq-responder',
    title: 'Gmail FAQ Responder',
    category: 'AI automation',
    status: 'shipped',
    featured: false,
    description:
      'An AI-powered email automation built for a real client \u2014 a Portuguese printing company \u2014 that automatically drafts responses to frequently asked customer questions. Monitors incoming Gmail messages, identifies FAQ-type questions using Claude API, and drafts contextually appropriate responses. Responses are drafted, not auto-sent, so the client retains final approval.',
    tools: ['Gmail API', 'Claude API', 'Make.com'],
  },
  {
    slug: 'google-review-response',
    title: 'Google Review Response',
    category: 'AI automation',
    status: 'poc',
    featured: false,
    description:
      'Automatically generates professional, on-brand responses to Google Reviews. Monitors new reviews, classifies by sentiment, and uses Claude API to generate a response matching the business\u2019s tone. Positive reviews get a genuine thank-you; negative reviews get a professional, empathetic response. All drafted for owner approval before posting.',
    tools: ['Google Business API', 'Claude API', 'Make.com'],
  },
  {
    slug: 'akashi-labs-ai-architecture',
    title: 'Akashi Labs AI Architecture',
    category: 'Systems design',
    status: 'shelved',
    featured: false,
    description:
      'A 6-agent AI system architecture designed as the operational backbone for Akashi Labs. Each agent handles a distinct function \u2014 from prospecting to delivery \u2014 using interconnected AI agents rather than manual effort. Served as the strategic blueprint for Akashi Labs\u2019 service delivery model.',
    tools: ['Claude API', 'Make.com', 'tldraw'],
  },
  {
    slug: 'warner-music-japan',
    title: 'Warner Music Japan',
    category: 'Creative',
    status: 'creative',
    featured: false,
    description:
      'A commercial co-directed for Warner Music Japan that aired on billboards in Tokyo. Part of a filmmaking and photography background developed while growing up in Tokyo \u2014 a major visibility milestone for early creative career.',
    tools: ['Video production', 'Direction', 'Post-production'],
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}

export function getNextProject(currentSlug) {
  const index = projects.findIndex((p) => p.slug === currentSlug)
  return projects[(index + 1) % projects.length]
}

export function filterProjects(filter) {
  if (filter === 'all') return projects
  if (filter === 'shipped')
    return projects.filter((p) => p.status === 'shipped')
  if (filter === 'poc') return projects.filter((p) => p.status === 'poc')
  if (filter === 'creative')
    return projects.filter((p) => p.status === 'creative')
  if (filter === 'shelved')
    return projects.filter((p) => p.status === 'shelved')
  return projects
}
