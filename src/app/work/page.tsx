import type { Metadata } from "next";
import { getTopRepos, getPublicRepos, getRepoStats, getLanguageStats } from "@/lib/github";
import { featuredProjects, ossContributions } from "@/data/projects";
import { experience } from "@/data/experience";
import GradientText from "@/components/GlitchText";
import WorkTabs from "./WorkTabs";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Ami Hollander's work — featured projects, open-source contributions, and professional journey.",
};

export default async function WorkPage() {
  let repos: Awaited<ReturnType<typeof getTopRepos>> = [];
  let stats = { totalRepos: 66, totalStars: 0, totalForks: 0, originalRepos: 0, forkedRepos: 0 };
  let languageStats: Record<string, number> = {};

  try {
    const allRepos = await getPublicRepos();
    repos = await getTopRepos(12);
    stats = getRepoStats(allRepos);
    languageStats = await getLanguageStats();
  } catch {
    // use defaults
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="mb-10">
        <GradientText
          text="Work"
          shimmer
          className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl font-bold mb-4"
        />
        <p className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.5)]">
          Projects, contributions, and the journey that shaped them.
        </p>
      </div>

      <WorkTabs
        featuredProjects={featuredProjects}
        ossContributions={ossContributions}
        repos={repos}
        experience={experience}
        stats={stats}
        languageStats={languageStats}
      />
    </div>
  );
}
