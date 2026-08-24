export const SITE = {
  name: "Brian Keith",
  mark: "RBK",
  domain: "realbriankeith.com",
  email: "brian@realbriankeith.com",
  url: "https://realbriankeith.com",
  standFor: "I stand for manufacturing freedom for American small business owners.",
  headline: "Manufacturing Freedom for American Small Business Owners",
  description:
    "Builder of Acorn. Four ways I manufacture freedom for American small business owners.",
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
    handle: "@briankeithai",
    href: "https://www.youtube.com/@briankeithai",
  },
] as const;

export const COMPANY_LINKS = [
  { label: "Acorn", href: "https://buyacorn.com" },
  { label: "Red Beard Consulting", href: "https://redbeardconsulting.com" },
  { label: "Lenders Online Training", href: "https://lendersonlinetraining.com" },
  { label: "Chang Robotics", href: "https://changrobotics.com" },
] as const;

export const NAV = [
  { label: "About", hash: "about" },
  { label: "Manifesto", hash: "manifesto" },
  { label: "Values", hash: "values" },
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
    impact:
      "Sovereign AI on the customer’s own server. Humans orient. Agents execute. Trust is earned.",
    href: "https://buyacorn.com",
  },
  {
    name: "Red Beard Consulting",
    role: "Short human seat",
    impact: "When Acorn is not enough, I sit in for a short stretch and install the system. Then I leave.",
    href: "https://redbeardconsulting.com",
  },
  {
    name: "Lenders Online Training",
    role: "The credit layer",
    impact:
      "I run the school that trains community banks, credit unions, and farm credit to underwrite, so American small businesses actually get capital.",
    href: "https://lendersonlinetraining.com",
  },
  {
    name: "Chang Robotics",
    role: "CMO",
    impact: "Factory 5.0. Re-industrialize the US, raise workers up.",
    href: "https://changrobotics.com",
    related: { label: "ReForge Podcast with Matthew Chang", href: "https://www.thereforgepodcast.com" },
  },
];
