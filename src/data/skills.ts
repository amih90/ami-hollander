export interface Skill {
  name: string;
  level: number; // 0-100
  category: string;
}

export const skills: Skill[] = [
  // Cloud & Infrastructure
  { name: "Azure", level: 95, category: "Cloud & Infra" },
  { name: "Kubernetes", level: 85, category: "Cloud & Infra" },
  { name: "Docker", level: 90, category: "Cloud & Infra" },
  { name: "Terraform / Bicep", level: 85, category: "Cloud & Infra" },
  { name: "CI/CD Pipelines", level: 88, category: "Cloud & Infra" },

  // Languages & Frameworks
  { name: "TypeScript", level: 92, category: "Languages" },
  { name: "Python", level: 90, category: "Languages" },
  { name: "C# / .NET", level: 88, category: "Languages" },
  { name: "React / Next.js", level: 85, category: "Languages" },
  { name: "Node.js", level: 87, category: "Languages" },

  // AI & Data
  { name: "AI / ML", level: 82, category: "AI & Data" },
  { name: "LLMs & Agents", level: 85, category: "AI & Data" },
  { name: "Azure OpenAI", level: 88, category: "AI & Data" },
  { name: "MCP Servers", level: 80, category: "AI & Data" },
  { name: "Data Engineering", level: 78, category: "AI & Data" },

  // Dev Practices
  { name: "Dev Containers", level: 95, category: "Dev Practices" },
  { name: "Open Source", level: 90, category: "Dev Practices" },
  { name: "System Design", level: 88, category: "Dev Practices" },
  { name: "SRE / Observability", level: 82, category: "Dev Practices" },
  { name: "Security", level: 80, category: "Dev Practices" },
];
