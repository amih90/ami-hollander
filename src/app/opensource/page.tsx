import type { Metadata } from "next";
import { getPublicRepos, getLanguageStats, getRepoStats } from "@/lib/github";
import { ossContributions } from "@/data/projects";
import GradientText from "@/components/GlitchText";
import WarmCard from "@/components/PixelCard";
import { FaExternalLinkAlt } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Open Source",
  description:
    "Ami Hollander's open-source contributions — Azure CLI, Azure MCP, Azure Functions, and more.",
};

const langColors: Record<string, string> = {
  TypeScript: "#3178c6",
  Python: "#3572a5",
  JavaScript: "#f7df1e",
  "C#": "#178600",
  Bicep: "#519aba",
  Dockerfile: "#384d54",
  Ruby: "#701516",
  Svelte: "#ff3e00",
  "Jupyter Notebook": "#da5b0b",
  Markdown: "#083fa1",
};

export default async function OpenSourcePage() {
  let stats = { totalRepos: 66, totalStars: 0, totalForks: 0, originalRepos: 0, forkedRepos: 0 };
  let languageStats: Record<string, number> = {};

  try {
    const repos = await getPublicRepos();
    stats = getRepoStats(repos);
    languageStats = await getLanguageStats();
  } catch {
    // Fallback to defaults
  }

  const sortedLangs = Object.entries(languageStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 10);
  const maxLangCount = sortedLangs.length > 0 ? sortedLangs[0][1] : 1;

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-12">
        <GradientText
          text="Open Source"
          shimmer
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-6"
        />
        <p className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.5)]">
          Contributing to the tools and platforms that power the developer
          ecosystem.
        </p>
      </div>

      {/* Stats Dashboard */}
      <section className="mb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { label: "Total Repos", value: stats.totalRepos, color: "var(--color-gold)" },
            { label: "Original", value: stats.originalRepos, color: "var(--color-electric)" },
            { label: "Contributions", value: stats.forkedRepos, color: "var(--color-violet)" },
            { label: "Total Stars", value: stats.totalStars, color: "var(--color-rose)" },
            { label: "Total Forks", value: stats.totalForks, color: "var(--color-mint)" },
          ].map((s) => (
            <div key={s.label} className="glass-card p-4 text-center">
              <div
                className="font-[family-name:var(--font-heading)] text-xl font-bold"
                style={{ color: s.color }}
              >
                {s.value}
              </div>
              <div className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.45)] mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Language Breakdown */}
      {sortedLangs.length > 0 && (
        <section className="mb-12">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-foreground)] mb-6">
            Languages
          </h2>
          <div className="glass-card p-5">
            {sortedLangs.map(([lang, count]) => (
              <div key={lang} className="mb-3 last:mb-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.7)] flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full inline-block"
                      style={{ backgroundColor: langColors[lang] || "#666" }}
                    />
                    {lang}
                  </span>
                  <span className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.35)]">
                    {count} repos
                  </span>
                </div>
                <div className="h-2 bg-[rgba(255,255,255,0.03)] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: `${(count / maxLangCount) * 100}%`,
                      backgroundColor: langColors[lang] || "#666",
                      opacity: 0.7,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Notable OSS Contributions */}
      <section>
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-[var(--color-foreground)] mb-6">
          Notable Contributions
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {ossContributions.map((contrib) => (
            <a
              key={contrib.repo}
              href={`https://github.com/${contrib.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <WarmCard className="h-full">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--color-foreground)] mb-1">
                      {contrib.name}
                    </h3>
                    <p className="font-[family-name:var(--font-mono)] text-xs text-[rgba(240,239,244,0.35)] mb-2">
                      {contrib.repo}
                    </p>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.5)]">
                      {contrib.description}
                    </p>
                  </div>
                  <FaExternalLinkAlt
                    className="text-[rgba(240,239,244,0.15)] flex-shrink-0 mt-1"
                    size={12}
                  />
                </div>
              </WarmCard>
            </a>
          ))}
        </div>
      </section>

      {/* GitHub profile link */}
      <div className="mt-12 text-center">
        <a
          href="https://github.com/amih90"
          target="_blank"
          rel="noopener noreferrer"
          className="font-[family-name:var(--font-heading)] text-sm font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-[#06060e] hover:shadow-lg hover:shadow-[rgba(201,168,76,0.25)] transition-all inline-block"
        >
          View Full GitHub Profile
        </a>
      </div>
    </div>
  );
}
