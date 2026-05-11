// Centralized content for the portfolio.
// Edit this file to update copy, experience, projects, skills, etc.
// Single source of truth — components read from here.

export const personal = {
  name: "Fares Hamdan",
  firstName: "Fares",
  lastName: "Hamdan",
  initials: "FH",
  role: "Computer Science Engineer",
  subRole: "QA-Minded · Software-Driven · Systems Thinker",
  location: "Ramallah, Palestine",
  locale: "GMT+3 · Open to relocation & remote",
  email: "fareshamdan00@gmail.com",
  emailSecondary: "fares@elbastony.com",
  phone: "+970 56 658 8132",
  phoneRaw: "+970566588132",
  whatsapp: "https://wa.me/970566588132",
  linkedin: "https://www.linkedin.com/in/fares-hamdan/",
  github: "https://github.com/FaresHamdan123",
  cv: "/fares-hamdan-cv.pdf",
  photo: "/images/Fares/profile.jpg",
} as const;

export const hero = {
  eyebrow: "Computer Science · Birzeit University · 2022",
  headline: ["I engineer", "clarity", "from complexity."],
  supportingLine:
    "Computer Science graduate with hands-on experience across technical support, QA, and full-stack development — focused on solving real problems with clear systems thinking.",
  intro:
    "I treat every system — from a banking workflow to a hospital application to a brand website — as a problem worth solving cleanly. Calm under pressure, careful with details, and serious about building a long-term engineering career.",
  meta: [
    { label: "Currently", value: "Technical Support Engineer · Arab Islamic Bank" },
    { label: "Foundation", value: "B.Sc. Computer Science · Birzeit University" },
    { label: "Open to", value: "Software · QA · IT · Junior Developer roles" },
  ],
} as const;

export const about = {
  kicker: "About",
  title: "A Computer Science mind shaped by real systems, users, and production pressure.",
  paragraphs: [
    "I am a Computer Science graduate from Birzeit University, currently working as a Technical Support Engineer at Arab Islamic Bank. On paper I solve tickets — in practice I read systems, trace failures, and make complex environments behave predictably for the people who depend on them.",
    "Before banking, I shipped manual QA work at The National Bank and built a full-stack hospital application during my internship at MicroMedical. More recently I built and iterated a public-facing brand website with a modern Next.js + Vercel workflow. That mix — software, testing, support, and real product delivery — shaped how I think: write code that respects edge cases, test like the user will, and document like the next engineer will read it.",
    "I'm not chasing any job. I'm building toward stronger software, QA and engineering roles internationally — where curiosity, discipline and a calm head under pressure actually matter.",
  ],
  stats: [
    { value: "4+", label: "Years of professional experience" },
    { value: "3", label: "Domains: Support, QA, Full-Stack" },
    { value: "1", label: "Computer Science degree, fully earned" },
    { value: "∞", label: "Tickets calmly resolved" },
  ],
} as const;

export const pillars = [
  {
    id: "01",
    title: "Computer Science Foundation",
    description:
      "Four years of structured CS at Birzeit — algorithms, data structures, software engineering, databases and systems thinking. Not just code I copied — concepts I understand.",
    points: ["Algorithms & Data Structures", "Software Engineering", "Databases & Systems", "Object-Oriented Design"],
  },
  {
    id: "02",
    title: "QA & Quality Mindset",
    description:
      "Hands-on manual QA at The National Bank: writing structured test cases, hunting edge-case bugs in JIRA, and treating quality as a design decision, not an afterthought.",
    points: ["Manual Test Case Design", "Bug Tracking · JIRA", "Regression & Edge Cases", "Clear Reporting"],
  },
  {
    id: "03",
    title: "Real-World Engineering",
    description:
      "Production support inside a bank teaches you what no university course can: ownership, escalation, communication, and the discipline to fix things without breaking trust.",
    points: ["Workflow System Ownership", "Cross-Team Communication", "Incident Triage", "Root-Cause Thinking"],
  },
] as const;

