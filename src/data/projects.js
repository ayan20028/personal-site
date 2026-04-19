export const STATUS_CONFIG = {
  shipped: { label: 'Shipped', color: '#3D6B3D' },
  internal: { label: 'Internal Build', color: '#5C5A57' },
  live: { label: 'Live', color: '#4A6FA5' },
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
  {
    slug: 'gmail-faq-responder',
    title: 'AI Gmail FAQ Responder',
    category: 'AI automation',
    status: 'shipped',
    featured: false,
    description:
      'A Gmail automation built for a Portuguese printing company that drafts replies to repetitive customer emails — but never sends without the owner\'s approval. The interesting work was designing a system a small-business owner would actually trust to touch their inbox.',
    tools: ['Make.com', 'Gmail API', 'Google Sheets', 'OpenAI GPT', 'HTML formatting'],
    subtitle:
      'A Gmail automation that drafts replies to repetitive emails — but never sends without you.',
    timeline: '2025',
    role: 'Solo build — Akashi Labs',
    sections: [
      {
        heading: 'Problem',
        body: 'The client runs a small printing company. Most of the inbound email is some variation of the same handful of questions — pricing, turnaround times, what services they offer, whether they can handle a specific job. Each one needs a human answer, but not a creative one. The information already exists in the business\'s head; it just isn\'t in the inbox.\n\nThe technical brief was obvious: draft replies to repetitive emails. The harder brief, unstated but more important, was this: a small-business owner will not deploy anything that could send something embarrassing under their name. The real design problem wasn\'t the automation. It was trust.',
      },
      {
        heading: 'Approach',
        body: 'Before writing a single Make module, I worked backwards from the owner\'s daily experience. Where would they encounter this system? What would they see? What could go wrong, and how would they recover? The answers to those questions determined the architecture, not the other way around.\n\nThe core commitment: the automation never sends anything on its own. Every response lands in the Gmail drafts folder. The owner opens it, skims it, tweaks a line, and hits send — or rewrites it entirely if it missed. The automation handles the grunt work; the human keeps the voice.',
      },
      {
        type: 'pipeline',
        heading: 'Pipeline',
        nodes: [
          { name: 'Gmail', action: 'Watch labeled' },
          { name: 'FAQ Sheet', action: 'Pull answers' },
          { name: 'GPT', action: 'Classify relevant FAQs' },
          { name: 'Filter', action: 'Only matches' },
          { name: 'GPT', action: 'Write reply' },
          { name: 'Gmail', action: 'Save as draft' },
        ],
      },
      {
        type: 'decisions',
        heading: 'Design Decisions',
        decisions: [
          {
            label: 'Control',
            question: '"What if the AI replies to something it shouldn\'t?"',
            answer: 'A manual label as the trigger. The automation only fires on emails the owner has personally tagged AUTO RESPOND, and only if the email is still unread. The system is opt-in at the per-email level. Nothing happens to an email the owner hasn\'t already looked at and approved for drafting.',
          },
          {
            label: 'Autonomy',
            question: '"What happens when our prices change?"',
            answer: 'A Google Sheet as the FAQ database. The knowledge base lives in a tool the client already uses. Add a row, update a price, delete an outdated answer — no dev involvement, no automation downtime, no dependency on me. The person who knows the business stays in charge of what the automation says.',
          },
          {
            label: 'Quality',
            question: '"What if a customer asks three questions in one email?"',
            answer: 'Two LLM calls instead of one. The first identifies which FAQs in the database are actually relevant (handling the multi-question case). Only those matches are passed to a second call that writes the reply. A focused prompt produces a focused answer — and the client doesn\'t have to hope the model pays attention to the right part of a long, messy email.',
          },
          {
            label: 'Voice',
            question: '"How do I make sure it still sounds like me?"',
            answer: 'Drafts only. The final step creates a Gmail draft — it does not send. Every reply is reviewed in the inbox the owner already opens every morning. They can tweak a word, restructure a paragraph, or trash it entirely. The automation moves fast; the human still signs the letter.',
          },
        ],
      },
      {
        heading: 'Outcome',
        body: 'The system went live in the client\'s Gmail. Labeling an email AUTO RESPOND produces a formatted, on-brand draft reply within seconds, drawing only from the FAQs the client has curated. The client can update the knowledge base without ever opening the automation itself. For the categories of email it was designed for — pricing, turnaround, services — it removed the part of the work that felt like typing the same sentences over and over.',
        callout: 'The question that made this project interesting wasn\'t "can AI write the email." It was "where does the human belong in the loop, and how do you hand them control at every moment they\'d want it?"',
      },
    ],
    reflection: 'Automation that works technically but ignores the human using it gets turned off within a week. The hard part of building these systems isn\'t the wiring — it\'s deciding which decisions the AI gets to make and which ones stay with the person whose name is on the business.\n\nThis project taught me to start every automation build from the same question: what\'s the smallest, safest way for this person to test whether the system works — without risking the relationships that matter to them? The answer shapes everything downstream: the trigger, the data model, the failure modes, the final step. Design the human\'s experience first. The pipeline is just plumbing.',
    image: null,
    imageCaption: null,
  },
  {
    slug: 'notion-database-cinematographer',
    title: 'Notion Database for a Cinematographer',
    category: 'Systems design',
    status: 'shipped',
    featured: false,
    description:
      'A relational Notion system for a working Director of Photography — built to replace the spreadsheet tangle that made tax season painful, and to answer the questions a creative career actually asks of its own data.',
    tools: ['Miro', 'Claude', 'Notion'],
    subtitle:
      'A relational Notion system that replaced spreadsheets with structure — so a freelance DP can answer his own business questions without manual cross-referencing.',
    timeline: '2026',
    role: 'Solo build, collaborative refinement',
    sections: [
      {
        heading: 'Problem',
        body: 'The subject is Yuuki Shimizu, a freelance Cinematographer / Director of Photography based in NYC — a longtime creative collaborator of mine. Every shoot is a separate engagement, with a different client, a different rate, different gear in play, and a different tax form at the end of the year.\n\nHe\'d been tracking it all across three spreadsheets: a career sheet mixing expenses and tax categories, a collaboration log color-coded by month, yearly work sheets with pay calculations. Different structures, overlapping data, no relationships between them. Tax season turned into an archaeological dig — cross-referencing dates across sheets, reconciling rows that described the same job in different formats, trying to reconstruct which gear went out in February.',
      },
      {
        heading: 'Approach',
        body: 'A film career isn\'t actually a flat list. You have a list of clients you worked with (some repeating). A list of jobs you completed and have scheduled. Your equipment inventory. A gear rental — one piece of equipment going out on one shoot — is a fourth. The spreadsheet was forcing four distinct entities into one plane.\n\nSo I built it as four connected tables instead.\n\nPhase 1 — Model on paper. Before opening Notion, I sketched the relational model in Miro, using its AI feature to help generate the initial entity-relationship diagram.\n\nPhase 2 — Build with Claude. Once the model was locked, I handed the diagram to Claude and worked through the Notion build collaboratively — defining each database\'s properties, setting up the relations between them, and writing the rollups and formulas that derive values like Payoff % and Net Pay. Using AI for the build phase compressed what would have been a week of clicking around Notion into a few minutes texting on my phone.\n\nPhase 3 — Iterate with the user. I handed over a working copy for him to duplicate into his own workspace, then joined as a collaborator. From there, changes came from real use: columns added because he actually needed them, views renamed because the original labels didn\'t match how he thought, summaries restructured because the first version showed the wrong totals. The initial build was 80% of the way there; the last 20% only came from putting it in front of him.\n\nThe principle underneath those three phases: design the system on paper, accelerate the build with AI, and let the final shape emerge from how someone actually uses it.',
      },
      {
        type: 'steps',
        heading: 'The Four Databases',
        steps: [
          {
            title: 'Jobs & Rentals',
            description: 'The main table and the only one that requires regular input. Every shoot or gear rental is a row. Properties include shoot dates, location, job type, project type, day rate, tax form type, status, and linked relations to the client and any equipment used. This is where ~90% of the data entry happens; everything else is derived.',
          },
          {
            title: 'Clients',
            description: 'Production companies and individual creatives he works with. Each client has contact info and an automatic rollup of every job he\'s done with them. Opening a client record shows his full history with that person at a glance.',
          },
          {
            title: 'Equipment',
            description: 'His gear inventory: cameras, lenses, monitors, tripods, support. Each record tracks purchase date, purchase price, condition, serial number, and — critically — a rollup of every rental it\'s been attached to. From that rollup, a formula calculates Payoff % (total rental revenue \u00F7 purchase price) and Times Used.',
          },
          {
            title: 'Equipment Rentals',
            description: 'The join table. Each row represents one piece of gear going out on one job, with a rental rate and date range. This is the table that connects gear to work, and lets the system answer questions like "how much has the Alexa Mini earned back?" without any manual math.',
          },
        ],
      },
      {
        type: 'decisions',
        heading: 'What the System Answers',
        decisions: [
          {
            label: 'Income',
            question: '"How much did I make last month?"',
            answer: 'A saved view on the Jobs table, filtered by shoot date, summed.',
            prefix: 'View',
          },
          {
            label: 'Forecast',
            question: '"How much am I projected to make this quarter?"',
            answer: 'Same table, filtered to jobs with status = Scheduled or In Progress.',
            prefix: 'View',
          },
          {
            label: 'Receivables',
            question: '"How much is pending payment?"',
            answer: 'Jobs where work is complete but status \u2260 Paid.',
            prefix: 'View',
          },
          {
            label: 'ROI',
            question: '"Has this camera paid for itself?"',
            answer: 'A formula on the Equipment table: total rental revenue \u00F7 purchase price. Crosses 100% when the gear has earned back what it cost.',
            prefix: 'Formula',
          },
          {
            label: 'Tax prep',
            question: '"What\'s my taxable income this year, by form type?"',
            answer: 'Grouped by Tax Form Type (W-9, 1099, etc.) with a rollup sum.',
            prefix: 'View',
          },
        ],
      },
      {
        type: 'decisions',
        heading: 'Design Decisions',
        decisions: [
          {
            label: 'Entry surface',
            title: 'Jobs as the primary data-entry surface',
            body: 'Most freelancers think in terms of jobs first — that\'s the unit of their week. I made Jobs the one table he has to fill out in detail; everything else (clients, equipment usage, earnings totals) gets derived or surfaced through relations. Minimum input, maximum output.',
            prefix: false,
          },
          {
            label: 'Gear economics',
            title: 'Purchase price + rental revenue on every gear record',
            body: 'Most gear spreadsheets track either what things cost or what they earned, not both at the same item level. Combining them creates a single, honest metric — Payoff % — that tells him immediately which investments have returned their cost and which haven\'t. This changes future purchasing decisions in a way a generic expense tracker never would.',
            prefix: false,
          },
          {
            label: 'Tax readiness',
            title: 'Tax form type as a first-class property on every job',
            body: 'Freelancers deal with a mess of W-9, 1099, and foreign-sourced income. Tagging the form type on each job at creation time (rather than reconstructing it in January) turns tax prep from a scavenger hunt into a filter.',
            prefix: false,
          },
          {
            label: 'Views',
            title: 'Multiple views over one source of truth',
            body: 'Default view, This Year, Month-in-Review chart, Calendar. All four read from the same underlying data — no duplicate entry, no reconciliation required.',
            prefix: false,
          },
        ],
      },
    ],
    reflection: 'Most of what people call "getting organized" is really a modeling problem wearing an organizational disguise. Before you pick a tool or design a layout, you have to ask what the actual things are and how they relate. A freelance career isn\'t one flat list of entries. It\'s clients and jobs and gear and rentals, each with its own life, each connected to the others in specific ways.\n\nOnce you see that, the tool choice gets easier. Notion, Airtable, a Postgres database, a custom app — they\'re all just surfaces over the same underlying model. Pick the one that matches the person using it, and move on.\n\nThe method generalizes: model on paper, build with AI, iterate with the user. It works for a DP\'s back office. It works for an operations system at a small RIA. It works for any situation where the right answer isn\'t a new tool — it\'s a clearer picture of the work.\n\nThe principle: the shape of your system should match the shape of your life. Most tools fight that; relational models let you fit it.',
    image: '/images/notion-er-diagram.svg',
    imageCaption: 'Relational model — five databases and their relationships',
  },
]

export function getProject(slug) {
  return projects.find((p) => p.slug === slug)
}
