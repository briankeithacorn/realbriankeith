export const SITE = {
  name: "Brian Keith",
  mark: "RBK",
  domain: "realbriankeith.com",
  email: "brian@realbriankeith.com",
  url: "https://realbriankeith.com",
  standFor: "I stand for manufacturing freedom for American small business owners.",
  headline: "Manufacturing Freedom for American Small Business Owners",
  description:
    "Fractional COO. Builder of Acorn. Systems that give founders their time — and their families — back.",
} as const;

export const SOCIALS = [
  {
    label: "X",
    handle: "@briankeith",
    href: "https://x.com/briankeith",
  },
  {
    label: "LinkedIn",
    handle: "linkedin.com/in/briankeithal",
    href: "https://www.linkedin.com/in/briankeithal",
  },
  {
    label: "YouTube",
    handle: "Brian Keith – builder of Acorn",
    href: "https://www.youtube.com/@briankeithai",
  },
] as const;

export const COMPANY_LINKS = [
  { label: "Acorn", href: "https://buyacorn.com" },
  { label: "Red Beard Consulting", href: "https://redbeardconsulting.com" },
  { label: "Lenders Online Training", href: "https://lendersonlinetraining.com" },
] as const;

export const NAV = [
  { label: "About", hash: "about" },
  { label: "Manifesto", hash: "manifesto" },
  { label: "Values", hash: "values" },
  { label: "Work", hash: "work" },
  { label: "Companies", hash: "companies" },
  { label: "Past", hash: "past" },
  { label: "Process", hash: "how-i-work" },
  { label: "Connect", hash: "connected" },
] as const;

export const VALUES = [
  {
    number: "1",
    name: "Truth",
    latin: "Veritas Vincit",
    line: "Tell the truth always.",
  },
  {
    number: "2",
    name: "Kindness",
    latin: "",
    line: "Do it as kindly as you can.",
  },
  {
    number: "3",
    name: "Focus",
    latin: "",
    line: "80/20 everything. Focus only on what actually wins.",
  },
  {
    number: "4",
    name: "Speed",
    latin: "",
    line: "Apply speed only after the focus is right.",
  },
  {
    number: "5",
    name: "Victory",
    latin: "",
    line: "The first four, done consistently, produce victory.",
  },
] as const;

export const PROCESS = [
  {
    number: "01",
    name: "Define winning",
    line: "Winning must include more time with family. If it does not, it is incomplete.",
  },
  {
    number: "02",
    name: "Identify the biggest constraint",
    line: "Almost always cash or a critical operational bottleneck.",
  },
  {
    number: "03",
    name: "80/20 the next three months",
    line: "Rate projects by impact, difficulty, likelihood, complexity.",
  },
  {
    number: "04",
    name: "Install systems & subsidiarity",
    line: "Move decisions off the founder’s plate. Common early moves: email → Slack, short meetings with agendas, calendar protection for zone-of-genius hours.",
  },
  {
    number: "05",
    name: "Create white space",
    line: "Protect best hours. Reduce weekend work. Build in actual joy.",
  },
  {
    number: "06",
    name: "Make yourself redundant",
    line: "Train the internal person or install the system. I am too expensive to stay solving the same issue.",
  },
  {
    number: "07",
    name: "Control vs. Influence",
    line: "Stop treating things outside your control as if you can control them. Accept objective hazards once the mountain is chosen.",
  },
] as const;

export type CompanyCard = {
  name: string;
  role: string;
  impact: string;
  href?: string;
  related?: { label: string; href: string };
};

export const OWNED: CompanyCard[] = [
  {
    name: "Acorn",
    role: "Founder & architect",
    impact: "Sovereign AI Chief of Staff for seven-figure founders. Humans orient. Agents execute. Trust is earned.",
    href: "https://buyacorn.com",
  },
  {
    name: "Red Beard Consulting",
    role: "Founder / Fractional COO",
    impact: "High-grade fractional COO talent and systems when a company is not yet ready for a full-time executive at my level.",
    href: "https://redbeardconsulting.com",
  },
  {
    name: "Lenders Online Training",
    role: "Operations / leadership",
    impact: "Credit-analysis training that strengthens the community banks, credit unions, and farm-credit lenders who finance American small businesses.",
    href: "https://lendersonlinetraining.com",
  },
];

export const FRACTIONAL: CompanyCard[] = [
  {
    name: "Chang Robotics",
    role: "Chief Marketing Officer",
    impact: "Faith-based Factory 5.0 automation. Re-industrialize the US, raise workers up.",
    href: "https://changrobotics.com",
    related: { label: "ReForge Podcast with Matthew Chang", href: "https://www.thereforgepodcast.com" },
  },
  {
    name: "Aqua Survey Inc.",
    role: "Systems Consultant",
    impact: "Ecotoxicology and on-water survey. I do not do the field science. I build the teams and systems.",
    href: "https://aquasurvey.com",
  },
  {
    name: "Farrow Skincare",
    role: "Current client",
    impact: "Regenerative, lard-based skincare. Founded by Charles Mayfield.",
    href: "https://farrow.shop",
  },
];