export const experience = [
  {
    company: "Arab Islamic Bank",
    role: "Technical Support Engineer",
    period: "Oct 2023 — Present",
    location: "Ramallah, Palestine",
    summary:
      "Own the bank's internal Workflow system end-to-end. Monitor, triage and resolve technical issues across the organization — software, hardware, and everything between.",
    highlights: [
      "Responsible for the bank's Workflow system — monitoring, resolution and stability.",
      "First responder for technical issues across all employees and departments.",
      "Diagnose and resolve hardware and external software problems with measured urgency.",
      "Perform hardware maintenance and component-level repairs to keep devices in service.",
    ],
    stack: ["Workflow System", "Active Directory", "Windows", "Banking Ops", "Ticketing"],
    kind: "Current Role",
  },
  {
    company: "The National Bank",
    role: "QA Manual Engineer",
    period: "Apr 2022 — Oct 2022",
    location: "Ramallah, Palestine",
    summary:
      "Embedded with a banking product team to harden quality before release. Built test cases, tracked defects in JIRA, and validated that what shipped actually worked.",
    highlights: [
      "Authored structured manual test cases across critical banking flows.",
      "Logged, tracked and verified bugs in JIRA with reproducible steps.",
      "Compiled clear defect reports to keep engineering, QA and product aligned.",
      "Pushed for quality as a contract with the user — not a final-stage checkbox.",
    ],
    stack: ["Manual QA", "Test Case Design", "JIRA", "Bug Reporting", "Regression"],
    kind: "QA",
  },
  {
    company: "MicroMedical",
    role: "Full Stack Developer Intern",
    period: "Sep 2020 — Dec 2020",
    location: "Internship",
    summary:
      "Built a full-stack hospital application end-to-end. Learned how a real backend is structured — MVC, dependency injection, ORM — and how to ship a working product, not just a demo.",
    highlights: [
      "Built a full-stack hospital application in .NET, Angular and MySQL.",
      "Internalized backend fundamentals: MVC, Dependency Injection, ORM patterns.",
      "Connected a typed Angular front-end to a .NET API and a relational database.",
      "Practiced shipping discipline: scope, structure, and clean handover.",
    ],
    stack: [".NET", "Angular", "MySQL", "C#", "TypeScript", "MVC"],
    kind: "Software",
  },
] as const;

export const education = [
  {
    institution: "Birzeit University",
    degree: "B.Sc. Computer Science",
    period: "Aug 2017 — Mar 2022",
    location: "Ramallah, Palestine",
    note: "Full Computer Science curriculum — CS theory, software engineering, databases, systems, and applied projects.",
  },
] as const;

export const skills = [
  {
    group: "Practical experience",
    note: "Used hands-on in production work — support, QA, and day-to-day operations.",
    items: [
      "Workflow Systems",
      "Active Directory",
      "Windows Administration",
      "Hardware Troubleshooting",
      "Component-Level Repair",
      "Incident Triage",
      "Manual Testing",
      "Test Case Design",
      "JIRA",
      "Bug Tracking",
      "Regression Testing",
      "Git",
      "GitHub",
      "Office 365",
    ],
  },
  {
    group: "Project experience",
    note: "Built real applications and a public-facing website with these — including an AI-assisted Next.js workflow.",
    items: [
      ".NET",
      "C#",
      "Angular",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel",
      "MySQL",
      "SQL",
      "MVC",
      "ORM Patterns",
      "Relational Modeling",
      "REST APIs",
      "HTML",
      "CSS",
      "Visual Studio",
      "VS Code",
      "Postman",
    ],
  },
  {
    group: "Familiar with",
    note: "Studied or used lightly — comfortable picking these up further on the job.",
    items: [
      "Java",
      "Python",
      "Node.js",
      "Express",
      "SQL Server",
    ],
  },
  {
    group: "Working strengths",
    note: "How I show up day to day — independent of any stack.",
    items: [
      "Calm under pressure",
      "Cross-team communication",
      "Documentation",
      "Ownership",
      "Fast learner",
      "Leadership",
    ],
  },
] as const;

export const philosophy = {
  kicker: "How I work",
  quote:
    "Most production problems aren't mysterious — they're under-described. My job is to listen carefully, isolate the system, and turn confusion into a clean reproducible step.",
  principles: [
    {
      title: "Read the system first",
      body: "Before touching anything, I understand what it does, who depends on it, and where it usually breaks.",
    },
    {
      title: "Reproduce, then fix",
      body: "A bug I can't reproduce isn't a bug I've solved. I rebuild the path to the failure before claiming a fix.",
    },
    {
      title: "Document for the next engineer",
      body: "If a fix lives only in my head, it didn't really happen. Notes, tickets and clean handover are part of the work.",
    },
    {
      title: "Calm beats clever",
      body: "Banking support taught me that staying calm is a technical skill. Pressure breaks systems and people — discipline holds.",
    },
  ],
} as const;

