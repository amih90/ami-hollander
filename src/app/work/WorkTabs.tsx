"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, staggerItem } from "@/components/ScrollReveal";
import { AnimatedCard } from "@/app/projects/ProjectsGrid";
import CategoryTag from "@/components/CategoryTag";
import ExperienceTimeline from "@/app/experience/ExperienceTimeline";
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import type { FeaturedProject } from "@/data/projects";
import type { GitHubRepo } from "@/lib/github";

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
  Markdown: "#083fa1",
};

interface OssContribution {
  name: string;
  repo: string;
  description: string;
}

interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

interface WorkTabsProps {
  featuredProjects: FeaturedProject[];
  ossContributions: OssContribution[];
  repos: GitHubRepo[];
  experience: ExperienceEntry[];
  stats: {
    totalRepos: number;
    totalStars: number;
    totalForks: number;
    originalRepos: number;
    forkedRepos: number;
  };
  languageStats: Record<string, number>;
}

const tabs = [
  { id: "featured", label: "Featured" },
  { id: "opensource", label: "Open Source" },
  { id: "journey", label: "Journey" },
] as const;

type TabId = (typeof tabs)[number]["id"];

export default function WorkTabs({
  featuredProjects,
  ossContributions,
  repos,
  experience,
  stats,
  languageStats,
}: WorkTabsProps) {
  const [activeTab, setActiveTab] = useState<TabId>("featured");

  const sortedLangs = Object.entries(languageStats)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 8);
  const maxLangCount = sortedLangs.length > 0 ? sortedLangs[0][1] : 1;

  return (
    <div>
      {/* Tab Navigation */}
      <div className="flex gap-1 mb-10 p-1 rounded-xl bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)] w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative px-5 py-2 rounded-lg font-[family-name:var(--font-heading)] text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "text-[var(--color-gold)]"
                : "text-[rgba(240,239,244,0.4)] hover:text-[rgba(240,239,244,0.7)]"
            }`}
          >
            {activeTab === tab.id && (
              <motion.span
                layoutId="work-tab-indicator"
                className="absolute inset-0 rounded-lg bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.15)]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === "featured" && (
          <motion.div
            key="featured"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {/* Stats bar */}
            <div className="flex flex-wrap gap-6 mb-8">
              {[
                { label: "Total Repos", value: stats.totalRepos, color: "var(--color-gold)" },
                { label: "Original", value: stats.originalRepos, color: "var(--color-electric)" },
                { label: "Contributions", value: stats.forkedRepos, color: "var(--color-violet)" },
                { label: "Stars", value: stats.totalStars, color: "var(--color-rose)" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.5)]"
                >
                  <span className="font-semibold" style={{ color: s.color }}>
                    {s.value}
                  </span>{" "}
                  {s.label}
                </div>
              ))}
            </div>

            {/* Featured Projects Grid */}
            <motion.div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {featuredProjects.map((project) => (
                <AnimatedCard key={project.name}>
                  <div className="flex flex-col h-full">
                    <div className="mb-3">
                      <CategoryTag label={project.category} />
                    </div>
                    <h3 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--color-foreground)] mb-2 leading-relaxed">
                      {project.name}
                    </h3>
                    <p className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.5)] mb-4 flex-grow">
                      {project.description}
                    </p>
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
            </motion.div>

            {/* Recent Repos */}
            {repos.length > 0 && (
              <>
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-foreground)] mb-6">
                  Recent Repos
                </h3>
                <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                >
                  {repos.map((repo) => (
                    <motion.div key={repo.name} variants={staggerItem}>
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block glass-card p-4 h-full hover:border-[rgba(201,168,76,0.15)] transition-colors"
                      >
                        <h4 className="font-[family-name:var(--font-heading)] text-sm font-semibold text-[var(--color-foreground)] mb-2 truncate">
                          {repo.fork ? "⑂ " : ""}
                          {repo.name}
                        </h4>
                        <p className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.5)] mb-3 line-clamp-2">
                          {repo.description || "No description"}
                        </p>
                        <div className="flex items-center gap-3">
                          {repo.language && (
                            <span className="font-[family-name:var(--font-body)] text-xs text-[rgba(240,239,244,0.4)] flex items-center gap-1">
                              <span
                                className="w-2 h-2 rounded-full inline-block"
                                style={{
                                  backgroundColor: languageColors[repo.language] || "#666",
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
                      </a>
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </motion.div>
        )}

        {activeTab === "opensource" && (
          <motion.div
            key="opensource"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            {/* Language Breakdown */}
            {sortedLangs.length > 0 && (
              <div className="mb-10">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-foreground)] mb-5">
                  Languages
                </h3>
                <div className="glass-card p-5">
                  {sortedLangs.map(([lang, count]) => (
                    <div key={lang} className="mb-3 last:mb-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-[family-name:var(--font-body)] text-sm text-[rgba(240,239,244,0.7)] flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full inline-block"
                            style={{ backgroundColor: languageColors[lang] || "#666" }}
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
                            backgroundColor: languageColors[lang] || "#666",
                            opacity: 0.7,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Notable Contributions */}
            <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold text-[var(--color-foreground)] mb-5">
              Notable Contributions
            </h3>
            <motion.div
              className="grid md:grid-cols-2 gap-4"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {ossContributions.map((contrib) => (
                <motion.div key={contrib.repo} variants={staggerItem}>
                  <a
                    href={`https://github.com/${contrib.repo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block glass-card p-4 h-full hover:border-[rgba(201,168,76,0.15)] transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-[family-name:var(--font-heading)] text-base font-semibold text-[var(--color-foreground)] mb-1">
                          {contrib.name}
                        </h4>
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
                  </a>
                </motion.div>
              ))}
            </motion.div>

            {/* GitHub Profile CTA */}
            <div className="mt-10 text-center">
              <a
                href="https://github.com/amih90"
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-heading)] text-sm font-semibold px-6 py-3 rounded-full bg-gradient-to-r from-[var(--color-gold)] to-[var(--color-champagne)] text-[#06060e] hover:shadow-lg hover:shadow-[rgba(201,168,76,0.25)] transition-all inline-block"
              >
                View Full GitHub Profile
              </a>
            </div>
          </motion.div>
        )}

        {activeTab === "journey" && (
          <motion.div
            key="journey"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
          >
            <p className="font-[family-name:var(--font-body)] text-lg text-[rgba(240,239,244,0.5)] mb-8">
              A path of growth — each chapter building on the last.
            </p>
            <ExperienceTimeline entries={experience} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
