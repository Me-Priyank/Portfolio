/**
 * Single source of truth for all site content.
 * Edit these values to personalise the portfolio. Nothing else needs to change.
 */

export const profile = {
  name: "Priyank",
  role: "Software & Automation Developer",
  tagline: "I build software and automations that feel effortless.",
  location: "India",
  timezone: "Asia/Kolkata",
  age: 22,
  available: true,
  email: "pvonlyone29@gmail.com",
  resume: "/Priyank_Resume.pdf",
  photo: "/profile-cut2.jpeg",
  // The line that mixes serif + sans in the hero.
  intro:
    "A 22-year-old developer from India building web products and automations for B2B and B2C brands. I sweat the small details that make software feel effortless: the timing of a transition, the weight of a font, the way a product feels in your hands.",
};

export const socials = [
  { label: "GitHub", handle: "@priyank", href: "https://github.com/Me-Priyank" },
  { label: "X / Twitter", handle: "@priyank", href: "https://x.com/priyanktweetss" },
  { label: "LinkedIn", handle: "in/priyank", href: "https://www.linkedin.com/in/priyank-verma-0b88a528b/" },
  { label: "Medium", handle: "@priyank_verma", href: "https://medium.com/@priyank_verma" },
  { label: "Email", handle: profile.email, href: `mailto:${profile.email}` },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "TypeScript", "Tailwind CSS", "GSAP", "Framer Motion"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "Python",
      "Go",
      "Ruby",
      "Rust",
      "REST",
      "WebSockets",
      "JWT",
      "Zod",
    ],
  },
  {
    title: "Data & Infra",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "Docker", "Kubernetes", "Jaeger", "AWS"],
  },
  {
    title: "Craft",
    items: ["Figma", "Motion design", "Design systems", "Accessibility"],
  },
];

// Working principles shown in the bento "How I work" card.
export const principles = [
  { title: "Sweat the details", desc: "The 1% that users feel but can't name." },
  { title: "Ship, then refine", desc: "Momentum beats perfection." },
  { title: "Design & code as one", desc: "No handoff gaps, no compromises." },
  { title: "Make it fast", desc: "Performance is part of the experience." },
];

export type Project = {
  slug: string;
  title: string;
  year: string;
  blurb: string;
  description: string;
  role: string;
  stack: string[];
  image: string;
  href: string;
  featured?: boolean;
  accent: string; // used for hover glow
};

export const projects: Project[] = [
  {
    slug: "rumi",
    title: "Rumi",
    year: "2025",
    blurb: "A support agent that talks, pitches, and books for you.",
    description:
      "An AI customer support automation that holds real conversations, pitches your product, and books meetings on your behalf, so your team never has to. Built to sound human and never miss a lead.",
    role: "Automation · Full-stack",
    stack: ["Next.js", "Node.js", "AI Agents", "Voice"],
    image: "/rumi.png",
    href: "https://rumi.codes",
    featured: true,
    accent: "#7C8CFF",
  },
  {
    slug: "empower-fund",
    title: "Empower Fund",
    year: "2024",
    blurb: "Empowering all genders for an equal future.",
    description:
      "A nonprofit platform built to empower all genders for an equal future, connecting people with causes, funding, and community. Designed to feel welcoming, accessible, and clear.",
    role: "Full-stack · Design",
    stack: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    image: "/empower.png",
    href: "https://empower-fund.vercel.app/",
    featured: true,
    accent: "#48E0A6",
  },
  {
    slug: "studio",
    title: "Table Scan",
    year: "2024",
    blurb: "A cutting-edge QR-based ordering system designed to streamline restaurant operations and enhance customer satisfaction",
    description:
      "a cutting-edge QR-based ordering system designed to streamline restaurant operations and enhance customer satisfaction",
    role: "Frontend · Motion",
    stack: ["React", "GSAP", "Lenis", "Tailwind"],
    image: "/work/rejouice.png",
    href: "https://table-scan.vercel.app/",
    accent: "#45E3C0",
  },
  {
    slug: "resonance",
    title: "Resonance",
    year: "2023",
    blurb: "A streaming UI study focused on micro-interactions.",
    description:
      "A music player interface built to nail the details: an animated now-playing bar, smooth route transitions, and a queue that feels physical. A playground for interaction polish.",
    role: "Frontend",
    stack: ["React", "TypeScript", "Framer Motion"],
    image: "/work/spotify.png",
    href: "#",
    accent: "#FF6F61",
  },
];

export const stats = [
  { value: "3+", label: "Years building" },
  { value: "20+", label: "Projects shipped" },
  { value: "∞", label: "Cups of chai" },
];

export const nav = [
  { label: "Home", href: "/home" },
  { label: "Projects", href: "/projects" },
];
