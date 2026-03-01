export interface ExperienceEntry {
  id: string;
  level: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "microsoft-senior",
    level: 7,
    role: "Senior Software Engineer",
    company: "Microsoft",
    period: "2021 — Present",
    description:
      "Building developer tools and cloud platform services at scale. Contributing to Azure ecosystem, AI-powered developer experiences, and open-source projects.",
    achievements: [
      "Led development of cloud-native developer tools used by thousands of engineers",
      "Architected and shipped AI-powered features leveraging Azure OpenAI",
      "Contributed to Azure CLI, Azure Functions, and Azure MCP Server",
      "Created 'Mastering Dev Containers' — a widely adopted training curriculum",
      "Arctic Code Vault Contributor on GitHub",
    ],
    technologies: ["Azure", "TypeScript", "Python", "C#", ".NET", "Kubernetes", "Docker", "AI/ML"],
  },
  {
    id: "microsoft-swe",
    level: 5,
    role: "Software Engineer",
    company: "Microsoft",
    period: "2018 — 2021",
    description:
      "Designed and implemented scalable cloud services and platform solutions. Focused on reliability, performance, and developer experience.",
    achievements: [
      "Built production-grade microservices handling millions of daily requests",
      "Improved system reliability from 99.5% to 99.99% through observability investments",
      "Mentored junior engineers and led technical design reviews",
    ],
    technologies: ["Azure", "C#", ".NET", "Kubernetes", "SQL", "Cosmos DB"],
  },
  {
    id: "prev-role-2",
    level: 3,
    role: "Software Developer",
    company: "Tech Industry",
    period: "2015 — 2018",
    description:
      "Full-stack development building web applications and backend services. Gained deep expertise in cloud-native architectures.",
    achievements: [
      "Delivered end-to-end features across frontend and backend stacks",
      "Migrated legacy systems to modern cloud architectures",
      "Established coding standards and CI/CD pipelines",
    ],
    technologies: ["JavaScript", "Node.js", "Python", "AWS", "Docker", "PostgreSQL"],
  },
  {
    id: "prev-role-1",
    level: 1,
    role: "Junior Developer",
    company: "Startup",
    period: "2013 — 2015",
    description:
      "Started my engineering journey building web applications and learning the fundamentals of software craftsmanship.",
    achievements: [
      "Shipped first production application serving real users",
      "Learned agile methodologies and test-driven development",
    ],
    technologies: ["JavaScript", "HTML/CSS", "Python", "Git"],
  },
];