export const projects = [
  {
    name: "MicroMedical Hospital System",
    tagline: "Full-stack hospital application — .NET + Angular + MySQL",
    description:
      "A complete hospital management application built during my internship at MicroMedical. Designed the data layer, wired up a .NET backend with MVC and dependency injection, and consumed it from a typed Angular front-end. My first real lesson in shipping software end-to-end.",
    role: "Full Stack Developer Intern",
    year: "2020",
    stack: [".NET", "Angular", "MySQL", "C#", "MVC", "DI", "ORM"],
    highlights: [
      "Modeled hospital domain entities into a relational schema",
      "Implemented MVC controllers and services on the .NET side",
      "Built typed Angular components consuming the API",
      "Internalized DI and ORM patterns through real implementation",
    ],
    kind: "Software",
    accent: "amber",
  },
  {
    name: "Workflow System Ownership",
    tagline: "Production ownership inside a bank — Arab Islamic Bank",
    description:
      "Day-to-day responsibility for the Workflow system that the bank's employees rely on. Monitoring health, diagnosing failures, coordinating with vendors and internal teams, and keeping a critical internal product stable.",
    role: "Technical Support Engineer",
    year: "2023 — Present",
    stack: ["Workflow System", "Triage", "Vendor Coordination", "Banking Ops"],
    highlights: [
      "First-line responder for issues affecting all bank employees",
      "Coordinate fixes across hardware, software and vendor escalations",
      "Track recurring failure patterns to push for permanent fixes",
      "Document procedures so the system doesn't depend on one person",
    ],
    kind: "Operations",
    accent: "olive",
  },
  {
    name: "QA Test Suites — National Bank",
    tagline: "Manual QA across banking flows",
    description:
      "Designed and executed structured manual test cases for banking software at The National Bank. Logged defects in JIRA with clear reproduction steps and worked alongside engineering to drive resolution before release.",
    role: "QA Manual Engineer",
    year: "2022",
    stack: ["Manual QA", "JIRA", "Regression", "Test Design", "Reporting"],
    highlights: [
      "Authored manual test cases across critical user journeys",
      "Logged and tracked defects with reproducible steps in JIRA",
      "Wrote concise defect reports for stakeholders",
      "Acted as a quality gate before features reached production",
    ],
    kind: "Quality",
    accent: "amber",
  },
  {
    name: "EL_BASTONY — Brand Website",
    tagline:
      "Official website built with Next.js, Tailwind, Vercel & an AI-assisted dev workflow",
    description:
      "Built and iterated the official EL_BASTONY website end-to-end — a real public-facing brand platform with structured content, launch flow, and clear contact and partnership paths. Used a modern AI-assisted development workflow to move fast on implementation while keeping product direction, brand clarity and execution fully under my ownership.",
    role: "Builder · Product Direction",
    year: "2025 — Present",
    stack: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Vercel",
      "Components",
      "Content Structure",
    ],
    highlights: [
      "Shipped and iterated a real public-facing brand website",
      "Designed structured components, content and a launch/countdown flow",
      "Used AI-assisted development to accelerate execution while reviewing and guiding product direction",
      "Focused on brand clarity, contact/partnership paths and professional presentation",
    ],
    kind: "Web Delivery",
    accent: "amber",
  },
] as const;

export const achievements = [
  {
    year: "2020",
    title: "1st Place — IQ Test Competition",
    org: "IEEE · Birzeit University Student Branch · Faculty of Engineering & Technology",
    body: "First winner of the IQ Test contest in the Faculty of Engineering and Technology — a CS-style problem-solving competition at university level.",
  },
  {
    year: "2019",
    title: "Chairman — Computer Science Club",
    org: "Birzeit University",
    body: "Led the Computer Science Club at Birzeit — organizing technical events, talks and student initiatives across the CS community.",
  },
  {
    year: "2019",
    title: "Ambassador — IEEEXtreme 13.0",
    org: "IEEE · Birzeit University Student Branch",
    body: "Represented Palestine as an ambassador for IEEEXtreme 13.0, a 24-hour worldwide competitive programming event.",
  },
  {
    year: "2019",
    title: "Activities Coordinator",
    org: "IEEE · Birzeit University Student Branch",
    body: "Coordinated student activities and events for the IEEE branch — building early experience in leadership, planning and execution.",
  },
] as const;

export const careerDirection = {
  kicker: "Where I'm going",
  title: "Building toward stronger software, QA and engineering roles — internationally.",
  body: "I'm not optimizing for any job. I'm optimizing for the right next step: a team where Computer Science fundamentals matter, where quality is taken seriously, and where I can grow from solid junior work into deeper engineering responsibility.",
  looking: [
    "Junior Software / Full-Stack Developer roles",
    "QA Engineer · Manual or hybrid (Manual + Automation track)",
    "Technical Support · Application Support · IT Engineering roles",
    "Remote-friendly and relocation-friendly international teams",
  ],
  lessAligned: [
    "Roles with limited learning, ownership, or technical growth",
    "Positions disconnected from real engineering, QA or product work",
    "Environments where quality and clear systems thinking aren't valued",
  ],
} as const;

export const contact = {
  kicker: "Let's talk",
  title: "If your team is building something serious — I'd like to hear about it.",
  body: "I read every message. Whether it's a junior software role, a QA position, an IT engineering opening, or just a conversation about how your team works — reach out on whichever channel is easiest.",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
  { id: "contact", label: "Contact" },
] as const;
