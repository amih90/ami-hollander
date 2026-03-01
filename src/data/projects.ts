export interface FeaturedProject {
  name: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
  category: "featured" | "education" | "ai" | "oss-contribution";
  stars?: number;
  forks?: number;
}

export const featuredProjects: FeaturedProject[] = [
  {
    name: "Mastering Dev Containers",
    description:
      "A hands-on course for developers who want to gain practical experience with dev containers for web, backend, data science, and more.",
    technologies: ["Docker", "Dev Containers", "VS Code", "Education"],
    github: "https://github.com/amih90/mastering-dev-containers",
    category: "education",
  },
  {
    name: "Mastering Dev Containers — Summer School",
    description:
      "Extended hands-on curriculum covering advanced dev container scenarios for web and backend development, data science, and DevOps.",
    technologies: ["Docker", "Dev Containers", "VS Code", "Education"],
    github: "https://github.com/amih90/mastering-dev-containers-summer-school",
    category: "education",
  },
  {
    name: "TechTrain — Azure Development",
    description:
      "Hands-on course for developers and SREs to gain practical experience with Azure Services and production best practices.",
    technologies: ["Azure", "Bicep", "SRE", "Cloud Native"],
    github: "https://github.com/amih90/techtrain-handson-azure-development",
    category: "education",
    stars: 1,
    forks: 32,
  },
  {
    name: "VS Code Squad",
    description:
      "VS Code extension for AI agent team collaboration, enabling powerful multi-agent workflows inside the editor.",
    technologies: ["TypeScript", "VS Code", "AI Agents"],
    github: "https://github.com/amih90/vscode-squad",
    category: "ai",
  },
  {
    name: "Functions Markdown Agent",
    description:
      "Azure Functions-based AI agent for markdown processing and generation, demonstrating serverless AI patterns.",
    technologies: ["Python", "Azure Functions", "AI", "Serverless"],
    github: "https://github.com/amih90/functions-markdown-agent",
    category: "ai",
  },
  {
    name: "ClawdBot",
    description:
      "Your own personal AI assistant. Any OS. Any Platform. The lobster way. 🦞",
    technologies: ["TypeScript", "AI", "Cross-Platform"],
    github: "https://github.com/amih90/clawdbot",
    category: "ai",
  },
];

export const ossContributions = [
  {
    name: "Azure CLI",
    repo: "Azure/azure-cli",
    description: "Azure Command-Line Interface",
  },
  {
    name: "Azure MCP Server",
    repo: "Azure/azure-mcp",
    description: "Bringing the power of Azure to AI agents via MCP",
  },
  {
    name: "Azure Functions Host",
    repo: "Azure/azure-functions-host",
    description: "The host/runtime that powers Azure Functions",
  },
  {
    name: "Azure PowerShell",
    repo: "Azure/azure-powershell",
    description: "Microsoft Azure PowerShell",
  },
  {
    name: "Azure Quickstart Templates",
    repo: "Azure/azure-quickstart-templates",
    description: "Azure Quickstart Templates in Bicep",
  },
  {
    name: "Azure Docs",
    repo: "MicrosoftDocs/azure-docs",
    description: "Open source documentation of Microsoft Azure",
  },
  {
    name: "Awesome Copilot",
    repo: "github/awesome-copilot",
    description: "Community instructions & prompts for GitHub Copilot",
  },
  {
    name: "Open WebUI",
    repo: "open-webui/open-webui",
    description: "User-friendly WebUI for LLMs",
  },
  {
    name: "FastAPI MCP",
    repo: "tadata-org/fastapi_mcp",
    description: "Auto-expose FastAPI endpoints as MCP tools",
  },
  {
    name: "ASP.NET Health Checks",
    repo: "Xabaril/AspNetCore.Diagnostics.HealthChecks",
    description: "Enterprise HealthChecks for ASP.NET Core",
  },
];
