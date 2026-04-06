export const STATUS_CONFIG = {
  shipped: { label: 'Shipped', color: '#3D6B3D' },
}

export const projects = [
  {
    slug: 'workforce-management-portal',
    title: 'Workforce Management Portal',
    category: 'Process design',
    status: 'shipped',
    featured: true,
    description:
      'Replaced email-based staffing intake for an enterprise division at a Fortune 50 bank with a portal housing three purpose-built forms, automated approval workflows, and real-time status tracking. Adopted by 200+ managers and directors.',
    tools: ['SharePoint', 'PowerApps', 'Power Automate', 'Microsoft Teams'],
    subtitle:
      'A staffing intake portal that replaced scattered email workflows with structured forms, automated approvals, and real-time tracking for 200+ managers at a Fortune 50 bank.',
    timeline: '2025',
    role: 'Senior Consultant \u2014 Solo designer & builder',
    sections: [
      {
        heading: 'Problem',
        body: 'The IT&V Planning & Governance team managed staffing intake through Excel forms passed around by email. Every request meant back-and-forth threads, manual data transfers, and frequent errors. Managers had zero visibility into their own submissions, so they\u2019d ping the team constantly asking for status updates.\n\nThe team had become the bottleneck in its own process. And nobody had asked for a better system \u2014 everyone had accepted the friction as just how things work.',
      },
      {
        heading: 'What I Built',
        body: 'Three intake forms, each built for a different request type:\n\nStaffing Intake handles hiring and headcount \u2014 the highest-stakes of the three. I built an automated approval workflow where the Chief of Staff gets a Teams notification with all relevant details and action buttons to approve or reject inline. No digging into the system required.\n\nOffboarding processes departures and tracks contractor end-dates, with automated alerts so the team is never caught off guard by upcoming expirations.\n\nBusiness Strategy handles ad hoc requests with dynamic routing \u2014 depending on which type the requester selects, the system sends it to the right person automatically.',
      },
      {
        heading: 'Design Thinking',
        body: 'Every form uses conditional fields \u2014 users only see what\u2019s relevant to their request, not a giant catch-all form. Fewer fields means fewer errors.\n\nBehind the scenes, Power Automate handles notifications at each step. The team never manually checks for new submissions, and requesters can track their own status in real time.\n\nI learned SharePoint, PowerApps, and Power Automate from scratch while building this. I chose them because they were already approved inside the bank\u2019s enterprise environment \u2014 no new licensing, no IT approvals, no dependency on another team to get started.',
      },
      {
        heading: 'Adoption',
        body: 'Building the tool was half the work. Getting people to use it was the other half.\n\nI presented the system to senior leaders, managers, and their delegates across the division \u2014 people who had been doing things the old way for years. That meant explaining not just how it works, but why the old process was costing them time they didn\u2019t realize they were losing. Change management, not a product demo.',
      },
      {
        heading: 'Result',
        body: 'The portal is now the standard intake process for the division. Over 200 managers and directors use it across the organization.\n\nStatus check-ins to the team dropped significantly. The Chief of Staff\u2019s approval flow went from email chains to a single button press in Teams. And the team recovered hours each week that had been going to manual routing and data entry.',
      },
    ],
    reflection: 'This was the project that taught me the difference between building something that works and building something people actually adopt. The technical build was one challenge. Convincing an entire division to change how they\u2019d been working for years was a different kind of problem entirely.',
    image: '/images/workforce-portal-diagram.png',
    imageCaption: 'System architecture — intake forms, approval workflows, and routing logic',
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
