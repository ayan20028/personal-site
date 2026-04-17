export const STATUS_CONFIG = {
  shipped: { label: 'Shipped', color: '#3D6B3D' },
  internal: { label: 'Internal Build', color: '#5C5A57' },
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
    role: 'Senior Consultant \u2014 designer & builder',
    sections: [
      {
        heading: 'Problem',
        body: 'The team managed staffing intake for a division of roughly 2,000 employees through Excel forms passed around by email. Every request meant back-and-forth threads, manual data transfers, and frequent errors. Managers had zero visibility into their own submissions, so they\u2019d ping the team constantly asking for status updates.\n\nThe team had become the bottleneck in its own process. And nobody had asked for a better system \u2014 everyone had accepted the friction as just how things work.',
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
    imageCaption: 'System architecture \u2014 intake forms, approval workflows, and routing logic',
  },
  {
    slug: 'lead-enrichment-system',
    title: 'Lead Enrichment System',
    category: 'AI automation',
    status: 'internal',
    featured: false,
    description:
      'An automation that turns a raw lead list into a researched, personalized prospect file \u2014 in minutes instead of days. Built for Akashi Labs as an internal demo targeting branding agencies.',
    tools: ['Make.com', 'Google Sheets', 'Perplexity AI', 'Anthropic Claude', 'Apify', 'Apollo.io'],
    subtitle:
      'An automation that researches 500 leads the way a human would \u2014 just faster.',
    timeline: '2025',
    role: 'Built solo \u2014 Akashi Labs',
    sections: [
      {
        heading: 'Problem',
        body: 'Sales teams sit on lead lists with hundreds of qualified prospects and almost no time to research any of them properly. The trade-off is predictable: either you send generic outreach that gets ignored, or you spend thirty minutes per lead digging through websites and LinkedIn to write something that actually sounds like a human wrote it.\n\nAt 500 leads, that\u2019s 250 hours. Nobody does that. So most cold email ends up generic, and most generic cold email gets deleted.',
      },
      {
        heading: 'Approach',
        body: 'Instead of asking one tool to do everything, I chained three tools together \u2014 each doing what it\u2019s best at. A spreadsheet holds the data. Perplexity does the web research. Claude writes the personalization. Make orchestrates the flow.\n\nThe lead list for this demo was scraped from Apollo.io using an Apify scraper, filtered for keywords like branding, design, CEO, and founder. Each row has a name, company, email, and website \u2014 the raw material.',
      },
      {
        type: 'pipeline',
        heading: 'Pipeline',
        nodes: [
          { name: 'Google Sheets', action: 'Read row' },
          { name: 'Perplexity', action: 'Research prospect' },
          { name: 'Claude', action: 'Write icebreaker' },
          { name: 'Google Sheets', action: 'Write back' },
        ],
      },
      {
        type: 'steps',
        heading: 'How It Works',
        steps: [
          { title: 'Read the row', description: 'Make pulls the next unenriched row from Google Sheets on a schedule.' },
          { title: 'Filter out the broken ones', description: 'If there\u2019s no email or no website, skip the row. Email is needed to send; website is needed for Perplexity to actually have something to research.' },
          { title: 'Research with Perplexity', description: 'The company name and website go to Perplexity with a prompt like: \u201cWhat clients has this company worked with?\u201d Perplexity returns a summary \u2014 often surfacing things buried deep in the site that a human scanning a homepage would miss.' },
          { title: 'Generate the icebreaker with Claude', description: 'The research gets passed to Claude, which turns it into a single personalized opening line \u2014 something like \u201cLoved your team\u2019s work on the Megan Thee Stallion Mamushi music video.\u201d' },
          { title: 'Write back to Sheets', description: 'The icebreaker lands in a dedicated column, ready for the email campaign tool to pick up.' },
        ],
      },
      {
        heading: 'Design Choice',
        body: 'Most LLMs can do web search now. But at the time I built this, Perplexity consistently returned better sources \u2014 its \u201canswer engine\u201d approach surfaced more relevant primary material than the alternatives. Claude, on the other hand, is a stronger writer: given good research, it produces cleaner, more natural-sounding text than models optimized for retrieval.\n\nChain specialists. Don\u2019t ask one tool to do the whole job badly when two tools can each do half of it well.',
      },
      {
        type: 'outcomes',
        heading: 'Outcome',
        metrics: [
          { value: '~30s', label: 'Per lead, end to end' },
          { value: '500+', label: 'Prospects enriched, unattended' },
          { value: '3', label: 'Tools chained together' },
          { value: '0', label: 'Hours of manual research after setup' },
        ],
      },
    ],
    reflection: 'The icebreakers worked, but a lot of them still sounded like AI wrote them \u2014 the giveaway phrases, the over-smooth transitions, the mild overuse of \u201cI noticed\u201d and \u201cI saw.\u201d Enrichment at scale is solved; voice at scale isn\u2019t. A next version would invest more in the prompt craft: feeding Claude examples of actual writing, constraining sentence structure, and adding a quality gate that flags generic-sounding output for manual review before anything gets sent.\n\nThe lesson generalizes: any bulk research task \u2014 competitive intelligence, investor prep, account research for a meeting \u2014 works the same way. A lead list is just one shape of the problem.',
    image: null,
    imageCaption: null,
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
