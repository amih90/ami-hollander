export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  fork: boolean;
  topics: string[];
  updated_at: string;
}

const GITHUB_API = "https://api.github.com";
const USERNAME = "amih90";

export async function getPublicRepos(): Promise<GitHubRepo[]> {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github.v3+json",
  };
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const repos: GitHubRepo[] = [];
  let page = 1;
  const perPage = 100;

  // Fetch up to 200 repos (2 pages)
  while (page <= 2) {
    const res = await fetch(
      `${GITHUB_API}/users/${USERNAME}/repos?per_page=${perPage}&page=${page}&sort=updated`,
      { headers, next: { revalidate: 3600 } }
    );
    if (!res.ok) break;
    const data = await res.json();
    if (!Array.isArray(data) || data.length === 0) break;
    repos.push(...data);
    if (data.length < perPage) break;
    page++;
  }

  return repos;
}

export async function getTopRepos(limit = 12): Promise<GitHubRepo[]> {
  const repos = await getPublicRepos();
  // Sort by stars, then by recent update
  return repos
    .sort((a, b) => {
      if (b.stargazers_count !== a.stargazers_count) {
        return b.stargazers_count - a.stargazers_count;
      }
      return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
    })
    .slice(0, limit);
}

export async function getOriginalRepos(): Promise<GitHubRepo[]> {
  const repos = await getPublicRepos();
  return repos.filter((r) => !r.fork);
}

export async function getLanguageStats(): Promise<Record<string, number>> {
  const repos = await getPublicRepos();
  const langCounts: Record<string, number> = {};
  for (const repo of repos) {
    if (repo.language) {
      langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
    }
  }
  return langCounts;
}

export function getRepoStats(repos: GitHubRepo[]) {
  return {
    totalRepos: repos.length,
    totalStars: repos.reduce((sum, r) => sum + r.stargazers_count, 0),
    totalForks: repos.reduce((sum, r) => sum + r.forks_count, 0),
    originalRepos: repos.filter((r) => !r.fork).length,
    forkedRepos: repos.filter((r) => r.fork).length,
  };
}
