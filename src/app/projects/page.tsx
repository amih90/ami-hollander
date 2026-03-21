import type { Metadata } from "next";
import { getTopRepos, getPublicRepos, getRepoStats, type GitHubRepo } from "@/lib/github";
import { featuredProjects } from "@/data/projects";
import GradientText from "@/components/GlitchText";
import CategoryTag from "@/components/CategoryTag";
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import { AnimatedGrid, AnimatedCard } from "./ProjectsGrid";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Ami Hollander's projects — featured work, open source, AI, and education.",
};

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f7df1e",
  Python: "#3572a5",
  "C#": "#178600",
  Dockerfile: "#384d54",
  Bicep: "#519aba",
  Ruby: "#701516",
  Svelte: "#ff3e00",
  "Jupyter Notebook": "#da5b0b",
};

export default async function ProjectsPage() {
  let repos: GitHubRepo[] = [];
  let stats: ReturnType<typeof getRepoStats> = { totalRepos: 66, totalStars: 0, totalForks: 0, originalRepos: 0, forkedRepos: 0 };
  try {
    const allRepos = await getPublicRepos();
    repos = await getTopRepos(12);
    stats = getRepoStats(allRepos);
  } catch {
    // use defaults
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <GradientText
          text="Projects"
          shimmer
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-6"
        />

        {/* Stats bar */}
        <div className="flex flex-wrap gap-6 mb-8">
          {[
            { label: "Total Repos", value: stats.totalRepos, color: "var(--color-gold)" },
            { label: "Original", value: stats.originalRepos, color: "var(--color-electric)" },
            { label: "Forks/Contribs", value: stats.forkedRepos, color: "var(--color-violet)" },
            { label: "Total Stars", value: stats.totalStars, color: "var(--color-rose)" },
          ].map((s) => (
            <div className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.5)]">
              <span className="font-semibold" style={{ color: s.color }}>{s.value}</span>{" "}
              {s.label}
            </div>
          ))}
        </div>
      </div>

      {/* Featured Projects */}
      <AnimatedGrid title="Featured Projects">
          {featuredProjects.map((project) => (
            <AnimatedCard key={project.name}>
              <div className="flex flex-col h-full">
                {/* Category tag */}
                <div className="mb-3">
                  <CategoryTag label={project.category} />
                </div>

                <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--color-foreground)] mb-2 leading-relaxed">
                  {project.name}
                </h3>
                <p className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.5)] mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-[family-name:var(--font-body)] text-xs px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.04)] text-[rgba(240,239,244,0.45)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links & stats */}
                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-[family-name:var(--font-body)] text-xs text-[var(--color-electric)] hover:text-[var(--color-gold)] transition-colors flex items-center gap-1"
                    >
                      <FaExternalLinkAlt size={10} /> GitHub
                    </a>
                  )}
                  {project.stars !== undefined && (
                    <span className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.35)] flex items-center gap-1">
                      <FaStar size={10} /> {project.stars}
                    </span>
                  )}
                  {project.forks !== undefined && (
                    <span className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.35)] flex items-center gap-1">
                      <FaCodeBranch size={10} /> {project.forks}
                    </span>
                  )}
                </div>
              </div>
            </AnimatedCard>
          ))}
      </AnimatedGrid>

      {/* GitHub Repos */}
      {repos.length > 0 && (
          <AnimatedGrid title="Recent Repos">
            {repos.map((repo) => (
              <a
                key={repo.name}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <AnimatedCard>
                  <h3 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--color-foreground)] mb-2 truncate">
                    {repo.fork ? "⑂ " : ""}{repo.name}
                  </h3>
                  <p className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.5)] mb-3 line-clamp-2">
                    {repo.description || "No description"}
                  </p>
                  <div className="flex items-center gap-3">
                    {repo.language && (
                      <span className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.4)] flex items-center gap-1">
                        <span
                          className="w-2 h-2 rounded-full inline-block"
                          style={{
                            backgroundColor:
                              languageColors[repo.language] || "#666",
                          }}
                        />
                        {repo.language}
                      </span>
                    )}
                    {repo.stargazers_count > 0 && (
                      <span className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.35)] flex items-center gap-1">
                        <FaStar size={10} /> {repo.stargazers_count}
                      </span>
                    )}
                    {repo.forks_count > 0 && (
                      <span className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.35)] flex items-center gap-1">
                        <FaCodeBranch size={10} /> {repo.forks_count}
                      </span>
                    )}
                  </div>
                </AnimatedCard>
              </a>
            ))}
          </AnimatedGrid>
      )}
    </div>
  );
}
